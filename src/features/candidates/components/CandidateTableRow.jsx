import React, { useState } from 'react';
import { useDispatch } from "react-redux"; 

export function CandidateTableRow(props) {

	const dispatch = useDispatch(); 
	let [ tick, setTick ] = useState(0); 

	let displayTime = (time) => { 
		let d = new Date(time); 
		let day = d.toLocaleString('default', { weekday: 'short'}); 
		let month = d.toLocaleString('default', { month: 'short'})
		return day + ", " + month + " " + d.getDay();  
	}; 

	const handleChange = (e) => {  
		props.updateStatus(e.target.value, props.info.id); 
	};

	return  <div className="candidate-table-row">
				<div className="candidate-name">{props.info.name}</div>
				<div className="candidate-date">{displayTime(props.info.time_interview)}</div> 
				<div className="candidate-status">
					<select value={props.info.step} onChange={(e, props) => handleChange(e, props)}>
						<option value="">Select Step</option>
						<option value="Drug Test">Drug Test</option>
						<option value="Background Check">Background Check</option>
						<option value="Paperwork">Paperwork</option>
					</select>
				</div> 
			</div>;
}