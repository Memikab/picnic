let food= false
function preload(){
butterflyimage =loadImage("butterfly.png")
picnicimage =loadImage("picnicmat1.png")
backImage = loadImage("grass.jpg")
riceimage = loadImage("onigiri.png")
fruitimage  = loadImage("fruitbowl.png")
cakeimage = loadImage("cake.png")
saladimage  = loadImage("salad.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  butterflyX  = 100
  butterflyY = 100
  targetX = 100
  targetY = 100

}


function draw() {
  background(76, 173, 81);
  imageMode(CENTER)
  image(backImage, windowWidth/2, windowHeight/2,windowWidth,windowHeight)
 
  image(picnicimage, windowWidth/2, windowHeight/2, picnicimage.width/5.5, picnicimage.height/5.5)
  if (food === true){
  image(riceimage, windowWidth/2 + 100, windowHeight/2 + 180, riceimage.width/4, riceimage.height/4)
  image(fruitimage, windowWidth/2 - 140, windowHeight/2 - 100, fruitimage.width/4, fruitimage.height/4)
  image(cakeimage, windowWidth/2- 110, windowHeight/2 + 220, cakeimage.width/20, cakeimage.height/20)
  image(saladimage, windowWidth/2+ 100, windowHeight/2 -180, saladimage.width/9, saladimage.height/9)
}
  image(butterflyimage,mouseX,mouseY, butterflyimage.width/15, butterflyimage.height/15)
  
  butterflyX =lerp(butterflyX,targetX, 0.05)  
  butterflyY =lerp(butterflyY, targetY, 0.05)
}

function mousePressed(){
background(255, 0, 0)
  if(food === true){
    food = false

  } else {
    food = true
  }

}

