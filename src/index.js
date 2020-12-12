import React from "react";
import ReactDOM from "react-dom";
import Seq from './components/Seq';
import './index.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);    
  }  

  render() {    
    return (
      <div className="container">        
        <Seq />        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
