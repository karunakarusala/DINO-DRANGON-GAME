score = 0
cross = true;
gameAudio = new Audio('../Images/musicc.mp3X.mp3')
gameOverAudio = new Audio ('../Images/gameover.mp3')
let scoreCount = document.querySelector('.scoreCount');
setTimeout(()=>{
  gameAudio.play()
},1000)

 document.onkeydown =  (e) =>{
   console.log("keycode is",e.keyCode)
   if (e.keyCode == 38) {
     dino=document.querySelector('.dino')
     dino.classList.add('aniDino')
     setTimeout(() => {
        dino.classList.remove('aniDino')
     }, 500)
   }
   if (e.keyCode==39) {
     dino=document.querySelector('.dino')
     dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
     dino.style.left=dinoX+112+"px"
   }
   if (e.keyCode==37) {
     dino=document.querySelector('.dino')
     dinoX = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'))
     dino.style.left=dinoX-112+"px"
   
}
 }

setInterval(() => {
  dino = document.querySelector('.dino')
  gameOver = document.querySelector('.gameOver')
  obstacle = document.querySelector('.obstacle')
  //scoreCount = document.querySelector('.scoreCount');  // Define scoreCount element



  dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))          
  dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"))       
  ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
  oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))

  offsetX  = Math.abs(dx-ox)
  offsetY = Math.abs(dy-oy)
 
  if(offsetX<10 && offsetY<10){
    gameOver.innerHTML="Game over Reload to play Again"
    obstacle.classList.remove('aniObstacle')
    gameOverAudio.play()
    setTimeout(()=>{
      gameAudio.pause()
      gameOverAudio.pause()
    },1000)

  }
  else if (offsetX<145 && cross){
    score+=1
    updateScore(score)
    cross = false
    setTimeout(()=>{
      cross=true 
    }    
    ,1000)
    setTimeout(()=>{
      aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'))
      newDur = aniDur-0.1
      obstacle.style.animationDuration= newDur+'s'
      console.log("New aniDuration is:",newDur)
    },500)
  }
},10);
function updateScore(score) {
  scoreCount.innerHTML = "Your score" + score;
}
