const addexpensebutton = document.getElementById("addexpense");
let expensemodel = document.getElementById("expenseModal");  
let closebutton=document.getElementById("closebutton");
let submitbutton=document.getElementById("submit-btn");
let expense=[];
let expensename=document.getElementById("expensename");
let expenseamount=document.getElementById("expenseamount");
let expensecategory=document.getElementById("expensecategory");
let expensetype=document.getElementById("expensetype");
let date=document.getElementById("expensedate");
let form=document.getElementById("submit-form");
let tbody=document.getElementById("tablebody");
addexpensebutton.addEventListener("click", function(){
    expensemodel.style.display = "block"; 
});

closebutton.addEventListener("click",function(){
    expensemodel.style.display="none";
})

submitbutton.addEventListener("click",function(e){
  e.preventDefault();
 let name=expensename.value;
 let amount=expenseamount.value;
 let category=expensecategory.value;
 let type=expensetype.value;
 let expensedate=date.value;

 let newExpense = {
    expensename: name,
    expenseamount: parseFloat(amount),
    expensecategory: category,
    expensetype: type,
    date: expensedate
};

expense.push(newExpense);
renderTable();
console.log(expense);
 expensemodel.style.display="none";
 form.reset();
})

function renderTable(){
    tbody.innerHTML="";
    expense.forEach(function(item){
        let row=document.createElement("tr");
        row.innerHTML=`
        <td>${item.expensename}</td>
        <td>${item.expenseamount}</td>
        <td>${item.expensecategory}</td>
        <td>${item.expensetype}</td>
        <td>${item.date}</td>
        `;
        tbody.appendChild(row);
    });
}

renderTable();

