var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigationBar").style.top = "0";
  } else {
    document.getElementById("navigationBar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}




    const txts=document.querySelector(".animate-text").children,
          txtsLen=txts.length;
      let index=0;
     const textInTimer=3000,
           textOutTimer=2800;

    function animateText() {
       for(let i=0; i<txtsLen; i++){
         txts[i].classList.remove("text-in","text-out");  
       }
       txts[index].classList.add("text-in");

       setTimeout(function(){
           txts[index].classList.add("text-out");              
       },textOutTimer)

       setTimeout(function(){

         if(index == txtsLen-1){
             index=0;
           }
          else{
              index++;
            }
           animateText();
       },textInTimer); 
    }
    
    window.onload=animateText;

    document.querySelector('#contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });

