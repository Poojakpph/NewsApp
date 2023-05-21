import './App.css';
import React, { Component } from 'react'
import News from './components/News';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
   pageSize= 20;
   
   state={
    progress: 0
   }

   setProgress=(progress)=>{
    this.setState({progress: progress})
   }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
           <LoadingBar
              color='#f11946'
              progress={this.state.progress}
            />
            <Routes>
            <Route path='/' element={<News setProgress= {this.setProgress} key='general' pageSize={this.pageSize} country='us' category='general' />}></Route>
            <Route path='/business' element={<News setProgress= {this.setProgress} key='business' pageSize={this.pageSize} country='us' category='business' />}></Route>
            <Route path='/entertainment' element={<News setProgress= {this.setProgress}  key='entertainment' pageSize={this.pageSize} country='us' category='entertainment' />}></Route>
            <Route path='/health' element={<News setProgress= {this.setProgress}   key='health' pageSize={this.pageSize} country='us' category='health' />}></Route>
            <Route path='/science' element={<News setProgress= {this.setProgress} key='science' pageSize={this.pageSize} country='us' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress= {this.setProgress}  key='sports' pageSize={this.pageSize} country='us' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress= {this.setProgress}  key='technology' pageSize={this.pageSize} country='us' category='technology' />}></Route>
          </Routes>
       </Router>
      </div>
    )
  }
}

