/*============== DOM selector ======================================*/
const todoInput = document.querySelector('.todo-input');
const todoList = document.querySelector('.todo-list');
//console.log(todoInput);
//console.log(todoList);

/*============== add event  =========================================*/
todoInput.addEventListener('keydown', onPressEnter);

/*============== system variables ==================================*/
let todoContent = '';

/*============== user script =======================================*/
/** 2023.06.16 KSH
 * todoInput.onkeydown
 * [description] : 할 일을 적고 엔터키를 눌렀을 때, 할 일 추가
 * [params] : none
 */
function onPressEnter() {
    //1. 엔터키 코드 확인

    //2. 할 일 값 가져오기
    //console.log(todoInput.value);
    todoContent = todoInput.value;
    //console.log(window.event.keyCode);
    //3. 빈 값이 아닐경우 할 일 추가
    if(window.event.keyCode === 13 && !!todoContent) {
        addTodo();
    }
}

/** 2023.06.16 KSH
 * addTodo
 * [description] : 할 일 추가
 * [params] : none
 */
function addTodo() {
    //1. span, li tag 생성
    const newSpan = document.createElement('span');
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    //2. btn 태그에 클릭 이벤트 연결
    newBtn.addEventListener('click', () => {
        //console.log('btn click')
        newLi.classList.toggle('complete');
        newBtn.classList.toggle('btn-complete');
    });
    //3. li 태그에 더블 클릭 이벤트 연결
    newLi.addEventListener('dblclick', () => {
        //console.log('li dblclick')
        newLi.remove();
    });
    //4. span tag innerText에 할 일 값 할당
    newSpan.innerText = todoContent;
    //5. li tag에 span, button tag 자식 추가
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    //6. ul tag에 span tag 자식 추가
    todoList.appendChild(newLi);
    //7. input value 비우기
    todoInput.value = '';
}
