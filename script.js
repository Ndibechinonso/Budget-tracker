let notes = document.querySelector("#notes")
const noteForm = document.getElementById("noteForm");
let save = document.querySelector(".save")

let notesArray = []
let testDisplay = document.querySelector(".testDisplay")

let viewnotes = document.querySelector(".viewnotes")
editForm.style.display = "none";

function addNotes(note) {
  let noteId = 0;
const newNote = {
    id: id,
    note: note
}
    notesArray.push(newNote)
    display(notesArray)
    id++;
    notes.value= ""
}
const saveEdit = document.getElementById("saveEdit");

function display(notesArray) {
    testDisplay.innerHTML = null;
    for(var i = 0; i < notesArray.length; i++) {
       testDisplay.innerHTML += `<div id=${notesArray[i].id}>${notesArray[i].note}<p>${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}</p> 
       
       <p>
       <button id="${notesArray[i].id}" onclick="editExpDetails(${notesArray[i].id})"> <i class="far fa-edit"></i>
       </button>
       <button id="${notesArray[i].id}" onclick="delExpenseDetails(${notesArray[i].id})"><i class="fas fa-trash-alt"></i></button>
       <p>  </div>` 
    } }

    function delExpenseDetails(id) {
        let index = notesArray.findIndex((item) => item.id === id);
        notesArray.splice(index, 1);
        display(notesArray);
        console.log("hi")
      }
      

    let editNote = document.querySelector('#editNote')
    function editExpDetails(id) {
      
        editForm.style.display = "block";
        notesArray.findIndex((item) => {
          if (item.id === id) {
            editNote.value = item.note;
            saveEdit.children[1].id = item.id;
         
          }
        });
      }
      function getExpValue(editNote, id) {
        edited = notesArray.findIndex((obj) => obj.id == id);
        notesArray[edited].note = editNote;
        display(notesArray);
      }

      
      saveEdit.addEventListener("submit", (e) => {
        e.preventDefault();
        getExpValue(editNote.value, saveEdit.children[1].id);
      });
      
      noteForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addNotes(notes.value)})


    let yearlyBudget = document.querySelector('#yearly-budget')
    let monthlyBudget = document.querySelector('#monthly-budget')
    let weeklyBudget = document.querySelector('#weekly-budget')
    let dailyBudget = document.querySelector('#daily-budget')

    monthlyBudget.onkeyup = function(){
      dailyBudget.innerHTML = monthlyBudget.value / 30.421377;
      weeklyBudget.innerHTML = monthlyBudget.value / 4.345273;
      yearlyBudget.innerHTML = monthlyBudget.value * 12;

  }

  const expForm = document.getElementById("expForm");
let expName = document.getElementById("expName");
let expNumber = document.getElementById("expNumber");

let id = 0;
let details = [];

function addExpenses(name, number) {
  if (!name.length || !number.length) {
    expName.style.border = "1px solid #b80c09";
    expName.placeholder = "input can not be empty";
    expName.style.color = "#b80c09";

    expNumber.style.border = "1px solid #b80c09";
    expNumber.placeholder = "input can not be empty";
    expNumber.style.color = "#b80c09";

    setTimeout(() => {
      expName.style.color = "#495057";
      expName.style.border = "1px solid gray";
      expName.placeholder = "input can not be empty";

      expNumber.placeholder = "input can not be empty";
      expNumber.style.border = "1px solid gray";
      expNumber.style.color = "#495057";
    }, 3000);
  } else {
    const userExp = {
      id: id,
      name: name,
      number: parseInt(number),
    };
    details.push(userExp);
    displayExp(details);
    id++;
    expName.value = "";
    expNumber.value = "";
  }
}

expForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addExpenses(expName.value, expNumber.value);
});


let balanceAmount = document.querySelector('.balanceAmount');
let expenseAmount = document.querySelector('.expenseAmount')
let budgetAmount = document.querySelector('.budgetAmount')
let testDisplay2 = document.querySelector('.testDisplay2')



