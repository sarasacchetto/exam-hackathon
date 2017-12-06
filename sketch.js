var myImg;
var calza1;
var calza2;
var calza3;
var luciList=[
    '#F7F7BF', //giallo
    '#FF0000', //rosso
    '#00FF12', //verde
    '#FFFFFF', //bianco
    '#FFE45C', //oro
];


function preload(){
    myImg=loadImage("/assets/oggetti.png");
    
}

function setup() {
    colorMode(RGB);
	// Create the canvas
	createCanvas(windowWidth, windowHeight);

	// Deal with microphone
	mic = new p5.AudioIn();
	mic.start();
    frameRate(13);
    
    
    
}

function draw() {
    background('#240038');
    fill('#452B5E')
    push();
    translate(0,height/1.1);
    //rect(0,-(altezza/1.1),width, height);
    
    
    var larghezza=width;
    var altezza=height;
        if(width<height){
            altezza=width;
        }

        else{
            larghezza=height;
        }
    
    image(myImg,0,-height/1.1,larghezza,altezza);
    
    	//get the volume
    pop();
	var volume = mic.getLevel();
    
    
    
    fill('white');
    
    index=floor(random()*luciList.length);
    miocolore=luciList[index];
    
    var minSize = width / 20;
            var maxSize = width;
            var size = map(volume, 0, 1,larghezza/40, larghezza/20);
   
        fill(color(miocolore));
    noStroke();
        ellipse(larghezza/1.5,(altezza/2.4),size);
         ellipse(larghezza/1.9,(altezza/1.30),size,size);
         ellipse(larghezza/1.29,(altezza/2.4),size);
         ellipse(larghezza/1.43,(altezza/3.6),size);
        ellipse(larghezza/1.35,(altezza/1.4),size);
        ellipse(larghezza/1.43,(altezza/3.6),size);
        ellipse(larghezza/1.60,(altezza/1.8),size);
        ellipse(larghezza/1.23,(altezza/1.7),size,size);
        ellipse(larghezza/1.2,(altezza/1.35),size);
        ellipse(larghezza/1.55,(altezza/1.35),size);
        ellipse(larghezza/1.38,(altezza/1.7),size);
        ellipse(larghezza/1.43,(altezza/5.9),size);
    
    
    //faccia
    push();
    translate(larghezza/4,altezza/3);
        fill('white');
    noStroke();
        ellipse(0,0,larghezza/13);
        
    //naso
    
        push();
            fill('orange');
            
           // translate(larghezza/10);
        rotate(volume);
            triangle(0,-altezza/90,0,altezza/90, larghezza/20,0);
        pop();
    pop();
    
    
    //occhio dx
    push();
        translate(larghezza/3.8,altezza/3.25);
    
    noStroke();
        fill('black');
        ellipse(0,0,larghezza/100);
        
    pop();
    
    //occhio sx
     push();
        translate(larghezza/4.3,altezza/3.15);
    noStroke();
        fill('black');
        ellipse(0,0,larghezza/100);
        
    pop();
    
    //bocca
     push();
        translate(larghezza/4,altezza/2.8);
    noStroke();
        fill('black');
        var bocca=map(volume,0,1,0.2,altezza/40);
        ellipse(0,0,larghezza/40,bocca);
        
    pop();
    
    
       //stella 
    push();
   translate(larghezza/1.44,altezza/14);
    
    beginShape();
    stella=map(volume,0,1,larghezza/500,altezza/6000);
    scale(stella);
   //rotate(volume);
    fill('yellow');
    stroke('white');
        vertex(0,-altezza/23);
            vertex(larghezza/60,-altezza/80);
        vertex(larghezza/20,0);
            vertex(larghezza/60,altezza/80);
        vertex(larghezza/40,altezza/23);
            vertex(0,altezza/50);
        vertex(-larghezza/40,altezza/23);
        
            vertex(-larghezza/60,altezza/80);
        vertex(-larghezza/20,0);
            vertex(-larghezza/60,-altezza/80);
    
    endShape(CLOSE);
    pop();
    
    push()
         fill('white'); 
        textFont('Dancing Script');
        textSize(larghezza/20);
        textAlign(CENTER);
    translate(larghezza/4,larghezza/8);
    
    var zoom=map(volume,0,1,2,4)
    
    scale(zoom);
        text('Merry',0,altezza/1000);
        text('Christmas',0,altezza/30);
    pop();


	
           // push();

            //Start with transformations
            //move to the center of the canvas
            //translate(width / 2, height / 2);

            // Set the new size. Volume goes from 0 to 1.
            // You can remap it to any size you want.
            

            //draw an ellipse
            //ellipse(0, 0, size);

            //All transformation are now dropped and the coordinate system is resetted.
           // pop();

}

//function Lucine(posX,posY,luce){
 //   this.x=posX;
//    this.y=posY;
 //   this.color=luce;
//}



//if the window is resized, update the sketchs
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}