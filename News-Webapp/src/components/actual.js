import React,{useState,useEffect} from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



function News(props) {
    
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    useEffect(() => {
      fetchh();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



   const fetchh =  async ()=>{

        props.setprogress(10);
        setloading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pagesize}`;
        props.setprogress(30);
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        props.setprogress(50);
        setarticles(parseddata.articles);
        setTotalResults(parseddata.totalResults);
        setloading(false);
        props.setprogress(100);
        }

        const fetchMoreData = async () =>{
            setpage(page + 1);
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pagesize}`;
           
            let data = await fetch(url);
            let parseddata = await data.json();
             setarticles(articles.concat(parseddata.articles));
             setTotalResults(parseddata.totalResults);
        }
    


  return (
    <>
        <h1 className="text-center my-3">Apna News</h1>
   
         {loading && <Spinner/>}
         <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
            <div className="container">

            <div className="row">
   

        {articles.map((element) => {
            return  <div className="col-md-3" key={element.url}>
                <NewsItems title={element.title} desc={element.description} imgurl={element.urlToImage} url={element.url} source={element.source.name} date={element.publishedAt} author={element.author} />
                    </div>
        })}
        </div>
        </div>
        </InfiniteScroll>



        </>
  )
}




News.defaultProps = {
    country: "in",
    pagesize: 12,
    category: "general"
}
News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
}
export default News
