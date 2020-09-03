import React from 'react';
import './MainSummary.css';
import Summary from '../Summary/Summary';
import Total from '../Total/Total';

class MainSummary extends React.Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <Summary 
                    selected={this.props.selected} 
                    usCurrencyFormat={this.props.usCurrencyFormat}
                />
                <Total 
                    selected={this.props.selected} 
                    usCurrencyFormat={this.props.usCurrencyFormat}
                />
            
            </section>
        )
    }
}

export default MainSummary;