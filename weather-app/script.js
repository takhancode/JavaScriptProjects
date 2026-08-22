let cityinput=document.getElementById("city-input");
let search=document.getElementById("search");
let error=document.getElementById("error");



search.addEventListener("click",function(){
    if(cityinput.value===""){
        error.style.display="block";
    }
    else{

        error.style.display="none";
        console.log(cityinput);
    }
})