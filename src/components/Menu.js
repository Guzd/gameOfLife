import React from "react"; 
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  square: {
		borderRadius: '0px',
		marginBottom: '15px',
		color: '#ba2d65',
		'&:hover': {
			background: "#ba2d65",
			color: '#fafafa'
    }
  }
};


class Menu extends React.Component {
	render() {
		const { classes } = this.props
		return (
			<div className="buttons">
				<Tooltip title="Play">
					<Fab className={classes.square} onClick={this.props.play}>
						<PlayArrowIcon /> 
					</Fab>
      	</Tooltip>
				<Tooltip title="Pause">
					<Fab className={classes.square} onClick={this.props.pause}>
						<PauseIcon />
					</Fab>
      	</Tooltip>
				<Tooltip title="Random start">
					<Fab className={classes.square} onClick={this.props.random}>
						<ShuffleIcon />
					</Fab>
      	</Tooltip>
				<Tooltip title="Clean">
					<Fab className={classes.square} onClick={this.props.reset}>
						<CloseIcon />
					</Fab>
      	</Tooltip>
			</div>
		)
	}
}


export default withStyles(styles)(Menu);