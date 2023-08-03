import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
    super();
    // console.log("hello i am constructor from news component");
    this.state={
      articles:[],
      loading:false,
      page :1
    }
  }
  async componentDidMount(){
    // console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=cad2adac21fc4453856baa7956f9ce2d&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    this.setState({articles:parsedData.articles,
      totalResults:parsedData.totalResults,
    loading: false})
  }

  handlePrevClick= async ()=>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=cad2adac21fc4453856baa7956f9ce2d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    // this.setState({articles:parsedData.articles})
    this.setState({
      page:this.state.page - 1,
      articles: parsedData.articles,
      loading:false
    })

  }

    handleNextClick = async ()=>{
    console.log("Next");
    if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
   
      let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=cad2adac21fc4453856baa7956f9ce2d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`; 
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData= await data.json()
      this.setState({
        page:this.state.page + 1,
        articles:parsedData.articles,
        loading:false
      })
  }   
  }
  render() {
    // console.log("render");  
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News - Top Headlines</h1>       
        {this.state.loading &&<Spinner/>}
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className='col-md-3' key={element.url}>
            <NewsItems title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}               
        </div>
          <div className="container d-flex justify-content-between ">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          
          </div> 
      </div>  
    )
  }
}

