import React from "react";
import ReactDOM from "react-dom";
import Grid from "./components/Grid"; 
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
      gridMatrix: generate2DArray(this.rows, this.cols)
    }
  }

  onCellSelected = (row, column) => {
    // console.log("clicked", row + "," + column);
    let oldGridMatrix = this.copyMatrix(this.state.gridMatrix)
    oldGridMatrix[row][column] = !oldGridMatrix[row][column];
    this.setState({
      gridMatrix: oldGridMatrix
    })
  }

  copyMatrix = (matrix) => {
    return matrix.map(cell=>{
      return cell.slice();
    });
  }

  randomSetup = (matrix) => {
    let oldGridMatrix = this.copyMatrix(matrix)
    oldGridMatrix.map((row, i) => {
      return row.map((cel, j) => {
        return oldGridMatrix[i][j] = (Math.floor(Math.random() * 101) % 5 === 0);
      })
    })
    this.setState({
      gridMatrix: oldGridMatrix
    })
  }

  componentDidMount () {
    this.randomSetup(this.state.gridMatrix)
  }

  render() {
    return (
      <div>
       <h1>The game of life</h1>
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
