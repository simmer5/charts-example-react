import React from 'react'
import { Radar } from 'react-chartjs-2'

const getChartData = canvas => {
	const ctx = canvas.getContext('2d')

	const x = canvas.height * 0.65
	const y = canvas.width * 0.25
	const outerRadius = canvas.width / 3.2

	const x1 = x * 1.49
	const y1 = y * 0.87

	const gradient = ctx.createRadialGradient(x, y, outerRadius, x1, y1, 1)
	gradient.addColorStop(0, 'blue')
	gradient.addColorStop(1, 'white')
	return {
		labels: [
			'Javascript',
			'React',
			'CSS',
			'HTML',
			'Webpack',
			'Problem Solving',
		],
		datasets: [
			{
				label: 'skillset',
				borderWidth: 0.5,
				backgroundColor: gradient,
				borderColor: 'blue',
				lineTension: 0.4,
				pointRadius: 0,
				data: [25, 50, 75, 91, 100, 50],
			},
		],
	}
}

const options = {
	responsive: true,
	maintainAspectRatio: true,
	layout: {
		beginAtZero: true,
		padding: {
			right: 35,
			bottom: 60,
		},
	},
	scale: {
		gridLines: {
			circular: true,
		},
	},
}

const RadarChart = () => {
	return (
		<div>
			<Radar data={canvas => getChartData(canvas)} options={options} />
		</div>
	)
}

export default RadarChart
