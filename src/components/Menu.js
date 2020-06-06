import React from "react"; 
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import CloseIcon from '@material-ui/icons/Close';

class Menu extends React.Component {
	render() {
		return (
			<div className="menuButtons">
				<Tooltip title="Play">
					<Fab onClick={this.props.startGame}>
						<PlayArrowIcon /> 
					</Fab>
      	</Tooltip>
				<Tooltip title="Pause">
					<Fab onClick={this.props.pause}>
						<PauseIcon />
					</Fab>
      	</Tooltip>
				<Tooltip title="Random start">
					<Fab onClick={this.props.random}>
						<ShuffleIcon />
					</Fab>
      	</Tooltip>
				<Tooltip title="Clean">
					<Fab onClick={this.props.reset}>
						<CloseIcon />
					</Fab>
      	</Tooltip>
			</div>
			)
	}
}


export default Menu;