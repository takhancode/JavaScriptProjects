const addexpensebutton = document.getElementById("addexpense");
let expensemodel = document.getElementById("expenseModal");  
let closebutton=document.getElementById("closebutton");

addexpensebutton.addEventListener("click", function(){
    expensemodel.style.display = "block"; 
});

closebutton.addEventListener("click",function(){
    expensemodel.style.display="none";
})