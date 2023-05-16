import React, { Component } from 'react'
import NewsItem from './NewsItem'


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
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
      ]

    //created a constuctor
  constructor(){
    super();   //this is mandatory to call whenever a constructor is created in JS
     console.log("hello i am a constructor from news component")
     this.state={
       articles: this.articles, 
       loading: false     
      }
    }

  render() {
    return (
      <div className="container my-3" >
         <h2>Top Headlines</h2>
         <div className="row">
           <div className="col-md-4">
             <NewsItem title="mytitle" description="mydesc" 
                imgurl="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" newsUrl="todo" />
           </div>
           <div className="col-md-4">
             <NewsItem title="mytitle" description="mydesc" />
           </div>
           <div className="col-md-4">
             <NewsItem title="mytitle" description="mydesc" />
           </div>
         </div>
      </div>
      
    )
  }
}
