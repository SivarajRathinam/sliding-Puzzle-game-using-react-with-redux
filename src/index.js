import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js'
import { Provider } from "react-redux";
import store from "./config/store";

const App = lazy(()=>import('./App.js'))

ReactDOM.render(<Provider store={store}>
					<Suspense fallback=<div></div>>
						<App/>
					</Suspense>
				</Provider>,document.getElementById('root'));