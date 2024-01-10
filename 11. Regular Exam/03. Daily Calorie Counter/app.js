const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

const endpoints = {
    update: (id) => `${BASE_URL}/${id}`,
    delete: (id) => `${BASE_URL}/${id}`,
};

const foodElement = document.getElementById("food");
const timeElement = document.getElementById("time");
const caloriesElement = document.getElementById("calories");

const addMealBtn = document.getElementById("add-meal");
const editMealBtn = document.getElementById("edit-meal");
const loadMealBtn = document.getElementById("load-meals");
const deleteBTn = document.querySelector(".delete-meal")


function attachEvents() {
    loadBtn.addEventListener('click', loadMeals);
    addBtn.addEventListener('click', addMeal);
    editBtn.addEventListener('click', editMeal);
}
function loadMeals() {
    fetch(BASE_URL)
        .then(res => res.json())
        .then(meals => {
            // Code to display meals
        });
}

function addMeal() {
    const mealData = {
        food: foodElement.value,
        time: timeElement.value,
        calories: caloriesElement.value,
    };

    fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mealData)
    }).then(loadMeals);
}

function editMeal(mealId) {
    const mealData = {
        food: foodElement.value,
        time: timeElement.value,
        calories: caloriesElement.value,
    };

    fetch(endpoints.update(mealId), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(mealData)
    }).then(loadMeals);
}

// function deleteMeal(mealId) {
//     fetch(endpoints.delete(mealId), {
//         method: 'DELETE'
//     }).then(loadMeals);
// }

attachEvents();