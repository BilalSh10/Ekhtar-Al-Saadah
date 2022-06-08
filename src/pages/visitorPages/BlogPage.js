import ArticlesList from '../../components/articlesFiles/ArticlesList';
import {useReadFromDB} from '../../components/dbOperations/ReadFromDB';
import Loading from '../../components/Loading';

function BlogPage() {	
  const arr = useReadFromDB("articles");
  if(arr){  	
    return (
  	  <div>
  	    <ArticlesList articles={arr} edit="no" />
  	  </div>
    );
  }else{
  	return <Loading />;
  }
}

export default BlogPage;