import React from 'react'
import {connect} from 'react-redux'
import {restartGame} from '../config/actions'

class Modal extends React.Component{
	constructor(props){
		super(props)
		this.click = this.clickHandler.bind(this)
	}
	clickHandler(){
		this.props.dispatch(restartGame())
	}
	template(header,bodyContent,footerText){
		return <div className="backdrop">
						<div className="modal">
							<div className="modal-container">
								<div className="modal-header">
									{header}
								</div>
								<div className="modal-body">
									{bodyContent}
								</div>
								<div className="modal-footer">
									<span onClick={this.click} className="restart-button">{footerText}</span>
								</div>
							</div>
						</div>
					</div>
	}
	showStatus(){
		if (this.props.gameStatus =='win'){
			return this.template('congrats','you win','restart game')
		}else if(this.props.gameStatus =='loss'){
			return this.template('oops','you lost','try again')
		}
		return null
	}
	render(){
		return (<>{this.showStatus()}</>)
	}
}
function modalTemplate(props){

}
function mapStateToProps(state){
	return {
		gameStatus:state.status
	}
}
export default connect(mapStateToProps)(Modal)