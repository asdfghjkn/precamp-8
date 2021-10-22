const classmates =["철수", "영희","훈희"]
                   
undefined
classmates
//(3) ['철수', '영희', '훈희']
classmates[0]
//'철수'
classmates[1]
//'영희'
classmates includes("훈희")
//VM382:1 Uncaught SyntaxError: Unexpected identifier
classmates includes("맹구")
//VM438:1 Uncaught SyntaxError: Unexpected identifier
classmates. includes ("맹구")
//false
classmates lenth
//VM581:1 Uncaught SyntaxError: Unexpected identifier
classmates.length
//3
