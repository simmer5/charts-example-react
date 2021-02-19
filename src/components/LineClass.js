import React, { Component } from 'react'
import Chart from 'chart.js'

export default class LineGraph extends Component {
	chartRef = React.createRef()

	componentDidMount() {
		const myChartRef = this.chartRef.current.getContext('2d')

		new Chart(myChartRef, {
			type: 'line',
			data: {
				//Bring in data
				labels: [
					'',
					"Jun'19",
					"Jul'19",
					"Aug'19",
					"Sep'19",
					"Oct'19",
					"Nov'19",
					"Dec'19",
					'',
				],
				datasets: [
					{
						label: 'Users',
						data: [0, 9, 3, 6, 4, 4, 3, 9, 8],
						responsive: true,
						fill: true,
						backgroundColor: '#0057B8',
						borderColor: '#0057B8',
						pointBorderColor: 'rgba(75,192,192,1)',
						pointBackgroundColor: '#fff',
						pointBorderWidth: 1,
						pointHoverRadius: 3,
						pointHoverBackgroundColor: 'rgba(75,192,192,1)',
						pointHoverBorderColor: 'rgba(220,220,220,1)',
						pointHoverBorderWidth: 2,
						pointRadius: 1,
						pointHitRadius: 10,
					},
				],
			},
			options: {
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
							},
							gridLines: {
								display: false,
							},
						},
					],
					xAxes: [
						{
							gridLines: {
								display: false,
								tickMarkLength: 8,
							},
							ticks: {
								fontSize: 8,
								padding: 1,
							},
						},
					],
				},
			},
		})
	}
	render() {
		return (
			<div>
				<canvas id='myChart' ref={this.chartRef} />
			</div>
		)
	}
}
