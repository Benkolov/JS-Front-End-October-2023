const api = 'http://localhost:3030/jsonstore/records';
// Load Records
document.getElementById('load-records').addEventListener('click', async () => {
  const response = await fetch(api);
  const records = await response.json();
  const list = document.getElementById('list');
  list.innerHTML = '';
  records.forEach(record => {
    const li = document.createElement('li');
    li.className = 'record';
    li.innerHTML = `
      <div class="info">
        <p>${record.name}</p>
        <p>${record.steps}</p>
        <p>${record.date}</p>
      </div>
      <div class="btn-wrapper">
        <button class="change-btn">Change</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;
    list.appendChild(li);
  });
});

// Add a Record
document.getElementById('add-record').addEventListener('click', async () => {
  const name = document.getElementById('p-name').value;
  const steps = document.getElementById('steps').value;
  const calories = document.getElementById('calories').value;
  const response = await fetch(api, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, steps, calories })
  });
  if (response.ok) {
    document.getElementById('p-name').value = '';
    document.getElementById('steps').value = '';
    document.getElementById('calories').value = '';
    document.getElementById('load-records').click();
  }
});

// Edit a Record
let currentRecord = null;
document.getElementById('list').addEventListener('click', async (event) => {
  if (event.target.className === 'change-btn') {
    const li = event.target.closest('li');
    const name = li.querySelector('.info p:nth-child(1)').textContent;
    const steps = li.querySelector('.info p:nth-child(2)').textContent;
    const calories = li.querySelector('.info p:nth-child(3)').textContent;
    document.getElementById('p-name').value = name;
    document.getElementById('steps').value = steps;
    document.getElementById('calories').value = calories;
    currentRecord = li;
    document.getElementById('add-record').disabled = true;
    document.getElementById('edit-record').disabled = false;
  } else if (event.target.className === 'delete-btn') {
    const li = event.target.closest('li');
    const id = li.dataset.id;
    const response = await fetch(`${api}/${id}`, { method: 'DELETE' });
    if (response.ok) {
      document.getElementById('load-records').click();
    }
  }
});

// Update a Record
document.getElementById('edit-record').addEventListener('click', async () => {
  if (currentRecord) {
    const name = document.getElementById('p-name').value;
    const steps = document.getElementById('steps').value;
    const calories = document.getElementById('calories').value;
    const id = currentRecord.dataset.id;
    const response = await fetch(`${api}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, steps, calories })
    });
    if (response.ok) {
      document.getElementById('p-name').value = '';
      document.getElementById('steps').value = '';
      document.getElementById('calories').value = '';
      document.getElementById('add-record').disabled = false;
      document.getElementById('edit-record').disabled = true;
      document.getElementById('load-records').click();
    }
  }
});
