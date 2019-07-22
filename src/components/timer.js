const React = require('react')
const ms = require('pretty-ms')
import {connect} from 'react-redux'
import {updateGameStatus,updateTimer} from '../config/actions'

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.timer = 0;
    this.countDown = this.countDown.bind(this);
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.props.timer.seconds);
    this.props.dispatch(updateTimer({ time: timeLeftVar }))
    this.startTimer()
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    if(this.props.isTimerRunning==true && prevProps.isTimerRunning == false ){
        this.startTimer()
    }
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": this.formatTime(hours),
      "m": this.formatTime(minutes),
      "s": this.formatTime(seconds)
    };
    return obj;
  }

  startTimer() {
    this.timer = setInterval(this.countDown, 1000);
  }
  stopTimer(){
    clearInterval(this.timer)
  }
  formatTime(time){
    return (time < 10) ? '0' + time.toString() : time.toString();
  }

  countDown() {
    let seconds = this.props.timer.seconds - 1;
    this.props.dispatch(updateTimer({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    }))
    
    // Check if we're at zero.
    if (this.props.gameStatus !='') { 
      this.stopTimer()
    }else if(seconds == 0){
      this.stopTimer()
      this.props.dispatch(updateGameStatus('loss'))
    }
  }

  render() {
    
    return(
      <div className="timer">
        {this.props.timer.time.m}:{this.props.timer.time.s}
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    gameStatus:state.status,
    timer:state.timer,
    isTimerRunning:state.isTimerRunning
  }
}
export default connect(mapStateToProps)(Timer);