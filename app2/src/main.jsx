import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mystore from "./mystore";

import App from "./App";

ReactDOM.render(<Provider store={mystore}><BrowserRouter> <App /> </BrowserRouter></Provider>, document.getElementById("root"));
