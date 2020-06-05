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
  render() {
    return (
      <div>
       <h1>The game of life</h1>
       <Grid 
        width= {this.cols * this.cellsSize }
        gridMatrix={this.state.gridMatrix}
        rows={this.rows}
        cols={this.cols}
       />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
