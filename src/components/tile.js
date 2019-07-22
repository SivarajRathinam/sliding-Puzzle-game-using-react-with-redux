import React from 'react'
import ImageManager from './imageManager'
import {connect} from 'react-redux'

class Tile extends React.Component{
	constructor(props){
		super(props);
	}
	showHumanImage(){
		if(this.props.tilePosition.row == this.props.human.position.row && this.props.tilePosition.col == this.props.human.position.col){
			return <ImageManager isHuman={true}/>
		}
		else if(this.props.tilePosition.row == this.props.fruit.position.row && this.props.tilePosition.col == this.props.fruit.position.col){
			return <ImageManager />	
		}
		return null
	}
	render(){
		return <div className={"tile"} onClick={()=>{this.handleClick()}}>
					{this.showHumanImage()}
				</div>
	}
}

function mapStateToProps(state) {
	return{
		human:state.human,
		fruit:state.fruit
		}
}
export default connect(mapStateToProps)(Tile);