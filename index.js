//1.추가버튼을 클릭하면
//2 입력값을 가져오고(input.value)
//3 새로운 할일 <p>를 만들고
//4.만든 <p> 내용물에 입력값을 넣어주고
//5.#할일들 에 새로운 <p>를 자식으로 넣어주기

//1. 자바스크립트가 id 들을 가져와야됨. cosnt 변수선언해서 저장함.

const button = document.querySelector('#추가버튼');
const input = document.querySelector('#입력창');
const todos = document.querySelector('#할일들');
const reset = document.querySelector('#초기화');
const newTodos = []; //배열, 새로운 할일들을 담아놓음

//2. 이벤트가 발생했을때 처리하겠다. 클릭했을때 할 행동을 정의함.
//   목표)버튼을 클릭했을때 리스트를 추가하고싶다.
//   input에 값을넣고 클릭했을때 그 값을 할일에 붙인다.

button.addEventListener('click', () => {
  // 3. input에 있는 입력값들 가져오기, input.value를 변수 저장함.
  const value = input.value;

  //4.입력값을 바탕으로 새로운 할일을 만들기
  //<p> 태그를 만듬, 할일을 p태그에 넣어놨기때문

  const newTodo = document.createElement('p');

  //5.새로운 할일을 만든다.
  newTodos.push(newTodo);
  //[빨래하기,밥먹기...]
  //newTodos에 newTodo를 넣어줌

  newTodo.innerText = value;

  //7.만든 value 값을 innerText에 넣어줘야됨.

  todos.appendChild(newTodo); //6. p태그를 "할일"에 붙임
  input.value = ''; //8. input 추가후 입력창 비어지도록 만들기

  //css line-through
  newTodo.addEventListener('click', () => {
    //조건문
    //1.done 이없으면 done 추가
    //2. 그게아니면 done을 없앰
    if (newTodo.className !== 'done') {
      newTodo.className = 'done';
    } else {
      newTodo.className = '';
    }
  });
});

// 기존의 할일들을 지움
// 지우려면 할일들을 '어딘가에'담아둬야함

reset.addEventListener('click', () => {
  //[빨래하기,밥먹기,청소하기]
  //newTodos 반복문을 돌면서 newTodo를꺼냄
  newTodos.forEach((newTodo) => {
    todos.removeChild(newTodo); //todos는 newTodos의 부모, todos.appendChild(newTodo);
  });
});
