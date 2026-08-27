const addexpensebutton = document.getElementById("addexpense");
let expensemodel = document.getElementById("expenseModal");   // sahi id

addexpensebutton.addEventListener("click", function(){
    expensemodel.style.display = "block";   // wahi variable use karo jo banaya
});