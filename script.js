const modal = document.getElementById("myModal");
const span = document.querySelectorAll(".close");
const budgetInput = document.querySelector('.budgetInput')

  span.forEach((close) => {
 close.addEventListener('click', function () {
   modal.style.display = "none";
 })})
;

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// sticky notes functions
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
  notes.value = ""
}

const saveEdit = document.getElementById("saveEdit");

function display(notesArray) {
  testDisplay.innerHTML = null;
  for (var i = 0; i < notesArray.length; i++) {
    testDisplay.innerHTML += `<div id=${notesArray[i].id}>${notesArray[i].note}<p>${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}</p>  
       <p>
       <button id="${notesArray[i].id}" onclick="editNoteDetails(${notesArray[i].id})"> <i class="far fa-edit"></i>
       </button>
       <button id="${notesArray[i].id}" onclick="delNoteDetails(${notesArray[i].id})"><i class="fas fa-trash-alt"></i></button>
       <p>  </div>`
  }
}

// noteList functions
function delNoteDetails(id) {
  let index = notesArray.findIndex((item) => item.id === id);
  notesArray.splice(index, 1);
  display(notesArray);
  notesDisplay()
}

const editNote = document.querySelector('#editNote')
const expFormModal = document.getElementById('expFormModal')

function editNoteDetails(id) {
  expenseEditForm.style.display = 'none'
  budgetHtmlDisplay.style.display = 'none'
  expFormModal.style.display = 'none'
  modal.style.display = "block"
  editForm.style.display = "block";
  notesArray.findIndex((item) => {
    if (item.id === id) {
      editNote.value = item.note;
      saveEdit.children[1].id = item.id;
    }
  });
}

function getNoteInfo(editNote, id) {
  edited = notesArray.findIndex((obj) => obj.id == id);
  notesArray[edited].note = editNote;
  display(notesArray);
  notesDisplay()
}


saveEdit.addEventListener("submit", (e) => {
  e.preventDefault();
  getNoteInfo(editNote.value, saveEdit.children[1].id);
  modal.style.display = "none"
  editForm.style.display = "none";
});

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addNotes(notes.value)
})


// Expense funtions
let yearlyBudget = document.querySelector('#yearly-budget')
let monthlyBudget = document.querySelector('#monthly-budget')
let weeklyBudget = document.querySelector('#weekly-budget')
let dailyBudget = document.querySelector('#daily-budget')


const updateBudget= () =>{
  if (monthlyBudget.value == '') {
    monthlyBudget.value === 0.00
  } else {
    dailyBudget.innerHTML = monthlyBudget.value / 30.421377;
    weeklyBudget.innerHTML = monthlyBudget.value / 4.345273;
    yearlyBudget.innerHTML = monthlyBudget.value * 12;
  }
}

monthlyBudget.addEventListener('keyup', updateBudget)

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

const workFieldHeader = document.querySelector('.work-field-header')



function displayExp(details) {
  workFieldBody.innerHTML = null;
  for (i = 0; i < details.length; i++) {
    workFieldBody.innerHTML += `
    <div class="expValue" id="${details[i].id}">
      <div id="expTitleName" class="exp"><p>${details[i].name}</p></div>
      <div class='edit_delete_column'>
      <div id="expValueAmount" class="exp"><p> <span>$ </span> ${details[i].number}</p></div>
      <div id="edit_delete">
        <p>
          <button id="${details[i].id}" onclick="editExpDetails(${details[i].id})"> <i class="far fa-edit"></i></button> 
          <button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})"><i class="fas fa-trash-alt"></i></button>
        </p>
      </div>
      </div>
    </div>
  `;
  }

  const editForm = document.getElementById("editForm");


  const expenseSaveEdit = document.getElementById("expenseSaveEdit");
  // const editExpValue = document.getElementById("editExpValue");
  const editExpNumber = document.getElementById("editExpNumber");
  const expenseEditForm = document.getElementById('expenseEditForm')
const editExpName = document.getElementById('editExpName')
  function getNoteInfo(editExpName, editExpNumber, id) {
  
    edited = details.findIndex((obj) => obj.id == id);
    details[edited].name = editExpName;
    details[edited].number = parseInt(editExpNumber);
    displayExp(details);
  }

  expenseSaveEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    getNoteInfo(editExpName.value, editExpNumber.value, expenseSaveEdit.children[2].id);
  });


  calcExpenses();
  // displayExpenses.style.display = "block";
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

