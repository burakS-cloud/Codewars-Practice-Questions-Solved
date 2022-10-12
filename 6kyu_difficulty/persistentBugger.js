// DESCRIPTION:
// Write a function, persistence, that takes in a positive parameter num and returns its
//  multiplicative persistence, which is the number of times you must multiply the digits
//   in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//This is the perfect and most comprehensive solution for me, which reminded me I need to
//work more with reduce method.

function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}

//Here is the solution that I was trying to implement, got close but couldn't make it 100% right:

// function persistence(num) {
//     let res = 1;
//     let newRes = 1;
//     let persistance = num.toString().length === 1 ? 0 : 1;
//     let digitsArr = num.toString().split('')

//     for(let i = 0; i < digitsArr.length; i++){
//           res *= +digitsArr[i]
//      }

//       while(res > 9){
//         persistance++;
//         for(let i = 0; i < res.toString().split('').length; i++){
//             newRes *= +res.toString().split('')[i]
//         }
//         if(newRes > 9){
//           res = newRes;
//           newRes = 1;
//           persistance++;
//         }
//         if(newRes < 10){
//           break;
//         }
//          console.log("newRes:",newRes)
//         console.log("res:",res)
//       }
//       return persistance;
//     }
