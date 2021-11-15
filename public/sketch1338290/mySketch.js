let colors = "390099-9e0059-ff0054-ff5400-ffbd00-473BF0-f37748-d56062-fff-0c0a3e-7b1e7a-b33f62-f3c677".split("-").map(a=>`#${a}`)

let overAllTexture
let webglCanvas

function mousePressed(){
	colors.sort((a,b)=>Math.random()<0.5?1:-1)
	
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);
	// pixelDensity(2)
	webglCanvas = createGraphics(width,height,WEBGL);
	webglCanvas.background(0);
	webglCanvas.noStroke()
	colors.sort((a,b)=>Math.random()<0.5?1:-1)
	
	
  Leap.loop(drawHand);  
	overAllTexture=createGraphics(width,height)
	overAllTexture.loadPixels()
	for(var i=0;i<width+50;i++){
		for(var o=0;o<height+50;o++){
			overAllTexture.set(i,o,color(100,noise(i/3,o/3,i*o/50)*random([0,30,60])))
		}
	}
	overAllTexture.updatePixels()
}

let currentFrame = null
function drawHand(frame) {   //for each frame, this function is called  
	currentFrame = frame
	// console.log(frame)
  // frame.hands.forEach(drawBrush);
}


let sc = 1
let ang1=0,ang2=0,ang3=0
function draw() {
	fill(colors[0])
	rect(0,0,width,height)
	strokeWeight(2)
	
	
	
// 	mouseX = sin(frameCount/200)*width
// 	mouseY = cos(frameCount/500)*height/2+height/2
	 
	push()
		// blendMode(SCREEN)
		for(var i=0;i<width;i+=20){
			stroke(255,i%100==0?100:30)
			line(i,0,i,height)
		}
		for(var i=0;i<height;i+=20){
			stroke(255,i%100==0?100:30)
			line(0,i,width,i)
		}
	pop()
	webglCanvas.clear()
	webglCanvas.push()
		webglCanvas.scale(sc)
		// webglCanvas.translate(width/2,height/2)
		// webglCanvas.translate(-width/2,-height/2)
	
		if (frameCount%50==0){
			
	// colors.sort((a,b)=>Math.random()<0.5?1:-1)
	
		}
	
		let hand0 = currentFrame?.hands['0']
		if (hand0){
			let dArr = hand0?.direction
			let dScale = hand0?.grabStrength
			webglCanvas.rotateX(dArr[1]-PI/4)
			webglCanvas.rotateY(dArr[0]+PI/2)
			webglCanvas.rotateZ(-dArr[2])
			webglCanvas.scale(1.5/(1+dScale))
		}else{
			webglCanvas.rotateY(-PI/4+frameCount/200+  map(mouseX,0,width,-PI,PI) )
			webglCanvas.rotateZ(frameCount/300 + PI/2  +  map(mouseY,0,height,-PI,PI))
			webglCanvas.rotateX(frameCount/300 + ang3)
			// webglCanvas.rotateY(-PI/4+frameCount/200+ang1)
			// webglCanvas.rotateZ(frameCount/300 + PI/2 + ang2)
			// webglCanvas.rotateX(frameCount/300 + ang3)
		}
		// orbitControl()
		webglCanvas.pointLight(200,200,200,createVector(50,50,50))
	webglCanvas.pointLight(255,255,255,createVector(-50,-50,-50))
		webglCanvas.directionalLight(255, 0,0, -0.5,0.5, -1);
		webglCanvas.directionalLight(0, 255,0, 0.5,-0.5, -1);
		webglCanvas.directionalLight(0, 0, 255, 0.5,-0.5,-1);
		webglCanvas.directionalLight(255, 255,0, -0.5,0.5, -1);
		webglCanvas.directionalLight(0, 255,0, 0.5,-0.5, -1);
		webglCanvas.directionalLight(0, 0, 255, 0.5,-0.5,-1);
		webglCanvas.fill(colors[1])
		webglCanvas.push()
			webglCanvas.translate(0,20,0)
			webglCanvas.box(150,350,400)
			webglCanvas.box(30,200,200)
		webglCanvas.pop()
		webglCanvas.push()
			webglCanvas.fill(colors[6])
			webglCanvas.translate(0,0,-100)
			webglCanvas.rotate(PI/2)
			webglCanvas.cylinder(80 + sin(frameCount/20)*20,200)
			webglCanvas.fill(colors[3])
			webglCanvas.cylinder(40 + sin(frameCount/20)*30,250)
		webglCanvas.pop()
		webglCanvas.push()
			webglCanvas.fill(colors[2])
			webglCanvas.translate(0,0,100)
			webglCanvas.rotate(PI/2)
			webglCanvas.cylinder(40 + sin(frameCount/50+PI+mouseY/30)*30,200)
			webglCanvas.fill(colors[6])
			webglCanvas.cylinder(40 + sin(frameCount/50+mouseY/50)*30,250)
		webglCanvas.pop()
		webglCanvas.push()
			webglCanvas.fill(colors[8])
			webglCanvas.translate(0,0,240)
			webglCanvas.box(60,120,60)
		webglCanvas.pop()

		webglCanvas.push()
			webglCanvas.fill(colors[9])
			webglCanvas.translate(0,0,-240)
			webglCanvas.box(60,120,60)
		webglCanvas.pop()


		webglCanvas.push()
			webglCanvas.fill(colors[9])
			webglCanvas.box(100,400,200)
		webglCanvas.pop()
		webglCanvas.push()
			webglCanvas.fill(colors[9])
			webglCanvas.box(50,500,50)
		webglCanvas.pop()
		webglCanvas.push()
			webglCanvas.translate(0,50)
			webglCanvas.fill(colors[3])
			webglCanvas.box(250,90,50)
		webglCanvas.pop()


		webglCanvas.push()
			webglCanvas.translate(0,140)
			webglCanvas.rotateX(sin(frameCount/10+mouseX/50)/5)
			webglCanvas.fill(colors[7])
			webglCanvas.box(200,50,250)
		webglCanvas.pop()


		webglCanvas.push()
			webglCanvas.translate(0,140)
			webglCanvas.rotateX(sin(frameCount/10+mouseX/50)/5)
			webglCanvas.fill(colors[7])
			webglCanvas.box(200,50,250)
		webglCanvas.pop()



		webglCanvas.push()
			webglCanvas.translate(0,-100+sin(frameCount/10)*50,-100)
			webglCanvas.rotateX(sin(frameCount/5+mouseX/20)/8)
			webglCanvas.fill(colors[2])
			webglCanvas.box(250,50,180)
		webglCanvas.pop()

		webglCanvas.push()
			webglCanvas.translate(0,-100+sin(frameCount/10)*30,100)
			webglCanvas.rotateX(sin(frameCount/4+mouseX/30)/20)
			webglCanvas.fill(colors[6])
			webglCanvas.box(250,50,180)
		webglCanvas.pop()

	
		webglCanvas.push()
		
			webglCanvas.rotate(-frameCount/120)
			webglCanvas.rotateY(-frameCount/120)
	webglCanvas.rotateZ(-frameCount/120)

			webglCanvas.torus(500,4)
			webglCanvas.rotate(frameCount/40)
			webglCanvas.translate(500,0)
			webglCanvas.sphere(50)
		webglCanvas.pop()
	
	webglCanvas.pop()
	image(webglCanvas,0,0)
	
	push()
		fill(255)
		textSize(50)
		text("1\n1.008",80,height-140)
		// text(mouseX,50,height-100)
		// text(mouseY,50,height-50)
	pop()
	
	push()
		textSize(300)
		fill(255)
		stroke(255)
		strokeWeight(5)
		textStyle(BOLD)
		text("H",80,300)
	pop()
	
	
	textSize(100)
	fill(255)
	textStyle(BOLD)
	text("Hydrogen",width-540,height-70)
	
	
	push()
		stroke(255)
		noFill()
		strokeWeight(6)
		rect(30,30,width-60,height-60)
	pop()
	
	
	push()
		blendMode(MULTIPLY)
		image(overAllTexture,0,0)
	pop()
	// ellipse(mouseX, mouseY, 20, 20);
}