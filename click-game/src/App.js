import React, { Component } from 'react';
import { Navbar} from './components/Navbar';
import { Initial } from './components/Initial';
import { Cards } from './components/CardGame';
import './App.css';

class App extends Component {

  state = {
          score: 0,
          highScore: 0,
          clicked: [],
  };

  handleClick = event => {
      event.preventDefault();
      event.stopPropagation();

      let index = event.target.attributes.index.value;
      if (this.state.clicked.includes(index)){
          this.setState({
                  score: 0,
                  highScore: Math.max(this.state.score, this.state.highScore),
                  clicked: []
          });
      } else {
            this.setState ({
                    score: this.state.score + 1,
                    cliked: this.state.clicked.concat(index)
            });
      }
  }

  render() {
  return (
    <div>

          <Navbar score={this.state.score} highScore={this.state.highScore} />
          <div className='container main-content'>
            <Initial type={
                    this.state.score === 0 && this.state.highScore === 0 ?
                              'begin' :
                    this.state.score === 0 ?
                              'incorret' :
                              'correct'
            } />
            <Cards handleClick={this.handleClick} />
          </div>

    </div>
  );
  }
}

export default App;
