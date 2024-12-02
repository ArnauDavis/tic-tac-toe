

//example values of squares
let a1 ='o' ;
let a2 ='o';
let a3 ='o'; 

//array values needed to win
const player1Win = ['o','o','o']
const player2Win = ['x','x','x']

//possible win routes
const a1Down = [a1, b1, c1]
const a2Down = [a2,b2,c3]
const a3Down = [a3,b3,c3]

const a1Across = [a1,a2,a3]
const b1Across = [b1,b2,b3]
const c1Across = [c1,c2,c3]

const a1Diagonal = [a1,b2,c3]
const c1Diagonal = [c3,b2,a3]


//single array with all possible routes
let winnerArray = [a1Down, a2Down, a3Down, a1Across, b1Across, c1Across, a1Diagonal, c1Diagonal]



let player1Won = winnerArray.some(innerArray => JSON.stringify(innerArray) === JSON.stringify(player1Win))
let player2Won = winnerArray.some(innerArray => JSON.stringify(innerArray) === JSON.stringify(player2Win)) 


console.log(player1Won)
//should return true because a1, a2, & a3 == 'o'

console.log(player2Won)
//should return false because the player2win does not exist yet

