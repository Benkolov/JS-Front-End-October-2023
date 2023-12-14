function addItem() {
    const inputElement = document.querySelector('#newItemText');

    const newListItem = document.createElement('li');
    newListItem.textContent = inputElement.value;

    const ulList = document.querySelector('#items');
    ulList.appendChild(newListItem);

    console.log(inputElement.value);
}