// start
function delExpenseDetails(id) {
  let index = details.findIndex((item) => item.id === id);
  details.splice(index, 1);
  displayExp(details);
}

function editExpDetails(id) {
  budgetHtmlDisplay.style.display = 'none'
  expFormModal.style.display = 'none'
  editForm.style.display = "none";
  modal.style.display = "block"
  expenseEditForm.style.display = 'block'


  details.findIndex((item) => {
    if (item.id === id) {
      editExpName.value = item.name;
      editExpNumber.value = item.number;
      saveEdit.children[2].id = item.id;
      modal.style.display = "block";
    }
  });
}

function getExpValue(editExpName, editExpNumber, id) {
  edited = details.findIndex((obj) => obj.id == id);
  details[edited].name = editExpName;
  details[edited].number = parseInt(editExpNumber);
  displayExp(details);
}

// function callBudget() {
//   budgetform.style.display = "block";
//   expenseForm.style.display = "none";
// }

// expenseSaveEdit.addEventListener("submit", (e) => {
//   e.preventDefault();
//   getExpValue(editExpName.value, editExpNumber.value, saveEdit.children[2].id);
// });

// expForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   addExpenses(expName.value, expNumber.value);
// });

// addForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   getBudgetAmount(amountInput.value);
// });

// end

const workFieldBody = document.querySelector('.work-field-body')
const budgetDisplay = document.getElementById('budgetDisplay')
const expenseDisplay = document.getElementById('expenseDisplay')
const accountDisplay = document.getElementById('accountDisplay')



// notes display
viewnotes.addEventListener('click', notesDisplay)

function notesDisplay() {
  workFieldBody.innerHTML = null;
  workFieldHeader.innerHTML = `<div class="noteimg"><img src="https://www.beesapps.com/wp-content/uploads/2016/04/sticky-notes-2.jpg"><div class='noteHeader'>NOTES</div></div>`
  for (var i = 0; i < notesArray.length; i++) {
    workFieldBody.innerHTML += `<div class="imgDiv"> <div class="bd"> 
<div id=${notesArray[i].id} ><p class='notes'>${notesArray[i].note}</p><p>${new Date().toLocaleDateString()}, ${new Date().toLocaleTimeString()}</p> 
     
     <p>
     <button id="${notesArray[i].id}" onclick="editNoteDetails(${notesArray[i].id})"> <i class="far fa-edit"></i>
     </button>
     <button id="${notesArray[i].id}" onclick="delNoteDetails(${notesArray[i].id})"><i class="fas fa-trash-alt"></i></button>
     <p>  </div> </div>
    </div>`};

}

const topMenu = document.querySelectorAll('.topMenu')
console.log(topMenu)

const removeIndicator = () => {
  topMenu.forEach((list) => {
    list.classList.remove('indicator')
  }

  )
}


budgetDisplay.addEventListener('click', function(){
  workFieldBody.innerHTML = null;
  removeIndicator()
  budgetDisplay.classList.add('indicator')

  workFieldBody.innerHTML = `<div class="bd">
  <div>Monthly Budget</div> <div class="budgetAmount">${monthlyBudget.value}</div> </div> 
  <div class="bd"> <div>Yearly Budget</div> <div class="expenseAmount">${yearlyBudget.innerHTML}</div> </div> 
  <div class="bd"> <div>Weekly Budget</div> <div class="balanceAmount">${weeklyBudget.innerHTML}</div> </div>
  <div class="bd"> <div>Daily Budget</div> <div class="expenseAmount">${dailyBudget.innerHTML}</div> </div> 
  
   `
   updateBudget()
})



// const defaultBudgetDisplay = document.getElementById('defaultBudgetDisplay')
// const defaultExpenseDisplay = document.getElementById('defaultExpenseDisplay')
// const defaultBalanceDisplay = document.getElementById('defaultBalanceDisplay')




const workField = document.querySelector(".work-field");

