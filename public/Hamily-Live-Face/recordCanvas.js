/*jshint esversion: 8 */

/**
https://github.com/doriclaudino
@doriclaudino
create: webm, mp4, gif


click on start recording
click on stop record 

allow download files
*/
var btn = document.querySelector("button#save_canvas");
var chunks = [];
var gif
var recordGif = false
var name = 'Sail-o-bots'
var initialTime = new Date()
var endTime
var targetFps = 60

function record() {
  logs = []
  gif = createGif()
  recordGif = true
  chunks = [];
  frames = [];
  chunks.length = 0;
  let canvas = document.querySelector("canvas")
  let stream = canvas.captureStream(targetFps);
  let recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => {
    if (e.data.size) {
      chunks.push(e.data);
    }
  };

  //create files
  recorder.onstop = onRecorderStop;

  btn.onclick = e => {
    recorder.stop();
    document.getElementById("record_img").src="img/Record.png"
    btn.onclick = record;
  };

  //start recording frames for gif
  recorder.onstart = onRecorderStart  

  //start recording
  recorder.start();

  //change button img
  document.getElementById("record_img").src="img/Recording.png"
}

//add a frame every 50ms
function onRecorderStart() {
  initialTime = new Date()
  let interval = setInterval(() => {
    if (!recordGif)
      clearInterval(interval)
    window.requestAnimationFrame(() => gif.addFrame(canvas, {
      copy: true,
      delay: 50
    }));
  }, 50)
}

//stop record and generate  webm, mp4, gif
function onRecorderStop(e) {
  endTime = new Date()
  recordGif = false
  var blobWebm = new Blob(chunks);

  //download webm
  console.log(`rendering...video/webm`)
  download(blobWebm, `${name}.webm`, "video/webm")  

  //download after codec mp4
  console.log(`rendering...video/mp4`)
  var blobMp4 = toMp4(blobWebm).then(e => {  
  download(e, `${name}.mp4`, "video/mp4")
  }).catch(e => console.log(e))

  console.log(`rendering...gif`)
  //download after render
  gif.render()
}

btn.onclick = record;

async function toMp4(blobData) {
  let timeSpent = endTime-initialTime
  let totalFrames = timeSpent*targetFps/1000
  console.log(`timeSpent:${timeSpent}`)
  console.log(`totalFrames:${totalFrames}`)
  const {
    createWorker
  } = FFmpeg;
  const worker = createWorker({
    logger:  ({ message }) => getProgressFromTotal(totalFrames, message)
  });

  const randomNameInput = 'teste'
  const randomNameOutput = randomNameInput + '.mp4'
  await worker.load();
  await worker.write(randomNameInput, blobData);
  //await worker.transcode(randomNameInput, 'output.mp4', `-benchmark -v debug`);
  await worker.transcode(randomNameInput, 'output.mp4');
  const {
    data
  } = await worker.read('output.mp4');
  return data
}

//create gif and download at the end
function createGif() {
  _gif = new GIF({
    //workerScript: 'https://raw.githack.com/jnordberg/gif.js/master/dist/gif.worker.js',
    workerScript: 'gif.worker.js',
    workers: 2, //num of workers
    quality: 10,//lower is better
    repeat: 0 //0->yes  1->no
  });

  //for some reason is finishing twice
  _gif.on('finished',  debounce(function(blob) {
    download(blob, `${name}.gif`, "image/gif")
  },500));
  return _gif
}

//generate v4 uuid
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
      v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
//workerpath: https://raw.githack.com/jnordberg/gif.js/master/dist/gif.worker.js
//https://raw.githack.com/jnordberg/gif.js/master/dist/gif.js


const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

function getProgressFromTotal(totalFrames, logString){
  let extractedData = logString.match(/frame=\s+(\d+).*fps.*time=(.*).bitrate=/)
  if(extractedData && extractedData[1]){
    let currentFrame = extractedData[1]
    let unformattedDate = extractedData[2]
    /**
    let splitDate = unformattedDate.match(/(\d+).(\d+).(\d+)\.(\d+)/)

    let hh = splitDate[1]
    let mm = splitDate[2]
    let ss = splitDate[3]
    let ms = splitDate[4]
    */
    console.log(`Progress=${(currentFrame/totalFrames*100).toFixed(2)}% currentFrame=${currentFrame} totalFrames=${totalFrames}`)
  }
}