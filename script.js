const loginInitiator = document.getElementById('loginInitiator')
const loginModal = document.getElementById('loginModal')
const login = document.getElementById('login')
const loginPage = document.getElementById('loginPage')
const welcomePage = document.getElementById('welcomePage')

const logoutButton = document.getElementById('logoutButton')

const expenseTotal = document.getElementById('expenseTotal')
const expenseTotalDiv = document.querySelector('.expenseTotalDiv')
const expenseAmount = document.querySelector('.expenseAmount')

const budgetHtmlDisplay = document.querySelector('.budgetHtmlDisplay')

const budget = document.querySelector('.budget')
const budgetMenu = document.getElementById('budgetMenu');
const accountMenu = document.getElementById('accountMenu')
const addExpenseMenu = document.getElementById('addExpenseMenu')
const addBudgetMenu = document.getElementById('addBudgetMenu')
const menuList = document.querySelectorAll('.menuList')

const workField = document.querySelector(".work-field");

const workFieldHeader = document.querySelector('.work-field-header')
const topMenu = document.querySelectorAll('.topMenu')

const workFieldBody = document.querySelector('.work-field-body')
const budgetDisplay = document.getElementById('budgetDisplay')
const expenseDisplay = document.getElementById('expenseDisplay')
const accountDisplay = document.getElementById('accountDisplay')

const editForm = document.getElementById("editForm");

const expenseSaveEdit = document.getElementById("expenseSaveEdit");
const editExpNumber = document.getElementById("editExpNumber");
const expenseEditForm = document.getElementById('expenseEditForm')
const editExpName = document.getElementById('editExpName')

const modal = document.getElementById("myModal");
const span = document.querySelectorAll(".close");
const budgetInput = document.querySelector('.budgetInput')

const notes = document.querySelector("#notes")
const noteForm = document.getElementById("noteForm");
const save = document.querySelector(".save")
const notesArray = []
const testDisplay = document.querySelector(".testDisplay")
const viewnotes = document.querySelector(".viewnotes")

const saveEdit = document.getElementById("saveEdit");

const editNote = document.querySelector('#editNote')
const expFormModal = document.getElementById('expFormModal')

const noteSubmitAlert = document.querySelector('.noteSubmitAlert');

const expForm = document.getElementById("expForm");
const expName = document.getElementById("expName");
const expNumber = document.getElementById("expNumber");

const budgetForm = document.getElementById('budgetForm')
const budgetLink = document.getElementById('budgetLink')
const userEmail = document.getElementById('loginEmail')
const password = document.getElementById('password')
const user = document.getElementById('user')
const profile = document.querySelector('.profile')
const userDetails = [];
const stickyLink = document.querySelector('.stickyLink')

const stickyNotes = document.querySelector('.sticky-notes')
const showPassword = document.querySelector('.showPassword')
editForm.style.display = "none";


// login modal on login attemmp
loginInitiator.addEventListener('click', function () {
  loginModal.style.display = 'flex'
})

// function to get user email and display on dashbard
login.addEventListener('submit', function (event) {
  event.preventDefault()
  loginModal.style.display = 'none'
  loginPage.style.display = 'none'
  welcomePage.style.display = 'block'
  userInfo = {
    email: userEmail.value,
    password: password.value
  }
  userDetails[0] = userInfo;
  console.log(userInfo)
  console.log(userDetails)
  localStorage.setItem('loginInfo', JSON.stringify(userDetails))
  let userLogin = localStorage.getItem('loginInfo')
  userLogin = JSON.parse(userLogin)
  user.innerHTML = `<p>${userLogin[0].email}<p>`
  accountDisplay.classList.add('indicator')
})

// modal close fxn
span.forEach((close) => {
  close.addEventListener('click', function () {
    modal.style.display = "none";
  })
});

// fxn to remove modal on window click
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == loginModal) {
    loginModal.style.display = 'none'
  }
};

