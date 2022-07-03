import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    item: "",
    list: []
  };

  handleChange(e) {
    this.setState({
      item: e.target.value
    });
  }

  handleAddClick() {
    if (!this.state.item.length) {
      return;
    }
    this.setState({
      item: "",
      list: [...this.state.list, this.state.item]
    });
  }

  render() {
    return (
<>
  <div className='container'>
    <h1>2Do List</h1>
    <input
      type="text"
      value={this.state.item}
      onChange={this.handleChange.bind(this)}
      name="item"/>
    <button onClick={this.handleAddClick.bind(this)}>Add</button>
      <div className='card'>
    <ul>
      {this.state.list.map((data, key) => (
        <li key={key}>🥑 {data}</li>))}
    </ul>
    </div>
  </div>

</>
    );
  }
}

export default App;
