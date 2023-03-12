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
var hint = document.querySelector("#download_hint");
hint.setAttribute('style', 'white-space: pre;');
var chunks = [];
var gif
var recordGif = false
var name = 'Sail-o-bots'
var initialTime = new Date()
var endTime
var targetFps = 30

function record() {
  hint.textContent = "Recording···";
  hint.style.display = "block";

  logs = []
  // gif = createGif()
  // recordGif = true
  frames = [];
  let sourceCanvas = document.querySelector("canvas")
  if(isWebM){
    chunks_highR = [];
    chunks_highR.length = 0;
    let stream_highR = sourceCanvas.captureStream(targetFps);
    let recorder_highR = new MediaRecorder(stream_highR);

    recorder_highR.ondataavailable = e => {
      if (e.data.size) {
        chunks_highR.push(e.data);
      }
    };

    recorder_highR.onstop = onRecorderHighRStop;

    btn.onclick = e => {
      recorder_highR.stop();
      document.getElementById("record_state").src="img/Record_Select.png"
      recordType.style.display = "none"
      document.getElementById('download_mp4').style.display = "none"
      document.getElementById('download_webm').style.display = "none"
      recordBtn.style.display = "none"
      recordFormatBtn.style.display = "block"
  
      btn.onclick = record;
    };
    recorder_highR.start();
  }

  if(isMP4){
    chunks = [];
    chunks.length = 0;
    let canvas = document.createElement('canvas');

    canvas.width = 1000;
    canvas.height = 1000;
    var ctx = canvas.getContext("2d");
    var i = window.setInterval(function() {ctx.drawImage(sourceCanvas,0, 0, canvas.width, canvas.height)},20);
  
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
      document.getElementById("record_state").src="img/Record_Select.png"
  
      recordType.style.display = "none"
      document.getElementById('download_mp4').style.display = "none"
      document.getElementById('download_webm').style.display = "none"
      recordBtn.style.display = "none"
      recordFormatBtn.style.display = "block"
  
      btn.onclick = record;
    };
  
    //start recording frames for gif
    // recorder.onstart = onRecorderStart  
  
    //start recording
    recorder.start();

  }

  //change button img
  document.getElementById("record_state").src="img/Recording.png"
}

//add a frame every 50ms
// function onRecorderStart() {
//   initialTime = new Date()
//   let interval = setInterval(() => {
//     if (!recordGif)
//       clearInterval(interval)
//     window.requestAnimationFrame(() => gif.addFrame(canvas, {
//       copy: true,
//       delay: 50
//     }));
//   }, 50)
// }
var s =0;
//stop record and generate  webm, mp4, gif------
// function onRecorderStop(e) {
//   endTime = new Date()
//   recordGif = false
//   var blobWebm_highR = new Blob(chunks_highR);
//   var blobWebm = new Blob(chunks);
//   hint.textContent = "downloading···  \r\n";
//   hint.textContent += "(.gif, .mp4)";
//   hint.style.display = "block";
//   //download webm
//   console.log(`rendering...video/webm`)
//   download(blobWebm_highR, `${name}.webm`, "video/webm")  

//   //download after codec mp4
//   console.log(`rendering...video/mp4`)
//   var blobMp4 = toMp4(blobWebm).then(e => {  
//   download(e, `${name}.mp4`, "video/mp4")
//   }).catch(e => console.log(e))

//   console.log(`rendering...gif`)
//   //download after render
//   // gif.render()
// }
//-----------

function onRecorderHighRStop(e) {
  recordGif = false
  var blobWebm_highR = new Blob(chunks_highR);
  
  hint.textContent = "downloading WebM video···\r\n";
  hint.style.display = "block";

  //download webm
  console.log(`rendering...video/webm`)
  download(blobWebm_highR, `${name}.webm`, "video/webm")  

  var delay = function(s){
    return new Promise(function(resolve,reject){
     setTimeout(resolve,s); 
    });
  };
  delay().then(function(){
    hint.textContent = "Completed!";    
    return delay(1500); 
  }).then(function(){
    hint.style.display = "none";   
    return delay(1); 
  });
}

function onRecorderStop(e) {
  endTime = new Date()
  var blobWebm = new Blob(chunks);
  hint.textContent = "downloading MP4 video···\r\n";
  hint.textContent += "it takes 1-2 minutes\r\n";
  hint.textContent += "(depending on the length)";
  hint.style.lineHeight = "1.5";
  hint.style.display = "block";
  //download after codec mp4
  console.log(`rendering...video/mp4`)
  var blobMp4 = toMp4(blobWebm).then(e => {  
  download(e, `${name}.mp4`, "video/mp4")
  }).catch(e => console.log(e))

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

  var delay = function(s){
    return new Promise(function(resolve,reject){
     setTimeout(resolve,s); 
    });
  };
  delay().then(function(){
    hint.textContent = "Completed!";    
    return delay(1500); 
  }).then(function(){
    hint.style.display = "none";   
    return delay(1); 
  });
  
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