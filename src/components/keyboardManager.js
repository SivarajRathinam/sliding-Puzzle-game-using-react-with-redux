import React from 'react'
import {connect} from 'react-redux'
import {updateKeyboardAction} from '../config/actions'

class KeyBoardManager extends React.Component{
	constructor(props){
		super(props)
	}
	handleEvent(event){
		let direction;
		if (event.keyCode==37)
			direction = 'left'
		else if (event.keyCode==38)
			direction = 'up'
		else if (event.keyCode==39)
			direction = 'right'
		else if (event.keyCode==40)
			direction = 'down'
		if(this.props.gameStatus != '' || this.props.total >= 100 ){
			document.removeEventListener('keyup',this.handleEvent.bind(this),false)	
		}
		else if (direction){
			this.props.dispatch(updateKeyboardAction(direction))
		}
		
	}
	componentDidMount(){
		document.addEventListener('keyup',this.handleEvent.bind(this),false)
	}
	componentWillUnmount(){
		document.removeEventListener('keyup',this.handleEvent.bind(this),false)
	}
	render(){
		return <>
				{this.props.children}
				</>
	}
}

function mapStateToProps(state) {
	return{
		keyBoardAction:state.keyBoardAction,
		gameStatus:state.status,
		total:state.total
	}
}

export default connect(mapStateToProps)(KeyBoardManager)