import './styles/App.css'
import React, { useState, useEffect } from 'react'
import FaceDetection from './FaceDetection.js'
import RefFace from './FaceData/RefFace'

function App() {
	const [Face, setFace] = useState({})
	let [Available, setAvailable] = useState(false)


	return (
		<div>
			<div className="glitch-wrapper">
				<div className="glitch" data-glitch="Expressions">Expressions</div>
			</div> 
			<FaceDetection data={Face} available={Available} />
			<br/>
			<div className="footer">
				Face and emotion recognition app created by Vivek H
            </div>
		</div>

	)
}

export default App
