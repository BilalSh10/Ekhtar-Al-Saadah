// import "./Events.css";
// import EventComp from '../../Components/EventComp/EventComp';

// function Events() {
//   return (
//     <div className="AllEventsContainer">
//       <h2 className="AllEventsHeadline">Events</h2>
//       <div className="filter-cat">
//         <form className="filter">
//           <label for="cat" id="cat-label">Choose a category: &nbsp;&nbsp;</label>
//           <select id="cat" name="category">
//             <option value="cate" selected>Category</option>
//             <option value="theatrical">Theatrical</option>
//             <option value="musical">Musical</option>
//           </select>
//         </form>
//       </div>
//       <div className="AllEventsAsList">
//         <EventComp className="OneEvent" />
//         <EventComp className="OneEvent" />
//         <EventComp className="OneEvent" />
//       </div>
//     </div>
//   );
// }

// export default Events;


import EventsList from '../../Components/EventsList/EventsList';
import {useReadFromDB} from '../../Components/ReadFromDB';
import Loading from '../../Components/Loading/Loading'

function UpcomingEventsPage() {
  const arr = useReadFromDB("upcoming events");
  if(arr){  	
    return (
  	  <div>
  	    <EventsList events={arr} / >
  	  </div>
    );
  }else{
  	return <Loading />;
  }
}

export default UpcomingEventsPage;