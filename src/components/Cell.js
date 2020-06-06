import React from "react";

class Cell extends React.Component {
	render() {
		return (
			<div
				className={this.props.cellClass}
				id={this.props.cellId}
				onClick={() => this.props.handleClickCell(this.props.row, this.props.col)}
			/>
		);
	}
}

export default Cell;