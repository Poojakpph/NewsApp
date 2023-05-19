import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
   //created a variable named articles  (imported form sampleOutput.json file)
  articles=[
    {
        "source": {
            "id": "news24",
            "name": "News24"
        },
        "author": "sport",
        "title": "Cricket chiefs scrap controversial 'soft signals'",
        "description": "Cricket chiefs announced they are scrapping the contentious \"soft signal\" rule and making helmets mandatory for wicketkeepers standing close to the stumps.",
        "url": "https://www.news24.com/sport/cricket/cricket-chiefs-scrap-controversial-soft-signals-20230515",
        "urlToImage": null,
        "publishedAt": "2023-05-15T16:47:20+00:00",
        "content": "<ul><li>The International Cricket Council announced a few changes that will come into effect from 1 June.</li><li>The ICC will be scraping the controversial \"soft signal\" rule.</li><li>It will be man… [+2272 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classNameic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
      ]

    //defining props
    static defaultProps={
      country: 'in',
      pageSize: '8',
      category: 'general'
    }

    static propTypes={
      country: PropTypes.string,
      pageSize: PropTypes.number ,
      category: PropTypes.string
    }

    //created a constuctor
  constructor(){
    super();   //this is mandatory to call whenever a constructor is created in JS
     console.log("hello i am a constructor from news component")
     this.state={
       articles: this.articles, 
       page: 1   
      }
    }

    async componentDidMount(){
        let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d1bdff280e74547a28cb9f3f685b42c&page=1&pageSize=${this.props.pageSize}`;
        let data=await fetch(url);
        let parseData= await data.json()
        console.log(parseData)
        this.setState({articles: parseData.articles, totalResults:parseData.totalResults})
    }

    handlePrevClick= async ()=>{
      console.log("previous");
      let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d1bdff280e74547a28cb9f3f685b42c&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parseData= await data.json()
      this.setState({
        page: this.state.page - 1,
        articles: parseData.articles
       })
    }

  handleNextClick=async ()=>{
      console.log("next");

      if( !(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          let url= `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5d1bdff280e74547a28cb9f3f685b42c&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          let data=await fetch(url);
          let parseData= await data.json()
          this.setState({
            page: this.state.page + 1,
            articles: parseData.articles
          })
      }
   }
  
  render() {
    return (
      <div className="container my-3" >
         <h1 className="text-center">Top Headlines</h1>
    
        <div className="row">
           {this.state.articles.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""}  
                description={element.description?element.description:""} imgurl={element.urlToImage}  newsUrl={element.url} author={element.author}
                date={element.publishedAt} source={element.source.name} />
               </div>
            }) }
         </div> 

         <div className="container d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" 
                      onClick={this.handleNextClick}>Next &rarr;</button>
         </div>

      </div>  
    )
  }
}

export default News
