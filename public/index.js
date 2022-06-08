//scroller
const mybutton = document.querySelector('.scroller');
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

//updatebox

 function newsOver() {
  var up=document.getElementsByClassName('update');
  up[0].style.opacity = "0";
  setTimeout(function () { up[0].style.display = "none"; }, 600);
}

//faq
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if ((panel.style.display === "flex")&&(panel.style.maxHeight)) {
      panel.style.display = "none";
      panel.style.maxHeight = null;
      this.style.borderRadius = "0.3rem";
    } else {
      panel.style.display = "flex";
      panel.style.maxHeight = "fit-content";
      this.style.borderBottomRightRadius = "0rem";
      this.style.borderBottomLeftRadius = "0rem";
      panel.style.borderBottomRightRadius = "0.3rem";
      panel.style.borderBottomLeftRadius = "0.3rem";
    }
  });
}

//

var slideIndex = 0;
healthNews(slideIndex);

// Next/previous controls
function plusSlides(n) {
  if(slideIndex<0){
    slideIndex=slideIndex+20;
  }
  else if(slideIndex>=20){
    slideIndex=slideIndex-20;
  }
  healthNews(slideIndex += 3*n);
}
async function healthNews(n){
  let newsBox=document.getElementsByClassName("box1");
  let newsImg=document.getElementsByClassName("NewsImg");
  let newsHeader=document.getElementsByClassName("newsHeader");
  let newsDesc=document.getElementsByClassName("newsDesc");
  url='https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=6c4c092046de4ab8b32c97d5994919ba';
  const result=await fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    for(var i=0;i<3;i++){
      if(n+i<0){
        n=20+n;
      }
      else if(n+i<20){
      }
      else{
        n=n-20;
      }
      data.articles[n+i].urlToImage===null?newsImg[i].src="../img/unavailable.png":newsImg[i].src=`${data.articles[n+i].urlToImage}`;
      data.articles[n+i].title===null?newsHeader[i]="not availavle":newsHeader[i].innerHTML=`${data.articles[n+i].title}`;
      data.articles[n+i].description===null?newsDesc[i]="not availavle":newsDesc[i].innerHTML=`${data.articles[n+i].title}`;
      console.log(n+i);
    }
  });

}


