import React from "react";
import {connect} from 'react-redux';

function Score(props) {
  return (
    <div className="Score">
      <span className="score-header">Score</span>
      <span className="Score-Number">{props.total}</span>
    </div>
  );
}
function mapStateToProps(state){
	return {
		total:state.total
	}
}
export default connect(mapStateToProps)(Score)