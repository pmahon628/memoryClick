import React, { Component} from "react";
import BandCard from "./components/Bandcard/bcard";
import bands from "./bands.json";
import Wrapper from "./components/Wrapper/wrapper";
// import Click from "./components/Click/click";


class App extends Component {
  state ={
    bands,
    selectedBandIds: [],
    score: 0,
    goal: 12,
    status: ""
  }
  
  shuffleBands = id => {
    let selectedBandIds = this.state.selectedBandIds;

    if (selectedBandIds.includes(id)) {
      this.setState({ selectedBandIds: [], score: 0, status: "Nah man, you lose!!" });
      return;
    } else {
      selectedBandIds.push(id)

      if (selectedBandIds.length === 12) {
        this.setState({ score: 12, status: "Nice! You got it!!", selectedCharacterIds: [] });
        return;
      }

      this.setState({ bands, selectedBandIds, score: selectedBandIds.length, status: " " });

      for (let i = bands.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [bands[i], bands[j]] = [bands[j], bands[i]];
      }
    }
  }

  render(){
    return(
      <div className="App">
      <header className="App-Header">
      <h1 className="App-title">Band Memory Click Game</h1>
      </header>
      <Score total={this.state.score}
          goal={12}
          status={this.state.status}
        />
      <Wrapper>
        <title>Bands List</title>
        {this.state.bands.map(bands =>(
          <BandCard
            shuffleBands={this.shuffleBands}
            id={bands.id}
            image={bands.image}
            />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
