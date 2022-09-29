import React from 'react'

const NewsItem = (props)=>{

  
   let { title, description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className='my-3'>
            <div className="card" style={{width: "18rem" }} >
            <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/13EEC/production/_126844618_0b309f5e6561507616e804c149558ddc0d151684.jpg":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {author} On { new Date(date).toGMTString()}</small></p>
         <a rel="noreferrer"  href={newsUrl}   target= "_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
             

          </div>
          
      </div>
      
    )
  
}

export default NewsItem
