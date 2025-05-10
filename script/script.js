let todo = JSON.parse(localStorage.getItem("todoList"));

let todoList = todo || [];

displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let todoDate = dateElement.value;

  if(todoItem == ''){
    alert("Enter Task To Do!");
  }else if(todoDate == ''){
    alert("Enter To Do Date!");
  } else{
    todoList.push({item:todoItem,dueDate:todoDate});
    displayItems();
    inputElement.value='';
    dateElement.value='';
  }
}


function deleteItem(itemIndex){
  todoList.splice(itemIndex,1);
  displayItems();
}

function displayItems(){

  let containerElement = document.querySelector('.todo-container');
  let newHTML = '';
  for(i=0; i<todoList.length; i++){
    let {item , dueDate} = todoList[i];
  newHTML += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button class="btn-delete" onclick="deleteItem(${i})
      ">Delete</button>
  `;
  }
  localStorage.setItem("todoList", JSON.stringify(todoList));
  containerElement.innerHTML = newHTML;
}