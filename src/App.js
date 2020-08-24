import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Row, Col} from "react-bootstrap";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'wsvincent'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div className="container py-5">
        Hello {this.state.username} <br />
        Change name:
        <input type="text" value={this.state.username} onChange={this.handleChange} />
      </div>
    );
  }
}

export default App;