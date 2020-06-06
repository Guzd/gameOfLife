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
    this.cols = 20;
    this.cellsSize = 25;
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

  randomSetup = (grid) => {
    let updateGrid = grid.map((row, i) => {
      return row.map((cel, j) => {
        return grid[i][j] = (Math.floor(Math.random() * 101) % 5 === 0);
      })
    })
    this.setState({
      gridMatrix: updateGrid
    })
  }

  startGame = () => {
		clearInterval(this.interval);
		this.interval = setInterval(this.gameIteration, 200);
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

  gameIteration = () => {
    let grid = this.state.gridMatrix;
    const alive = (row, column) => grid[row] && grid[row][column];
    let newGrid =  grid.map((row, i) => {
      return row.map((cell, j) => {
        let neighbours = 0;
        if (alive(i - 1, j - 1)) neighbours++;
        if (alive(i - 1, j)) neighbours++;
        if (alive(i - 1, j + 1)) neighbours++;
        if (alive(i, j - 1)) neighbours++;
        if (alive(i, j + 1)) neighbours++;
        if (alive(i + 1, j - 1))   neighbours++;
        if (alive(i + 1, j)) neighbours++;
        if (alive(i + 1, j + 1)) neighbours++;
        return (alive(i, j) ? neighbours > 1 && neighbours < 4 : neighbours === 3) ? true : false;
      })
    })
    this.setState({
      gridMatrix: newGrid,
      iterations: this.state.iterations + 1 
    })
  }

  componentDidMount () {
    this.randomSetup(this.state.gridMatrix);
    this.startGame();
  }

  render() {
    return (
      <div>
       <h1>The game of life</h1>
        <Menu 
          startGame={this.startGame}
          pause={this.pause}
          random={this.randomSetup}
          reset={this.reset}
        />
        <h2>{this.state.iterations} iterations</h2> 
        <Grid 
          width= {this.cols * this.cellsSize }
          gridMatrix={this.state.gridMatrix}
          rows={this.rows}
          cols={this.cols}
          handleClickCell={this.onCellSelected}
        />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
