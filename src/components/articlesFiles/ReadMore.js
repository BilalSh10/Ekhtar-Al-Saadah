import './ArticleItem.css';
import { BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function ReadMore(props) {  
  let queryData = {'title':props.title, 'image':props.image, 'alt':props.alt, 'content':props.content,
  'time':props.time, 'id':props.id, 'edit':props.edit};

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
      <div className="cont">
        <Link className="ArticlePageLink" to={{pathname:'/Articles/'+props.id, search: buildQuery()}}>
          <li className="ArticlePageLinkBlock">
            Read More&nbsp;
            <BsChevronDoubleRight id="icon" />
          </li>
        </Link>
      </div>
    );
  }  
}

export default ReadMore;