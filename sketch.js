var bg, bgImg
var spaceShipImg, spaceShip
var venus;


function preload(){
bgImg = loadImage("./assets/Space BG.png")
spaceShipImg = loadImage("./assets/SpaceShip.png")


}

function setup(){
createCanvas(1500,700);
background(bgImg)


venus = createImg('./assets/Venus.png',"venus"  )
venus.position(100,100)
venus.size(200,200)
venus.mouseClicked(venusFunc)


spaceShip = createSprite(750,350,200,200)
spaceShip.addImage("spaceShip",spaceShipImg)
spaceShip.scale = 0.3

}

function draw() {
  
 drawSprites();
}

function venusFunc(){

}