function displayExp(details) {
  testDisplay2.innerHTML = null;
  for (i = 0; i < details.length; i++) {
    testDisplay2.innerHTML += `
    <div class="expValue" id="${details[i].id}">
      <div id="expTitleName" class="exp"><p>${details[i].name}</p></div>
      <div id="expValueAmount" class="exp"><p> <span>$ </span> ${details[i].number}</p></div>
      <div id="edite_delete">
        <p>
          <button id="${details[i].id}" onclick="editExpDetails(${details[i].id})"> <i class="far fa-edit"></i></button> 
          <button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})"><i class="fas fa-trash-alt"></i></button>
        </p>
      </div>
    </div>
  `;
  }
  calcExpenses();
  displayExpenses.style.display = "block";
}

function calcExpenses() {
  let totalExp = 0;
  for (i = 0; i < details.length; i++) {
    totalExp = details[i].number + totalExp;
  }
 
  expenseAmount.innerText = totalExp;
  updateBalance();
}

function updateBalance() {
  balanceAmount.innerText =
    parseInt(monthlyBudget.value) - parseInt(expenseAmount.innerText);
  
  budgetAmount.innerText = monthlyBudget.value;

}


let workFieldBody = document.querySelector('.work-field-body')
let budgetDisplay = document.getElementById('budgetDisplay')
let expenseDisplay = document.getElementById('expenseDisplay')
let accountDisplay = document.getElementById('accountDisplay')
let workFieldHeader = document.querySelector('.work-field-header')
viewnotes.addEventListener('click', function(){
  workFieldBody.innerHTML = null;
  workFieldHeader.innerHTML = `<div class="noteimg"><img src="https://www.beesapps.com/wp-content/uploads/2016/04/sticky-notes-2.jpg"><div class='noteHeader'>NOTES</div></div>`
  for(var i = 0; i < notesArray.length; i++) {
  workFieldBody.innerHTML += `<div class="imgDiv"> <div class="bd"> 
<div id=${notesArray[i].id}>${notesArray[i].note}<p>${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}</p> 
     
     <p>
     <button id="${notesArray[i].id}" onclick="editExpDetails(${notesArray[i].id})"> <i class="far fa-edit"></i>
     </button>
     <button id="${notesArray[i].id}" onclick="delExpenseDetails(${notesArray[i].id})"><i class="fas fa-trash-alt"></i></button>
     <p>  </div> </div>
    </div>`};
   
})


budgetDisplay.addEventListener('click', function(){

  workFieldBody.innerHTML = `<div class="bd">
  <div>Monthly Budget</div> <div class="budgetAmount">${monthlyBudget.value}</div> </div> 
   <div class="bd"> <div>Yearly Budget</div> <div class="expenseAmount">${weeklyBudget.innerHTML}</div> </div> 
   <div class="bd"> <div>Weekly Budget</div> <div class="balanceAmount">${weeklyBudget.innerHTML}</div> </div> 
   <div class="bd"> <div>Daily Budget</div> <div class="balanceAmount">${dailyBudget.innerHTML}</div> </div>
   `
})

expenseDisplay.addEventListener('click', function(){

  workFieldBody.innerHTML = `<div class="bd">
  <div>Total Expense</div> <div class="budgetAmount">${expenseAmount.innerText}</div> </div> 
   <div class="bd"> <div>Top Expense/div> <div class="expenseAmount"></div> </div> 
   `
})
    
accountDisplay.addEventListener('click', function(){

  workFieldBody.innerHTML = `<div class="bd">
  <div>Budget</div> <div class="budgetAmount">${monthlyBudget.value}</div> </div> 
  <div class="bd"> <div>Expenses</div> <div class="expenseAmount">${expenseAmount.innerText}</div> </div> 
  <div class="bd"> <div>Balance</div> <div class="balanceAmount">${monthlyBudget.value == 0 ? 0.00 : parseFloat(expenseAmount.innerText) - parseFloat(monthlyBudget.innerHTML)}</div> </div> 
   `
})