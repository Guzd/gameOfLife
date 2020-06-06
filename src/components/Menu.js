import React from "react"; 

class Menu extends React.Component {
	render() {
		return (
			<div className="center">
					<button onClick={this.props.startGame}>
						Start
					</button>
					<button onClick={this.props.pause}>
					  Pause
					</button>
					<button  onClick={this.props.random}>
					  Random start
					</button>
          <button onClick={this.props.reset}>
					  Reset
					</button>
			</div>
			)
	}
}


export default Menu;