//alert("hey");

var nodrum=document.querySelectorAll(".drum").length;

for (var i=0;i<nodrum;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function()
{
var bthtml=this.innerHTML;
makesound(bthtml);
btanime(bthtml);
   
});
}
document.addEventListener("keypress",function(event)
{
makesound(event.key);
btanime(event.key);
}
);



function makesound(key)
{
    switch (key) {
        case "w":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2=new Audio("sounds/tom-2.mp3");
             tom2.play();
            break;
        
        case "s":
             var tom3=new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;

        case "d":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
             break;
        case "j":
             var crash=new Audio("sounds/crash.mp3");
             crash.play();
             break;   
        case "k":
             var kickb=new Audio("sounds/kick-bass.mp3");
             kickb.play();
             break;
             
         case "l":
             var snare=new Audio("sounds/snare.mp3");
             snare.play();
             break;
             


        default:
            console.log(bthtml);
}

}

function btanime(currentkey)
{
  var activeButton=document.querySelector("."+currentkey);
  activeButton.classList.add("pressed");
  
  setTimeout(function()
  {
      activeButton.classList.remove("pressed");

  }, 100);


}
