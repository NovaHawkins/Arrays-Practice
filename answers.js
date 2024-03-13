// Answer 1 =======================================================\
let array1 = [5, 10, 7, 2, 1]

function secondLargest(A){
  const newArray1 = A.sort((a,b) => b-a)
  const secLarg = newArray1[1]
  console.log(`Answer 1: The second largest number in [${A}] is ${secLarg}.`)
} secondLargest(array1)
// ================================================================/

// Answer 2 =======================================================\
//let input1 = prompt("Enter a string of numbers.")
let input1 = "12321"

function checkIfPalindrome(B){
  const stringRev = B.split(' ').reverse().join('')
  if (B == stringRev){
    console.log(`Answer 2: '${B}' is a palindrome.`)
  } else {
    console.log(`Answer 2: '${B}' is not a palindrome.`)
  }
} checkIfPalindrome(input1)
// ================================================================/


// Answer 3 =======================================================\
//let input2 = prompt("Write a sentence.")
let input2 = "Gallinger is a big dingus."

function longestWord(C){
  const newArray2 = C.split(' ')
  const sort = newArray2.sort((a,b) => (b.length - a.length))
  const longest = sort[0]

  sort[0].trim('.').toLowerCase()
  console.log(`Answer 3: '${longest}' is the longest word in the sentence, '${C}'`)
} longestWord(input2)
// ================================================================/


// Answer 4 =======================================================\
//let input3 = prompt("Enter a word.")
let input3 = "Schwartzchild"

function wordReverse(D){
  const newArray3 = D.split('')
  const arrayRev = newArray3.reverse()
  newInput1 = arrayRev.join('')
  console.log(`Answer 4: '${D}' in reverse is '${newInput1}'.`)
} wordReverse(input3)
// ================================================================/


// Answer 5 =======================================================\
//let input4 = prompt("Enter a sentence or phrase.")
let input4 = "I wonder what life is like outside"

function wordCaps(E){
  var newArray4 = E.split(' ') // creates a new array from input4 (each word is split by whitespace)
  for (i=0; i<newArray4.length; i++){ // iterates however many times is the length of newArray4
    var subArray = newArray4[i].split('') // creates a new array for each word
    subArray[0].toUpperCase() // makes the first object of each array upper case
    var upperCase = subArray.join('') // turns each word array into separate strings
    newArray4.push(upperCase) // pushes the new words into newArray4
  }
  const newInput2 = newArray4.join(" ") // turns newArray4 into a string (Each word separated by spaces)
  console.log(`Answer 5: '${E}' becomes '${newInput2}'`)
} wordCaps(input4)
// ================================================================/


// Answer 6 =======================================================\
let Array2 = [1, 2, 2, 3, 4, 4, 5]

function removeDupes(F){
  const newArray5 = F.sort((a,b) => (a-b))
  for (i=0; i<newArray5.length; i++){
    const j = i+1
    const secondArray = ''
    if(newArray5[i].value == newArray5[j].value){
      secondArray.push(newArray5[j])
    } 
    console.log(`Answer 6: ${secondArray}`)
  }
} removeDupes(Array2)
// ================================================================/