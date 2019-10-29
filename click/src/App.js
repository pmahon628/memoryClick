import React, { Component} from "react";
import BandCard from "./components/Bandcard/bcard";
import bands from "./bands.json";
import Wrapper from "./components/Wrapper/wrapper";
import Score from  "./components/Score/score";
import "../src/App.css";
import Axios from "axios";

class App extends Component {
  state = {
    bands,
    selectedBandIds: [],
    score: 0,
    goal: 12,
    status: ""
  };

   
  handleClickCount = id => {
      this.state.bands.find((data,i) => {
       
        if(data.id === id) {
         if(bands[i].count === 0){
            bands[i].count = bands[i].count +1;
        
          this.setState({score: this.state.score +1}, function(){
            console.log(this.state.score);
          });
          this.state.bands.sort(() => Math.random() - 0.5)
          return true
        }else{
          this.gameOver();
        }
      }
    });
  };

  gameOver = () => {
    if(this.state.score > this.state.highScore){
      this.setState({highScore: this.state.score}, function(){
        console.log(this.state.highScore);
      });
    }
    this.state.bands.forEach(bands => {
      bands.count =0;
    });
    alert('You lose, try again!  \nScore: '+ this.state.score);
    this.setState({score: 0});
    return true
  };
 

  render(){
    return(
      <div className="container-fluid">
      <div className="App">
      <header className="App-Header">
      <div className="row">
      <div className="col-md-4">
      <h1 className="App-title">Band Memory Click Game</h1>
      <h4>The object of the game is to not guess the same band twice.</h4>
      <h5>Can you get to 12?? Best of luck.</h5>
      <Score total={this.state.score}
          goal={12}
          status={this.state.status}
        />
        </div>
        </div>
      </header>
      <Wrapper>
        <div className="row">
        <title>Bands List</title>
        {this.state.bands.map(bands =>(
          <BandCard
            handleClickCount = {this.handleClickCount}
            id={bands.id}
            image={bands.image}
            name={bands.name}
            />
            ))}
            </div>
     </Wrapper>
        </div>
      </div>
      
    );
  }
}

export default App;
