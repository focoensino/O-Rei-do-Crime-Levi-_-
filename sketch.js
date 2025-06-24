var ladrao, diamante, laser, laser2, paredes, laser3, laser4
var estadoJogo
function setup() {
  createCanvas(400, 400);
montarJogo()
estadoJogo ='parado'
  
}

function draw() {
  background(0);
 drawSprites()

if(estadoJogo == 'parado'){
  
 textSize(20) 
fill('white')
  text('Prescione ESPAÇO para iniciar',60,180)
  
if(keyDown('SPACE')){
laser1.velocityX = 25
laser2.velocityX = -14
laser3.velocityX =  10
estadoJogo = 'play'
 
  
  
}  
  
  
  
}
  
if(estadoJogo == 'play'){
  
 laser1.bounceOff(paredes)
  laser2.bounceOff(paredes)
  laser3.bounceOff(paredes)
  if(keyDown('left')){
    
   ladrao.x = ladrao.x -4 
  }else if(keyDown('right')){
    
    ladrao.x = ladrao.x + 4    
  }else if(keyDown('up')){
    
    ladrao.y = ladrao.y - 4
  }else if(keyDown('down')){
    
    ladrao.y = ladrao.y + 4
  }
  

  
  
  
  ladrao.collide(paredes)
  
  if(
    
  ladrao.isTouching(laser1)||
  ladrao.isTouching(laser2)
  ){
    
    estadoJogo = 'gameOver'
    
  }
  
   if(ladrao.isTouching(diamante)){
    
  estadoJogo = 'winner'
  
}
  
}
  
if(estadoJogo == 'gameOver'){
  
  fimDeJogo()
  fill('white')
  textSize(30)
  text('O ladrão foi capturado',50,200)
 
  textSize(15)
  text('Pressione R para Reiniciar',111,250)
  
  if(keyDown('r')){
  estadoJogo = 'parado'
  montarJogo() 

    
    
  }
  

}  
  
if(estadoJogo == 'winner'){
  
  fimDeJogo()
  textSize(30)
  fill('white')
  text('O diamante foi Roubado',45,200)
  
  textSize(15)
  text('Pressione R para reiniciar',115,250)
  
  if(keyDown('r')){
    
  estadoJogo = 'parado'
  montarJogo()
    
  }
  
  
  
  
}
  
  
}

function montarJogo(){
  ladrao = createSprite(200,390,20,20)
  diamante = createSprite(360,20,20,20)
  laser1 =createSprite(100,100,200,10)
  laser1.shapeColor ='red'
  laser2 = createSprite(200,200,10,100)
  laser2.shapeColor ='red'
  laser3 = createSprite(300,300,200,10)
  laser3.shapeColor ='red'
  
  
  ladrao.shapeColor ='white'
  
  paredes = createEdgeSprites()
  
  
  
}

function fimDeJogo(){
 ladrao.remove() 
 diamante.remove() 
 laser1.remove()
 laser2.remove()
 laser3.remove()
}