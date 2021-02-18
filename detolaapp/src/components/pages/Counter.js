import React from "react";

class Counter extends React.Component {

    state = {
      count: 0
    };
  
   
    handleIncrement = () => {
      
      this.setState({ count: this.state.count + 1 });
    };
  

    handleDecrement = () => {
     
      this.setState({ count: this.state.count - 1 });
    };
  
    render() {
      return (
        <div className="card text-center">
          <div className="card-header bg-primary text-white">
            <b>Click Increment button to increase count and the Decrement button to reduce count!</b>
          </div>
          <div className="card-body">
            <p className="card-text">Click Count: {this.state.count}</p>
            <button className="btn btn-primary" onClick={this.handleIncrement}>
              Increment
            </button>{" "}
            <button className="btn btn-danger" onClick={this.handleDecrement}>
              Decrement
            </button>
          </div>
        </div>
    
        
    );
}
}

export default Counter;