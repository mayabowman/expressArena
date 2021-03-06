const express = require('express')
const morgan = require('morgan')
const app = express()
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

app.get('/burgers', (req, res) => {
  res.send('We have juicy burgers!')
})

app.get('/pizza/pepperoni', (req, res) => {
  res.send('Your pizza is on the way!')
})

app.get('/hello', (req, res) => {
  res.status(204).end()
})

app.get('/video', (req, res) => {
  const video = {
    title: 'Cats falling over',
    description: '15 minutes of hilarious fun as cats fall over',
    length: '15.40'
  }
  res.json(video)
})

app.get('/colors', (req, res) => {
  const colors = [
    {
      name: "red",
      rgb: "FF0000"
    },
    {
      name: "green",
      rgb: "00FF00"
    },
    {
      name: "blue",
      rgb: "0000FF"
    }
  ]
  res.json(colors)
})

app.get('/grade', (req, res) => {
  const { mark } = req.query

  if(!mark) {
    return res.status(400).send('Please provide a mark')
  }

  const numericMark = parseFloat(mark)
  if(Number.isNaN(numericMark)) {
    return res.status(400).send('Mark must be a numeric value')
  }

  if(numericMark < 0 || numericMark > 100) {
    return res.status(400).send('Mark must be in range 0 to 100')
  }

  if (numericMark >= 90) {
    return res.send('A')
  }
  
  if(numericMark >= 80) {
    return res.send('B')
  }

  if(numericMark >=70) {
    return res.send('C')
  }

  res.send('F')
})

// // Drill 1

// app.get('/sum', (req, res) => {
//   const { a, b } = req.query

//   if(!a) {
//     return res.status(400).send('a is required')
//   }

//   if(!b) {
//     return res.status(400).send('b is required')
//   }

//   const numA = Number(a)
//   const numB = Number(b)

//   if(Number.isNaN(numA)) {
//     return res.status(400).send('a must be a number')
//   }

//   if(Number.isNaN(numB)) {
//     return res.status(400).send('b must be a number')
//   }

//   const c = numA + numB
//   const responseString = `The sum of ${numA} and ${numB} is ${c}`
//   res.send(responseString)
// })

// // Drill 2

// app.get('/cipher', (req, res) => {
//   const { text, shift } = req.query
  
//   if(!text) {
//     return res.status(400).send('text is required')
//   }

//   if(!shift) {
//     return res.status(400).send('shift is required')
//   }

//   const numShift = Number(shift)

//   if(Number.isNaN(numShift)) {
//     return res.status(400).send('shift must be a number')
//   }

//   const base = 'A'.charCodeAt(0)
//   const cipher = text
//     .toUpperCase()
//     .split('')
//     .map(char => {
//       const code = char.charCodeAt(0)

//       if(code < base || code > (base + 26)) {
//         return char
//       }

//       let diff = code - base
//       diff = diff + numShift
//       diff = diff % 26

//       const shiftedChar = String.fromCharCode(base + diff)
//       return shiftedChar
//     })
//     .join('')
//   res.status(200).send(cipher)
// })

// // Drill 3
// app.get('/lotto', (req, res) => {
//   const { numbers } = req.query

//   if(!numbers) {
//     return res.status(400).send('numbers is required')
//   }

//   if(!Array.isArray(numbers)) {
//     return res.status.apply(400).send('numbers must be an array')
//   }

//   const guesses = numbers
//     .map(n => parseInt(n))
//     .filter(n => !NumberisNaN(n) && (n >= 1 && n <=20))

//   if(guesses.length != 6) {
//     return res.status(400).send('numbers must contain 6 integers between 1 and 20')
//   }

//   const stockNumbers = Array(20).fill(1).map((_, i) => i + 1)

//   const winningNumbers = []
//   for(let i = 0; i < 6; i++) {
//     const ran = Math.floor(Math.random() * stockNumbers.length)
//     winningNumbers.push(stockNumbers[ran])
//     stockNumbers.splice(ran, 1)
//   }

//   let diff = winningNumbers.filger(n => !guesses.includes(n))
//   let responseText

//   switch(diff.length) {
//     case 0:
//       responseText = 'Wow! Unbelievable! You could have won the mega millions!'
//       break
//     case 1:
//       responseText = 'Congratulations! You win $100!'
//       break
//     case 2:
//       responseText = 'Congratulations! You win a free ticket!'
//       break
//     default:
//       responseText = 'Sorry, you lose!'
//   }

//   res.send(responseText)
// })

app.listen(8000, () => {
  console.log('Express server is lestening on port 8000!')
})