// sticky notes functions
function addNotes(note) {
  let noteId = 0;
  const newNote = {
    id: id,
    note: note
  }
  notesArray.push(newNote)
  localStorage.setItem('notes', JSON.stringify(notesArray))
  id++;
  notes.value = ""
}

function display() {
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

const passwordToggler = () => {
  if (password.type == 'password') {
    password.type = 'text'
    showPassword.innerText = 'Hide Password'
  } else if (password.type == 'text') {
    password.type = 'password'
    showPassword.innerText = 'Show Password'
  }
}

showPassword.addEventListener('click', passwordToggler)

const profileDisplay = () => {
  let userLogin = localStorage.getItem('loginInfo')
  userLogin = JSON.parse(userLogin)
  menuIndicatorRemoval()
  workFieldBody.innerHTML = null;
  workFieldHeader.classList.add('hidden')
  workFieldBody.innerHTML += ` <div class='profileContainer'>
 <div class='profileHeader'>Profile Update</div>
<form>
  <div class='profileRow'>
  <div class='profileFlex'> <div class='details'>Email Address:</div> <div class='details'>Password</div> <div class='details'>First Name:</div> <div class='details'>Last Name:</div> <div class='details'>Cellular Number</div> </div>
  <div class='inputFlex'> <div><input type='text' value=${userLogin[0].email}></div>
  <div><input type='text' value=${userLogin[0].password} id='passwordId'></div>
   <div><input type='text'> </div>
  <div> <input type='text'></div>
  <div> <input type='number'></div> </div>
</div>
<div class='updateButton'><button class='budgetFormButton'>Update User</button></div>
</form>
 <div>
 `
}

profile.addEventListener('click', profileDisplay)

function notesDisplay() {
  let notesArray = localStorage.getItem('notes')
  notesArray = JSON.parse(notesArray)
  expenseTotalDiv.classList.add('hidden')
  menuIndicatorRemoval()
  workFieldBody.innerHTML = null;
  workFieldHeader.classList.add('hidden')
  workFieldBody.innerHTML = `<div class="noteimg"><img src="https://www.beesapps.com/wp-content/uploads/2016/04/sticky-notes-2.jpg"><div class='noteHeader'>NOTES</div></div>`
  if (notesArray.length == 0) {
    workFieldBody.innerHTML += `
   <div class='noresult'>No results Found.</div>`
  }
  else if (notes) {
    for (var i = 0; i < notesArray.length; i++) {
      workFieldBody.innerHTML += `
      <div class="imgDiv">
        <div id=${notesArray[i].id} class="bd" >
          <div class='noteDiv'><p class='notesClass'>${notesArray[i].note}</p></div>
          <div class='noteDate'><p>${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}</p>
            <p class='noteEditButton modificationButtons'>
              <button id="${notesArray[i].id}" onclick="editNoteDetails(${notesArray[i].id})"> <i class="far fa-edit"></i>
              </button>
              <button id="${notesArray[i].id}" onclick="delNoteDetails(${notesArray[i].id})"><i class="fas fa-trash-alt"></i></button>
              <p>
       </div> 
       </div>
          </div> `};
  }
}

viewnotes.addEventListener('click', notesDisplay)

stickyLink.addEventListener('click', () => {
  if (stickyLink.innerText == 'Show Sticky Notes') {
    stickyNotes.style.display = 'block'
    stickyLink.innerText = 'Hide Sticky Notes'
  } else {
    stickyNotes.style.display = 'none'
    stickyLink.innerText = 'Show Sticky Notes'
  }
})

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

function alertTimer() {
  setTimeout(function () {
    noteSubmitAlert.style.display = 'none'
  }, 4000)
}

noteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  notes.value && addNotes(notes.value)
  noteSubmitAlert.innerText = 'Your notes has been saved'
  alertTimer()
})

// fxn for note edit and delete
function getNoteInfo(editNote, id) {
  edited = notesArray.findIndex((obj) => obj.id == id);
  notesArray[edited].note = editNote;
  notesDisplay()
}

