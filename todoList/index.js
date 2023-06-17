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
