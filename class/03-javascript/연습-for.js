for(let i=0 ;  i<5; i=i+1) {
    console.log("hello!!!")
}
5VM1376:2 hello!!!
undefined
const  classmates=["철수","영희","훈이"]
undefined
for(let i=0; i<3; i=i+1) {
  console.log(classmates [0]+"입니다")
}
3VM1681:2 철수입니다
undefined
for(let i=0; i<3; i=i+1) {
  console.log(classmates [i]+"입니다")
}
//VM1696:2 철수입니다
//VM1696:2 영희입니다
//VM1696:2 훈이입니다
undefined
for(let i=0; i<classmates.length; i=i+1) {
  console.log(classmates [i]+"입니다")
}
VM1724:2 철수입니다
VM1724:2 영희입니다
VM1724:2 훈이입니다
undefined
for(let i=0; i<classmates.length; i++) {
  console.log(classmates [i]+"입니다")
}
//VM1735:2 철수입니다
//VM1735:2 영희입니다
//VM1735:2 훈이입니다
undefined


const fruits = [
    { number: 1, title: "레드향" },
    { number: 2, title: "샤인머스켓" },
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" }
]
undefined
for(let i=0; i<fruits.length i=i+1) {
   console.log(fruits[i].number+" "+fruits[i].title)
}
VM2319:1 Uncaught SyntaxError: Unexpected identifier
for(let i=0; i<fruits.length; i=i+1) {
   console.log(fruits[i].number+" "+fruits[i].title)
}
VM2323:2 1 레드향
VM2323:2 2 샤인머스켓
VM2323:2 3 산청딸기
VM2323:2 4 한라봉
VM2323:2 5 사과
VM2323:2 6 애플망고
VM2323:2 7 딸기
VM2323:2 8 천혜향
VM2323:2 9 과일선물세트
VM2323:2 10 귤
undefined