import React from 'react'; 

export function CategoryFilter(props) {  
	const isSelectedClass = props.name == props.selectedFilter ? "active" : "";  
	return <div className={isSelectedClass} onClick={() => props.updateCategory(props.name)} >{props.name}</div>;
}