// let a,b,c;
// b=[[1,2,3],[4,5,6],[7,8,9]];
// c=[[1,2,3],[4,5,6],[7,8,9]];
// a=[[]];
// for(let i=0;i<3;i++){
//     for(let j=0;j<3;j++){
//         if(i==j){
//             console.log (a[i][j]=b[i][j]+c[i][j]);
//         }
//          else{
//              console.log(a[i][j]=b[i][j]);
//          }
//     }
// }

function diagonalSums(matrix) {
 
    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum + ' ' + secondarySum);
}
 
diagonalSums([[20, 40], [10, 60]]);
