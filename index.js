/*==================================================================*/
/*============== 배열 과제 ==========================================*/
/*==================================================================*/

// 1. 돈을 50000원 이상 가진 모든 사람을 배열에 담아 rich변수에 할당해 주세요.
// [{ name: '정훈', money: 50000},{ name: '선혁', money: 60000}]
// Hint: filter
const people = [
  { name: "정훈", money: 50000 },
  { name: "우원", money: 40000 },
  { name: "성준", money: 30000 },
  { name: "수경", money: 10000 },
  { name: "선혁", money: 60000 },
];

// 1. 답
const rich = people.filter((el) => el.money >= 50000);
//console.log(JSON.stringify(rich));

//2. 돈을 50000원 이상 가진 모든 사람의 이름만 배열에 담아 richNames변수에 할당해 주세요.
// ['정훈', '선혁']

// 2. 답
const richNames = people.filter((el) => el.money >= 50000).map((el) => el.name);
//console.log(richNames);

/*==================================================================*/
/*============== 구조분해할당 과제 ==================================*/
/*==================================================================*/

// 1. Object Destructuring
// math, history 값을 구조분해 할당으로 추출
const student = {
  name: "John",
  age: 20,
  grades: {
    math: 95,
    science: 87,
    history: 92,
  },
};

// 2. 답
const { math, history } = student.grades;

/*==================================================================*/
/*============== 투두리스트 과제 ====================================*/
/*==================================================================*/

/*============== DOM selector ======================================*/
const todoInput = document.querySelector(".todo-input");
const todoUl = document.querySelector(".todo-ul");
const todoBtn = document.querySelector(".todo-btn");
//console.log(todoInput);
//console.log(todoList);
//console.log(todoBtn);

/*============== add event  =========================================*/
todoInput.addEventListener("keydown", onPressEnter);
todoBtn.addEventListener("click", onClickTodoBtn);
todoUl.addEventListener("dblclick", onDeleteTodo);

/*============== system variables ==================================*/
let todoContent = "";
let todoList = [];

/*============== user script =======================================*/
function onPressEnter() {
  if (window.event.keyCode === 13 && !!todoInput.value.trim()) {
    onClickTodoBtn();
  }
}

function onClickTodoBtn() {
  todoContent = todoInput.value;

  const newItem = {
    id: todoList.length + 1,
    todo: todoContent,
    isComplete: false,
  };

  todoList = [...todoList, newItem];
  listUiUpdate(newItem);
}

function listUiUpdate(newItem) {
  const newSpan = document.createElement("span");
  const newLi = document.createElement("li");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", (event) => {
    newLi.classList.toggle("complete");
    newBtn.classList.toggle("btn-complete");

    todoList = todoList.map((el) => {
      // console.log(el);
      return el.id === Number(event.target.id)
        ? { ...el, isComplete: !el.isComplete }
        : el;
    });
  });

  newBtn.id = newItem.id;
  newSpan.innerText = newItem.todo;

  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoUl.appendChild(newLi);
  todoInput.value = "";
}

function onDeleteTodo(event) {
  // console.dir(event.target.firstChild.id);
  todoList.filter((el) => {
    el.id !== Number(event.target.firstChild.id);
  });
  event.target.remove();
}

// 시도하지 않아 후회로 남는것! ㅜ,.ㅜ

/**
 * 실패의 의미
 * 1. 새로운 것에 도전했다는 증거
 * 2. 후회없는 삶을 살았다 증거
 * 3. 한계를 깨기위한 노력을 했다는 증거
 */

/**
 *실패를 대하는 태도 -> 실패를 긍정적으로 받아들이는 태도
 * 1. 고작 몇번의 부딪힘
 * 2. 그만큼 의미있는 일
 * 3. 실패에서 배우기
 *   3-1. 실패 리포트 -> 도전 이력서
 */
