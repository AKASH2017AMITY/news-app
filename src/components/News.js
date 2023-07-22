import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(()=>{
        document.title = `${props.category} -News`
        updateNews();
        //eslint-disable-next-line
    }, [])

    
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
       
    };

  
        // console.log("render");
        return (
            <>
                <h2 className="text-center " style={{ margin: "25px 0", marginTop: "80px" }}>News -- Top Headlines on {props.category}</h2>
                {loading && <Spinner />}

                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                        {articles.map((Element) => {
                            return <div className="col-md-3" key={Element.url}>
                                <NewsItem title={Element.title ? Element.title.slice(0, 40) : ""} description={Element.description ? Element.description.slice(0, 80) : ""}
                                    imgUrl={Element.urlToImage} newsUrl={Element.url} author={Element.author} date={Element.publishedAt} source={Element.source.name} />
                            </div>
                        })}
                        </div>
                    </div>
                </InfiniteScroll>

                
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
                    <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>

                </div> */}
            </>
        )
}

News.defaultProps = {
    country: "in",
    pageSize: 12,
    category: "general"
}
 
News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,

}



export default News;