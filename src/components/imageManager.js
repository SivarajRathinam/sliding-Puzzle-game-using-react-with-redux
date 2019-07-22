import React from 'react'
import orange from '../image/orange.png';
import apple from '../image/apple.png';
import berry from '../image/berry.png';
import cherry from '../image/cherry.png';
import grapes from '../image/grapes.png';
import human from '../image/human.png';
import mango from '../image/mango.png';
import {connect} from 'react-redux'
import {updateSelectedFruit,updateFruitCollection} from '../config/actions'

class ImageManager extends React.Component{
	constructor(props){
		super(props)
	}
	componentDidMount(){
		let fruitsCollection = [{"url":orange,"points":1},
						{"url":apple,"points":1},
						{"url":berry,"points":2},
						{"url":cherry,"points":2},
						{"url":grapes,"points":3},
						{"url":mango,"points":5}]
		this.props.dispatch(updateFruitCollection(fruitsCollection))
	}
	componentDidUpdate(){
		this.updateFruit()
	}
	getImage(){
		if (this.props.isHuman)
			return <img src={human} className="tile-image"/>;
		if (this.props.fruit && this.props.fruit.selectedFruit)
			return <img src={this.props.fruit.selectedFruit.url} className="tile-image"/>
		return null
	}
	updateFruit(forceUpdate){
		if ((this.props.fruit && !this.props.fruit.selectedFruit)){
			let fruit = this.props.fruitsCollection[Math.floor(Math.random()*(this.props.fruitsCollection.length))]
			this.props.dispatch(updateSelectedFruit(fruit))
		}
	}
	render(){
		return (<>{this.getImage()}</>)
	}
}
function mapStateToProps(state){
	return {
		human:state.human,
		fruit:state.fruit,
		fruitsCollection:state.fruitsCollection
	}
}
export default connect(mapStateToProps)(ImageManager);
