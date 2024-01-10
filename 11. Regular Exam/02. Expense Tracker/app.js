window.addEventListener("load", solve);

function solve() {

    const previewListElement = document.getElementById("preview-list");

    const expensesListElement = document.getElementById("expenses-list");

    const typeFoodElement = document.getElementById("expense");
    const amountElement = document.getElementById("amount");
    const dateElement = document.getElementById("date");

    const addButtonElement = document.getElementById("add-btn")

    addButtonElement.addEventListener("click",(e) => {
        e.preventDefault();

        if (!typeFoodElement.value || !amountElement.value || !dateElement.value) {
            return;
        }

        const liElement = document.createElement("li");
        liElement.className = "expense-item";

        const articleElement = document.createElement("article");

        const typeFoodParagraphElement = document.createElement("p");
        typeFoodParagraphElement.textContent = `Type: ${typeFoodElement.value}`;

        const amountParagraphElement = document.createElement("p");
        amountParagraphElement.textContent = `Amount: ${amountElement.value}$`;

        const dateParagraphElement = document.createElement("p");
        dateParagraphElement.textContent = `Date: ${dateElement.value}`;

        const divElement = document.createElement("div");
        divElement.className = "buttons";

        const editButtonElement = document.createElement("button");
        editButtonElement.classList.add('btn');
        editButtonElement.classList.add('edit');
        editButtonElement.textContent = 'edit';

        const okButtonElement = document.createElement("button");
        okButtonElement.classList.add('btn');
        okButtonElement.classList.add('ok');
        okButtonElement.textContent = 'ok';

        articleElement.appendChild(typeFoodParagraphElement);
        articleElement.appendChild(amountParagraphElement);
        articleElement.appendChild(dateParagraphElement);

        divElement.appendChild(editButtonElement);
        divElement.appendChild(okButtonElement);

        liElement.appendChild(articleElement);
        liElement.appendChild(divElement);

        previewListElement.appendChild(liElement);

        clearForm();

        addButtonElement.setAttribute('disabled', 'disabled');

        editButtonElement.addEventListener('click', (a) => {
            const paragraphElements = previewListElement.querySelectorAll('article p');

            const [typeFoodPElement, amountPElement, datePElement] = Array.from(paragraphElements);

            typeFoodElement.value = typeFoodPElement.textContent.split(": ")[1];
            amountElement.value = amountPElement.textContent.split(": ")[1].replace("$", '');
            dateElement.value = datePElement.textContent.split(": ")[1];

            previewListElement.innerHTML = '';

            addButtonElement.removeAttribute('disabled');
        });

        okButtonElement.addEventListener('click', (a) => {
            editButtonElement.remove();
            okButtonElement.remove();

            expensesListElement.appendChild(liElement);

            previewListElement.innerHTML = '';

            addButtonElement.removeAttribute('disabled');
        });

        const deleteButtonElement = document.querySelector(".btn.delete")

        deleteButtonElement.addEventListener('click', (a) => {
            location.reload();
        });

    });

    function clearForm() {
        typeFoodElement.value = '';
        amountElement.value = '';
        dateElement.value = '';
    }
}