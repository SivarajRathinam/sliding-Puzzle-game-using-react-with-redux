import React from 'react'
import Tile from './tile' 
import '../styles/grid.css'
import {connect} from 'react-redux'
import {updateTiles,updateHumanPosition,updateKeyboardAction,addPointsToTotal,removeFruitPosition,updateFruitPosition,updateGameStatus,restartGame} from '../config/actions'


class Grid extends React.Component{
	constructor(props){
		super(props);
		this.fruit_timer = 0
		this.CreateInitialTiles()
	}
	componentDidMount(){
		this.startFruitTimertoUpdateFruit()
	}
	getSnapshotBeforeUpdate(prevProps, prevState){
		if (this.props.rowCount != prevProps.rowCount || this.props.colCount != prevProps.colCount){
			this.props.dispatch(restartGame())
			this.CreateInitialTiles()
		}
	}
	handleKeyBoardAction(){
		if(this.props.gameStatus == ''){
			if (this.props.human && this.props.human.position && this.props.fruit && this.props.fruit.position){
				if(this.props.total && this.props.total >= 100){
					this.props.dispatch(updateGameStatus('win'))
				}
				if (this.props.human.position.row == this.props.fruit.position.row && this.props.human.position.col == this.props.fruit.position.col){
					this.props.dispatch(addPointsToTotal(this.props.fruit.selectedFruit.points))
					this.findAndUpdateFruitPosition()
				}
				if (this.props.keyBoardAction == "left" && this.props.human.position.col>0){
						let position = Object.assign({},this.props.human.position)
						position.col = position.col-1
						this.props.dispatch(updateKeyboardAction(''))
						this.props.dispatch(updateHumanPosition(position))
					}
				else 
					if(this.props.keyBoardAction == "right" && this.props.human.position.col<this.props.colCount-1){
						let position = Object.assign({},this.props.human.position)
						position.col = position.col+1
						this.props.dispatch(updateKeyboardAction(''))
						this.props.dispatch(updateHumanPosition(position))
					}
				else
				 if(this.props.keyBoardAction == "up" && this.props.human.position.row>0){
						let position = Object.assign({},this.props.human.position)
						position.row = position.row-1
						this.props.dispatch(updateKeyboardAction(''))
						this.props.dispatch(updateHumanPosition(position))
					}
				else if(this.props.keyBoardAction == "down" && this.props.human.position.row<this.props.rowCount-1){
						let position = Object.assign({},this.props.human.position)
						position.row = position.row+1
						this.props.dispatch(updateKeyboardAction(''))
						this.props.dispatch(updateHumanPosition(position))
					}
				
			}
		}
	}
	findAndUpdateFruitPosition(){
		if(this.props.gameStatus ==''){
			let positions = []
			if(this.props.human && this.props.human.position){
				for(let row=0;row<this.props.rowCount;row++){
					for(let col=0;col<this.props.colCount;col++){
						if (this.props.human.position.row != row && this.props.human.position.col != col){
							positions.push({"row":row,"col":col})
						}
					}
				}
			}
			this.props.dispatch(updateFruitPosition(positions[Math.floor(Math.random()*(positions.length))]))
			this.startFruitTimertoUpdateFruit()
		}
	}
	startFruitTimertoUpdateFruit(){
		clearInterval(this.fruit_timer)
		this.fruit_timer = setInterval(this.findAndUpdateFruitPosition.bind(this), 3000);
	}
	CreateInitialTiles(){
		let tiles = []
		for(let row=0;row<this.props.rowCount;row++){
			let rowVal = []
			for(let col=0;col<this.props.colCount;col++){
				let position = {
					"row":row,
					"col":col
				}
				rowVal.push(<Tile tilePosition={position}/>)
			}
			tiles.push(<div className={"grid-row"}>{rowVal}</div>)
		}
		this.props.dispatch(updateTiles(tiles))
	}
	render(){
		this.handleKeyBoardAction()
		return(<div className={"grid"}>
					{this.props.tiles}
				</div>)
	}
}

function mapStateToProps(state){
	return {
		tiles:state.tiles,
		keyBoardAction:state.keyBoardAction,
		human:state.human,
		fruit:state.fruit,
		total:state.total,
		gameStatus:state.status,
		rowCount:state.rowCount,
		colCount:state.colCount
	}
}
export default connect(mapStateToProps)(Grid);