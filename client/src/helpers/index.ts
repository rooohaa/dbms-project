import { IPlayer } from '../types'

export const getUniqueId = (): number => {
   return Math.round(new Date().getTime() / (Math.random() * 1000))
}

export const getScoreData = (list: IPlayer[]) => {
   const allScores: number[] = []

   for (let el of list) {
      allScores.push(el.PLAYER_OVERALL_SCORE)
   }

   const scoresRange = countScoresRange(allScores)

   const scoresData = {
      labels: ['50 - 60', '60 - 70', '70 - 80', '80 - 90', '90 - 100'],
      datasets: [
         {
            label: 'Players count on score range',
            data: scoresRange,
            backgroundColor: [
               'rgba(255, 99, 132, 0.2)',
               'rgba(255, 159, 64, 0.2)',
               'rgba(255, 205, 86, 0.2)',
               'rgba(75, 192, 192, 0.2)',
               'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
               'rgb(255, 99, 132)',
               'rgb(255, 159, 64)',
               'rgb(255, 205, 86)',
               'rgb(75, 192, 192)',
               'rgb(54, 162, 235)',
            ],
            borderWidth: 1,
         },
      ],
   }

   return scoresData
}

export const getAgeData = (list: IPlayer[]) => {
   const allAges: number[] = []

   for (let item of list) {
      allAges.push(item.PLAYER_AGE)
   }

   const agesData = {
      labels: ['25 - 30', '30 - 35', '35 - 40', '40 - 45'],
      datasets: [
         {
            label: 'Players count on age range',
            data: getAgesRange(allAges),
            fill: false,
            borderColor: 'rgb(120, 192, 192)',
            tension: 0.1,
         },
      ],
   }

   return agesData
}

export const getNationalityData = (list: IPlayer[]) => {
   const mock: string[] = []
   const initial: string[] = ['Brazil', 'England', 'Italy', 'Germany', 'France']
   const nationalities: number[] = []

   list.forEach((player) => {
      const nat = player.PLAYER_NATIONALITY
      if (
         nat === 'Germany' ||
         nat === 'Brazil' ||
         nat === 'England' ||
         nat === 'Italy' ||
         nat === 'France'
      ) {
         mock.push(nat)
      }
   })

   initial.forEach((nat) => {
      nationalities.push(countNationalities(mock, nat))
   })

   const nationalityData = {
      labels: ['Brazil', 'England', 'Italy', 'Germany', 'France'],
      datasets: [
         {
            label: 'Players nationality data',
            data: nationalities,
            backgroundColor: [
               'rgb(255, 99, 132)',
               'rgb(54, 162, 235)',
               'rgb(255, 205, 86)',
               'rgb(66, 186, 150)',
               'rgb(217, 226, 239)',
            ],
            hoverOffset: 4,
         },
      ],
   }

   return nationalityData
}

const countNationalities = (arr: string[], nat: string): number => {
   let counter = 0

   for (let el of arr) {
      if (el === nat) counter++
   }
   return counter
}

const countScoresRange = (arr: number[]) => {
   let first = 0,
      second = 0,
      third = 0,
      fourth = 0,
      fifth = 0

   for (let num of arr) {
      if (num > 50 && num < 60) {
         first++
      } else if (num > 60 && num < 70) {
         second++
      } else if (num > 70 && num < 80) {
         third++
      } else if (num > 80 && num < 90) {
         fourth++
      } else if (num > 90 && num < 100) {
         fifth++
      }
   }
   return [first, second, third, fourth, fifth]
}

const getAgesRange = (arr: number[]): number[] => {
   let first = 0,
      second = 0,
      third = 0,
      fourth = 0

   for (let num of arr) {
      if (num > 25 && num < 30) {
         first++
      } else if (num > 30 && num < 35) {
         second++
      } else if (num > 35 && num < 40) {
         third++
      } else if (num > 40 && num < 45) {
         fourth++
      }
   }
   return [first, second, third, fourth]
}
