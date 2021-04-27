import * as React from 'react'
import { Pie, Bar, Line } from 'react-chartjs-2'

import './ChartsModal.css'

import { getNationalityData, getScoreData, getAgeData } from '../../helpers'
import { IPlayer } from '../../types'

interface IProps {
   data: IPlayer[]
   onClose: () => void
}

const ChartsModal: React.FC<IProps> = ({ data, onClose }) => {
   const nationalityData = getNationalityData(data)
   const scoreData = getScoreData(data)
   const ageData = getAgeData(data)

   return (
      <div className="overlay">
         <div className="charts-modal">
            <div className="chart-wrap">
               <Bar
                  type="bar"
                  width={600}
                  height={400}
                  data={scoreData}
                  options={{ maintainAspectRatio: false, responsive: false }}
               />
            </div>

            <div className="chart-wrap">
               <Pie
                  type="pie"
                  width={600}
                  height={400}
                  data={nationalityData}
                  options={{ maintainAspectRatio: false, responsive: false }}
               />
            </div>

            <div className="chart-wrap">
               <Line
                  type="line"
                  width={600}
                  height={400}
                  data={ageData}
                  options={{ maintainAspectRatio: false, responsive: false }}
               />
            </div>

            <button className="close-btn" onClick={onClose}>
               &times;
            </button>
         </div>
      </div>
   )
}

export { ChartsModal }
