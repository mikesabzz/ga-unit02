// Packages
import React from 'react';
import Axios from 'axios';
// Components
// import Stocks from './Stock';
import Header from './Header';
import Stocks from './Stocks';
// Css
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symbols: ['NDAQ', 'SPY', 'FB', 'SNAP'],
      stocks: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    this.getData();
    this.setState({isLoaded: true});
  }

  getData = async () => {
    await this.state.symbols.forEach(async (value) => {
      try {
        const apiUrl = `https://cloud.iexapis.com/stable/stock/${value}/quote?token=pk_8afff523a81b49b695125762e6d2b38e`;
        const apiResponse = await Axios.get(apiUrl);
        const stockInfo = apiResponse.data;

        if (apiResponse.status === 200) {
          this.setState(prevState => ({
            stocks: [...prevState.stocks, stockInfo]
          }), ()=> {console.log(this.state)});
        }
      } catch (error) {
        console.error(error);
      }
    });
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Stocks stocks={this.state.stocks} />
      </div>
    );
  }
}

export default App;