saveEdit.addEventListener("submit", (e) => {
  e.preventDefault();
  getNoteInfo(editNote.value, saveEdit.children[1].id);
  localStorage.setItem("notes", JSON.stringify(notesArray))
  notesDisplay()
  modal.style.display = "none"
});

function delNoteDetails(id) {
  let index = notesArray.findIndex((item) => item.id === id);
  notesArray.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesArray))
  notesDisplay()
}

// Expense funtions
let id = 0;
const details = [];

// accepts expenses
function addExpenses(name, number) {
  if (!name.length || !number.length) {
    expName.style.border = "1px solid #b80c09";
    expName.placeholder = "input can not be empty";
    expName.style.color = "#b80c09";
    expNumber.style.border = "1px solid #b80c09";
    expNumber.placeholder = "input can not be empty";
    expNumber.style.color = "#b80c09"
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
    localStorage.setItem("userExp", JSON.stringify(details))
    displayExp();
    id++;
    expName.value = "";
    expNumber.value = "";
  }
}

// submit fxn for expenses
expForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addExpenses(expName.value, expNumber.value);
  calcExpenses()
  expenseTotal.innerText = `${expenseAmount.innerText}`
});

// display expenses to dom

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
      expenseSaveEdit.children[2].id = item.id;
    }
  });
}

function delExpenseDetails(id) {
  let index = details.findIndex((item) => item.id === id);
  details.splice(index, 1);
  localStorage.setItem("userExp", JSON.stringify(details))
  displayExp();
  calcExpenses()
  expenseTotal.innerText = `${expenseAmount.innerText}`
}

function displayExp() {
  let details = localStorage.getItem("userExp")
  if (details) {
    details = JSON.parse(details)
    workFieldBody.innerHTML = null;
    for (i = 0; i < details.length; i++) {
      workFieldBody.innerHTML += `
    <div class="expValue" id="${details[i].id}">
    <div class='edit_delete_column'>
      <div id="expTitleName" class="exp"><p>${details[i].name}</p></div>
      <div id="expValueAmount" class="exp"><p> <span> &#8358; </span> ${details[i].number}</p></div>
      </div>
      <div id="edit_delete">
        <p class='modificationButtons'>
          <button id="${details[i].id}" onclick="editExpDetails(${details[i].id})"> <i class="far fa-edit"></i></button> 
          <button id="${details[i].id}" onclick="delExpenseDetails(${details[i].id})"><i class="fas fa-trash-alt"></i></button>
        </p>
      </div>
    </div>
  `;
    }
  }
}

// fxn to edit expenses
function getExpenseInfo(editExpName, editExpNumber, id) {
  edited = details.findIndex((obj) => obj.id == id);
  details[edited].name = editExpName;
  details[edited].number = parseInt(editExpNumber);
}

expenseSaveEdit.addEventListener("submit", (e) => {
  e.preventDefault();
  getExpenseInfo(editExpName.value, editExpNumber.value, expenseSaveEdit.children[2].id);
  localStorage.setItem("userExp", JSON.stringify(details))
  calcExpenses()
  displayExp();
  expenseEditForm.style.display = 'none'
  modal.style.display = "none"
});

function calcExpenses() {
  let totalExp = 0;
  let details = localStorage.getItem("userExp")
  details = JSON.parse(details)
  if(details) {
  for (i = 0; i < details.length; i++) {
    totalExp += details[i].number;
  } }
  expenseAmount.innerText = totalExp;
  expenseTotal.innerText = totalExp;
}

// fxn for balance
function updateBalance() {
  let budget = localStorage.getItem('budget')
  budget = JSON.parse(budget)
  balanceAmount.innerText =
    parseFloat(budget) - parseInt(expenseAmount.innerText);
  budgetAmount.innerText = parseFloat(budget);
}

const removeIndicator = () => {
  topMenu.forEach((list) => {
    list.classList.remove('indicator')
  })
}

