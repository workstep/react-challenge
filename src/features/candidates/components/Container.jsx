import React, { useState } from "react"; 
import { useSelector, useDispatch} from "react-redux"; 
import { CategoryFilter } from "./CategoryFilter.jsx"; 
import { SearchTable } from "./SearchTable.jsx"; 

export const Container =  () => {
	
	//tick is here because dispatch is not updating useSelector
	//need to figure out the bug
	let [ tick, setTick ] = useState(0);

	const steps = useSelector((state) => state.steps);  
 
	const dispatch = useDispatch();

	const updateCategory = (filter) => {  
		dispatch({ type: 'steps/setStepFilter', filter: filter});  
		setTick(++tick);
	};   

	return 	<div>
				<div className="header">Pipeline</div>
				<div className="app-container">	 
					<div className="category-filter">
						{steps.list.map((filter, i) => <CategoryFilter key={i} name={filter} selectedFilter={steps.filter} updateCategory={updateCategory} />)} 
					</div>  
					<SearchTable filter={steps.filter} />
				</div>
			</div>;
};
	 