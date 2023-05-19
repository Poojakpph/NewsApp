import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imgurl, newsUrl, author, date, source} = this.props;

    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source} </span>
          <img src={!imgurl ? "https://c.ndtvimg.com/2023-04/e9pqohd_tim-david-bcci_625x300_22_April_23.jpg? im=FaceCrop,algorithm=dnn,width=1200,height=675" : imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} 
              
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
