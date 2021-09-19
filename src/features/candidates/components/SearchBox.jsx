import React from "react"; 

export function SearchBox(props) {

	const updateSearchText = (e) => {
		props.updateSearchText(e.target.value); 
	};
	
	return  <div className="search-box">
	          <i className="material-icons search-icon">search</i>
	          <input
	            onChange={updateSearchText}
	            className="form-control"
	            type="text"
	            placeholder="Start typing to filter by name"
	            aria-label="Search"
	          />
	        </div>
}