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
console.log(JSON.stringify(rich));

//2. 돈을 50000원 이상 가진 모든 사람의 이름만 배열에 담아 richNames변수에 할당해 주세요.
// ['정훈', '선혁']

// 2. 답
const richNames = people.filter((el) => el.money >= 50000).map((el) => el.name);
console.log(richNames);

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

/*============== system variables ==================================*/
let todoContent = "";
let todoList = [];

/*============== user script =======================================*/
/** 2023.06.16 KSH
 * todoInput.onkeydown
 * [description] : 할 일을 적고 엔터키를 눌렀을 때, 할 일 추가
 * [params] : none
 */
function onPressEnter() {
  //console.log(window.event.keyCode);
  // 1. todo값 가져오기
  todoContent = todoInput.value;
  // 2. 할 일을 적고 엔터키를 눌렀을 때, 할 일 추가
  if (window.event.keyCode === 13 && !!todoContent.trim()) {
    createTodo();
    addTodo();
  }
}

/** 2023.06.18 KSH
 * todo-btn.onClick
 * [description] : 할 일을 적고 Add 버튼 클릭 시, 할 일 추가
 * [params] : none
 */
function onClickTodoBtn() {
  // 1. todo값 가져오기
  todoContent = todoInput.value;
  // 2. 할 일을 적고 엔터키를 눌렀을 때, 할 일 추가
  if (todoContent.trim()) {
    createTodo();
    addTodo();
  }
}

/** 2023.06.18 KSH
 * createTodo
 * [description] : 새로운 할 일 객체 만들기
 * [params] : none
 */
function createTodo() {
  // 1. new Todo 객체 생성
  const newItem = {
    id: todoList.length + 1,
    todo: todoContent,
    isComplete: false,
  };
  // 2. todoList 배열에 newItem 추가
  todoList = [...todoList, newItem];
}

/** 2023.06.16 KSH
 * addTodo
 * [description] : 할 일 추가
 * [params] : none
 */
function addTodo() {
  // 1. span, li tag 생성
  const newSpan = document.createElement("span");
  const newLi = document.createElement("li");
  const newBtn = document.createElement("button");
  // 2. btn 태그에 클릭 이벤트 연결
  newBtn.addEventListener("click", () => {
    //console.log('btn click')
    newLi.classList.toggle("complete");
    newBtn.classList.toggle("btn-complete");
  });
  // 3. span tag innerText에 할 일 값 할당
  newSpan.innerText = todoContent;
  // 4. li tag에 span, button tag 자식 추가
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  // 5. ul tag에 span tag 자식 추가
  todoUl.appendChild(newLi);
  // 6. input value 초기화
  todoInput.value = "";
}
