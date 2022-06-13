import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import ArticlesList from '../../components/articlesFiles/ArticlesList';
import Loading from '../../components/Loading/Loading';
function EditArticlesPage() {
  const arr = useReadFromDB("articles");
  if(arr){  	
    return (
      <div>
  	    <ArticlesList articles={arr} edit="yes"/>
  	  </div>
    );
  }else{
    return <Loading />;
  }
}

export default EditArticlesPage ;