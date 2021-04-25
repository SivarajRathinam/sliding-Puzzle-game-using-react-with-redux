import React, { lazy, Suspense } from "react";
// import Timer from './components/timer'
// import Grid from './components/grid'
// import KeyBoardManager from './components/keyboardManager'
// import Score from './components/score'
import store from "./config/store";
import { connect } from "react-redux";
// import { addArticle } from "./config/actions/index";
import background from "./image/background.png";
// import Modal from './components/modal'

window.store = store;
// window.addArticle = addArticle;
import Arrows from "./components/arrows";
import Loader from "./components/loader";
const Timer = lazy(() => import("./components/timer"));
const Grid = lazy(() => import("./components/grid"));
const KeyBoardManager = lazy(() => import("./components/keyboardManager"));
const Score = lazy(() => import("./components/score"));
const Instructions = lazy(() => import("./components/instructions"));
const Options = lazy(() => import("./components/options"));
// const background = lazy(()=>import('./image/background.png'))
const Modal = lazy(() => import("./components/modal"));

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Suspense fallback={<Loader />}>
        <div
          className="container"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Options />
          <div className="player-container">
            <KeyBoardManager>
              <Modal />
              <div className="game-header">
                <Score />
                <Timer />
              </div>
              <Grid />
              <Arrows />
            </KeyBoardManager>
          </div>
          <Instructions />
        </div>
      </Suspense>
    );
  }
}

export default App;
