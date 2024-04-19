window.addEventListener("load", solve);

function solve() {
  let type = document.getElementById('type');
  let age = document.getElementById('age');
  let gender = document.getElementById('gender');
  let adoptBtn = document.getElementById('adopt-btn');
  let adoptionInfo = document.getElementById('adoption-info');
  let adoptedList = document.getElementById('adopted-list');

  adoptBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (type.value !== '' && age.value !== '' && gender.value !== '') {
      let li = document.createElement('li');
      let article = document.createElement('article');
      let petP = document.createElement('p');
      petP.textContent = `Pet: ${type.value}`;
      let genderP = document.createElement('p');
      genderP.textContent = `Gender: ${gender.value}`;
      let ageP = document.createElement('p');
      ageP.textContent = `Age: ${age.value}`;
      article.appendChild(petP);
      article.appendChild(genderP);
      article.appendChild(ageP);
      li.appendChild(article);
      let div = document.createElement('div');
      div.className = 'buttons';
      let editBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';
      let doneBtn = document.createElement('button');
      doneBtn.className = 'Done-btn';
      doneBtn.textContent = 'Done';
      div.appendChild(editBtn);
      div.appendChild(doneBtn);
      li.appendChild(div);
      adoptionInfo.appendChild(li);

      editBtn.addEventListener('click', function() {
        type.value = petP.textContent.split(': ')[1];
        age.value = ageP.textContent.split(': ')[1];
        gender.value = genderP.textContent.split(': ')[1];
        adoptionInfo.removeChild(li);
      });

      doneBtn.addEventListener('click', function() {
        adoptionInfo.removeChild(li);
        li.removeChild(div);
        let clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear';
        li.appendChild(clearBtn);
        adoptedList.appendChild(li);

        clearBtn.addEventListener('click', function() {
          adoptedList.removeChild(li);
        });
      });

      type.value = '';
      age.value = '';
      gender.value = '';
    }
  });
}