// fxns to navigate btw headers
budgetDisplay.addEventListener('click', function () {
  let budget = localStorage.getItem('budget')
  budget = JSON.parse(budget)
  expenseTotalDiv.classList.add('hidden')
  workFieldBody.innerHTML = null;
  removeIndicator()
  menuIndicatorRemoval()
  budgetDisplay.classList.add('indicator')
  workFieldBody.innerHTML = `<div class="bd">
            <div>Monthly Budget</div> <div class="budgetAmount"> &#8358; ${budget ? parseFloat(budget) : Number(0).toFixed(2)}</div> </div>
          <div class="bd"> <div>Yearly Budget</div> <div class="expenseAmount"> &#8358; ${budget ? parseFloat(budget) * 12 : Number(0).toFixed(2)}</div> </div>
          <div class="bd"> <div>Weekly Budget</div> <div class="balanceAmount"> &#8358; ${budget ? parseFloat(budget) / 4.345273 : Number(0).toFixed(2)}</div> </div>
          <div class="bd"> <div>Daily Budget</div> <div class="expenseAmount"> &#8358; ${budget ? parseFloat(budget) / 30.421377 : Number(0).toFixed(2)}</div> </div>
   `
})

const acctDisplay = () => {
  let budget = localStorage.getItem('budget')
  budget = JSON.parse(budget)
  let details = localStorage.getItem("userExp")
  details = JSON.parse(details)
  expenseTotalDiv.classList.add('hidden')
  calcExpenses()
  workFieldBody.innerHTML = null;
  removeIndicator()
  menuIndicatorRemoval()
  accountDisplay.classList.add('indicator')
  workFieldBody.innerHTML = `
  <div class="bd">                                         
  <div>Budget</div> <div class="budgetAmount"> &#8358; ${budget ? parseFloat(budget) : Number(0).toFixed(2)}</div> </div>
<div class="bd"> <div>Expenses</div> <div class="expenseAmount"> &#8358; ${details ? expenseAmount.innerText : Number(0).toFixed(2)}</div> </div>
<div class="bd"> <div>Balance</div> <div class="balanceAmount"> &#8358; ${!budget && parseFloat(expenseAmount.innerText) == 0 ? Number(0).toFixed(2) : parseFloat(budget) - parseFloat(expenseAmount.innerText)}</div> 
</div>
 `
}

accountDisplay.addEventListener('click', acctDisplay);

const expenseListDisplay = () => {
  removeIndicator()
  menuIndicatorRemoval()
  expenseDisplay.classList.add('indicator')
  displayExp()
  calcExpenses()
  expenseTotalDiv.classList.remove('hidden')
}

expenseDisplay.addEventListener('click', expenseListDisplay)

// fxns for menu navigation
const menuIndicatorRemoval = () => {
  menuList.forEach((list) => {
    list.classList.remove('menuIndicator')
    expenseTotalDiv.classList.add('hidden')
  })
}

const budgetSaver = () => {
  localStorage.setItem('budget', JSON.stringify(monthlyBudget.value))
}

const budgetDisplayFunction = () => {
  let budget = localStorage.getItem('budget')
  budget = JSON.parse(budget)
  workFieldHeader.classList.remove('hidden')
  workFieldBody.innerHTML = null;
  menuIndicatorRemoval()
  removeIndicator()
  budgetDisplay.classList.add('indicator')
  workFieldBody.innerHTML = `
            <div class="bd">
              <div>Monthly Budget</div> <div class="budgetAmount"> &#8358; ${budget ? parseFloat(budget) : Number(0).toFixed(2)}</div> </div>
            <div class="bd"> <div>Yearly Budget</div> <div class="expenseAmount"> &#8358; ${budget ? parseFloat(budget) * 12 : Number(0).toFixed(2)}</div> </div>
            <div class="bd"> <div>Weekly Budget</div> <div class="balanceAmount"> &#8358; ${budget ? parseFloat(budget) / 4.345273 : Number(0).toFixed(2)}</div> </div>
            <div class="bd"> <div>Daily Budget</div>  <div class="expenseAmount"> &#8358; ${budget ? parseFloat(budget) / 30.421377 : Number(0).toFixed(2)}</div> </div>   
  `
}

