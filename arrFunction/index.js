// 1. 돈을 50000원 이상 가진 모든 사람을 배열에 담아 rich변수에 할당해 주세요.
// [{ name: '정훈', money: 50000},{ name: '선혁', money: 60000}]
// Hint: filter
const people = [
    { name: '정훈', money: 50000},
    { name: '우원', money: 40000},
    { name: '성준', money: 30000},
    { name: '수경', money: 10000},
    { name: '선혁', money: 60000},
];

// 1. 답
const rich = people.filter(el => el.money >= 50000);
console.log(JSON.stringify(rich));


//2. 돈을 50000원 이상 가진 모든 사람의 이름만 배열에 담아 richNames변수에 할당해 주세요.
// ['정훈', '선혁']

// 2. 답
const richNames = people.filter(el => el.money >= 50000).map(el => el.name);
console.log(richNames);


