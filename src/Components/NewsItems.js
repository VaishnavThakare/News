import React, { Component } from 'react'

export default class NewsItems extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl} = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem;",height:"40rem"}}>
          <img src= {!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/1659B/production/_130374519_mediaitem130374518.jpg":imageUrl}  className="card-img-top" alt=".."/>         
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}


