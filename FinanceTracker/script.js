const addexpensebutton = document.getElementById("addexpense");
let expensemodel = document.getElementById("expenseModal");  

addexpensebutton.addEventListener("click", function(){
    expensemodel.style.display = "block"; 
});