const acctDisplay = () => {
  workFieldBody.innerHTML = null;
  removeIndicator()
  accountDisplay.classList.add('indicator')
  workFieldBody.innerHTML = `
   <div class="bd">
  <div>Budget</div> <div class="budgetAmount">${monthlyBudget.value ? monthlyBudget.value : Number(0).toFixed(2)}</div> </div> 
  <div class="bd"> <div>Expenses</div> <div class="expenseAmount">${expenseAmount.innerText}</div> </div> 
  <div class="bd"> <div>Balance</div> <div class="balanceAmount">${monthlyBudget.value == '' ? Number(0).toFixed(2) : parseFloat(monthlyBudget.value) - parseFloat(expenseAmount.innerText)}</div> </div> 
  `
}

accountDisplay.addEventListener('click', acctDisplay)
;


const budget = document.querySelector('.budget')
const budgetMenu = document.getElementById('budgetMenu');
const accountMenu = document.getElementById('accountMenu')
const expenseMenu = document.getElementById('expenseMenu')
const addExpenseMenu = document.getElementById('addBudgetMenu')
const menuList = document.querySelectorAll('.menuList')

const menuIndicatorRemoval = () => {
  menuList.forEach((list) => {
    list.classList.remove('menuIndicator')
  })
}



const budgetDisplayFunction = () => {
 
  menuIndicatorRemoval()
  budgetMenu.classList.add('menuIndicator')
  workField.innerHTML = null;
  workField.innerHTML = `
  <div class="work-field-header">
  <div id='expenseDisplay' class="topMenu">Expenses</div>
  <div id='budgetDisplay' class="topMenu">Budget</div>
  <div id='accountDisplay' class="topMenu">Account</div> 
  </div>
  <div class="work-field-body">
  <div class="bd">
  <div>Monthly Budget</div> <div class="budgetAmount">${monthlyBudget.value ? monthlyBudget.value : Number(0).toFixed(2)}</div> </div> 
  <div class="bd"> <div>Yearly Budget</div> <div class="expenseAmount">${monthlyBudget.value ? yearlyBudget.innerHTML : Number(0).toFixed(2)}</div> </div> 
  <div class="bd"> <div>Weekly Budget</div> <div class="balanceAmount">${monthlyBudget.value ? weeklyBudget.innerHTML : Number(0).toFixed(2)}</div> </div>
  <div class="bd"> <div>Daily Budget</div> <div class="expenseAmount">${ monthlyBudget.value ? dailyBudget.innnerHTML : Number(0).toFixed(2)}</div> </div> 
   </div>
  `
   updateBudget()
}

budgetMenu.addEventListener('click', budgetDisplayFunction)

const budgetHtmlDisplay = document.querySelector('.budgetHtmlDisplay')


expenseMenu.addEventListener('click', function () {
  expenseEditForm.style.display = 'none'
  editForm.style.display = 'none'
  budgetHtmlDisplay.style.display = 'none'

  menuIndicatorRemoval()
  expenseMenu.classList.add('menuIndicator')
  modal.style.display = "block"
  expenseListDisplay()
})

 accountMenu.addEventListener('click', () => {
  
   acctDisplay
  menuIndicatorRemoval()
  accountMenu.classList.add('menuIndicator')
}
 )

const addBudget = () => {
  addBudgetMenu.classList.add('menuIndicator')
  menuIndicatorRemoval()
  
  expenseEditForm.style.display = 'none'
  editForm.style.display = "none";
  expFormModal.style.display = 'none'
  modal.style.display = "block"
  budgetHtmlDisplay.style.display = 'block'
  budgetInput.focus()
  budgetDisplayFunction()
}
 addBudgetMenu.addEventListener('click', addBudget)


 const expenseListDisplay = () => {
  removeIndicator()
  expenseDisplay.classList.add('indicator')
  displayExp(details)
}
expenseDisplay.addEventListener('click', expenseListDisplay)

 const addExpense = () => {
  expenseEditForm.style.display = 'none'
  editForm.style.display = "none";
  budgetHtmlDisplay.style.display = 'none'
  modal.style.display = "block"
  expFormModal.style.display = 'block'

 }
//  addExpenseMenu.addEventListener('click', () => {addExpense()
//   expenseListDisplay() } )