const score = document.querySelector('.message')
const token = document.querySelectorAll('.board div')
const redTally = document.querySelector('.red-scoring')
const yellowTally = document.querySelector('.yellow-scoring')
const restartBtn = document.querySelector('.restart-game')
let tallyRed = 0
let tallyYellow = 0
let player = 'red'
const winningProb = [
  [0, 1, 2, 3],
  [0, 7, 14, 21],
  [0, 8, 16, 24],
  [1, 2, 3, 4],
  [1, 8, 15, 22],
  [1, 9, 17, 25],
  [2, 3, 4, 5],
  [2, 9, 16, 23],
  [2, 10, 18, 26],
  [3, 4, 5, 6],
  [3, 10, 17, 24],
  [4, 10, 16, 22],
  [4, 11, 18, 25],
  [5, 4, 3, 2],
  [5, 11, 17, 23],
  [5, 12, 19, 26],
  [6, 5, 4, 3],
  [6, 12, 18, 24],
  [6, 13, 20, 27],
  [7, 8, 9, 10],
  [7, 14, 21, 28],
  [7, 15, 23, 31],
  [8, 9, 10, 11],
  [8, 15, 22, 29],
  [8, 16, 24, 32],
  [9, 7, 25, 33],
  [9, 16, 23, 30],
  [10, 17, 24, 31],
  [11, 7, 23, 29],
  [11, 18, 25, 32],
  [12, 11, 10, 9],
  [12, 18, 24, 30],
  [12, 19, 26, 33],
  [13, 12, 11, 10],
  [13, 19, 25, 31],
  [13, 20, 27, 34],
  [14, 15, 16, 17],
  [14, 22, 30, 38],
  [15, 16, 17, 18],
  [19, 18, 17, 16],
  [20, 19, 18, 17],
  [20, 26, 32, 38],
  [21, 15, 9, 3],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [26, 25, 24, 23],
  [27, 19, 11, 3],
  [27, 26, 25, 24],
  [28, 22, 16, 10],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [33, 32, 31, 30],
  [34, 26, 18, 10],
  [34, 33, 32, 31],
  [35, 28, 21, 14],
  [35, 29, 23, 17],
  [35, 36, 37, 38],
  [36, 29, 22, 15],
  [36, 30, 24, 18],
  [36, 37, 38, 39],
  [37, 30, 23, 16],
  [37, 31, 25, 19],
  [38, 31, 24, 17],
  [39, 31, 23, 15],
  [39, 32, 25, 18],
  [40, 32, 24, 16],
  [40, 33, 26, 19],
  [40, 39, 38, 37],
  [41, 33, 25, 17],
  [41, 34, 27, 20],
  [41, 40, 39, 38]
]

// functions

const changeTurns = () => {
  for (let i = 0; i < token.length; i++) {
    token[i].addEventListener('click', function () {
      if (
        !token[i].classList.contains('lowerRow') &&
        token[i + 7].classList.contains('lowerRow')
      ) {
        if (player === 'red') {
          player = 'yellow'
          score.innerHTML = "Yellow's turn"
          token[i].classList.add('lowerRow')
          token[i].classList.add('red')
          token[i].style.backgroundColor = 'red'
        } else if ((player = 'yellow')) {
          player = 'red'
          score.innerHTML = "Red's turn"
          token[i].classList.add('lowerRow')
          token[i].classList.add('yellow')
          token[i].style.backgroundColor = 'yellow'
        }
      } else {
        score.innerHTML = 'Did you pick the correct spot?'
      }
      for (let a = 0; a < winningProb.length; a++) {
        const zero = token[winningProb[a][0]]
        const one = token[winningProb[a][1]]
        const two = token[winningProb[a][2]]
        const three = token[winningProb[a][3]]
        if (
          zero.style.backgroundColor === 'red' &&
          one.style.backgroundColor === 'red' &&
          two.style.backgroundColor === 'red' &&
          three.style.backgroundColor === 'red'
        ) {
          score.innerHTML = 'Red wins!'
          tallyRed += 1
          redTally.innerHTML = tallyRed
        } else if (
          zero.style.backgroundColor === 'yellow' &&
          one.style.backgroundColor === 'yellow' &&
          two.style.backgroundColor === 'yellow' &&
          three.style.backgroundColor === 'yellow'
        ) {
          score.innerHTML = 'Yellow wins!'
          tallyYellow += 1
          yellowTally.innerText = tallyYellow
        }
      }
      restartBtn.addEventListener('click', function () {
        token[i].classList.remove('red')
        token[i].classList.remove('yellow')
        token[i].classList.remove('lowerRow')
        token[i].style.backgroundColor = 'white'

        console.log(token[i].classList)
      })
    })
  }
}

changeTurns()
