import React from 'react';
import Contact from './Contact';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const ListItem = ({ to, ...rest }) => (
      <Route path={to}
        children={({ match }) => (
          
        )}
    )
  }




  return (
    <div className="app-container">
      <Link to="/contact">Contact</Link>
      <Route path="/contact" coponent={Contact} />
    </div>
  );
}

export default App;
