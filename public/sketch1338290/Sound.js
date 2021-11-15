
window.addEventListener("click",function(){
  Tone.context.resume()
	noiseSource.start()
})
let noiseSource = new Tone.Noise({
  "volume" : -30, 
  "type" : "white"
})
noiseSource.start()
  
let env= new Tone.AmplitudeEnvelope({
	"attack" : 0.02,
	"decay" : 0.1,
	"sustain" : 0.09,
	"release" : 0.5
}).toMaster()

noiseSource.connect(env)


let drumOsc=new Tone.Oscillator({
	"partials" : [5,4,3,2,1],
	"type" : "sine",
	"frequency" : "44hz",
	"volume" : 10,
})
drumOsc.start()

let drumEnv= new Tone.AmplitudeEnvelope({
	"attack" : 0.04,
	"decay" : 0.1,
	"sustain" : 0.09,
	"release" : 0.5
}).toMaster()
drumOsc.connect(drumEnv)


let drumOsc2=new Tone.Oscillator({
	"partials" : [5,4,3,2,1],
	"type" : "sine",
	"frequency" : Tone.Frequency(44,'midi'),
	"volume" : 20,
})
drumOsc2.start()

let drumEnv2= new Tone.AmplitudeEnvelope({
	"attack" : 0.04,
	"decay" : 0.1,
	"sustain" : 0.09,
	"release" : 0.5
}).toMaster()
drumOsc2.connect(drumEnv2)


let drumOsc3=new Tone.Oscillator({
	"partials" : [3,2,1],
	"type" : "sine",
	"frequency" : Tone.Frequency(49,'midi'),
	"volume" : 20,
})
drumOsc3.start()

let drumEnv3= new Tone.AmplitudeEnvelope({
	"attack" : 0.04,
	"decay" : 0.1,
	"sustain" : 0.09,
	"release" : 0.5
}).toMaster()
drumOsc3.connect(drumEnv3)


let noteCount = 0
const osc = new Tone.Oscillator().toMaster();

Tone.Transport.bpm.value = 240;
// repeated event every 8th note
Tone.Transport.scheduleRepeat((time) => {
	// use the callback time to schedule events
	env.triggerAttackRelease("8t");
	if (noteCount%4==0){
		
		drumEnv.triggerAttackRelease("2t");
	}
	if (noteCount%5==0){
		drumEnv2.triggerAttackRelease("2t");
		sc = Math.random()*0.5+0.8
		ang2 = Math.random()*2.5+0.8
		ang3 = Math.random()*2.5+0.8
	}
	if (noteCount%7==0){
		drumEnv3.triggerAttackRelease("1t");
		ang2 = Math.random()*2.5+0.8
		ang3 = Math.random()*0.5+0.8
	}
	if (noteCount%4==0){
		
	colors.sort((a,b)=>Math.random()<0.5?1:-1)
	}
	noteCount++
		// noiseSource.start(time).stop(time + 0.1);
}, "4n");

// transport must be started before it starts invoking events
Tone.Transport.start();
 