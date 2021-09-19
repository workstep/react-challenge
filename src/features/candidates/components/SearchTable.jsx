import React, { useEffect, useState } from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { SearchBox } from "./SearchBox.jsx"; 
import { CandidateTableHeader } from "./CandidateTableHeader.jsx"; 
import { CandidateTableRow } from "./CandidateTableRow.jsx"; 

async function getCandidates() {
  return fetch("https://my-json-server.typicode.com/workstep/react-challenge-data/candidates")
  .then((result) => result.json());  
};  

const getFilteredCandidates = (list, filter) => {
    if (filter == "All") {
        return list; 
    } 
    return list.filter((candidate) => candidate.step == filter);  
}; 

const filterByText = (list, text) => { 
    if (text == "") {
       return list; 
    }
    let search = text.toLowerCase(); 
    return list.filter((candidate) => { 
        let name = candidate.name.toLowerCase();
        return name.indexOf(search) !== -1 
    });   
};  
 
export function SearchTable(props) {

  const dispatch = useDispatch();

  let [tick, setTick ] = useState(0); 

  let [searchText, setSearchText ] = useState("");  

  const candidates = useSelector((state) => state.candidates);     

  let list = getFilteredCandidates(candidates.list, props.filter); 

  list = filterByText(list, searchText); 

  const updateSearchText = (searchText) => {
      setSearchText(searchText); 
  } 

  const updateStatus = (step, id) => { 
    dispatch({type: 'candidates/updateStep',step: step, id: id }); 
    setTick(++tick);  
  }; 

  useEffect(() => { 
     getCandidates().then((candidates) => { 
        dispatch({type: 'candidates/setCandidates', candidates});   
        setTick(++tick);  
     });
  }, [dispatch]); 

	return  <div className="searchTable">
				<SearchBox updateSearchText={updateSearchText} />
				<CandidateTableHeader />
				{list.map((candidate, i) => <CandidateTableRow key={i} info={candidate} updateStatus={updateStatus} />)}
			</div>;
};