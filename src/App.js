import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  getMessage = () => {
    const { count } = this.state;
    if (count > 50) return "🔥 You're on fire!";
    if (count > 15) return "💪 Keep going!";
    if (count > 0) return "✨ Great start!";
    if (count < 0) return "😬 Don't go too low!";
    return "👋 Ready to begin?";
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">🔢 COUNTER</h1>
        <div className="counter-box">
          <p className="count">{this.state.count}</p>
          <p className="message">{this.getMessage()}</p>
        </div>
        <div className="button-group">
          <button className="btn increment" onClick={this.increment}>➕</button>
          <button className="btn decrement" onClick={this.decrement}>➖</button>
          <button className="btn reset" onClick={this.reset}>🔁</button>
        </div>
      </div>
    );
  }
}

export default App;