import React from "react";
import Cell from "./Cell"; 

class Grid extends React.Component {
  populateGrid = (row, i) => {
    var cellClass = "";
    return (
      row.map((cols, j) => {
      cellClass = this.props.gridMatrix[i][j] ? "cell live" : "cell dead";
      let id = i + "," + j;
       return <Cell
        cellClass={cellClass}
        key={id}
        cellId={id}
        row={i}
        col={j}
      />;
    })
    )
  }

  render() {
      return (
      <div className="grid" style={{width: this.props.width}}>
      {this.props.gridMatrix.map(this.populateGrid)}
      </div>
    )
  }
}

export default Grid;