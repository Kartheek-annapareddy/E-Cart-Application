import {legacy_createStore,applyMiddleware } from "redux";
import {logger} from "redux-logger"
import reducer from "./reducer";

   var mystore= legacy_createStore(reducer,applyMiddleware(logger));
   export default mystore;