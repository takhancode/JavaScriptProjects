const addexpensebutton = document.getElementById("addexpense");
let expensemodel = document.getElementById("expenseModal");  
let closebutton=document.getElementById("closebutton");
let submitbutton=document.getElementById("submit-btn");
let expense=[];
let saved =localStorage.getItem("expenses");
if(saved){
    expense = JSON.parse(saved);
};
let expensename=document.getElementById("expensename");
let expenseamount=document.getElementById("expenseamount");
let expensecategory=document.getElementById("expensecategory");
let expensetype=document.getElementById("expensetype");
let date=document.getElementById("expensedate");
let form=document.getElementById("submit-form");
let tbody=document.getElementById("tablebody");
let incomedisplay=document.getElementById("incomeamount");
let expensedisplay=document.getElementById("expenseamounttotal");
let balancedisplay=document.getElementById("balanceamount");
let typefilter = document.getElementById("typefilter");

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
    id: expense.length+1,
    expensename: name,
    expenseamount: parseFloat(amount),
    expensecategory: category,
    expensetype: type,
    date: expensedate
};

if(name === "" || amount === "" || expensedate === ""){
        alert("Please fill all fields");
        return;
    }


expense.push(newExpense);
localStorage.setItem("expenses", JSON.stringify(expense));
renderTable();
updateDashboard();
renderchart();
console.log(expense);
 expensemodel.style.display="none";
 form.reset();
})

function renderTable(){
    tbody.innerHTML = "";
    let filtervalue = typefilter.value;
    let filteredexpense = expense;
    
    if(filtervalue != "all"){
        filteredexpense = expense.filter(function(item){
            return item.expensetype === filtervalue;
        });
    }
    
    filteredexpense.forEach(function(item){
        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${item.expensename}</td>
        <td>${item.expenseamount}</td>
        <td>${item.expensecategory}</td>
        <td>${item.expensetype}</td>
        <td>${item.date}</td>
        <td><button class="deletebtn">Delete</button></td>
        `;
        tbody.appendChild(row);
        
        let deletebtn = row.querySelector(".deletebtn");
        deletebtn.addEventListener("click", function(){
            expense = expense.filter(function(e){
                return e.id != item.id;
            });
            localStorage.setItem("expenses", JSON.stringify(expense));
            renderTable();
            updateDashboard();
            renderchart();
        });
    });
}


function updateDashboard(){
    let totalincome = 0;
    let totalexpense = 0;
    
    expense.forEach(function(item){
        if(item.expensetype == "income"){
            totalincome += item.expenseamount;
        }
        else if(item.expensetype == "expense"){
            totalexpense += item.expenseamount;
        }
    });
    
    incomedisplay.textContent=totalincome;
    expensedisplay.textContent=totalexpense;
    balancedisplay.textContent = totalincome - totalexpense;
}






let categorytotals={
    housing:0,
    utility:0,
    transportation:0,
    healthcare:0,
    other:0
}


function renderchart(){
    
    categorytotals.housing = 0;
    categorytotals.utility = 0;
    categorytotals.transportation = 0;
    categorytotals.healthcare = 0;
    categorytotals.other = 0;
    
    expense.forEach(function(item){
        categorytotals[item.expensecategory] += item.expenseamount;
    });
   
    
    let breakdownlist=document.getElementById("breakdownlist");
    breakdownlist.innerHTML="";
   for(let key in categorytotals){
   let div = document.createElement("div");
   div.innerHTML = `<span>${key}</span><strong>${categorytotals[key]}</strong>`;
   breakdownlist.appendChild(div);
}



    let chartarea = document.getElementById("chartarea");
    chartarea.innerHTML = "";
    for(let key in categorytotals){
    let bardiv = document.createElement("div");
    bardiv.className = "bardiv";
    
    let bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = (categorytotals[key] / 200) + "px";
    
    let label = document.createElement("label");
    label.innerText = key;
    
    bardiv.appendChild(bar);
    bardiv.appendChild(label);
    
    chartarea.appendChild(bardiv);
}
} 


renderTable();
updateDashboard();
renderchart();







typefilter.addEventListener("change", function(){
    renderTable();
});




