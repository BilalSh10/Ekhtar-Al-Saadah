import EventsList from '../../components/eventsFiles/EventsList';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading/Loading';
import { NestedSelects, Select, Option, MakeVisible } from 'nested-selects-react';
import { useState } from 'react';
import './UpcomingEvents.css';

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

  if(filteredArray){
    //console.log(filteredArray); 
    return (
      <div className='filterHolder'>
        <form className='filterForm' onSubmit={() => false}>
          <NestedSelects getvalues={getValues}>
            <Select name="city" label="City">
              <Option value="Jerusalem" label="Jerusalem">Jerusalem</Option>
              <Option value="Nazereth" label="Nazereth">Nazereth</Option>
              <Option value="Lod" label="Lod">Lod</Option>        
            </Select>
            <Select name="type" label="Type">
              <Option value="workshop" label="workshop">Workshop
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="painting">Painting</Option>
                    <Option value="Sound engineering">Sound engineering</Option>
                    <Option value="sculpturing">Sculpturing</Option>
                    <Option value="acting">acting</Option>
                    <Option value="improptu acting">Improptu acting</Option>
                    <Option value="photography">Photography</Option>
                    <Option value="meeting with artist">Meeting with artist</Option>
                  </Select>
                </MakeVisible> 
              </Option>
              <Option value="Display">Play
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="Al-Khurafah">Al-Khurafah</Option>
                    <Option value="Shareef">Shareef</Option>
                    <Option value="Al-Karar">Al-Karar</Option>
                    <Option value="Aswat">Aswat</Option>
                    <Option value="Ghurfat Al-Asrar">Ghurfat Al-Asrar</Option>
                  </Select>
                </MakeVisible>
              </Option>  
              <Option value="exhibition">Art exhibition
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="exhibition">exhibition</Option>
                  </Select>
                </MakeVisible> 
              </Option>  
            </Select>
          </NestedSelects>
          <button type="button" onClick={handleSubmit}>Filter</button>
        </form>
        <EventsList events={filteredArray} edit="no" collectionName = "upcoming events" / >  
      </div>
    );  
  }else if(arr){
    return (
      <div>
        <form onSubmit={() => false}>
          <NestedSelects getvalues={getValues}>
            <Select name="city" label="City">
              <Option value="Jerusalem" label="Jerusalem">Jerusalem</Option>
              <Option value="Nazereth" label="Nazereth">Nazereth</Option>
              <Option value="Lod" label="Lod">Lod</Option>        
            </Select>
            <Select name="type" label="Type">
              <Option value="workshop" label="workshop">Workshop
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="painting">Painting</Option>
                    <Option value="Sound engineering">Sound engineering</Option>
                    <Option value="sculpturing">Sculpturing</Option>
                    <Option value="acting">acting</Option>
                    <Option value="improptu acting">Improptu acting</Option>
                    <Option value="photography">Photography</Option>
                    <Option value="meeting with artist">Meeting with artist</Option>
                  </Select>
                </MakeVisible> 
              </Option>
              <Option value="Display">Play
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="Al-Khurafah">Al-Khurafah</Option>
                    <Option value="Shareef">Shareef</Option>
                    <Option value="Al-Karar">Al-Karar</Option>
                    <Option value="Aswat">Aswat</Option>
                    <Option value="Ghurfat Al-Asrar">Ghurfat Al-Asrar</Option>
                  </Select>
                </MakeVisible>
              </Option>  
              <Option value="exhibition">Art exhibition
                <MakeVisible>
                  <Select name="category" label="Category">
                    <Option value="exhibition">exhibition</Option>
                  </Select>
                </MakeVisible> 
              </Option>  
            </Select>
          </NestedSelects>
          <button type="button" onClick={handleSubmit}>Filter</button>
        </form>
        <EventsList events={arr} edit="no" collectionName = "upcoming events" / >  
      </div>
    );  
  }else{
    return <Loading />;
  }
}

export default UpcomingEventsPage;