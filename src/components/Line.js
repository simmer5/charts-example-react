import React from 'react'
import { Line } from 'react-chartjs-2'

const getChartData = (canvas, data, labels, label) => {
	const ctx = canvas.getContext('2d')

	const gradient = ctx.createLinearGradient(0, 0, 0, 275)
	gradient.addColorStop(0, 'rgba(62, 87, 194, 1)')
	gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
	return {
		labels,

		datasets: [
			{
				label: label,
				responsive: true,
				fill: true,
				lineTension: 0.6,
				backgroundColor: gradient,
				borderColor: 'rgba(0, 87, 184, 0.1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				maintainAspectRatio: false,
				//pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointRadius: 0.1,
				pointHitRadius: 10,
				//data: [0, 9, 3, 6, 4, 4, 3, 9, 8],
				data,
			},
		],
	}
}

const options = {
	layout: {
		padding: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
		},
	},
	title: {
		display: false,
		text: 'Title',
	},
	legend: {
		display: false,
	},
	scales: {
		yAxes: [
			{
				ticks: {
					min: 0,
					max: 12,
					stepSize: 3,
					fontSize: 10,
				},
				gridLines: {
					display: false,
					tickMarkLength: -5,
				},
			},
		],
		xAxes: [
			{
				gridLines: {
					display: false,
					tickMarkLength: -7,
				},
				ticks: {
					fontSize: 8,
					padding: 1,
				},
			},
		],
	},
}
// const gradientBackground = canvas => {
// 	const ctx = canvas.getContext('2d')
// 	const gradient = ctx.createLinearGradient(0, 0, 0, 450)
// 	gradient.addColorStop(0, 'rgba(255, 0,0, 0.5)')
// 	gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.25)')
// 	gradient.addColorStop(1, 'rgba(255, 0, 0, 0)')
// 	return gradient
// }

// defaults.global.layout = {
// 	padding: {
// 		left: 50,
// 		right: 0,
// 		top: 0,
// 		bottom: 0,
// 	},
// }
// const data = {
// 	labels: [
// 		'',
// 		"Jun'19",
// 		"Jul'19",
// 		"Aug'19",
// 		"Sep'19",
// 		"Oct'19",
// 		"Nov'19",
// 		"Dec'19",
// 		'',
// 	],
// 	datasets: [
// 		{
// 			label: 'Users',
// 			responsive: true,
// 			fill: true,
// 			lineTension: 0.6,
// 			backgroundColor: '#0057B8',
// 			borderColor: '#0057B8',
// 			borderCapStyle: 'butt',
// 			borderDash: [],
// 			borderDashOffset: 0.0,
// 			borderJoinStyle: 'miter',
// 			pointBorderColor: 'rgba(75,192,192,1)',
// 			pointBackgroundColor: '#fff',
// 			pointBorderWidth: 1,
// 			pointHoverRadius: 3,
// 			pointHoverBackgroundColor: 'rgba(75,192,192,1)',
// 			pointHoverBorderColor: 'rgba(220,220,220,1)',
// 			pointHoverBorderWidth: 2,
// 			pointRadius: 1,
// 			pointHitRadius: 10,
// 			data: [0, 9, 3, 6, 4, 4, 3, 9, 8],
// 		},
// 	],
// }
// const options = {
// 	layout: {
// 		padding: {
// 			left: 0,
// 			right: 0,
// 			top: 0,
// 			bottom: 0,
// 		},
// 	},
// 	title: {
// 		display: false,
// 		text: 'Title',
// 	},
// 	legend: {
// 		display: false,
// 	},
// 	scales: {
// 		yAxes: [
// 			{
// 				ticks: {
// 					min: 0,
// 					max: 12,
// 					stepSize: 3,
// 				},
// 				gridLines: {
// 					display: false,
// 				},
// 			},
// 		],
// 		xAxes: [
// 			{
// 				gridLines: {
// 					display: false,
// 					tickMarkLength: 8,
// 				},
// 				ticks: {
// 					fontSize: 8,
// 					padding: 1,
// 				},
// 			},
// 		],
// 	},
// }
const LineChart = ({ data, labels, label, title }) => {
	return (
		<div
			style={
				{
					//  backgroundColor: '#C6D6E3',
					// 	borderRadius: 6,
					// width: 'auto',
					// height: 'auto',
					// margin: '2rem',
				}
			}
		>
			<h2>{title}</h2>
			<Line
				data={canvas => getChartData(canvas, data, labels, label)}
				options={options}
			/>
		</div>
	)
}

export default LineChart
