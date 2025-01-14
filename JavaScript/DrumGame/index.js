var numberOfDrumButtons =document.querySelectorAll(".drum").length;
for(let i=0;i<numberOfDrumButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  var buttonInnerHTML= this.innerHTML;
   
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(event){
   makeSound(event.key);
   buttonAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
      var audio=new Audio("sounds/WhatsApp Audio 2024-12-30 at 13.38.03_5b86a92e.mp3")
      audio.play();
      break;
    
    case "a":
        var audio1=new Audio("sounds/WhatsApp Audio 2024-12-30 at 13.38.03_ab1fc44b.mp3")
        audio1.play();
        break;

    case "s":
          var audio2=new Audio("sounds/WhatsApp Audio 2024-12-30 at 13.38.03_afa7509e.mp3")
          audio2.play();
          break;

    case "d":
            var audio3=new Audio("sounds/WhatsApp Audio 2024-12-30 at 13.38.04_112a8cff.mp3")
            audio3.play();
            break;

    case "j":
              var audio4=new Audio("sounds/WhatsApp Audio 2024-12-30 at 13.38.04_112a8cff.mp3")
              audio4.play();
              break;

    case "k":
                var audio5=new Audio("sounds/WhatsApp Audio 2024-12-30 at 13.38.04_874d8893.mp3")
                audio5.play();
                break;

    case "l":
                  var audio6=new Audio("sounds/WhatsApp Audio 2024-12-30 at 13.38.04_cabde6d8.mp3")
                  audio6.play();
                  break;

                  default: console.log(buttonInnerHTML);
      break;
}
  
}

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
  activeButton.classList.remove("pressed");
}, 100);
}