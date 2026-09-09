const toggle=document.getElementById('menu-toggle');
if(toggle){
    toggle.addEventListener('change', ()=>{
        document.body.classList.toggle('noscroll', toggle.checked)
})
}

const words = [
    "Developer",
    "Engineer",
    "Learner",
     "Student"
];

const typingText=document.getElementById("typing-span");
let wordIndex=0;
let charIndex=0;
let isDeleting=false;
let typingDelay=100;
let erasingDelay=100;
let nextWordDelay=1000;

const type = () =>{
    const currentWord=words[wordIndex];
    if(!isDeleting){
        typingText.textContent=currentWord.substring(0,charIndex+1);
        charIndex++;
    

    if(charIndex===currentWord.length){
        isDeleting=true;
        setTimeout(type,nextWordDelay);
    }else{
        setTimeout(type,typingDelay);
    }
}
else{
    typingText.textContent=currentWord.substring(0,charIndex-1);
    charIndex--;

    if(charIndex===0){
        isDeleting=false;
        wordIndex=(wordIndex + 1) % words.length;
        setTimeout(type,500);
    }else{
        setTimeout(type,erasingDelay);
    }
}
   
};
document.addEventListener('DOMContentLoaded',()=>{
    if(words?.length){
        type();
    }
});

const navlinks=document.querySelectorAll(".navlink");
const tabs=document.querySelectorAll(".content");

navlinks.forEach((link)=>{
link.addEventListener("click",(e)=>
    {
    e.preventDefault();
    navlinks.forEach((l)=>{
    if(l === link){
       l.classList.add("active");
    }
    else{
        l.classList.remove("active");
    }
}); 
const tabName=link.dataset.tab;

tabs.forEach((tab) =>{
if(tab.id===tabName){
    tab.classList.add("active");
}else{
    tab.classList.remove("active");
}
});