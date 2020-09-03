import React from 'react';
import './Options.css';

class Options extends React.Component {
    render() {
        return (
            <div key={this.props.id} className="feature__item">
              <input
                type="radio"
                id={this.props.id}
                className="feature__option"
                name={this.props.name}
                checked={this.props.checked}
                onChange={(e) => this.props.handleUpdateFeature(this.props.featureName, this.props.item)}
              />
              <label htmlFor={this.props.id} className="feature__label">
                {this.props.itemName} ({this.props.usCurrencyFormat.format(this.props.itemCost)})
              </label>
            </div>
          );
    }
}

export default Options;