budgetMenu.addEventListener('click', () => {
  budgetDisplayFunction()
  budgetMenu.classList.add('menuIndicator')
})

const acctMenuDisplay = () => {
  let budget = localStorage.getItem('budget')
  budget = JSON.parse(budget)
  removeIndicator()
  accountDisplay.classList.add('indicator')
  workFieldHeader.classList.remove('hidden')
  workFieldBody.innerHTML = null;
  menuIndicatorRemoval()
  calcExpenses()
  accountMenu.classList.add('menuIndicator')
  workFieldBody.innerHTML = `
   <div class="bd">
            <div>Budget</div> <div class="budgetAmount"> &#8358; ${budget ? parseFloat(budget) : Number(0).toFixed(2)}</div> </div>
          <div class="bd"> <div>Expenses</div> <div class="expenseAmount"> &#8358; ${expenseAmount.innerText}</div> </div>
          <div class="bd"> <div>Balance</div> <div class="balanceAmount"> &#8358; ${!budget == 0 && parseFloat(expenseAmount.innerText) == 0 ? Number(0).toFixed(2) : parseFloat(budget) - parseFloat(expenseAmount.innerText)}</div> </div>
          <div class='budgetDeficit'>${parseFloat(budget) < parseFloat(expenseAmount.innerText) ? 'Budget Deficit' : ''}</div>
  `
}
accountMenu.addEventListener('click', acctMenuDisplay)

let yearlyBudget = document.querySelector('#yearly-budget')
let monthlyBudget = document.querySelector('#monthly-budget')
let weeklyBudget = document.querySelector('#weekly-budget')
let dailyBudget = document.querySelector('#daily-budget')

// fxn to update periodic budget as you input monthly budget
const updateBudget = () => {
  if (monthlyBudget.value == '') {
    weeklyBudget.innerHTML = Number(0).toFixed(2)
    yearlyBudget.innerHTML = Number(0).toFixed(2)
    dailyBudget.innerHTML = Number(0).toFixed(2)
  } else {
    weeklyBudget.innerHTML = monthlyBudget.value / 4.345273;
    yearlyBudget.innerHTML = monthlyBudget.value * 12;
    dailyBudget.innerHTML = monthlyBudget.value / 30.421377;
  }
}

monthlyBudget.addEventListener('keyup', () => { updateBudget() })

const addBudget = () => {
  removeIndicator()
  workFieldHeader.classList.remove('hidden')
  menuIndicatorRemoval()
  budgetDisplay.classList.add('indicator')
  expenseEditForm.style.display = 'none'
  editForm.style.display = "none"
  expFormModal.style.display = 'none'
  modal.style.display = 'block'
  budgetHtmlDisplay.style.display = 'block'
  budgetInput.focus()
  budgetDisplayFunction()
}

addBudgetMenu.addEventListener('click', () => {
  addBudget()
  addBudgetMenu.classList.add('menuIndicator')
})

budgetForm.addEventListener('submit', (e) => {
  e.preventDefault();
  budgetSaver()
})

const addExpense = () => {
  workFieldHeader.classList.remove('hidden')
  expenseEditForm.style.display = 'none'
  editForm.style.display = "none";
  budgetHtmlDisplay.style.display = 'none'
  modal.style.display = "block"
  expFormModal.style.display = 'block'
  menuIndicatorRemoval()
  addExpenseMenu.classList.add('menuIndicator')
}

addExpenseMenu.addEventListener('click', () => {
  expenseListDisplay()
  addExpense()
})

budgetLink.addEventListener('click', addBudget)

logoutButton.addEventListener('click', function () {
  loginModal.style.display = 'none'
  welcomePage.style.display = 'none'
  loginPage.style.display = 'block'
})

window.onload = function () {
  acctDisplay()
}