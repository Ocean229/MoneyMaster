const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const form = document.getElementById('expense-form');
const amountInput = document.getElementById('amount');
const categoryInput = document.getElementById('category');
const noteInput = document.getElementById('note');
const dateInput = document.getElementById('date');

const expenseTableBody = document.querySelector('#expense-table tbody');

function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function renderExpenses() {
  expenseTableBody.innerHTML = '';
  expenses.forEach((expense, index) => {
    const tr = document.createElement('tr');

    const tdIndex = document.createElement('td');
    tdIndex.textContent = index + 1;

    const tdAmount = document.createElement('td');
    tdAmount.textContent = `$${parseFloat(expense.amount).toFixed(2)}`;

    const tdCategory = document.createElement('td');
    tdCategory.textContent = expense.category;

    const tdNote = document.createElement('td');
    tdNote.textContent = expense.note || "No note";

    const tdDate = document.createElement('td');
    tdDate.textContent = expense.date;

    tr.appendChild(tdIndex);
    tr.appendChild(tdAmount);
    tr.appendChild(tdCategory);
    tr.appendChild(tdNote);
    tr.appendChild(tdDate);

    expenseTableBody.appendChild(tr);
  });
}

function addExpense(event) {
  event.preventDefault();

  const amount = amountInput.value.trim();
  const category = categoryInput.value.trim();
  const note = noteInput.value.trim();
  const date = dateInput.value;

  if (!amount || !category || !date) {
    alert("Please fill in amount, category, and date.");
    return;
  }

  expenses.push({ amount, category, note, date });
  saveExpenses();
  renderExpenses();

  form.reset();
  amountInput.focus();
}

// 绑定表单提交事件
form.addEven
