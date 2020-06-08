import React from "react";
import ReactDOM from "react-dom";
import Grid from "./components/Grid"; 
import Menu from "./components/Menu"; 
import "./index.css";

function generate2DArray(rows, columns) {
  return Array(rows).fill().map(() => Array(columns).fill(false))
};  

class Main extends React.Component {
  constructor(){
    super();
    this.rows = 20;
    this.cols = 50;
    this.cellsSize = 20;
    this.state = {
      gridMatrix: generate2DArray(this.rows, this.cols),
      iterations: 0
    }
  }

  onCellSelected = (row, column) => {
    let oldGrid = this.state.gridMatrix.map(row => row.slice());
    oldGrid[row][column] = !oldGrid[row][column];
    this.setState({
      gridMatrix: oldGrid
    })
  }

  randomSetup = () => {
    let oldGrid = this.state.gridMatrix.map(row => row.slice());
    let updateGrid = oldGrid.map((row) => {
      return row.map(() => {
        return (Math.floor(Math.random() * 101) % 5 === 0);
      })
    })
    this.setState({
      gridMatrix: updateGrid,
      iterations: 0
    })
  }

  play = () => {
    const playIfEmpty = {
      false: () => {
          clearInterval(this.interval);
          this.interval = setInterval(this.iteration, 200);
      },
      true: () => {}
    }
    playIfEmpty[this.isGridEmpty(this.state.gridMatrix)]()
  }

  pause = () => {
    clearInterval(this.interval);
  }

  reset = () =>  {
    clearInterval(this.interval);
    let clearGrid = generate2DArray(this.rows, this.cols);
    this.setState({
			gridMatrix: clearGrid,
      iterations: 0
		});
  }

  iteration = () => {
    let grid = this.state.gridMatrix;
    const alive = (row, column) => grid[row] && grid[row][column];
    let newGrid =  grid.map((row, i) => {
      return row.map((cell, j) => {
        let neighbours = 0;
        neighbours += this.aliveCounter(alive(i - 1, j - 1));
        neighbours += this.aliveCounter(alive(i - 1, j));
        neighbours += this.aliveCounter(alive(i - 1, j + 1));
        neighbours += this.aliveCounter(alive(i, j - 1));
        neighbours += this.aliveCounter(alive(i, j + 1));
        neighbours += this.aliveCounter(alive(i + 1, j - 1));
        neighbours += this.aliveCounter(alive(i + 1, j));
        neighbours += this.aliveCounter(alive(i + 1, j + 1));
        return neighbours === 3  || (neighbours === 2 && alive(i, j));
      })
    })
    this.setState({
      gridMatrix: newGrid,
      iterations: this.state.iterations + 1 
    })
  }

  aliveCounter = (input) => {
    const count = {
      true: 1,
      false: 0,
      undefined: 0,
    };
    return count[input];
  };

  isGridEmpty = (grid) => {
    return grid.every((row) => row.every(item => item === false) === true);
  }

  componentDidMount () {
    this.randomSetup();
  }

  render() {
    return (
      <div>
        <div className= "title">
          <h1>Conway's Game of life</h1>
          <h2>Diana Gutiérrez</h2>
        </div> 
        <div className="container">    
          <div className="menu">       
            <Menu 
              play={this.play}
              pause={this.pause}
              step={this.iteration}
              random={this.randomSetup}
              reset={this.reset}
            />
            <div>
              <h3>{this.state.iterations}</h3>    
            </div> 
          </div>
          <Grid 
            width= {this.cols * this.cellsSize }
            gridMatrix={this.state.gridMatrix}
            rows={this.rows}
            cols={this.cols}
            handleClickCell={this.onCellSelected}
          />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
