// Assign values to each div
const a1 = document.querySelector('#a1').innerText
const a2 = document.querySelector('#a2').innerText
const a3 = document.querySelector('#a3').innerText
const b1 = document.querySelector('#b1').innerText
const b2 = document.querySelector('#b2').innerText
const b3 = document.querySelector('#b3').innerText
const c1 = document.querySelector('#c1').innerText
const c2 = document.querySelector('#c2').innerText
const c3 = document.querySelector('#c3').innerText

//misc values used





//defining buttons
let startButton = document.querySelector('.glowing-btn')
let resetBtn = document.querySelector('.resetButton')

//adding event listeners to buttons
startButton.addEventListener('click',startGame)
resetBtn.addEventListener('click',resetGame)


//functions to start or reset game

function startGame(){
    startButton.style.display='none'
    resetBtn.style.display='block'
}

function resetGame(){
    startButton.style.display='block'
    resetBtn.style.display='none'
    count = 0
    gotcha.forEach(div =>{
        div.innerText = ''
        div.style.backgroundColor = '#003366' 
    })

}

//array values needed to win
const player1Win = ['O','O','O']
const player2Win = ['X','X','X']

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

//which ever returns true wins(thanks Nic for the suggestion!)
let player1Won = winnerArray.some(innerArray => JSON.stringify(innerArray) === JSON.stringify(player1Win))
let player2Won = winnerArray.some(innerArray => JSON.stringify(innerArray) === JSON.stringify(player2Win)) 


//special variable 
let count = 0

//selecting every div marked as a player space
let gotcha = document.querySelectorAll('.playerSpace')

//adding event listeners to each div to trigger function
gotcha.forEach(space =>{
    space.addEventListener('click',function(element){
        if(startButton.style.display !== 'none'){

        }else{
        if(element.target.innerText == ''){
            count+=1
            //here playerspace changes based on turn
            if(count % 2 == 0){
                element.target.innerText = 'X'
                element.target.style.color = '#ffffe0'
                element.target.style.backgroundColor = '#71eeb8'
            }else{
                element.target.innerText = 'O'
                element.target.style.color = '#71eeb8'
                element.target.style.backgroundColor = '#ffffe0'

            }
        }//if checking if space is empty
    }//else to trigger only if start button is clicked
    })//event Listener
})//for Each




