import React from 'react';
import './Stocks.css'

const Stocks = (props) => {
    const stocks = props.stocks.map(stock => 
        <div className='stock-container' key={stock.symbol}>
            <div className='stock-container-col'>
                <h1>{stock.symbol}</h1>
                <h3 className="company-name">{stock.companyName}</h3>
            </div>
            <div className="stock-container-col">
                <h2 className="latest-price">{stock.latestPrice}</h2>
                <h2 className={ (Math.sign(stock.changePercent) === -1 ? "negative" : "positive") + "-percent-change"}>
                    {`${parseFloat(stock.changePercent * 100).toFixed(2) }%`}
                </h2>
            </div>
        </div>
        )

    return(
        <div className="stocks-container">
        {stocks}
            </div>
    )
}

export default Stocks;