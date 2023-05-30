import React from 'react';
import Header from './Components/Header'
import TweedInput from './Components/TweedInput'
import TweedList from './Components/TweedList'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      posts: []
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    let pastPosts = this.state.posts
    this.setState({
        posts: [...pastPosts, this.state.value]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TweedInput handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <TweedList posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
