import EventsList from '../../components/eventsFiles/EventsList';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading/Loading';
import { NestedSelects, Select, Option, MakeVisible } from 'nested-selects-react';
import { useState } from 'react';
//import classes from './Filter.module.css';

function UpcomingEventsPage() {
  const arr = useReadFromDB("upcoming events");
  const [ state, setState ] = useState({ nestedSelectsValues: null });
  const [ filteredArray, setFilteredArray ] = useState(arr);
  const getValues = data => setState({ ...state, nestedSelectsValues: data });

  const handleSubmit = e => {
    e.preventDefault();
    let filtered = arr.filter(function(item) {
      for (var key in state.nestedSelectsValues) {
        if (item[key] === undefined || item[key] !== state.nestedSelectsValues[key])
          return false;
        }
        return true;
    });  
    setFilteredArray(filtered);
  }

  function filterForm(){
    return(
      <form onSubmit={() => false}>
          <NestedSelects getvalues={getValues}>
            <Select name="city" label="Region">
              <Option value="Nazereth" label="Nazereth">Nazereth</Option>
              <Option value="Jerusalem" label="Jerusalem">Jerusalem</Option>
              <Option value="Haifa" label="Haifa">Haifa</Option>
              <Option value="Triangle" label="Triangle">Triangle</Option>
              <Option value="North" label="North">North</Option>
              <Option value="Center" label="Center">Center</Option>
              <Option value="South Naqab" label="South Naqab">South Naqab</Option>
              <Option value="Tel-Aviv" label="Tel-Aviv">Tel-Aviv</Option>
            </Select>
            <Select name="type" label="Type">
              <Option value="workshop" label="Workshop">Workshop
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="painting">Painting</Option>
                    <Option value="sound engineering">Sound engineering</Option>
                    <Option value="sculpturing">Sculpturing</Option>
                    <Option value="acting">acting</Option>
                    <Option value="improptu acting">Improptu acting</Option>
                    <Option value="photography">Photography</Option>
                    <Option value="meeting with artist">Meeting with artist</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </MakeVisible> 
              </Option>
              <Option value="play" label="Play">Play
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="Al-Khurafah">Al-Khurafah</Option>
                    <Option value="Shareef">Shareef</Option>
                    <Option value="Al-Karar">Al-Karar</Option>
                    <Option value="Aswat">Aswat</Option>
                    <Option value="Ghurfat Al-Asrar">Ghurfat Al-Asrar</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </MakeVisible>
              </Option>  
              <Option value="display" label="Display">Display
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="Art exhibition">Art exhibition</Option>
                    <Option value="Musical display">Musical display</Option>
                    <Option value="Dancing display">Dancing display</Option>
                    <Option value="Festival">Festival</Option>
                    <Option value="literary colloquy">literary colloquy</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </MakeVisible> 
              </Option>  
            </Select>
          </NestedSelects>
          <button type="button" onClick={handleSubmit}>Filter</button>
      </form>
    );
  }

  if(filteredArray){
    //console.log(filteredArray); 
    return (
      <div>
        { filterForm() }
        <EventsList events={filteredArray} edit="no" collectionName="upcoming events" />  
      </div>
    );  
  }else if(arr){
    return (
      <div>
        { filterForm() }
        <EventsList events={arr} edit="no" collectionName="upcoming events" />  
      </div>
    );  
  }else{
    return <Loading />;
  }
}

export default UpcomingEventsPage;