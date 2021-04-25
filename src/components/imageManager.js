import React from "react";
import orange from "../image/orange.png";
import apple from "../image/apple.png";
import berry from "../image/berry.png";
import cherry from "../image/cherry.png";
import grapes from "../image/grapes.png";
import human from "../image/human.png";
import mango from "../image/mango.png";
import { connect } from "react-redux";
import { updateSelectedFruit, updateFruitCollection } from "../config/actions";

class ImageManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isAnimating: false };
  }

  componentDidMount() {
    if (this.props.fruitsCollection.length == 0) {
      let fruitsCollection = [
        { url: orange, points: 1 },
        { url: apple, points: 1 },
        { url: berry, points: 2 },
        { url: cherry, points: 2 },
        { url: grapes, points: 3 },
        { url: mango, points: 5 },
      ];
      this.props.dispatch(updateFruitCollection(fruitsCollection));
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.total != this.props.total && prevProps.isVisible == true) {
      this.setState({
        prevtotal: prevProps.total,
        total: this.props.total,
        isAnimating: true,
      });
    }
    this.updateFruit();
  }
  transitionEnd() {
    this.setState({
      isAnimating: false,
    });
  }
  getImage() {
    if (
      (this.props.isVisible && !this.state.isAnimating) ||
      this.props.isHuman
    ) {
      if (this.props.isHuman) {
        return (
          <img
            src={human}
            className={`tile-image ${
              this.props.humanFacing ? this.props.humanFacing : "left"
            }`}
          />
        );
      } else if (this.props.fruit && this.props.fruit.selectedFruit) {
        return (
          <img
            src={this.props.fruit.selectedFruit.url}
            className="tile-image"
          />
        );
      }
    }
    if (this.state.isAnimating) {
      return (
        <p
          className="text-animate"
          onAnimationEnd={() => {
            this.transitionEnd();
          }}
        >
          {this.state.total - this.state.prevtotal}
        </p>
      );
    }
    return null;
  }
  updateFruit(forceUpdate) {
    if (this.props.fruit && !this.props.fruit.selectedFruit) {
      let fruit = this.props.fruitsCollection[
        Math.floor(Math.random() * this.props.fruitsCollection.length)
      ];
      this.props.dispatch(updateSelectedFruit(fruit));
    }
  }
  render() {
    return <>{this.getImage()}</>;
  }
}
function mapStateToProps(state) {
  return {
    human: state.human,
    fruit: state.fruit,
    fruitsCollection: state.fruitsCollection,
    total: state.total,
    humanFacing: state.humanFacing,
  };
}
export default connect(mapStateToProps)(ImageManager);
