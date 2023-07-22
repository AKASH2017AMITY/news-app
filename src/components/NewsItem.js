import React from 'react'

const NewsItem = (props) => {

  let { title, description, imgUrl, newsUrl, author, date, source } = props;

  return (
    <div className='my-3 mx-2'>
      <div className="card" >
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0"
        }}>
          <span className=" badge rounded-pill bg-danger"  >{source}</span>
        </div>


        <img src={!imgUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/5979/production/_129950922_gettyimages-1322600576.jpg" : imgUrl}
          className="card-img-top" alt="NewsImage" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More..</a>
        </div>
      </div>
    </div>
  )

}

export default NewsItem
