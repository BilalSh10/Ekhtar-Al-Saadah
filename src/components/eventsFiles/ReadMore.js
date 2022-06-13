import './EventItem.css';
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function ReadMore(props) {  
  let queryData = {'title':props.title, 'image':props.image, 'alt':props.alt, 'description':props.description,
  'venue':props.venue, 'time':props.time, 'collectionName':props.collectionName,'id':props.id, 'edit':props.edit,
   registrationLink:props.registrationLink};

  function buildQuery(){
    var query = [];
    for (var key in queryData) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryData[key]));
    }
    let url =  (query.length ? '?' + query.join('&') : '');
    return(url);
  }

  if(props.edit === "no"){
    return(
    <div>  
      <div className="cont">
        <Link className="EventPageLink" to={{pathname:'/Events/'+props.id, search: buildQuery()}}>
          <li className="EventPageLinkBlock">
            Read More&nbsp;
            <BsChevronDoubleRight id="icon" />
          </li>
        </Link>
      </div>
    </div>  
    );  
  }  
}

export default ReadMore;    