import React, { Component} from "react";
import BandCard from "./components/Bandcard/bcard";
import bands from "./bands.json";
import Wrapper from "./components/Wrapper/wrapper";
import Title from "./components/Title/title";


class App extends Component {
  state ={
    bands
  };

  removeBands = id => {
    const bands = this.state.bands.filter(bands => bands.id = id);
    this.setState({ bands });
  };

  render(){
    return(
      <Wrapper>
        <title>Bands List</title>
        {this.state.bands.map(bands =>(
          <BandCard
            removeBands={this.removeBands}
            id={bands.id}
            name={bands.name}
            genre={bands.genre}
            image={bands.image}
            />
        ))}
      </Wrapper>
    );
  }
}

export default App;
