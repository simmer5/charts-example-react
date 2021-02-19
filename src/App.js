import './App.css'
import LineChart from '../src/components/Line'

function App() {
	const data1 = [0, 9, 3, 6, 4, 4, 3, 9, 8]
	const labels1 = [
		'',
		"Jun'19",
		"Jul'19",
		"Aug'19",
		"Sep'19",
		"Oct'19",
		"Nov'19",
		"Dec'19",
		'',
	]

	return (
		<div
			className='App'
			style={{
				width: '50%',
				height: 'auto',
				margin: '0 auto',
				backgroundColor: 'red',
			}}
		>
			<LineChart
				data={data1}
				labels={labels1}
				title='Aplications'
				label='Users'
			/>
		</div>
	)
}

export default App
