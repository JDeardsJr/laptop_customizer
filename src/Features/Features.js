import React from 'react';
import './Features.css';
import Options from '../options/Options';
import slugify from 'slugify';

class Features extends React.Component {
    render() {
          const feature = this.props.name
          const options = this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <Options
                id={itemHash}
                name={slugify(feature)}
                checked={item.name === this.props.selected[feature].name}
                handleUpdateFeature={this.props.handleUpdateFeature}
                key={itemHash}
                itemName={item.name}
                itemCost={item.cost}
                featureName={feature}
                item={item}
                usCurrencyFormat={this.props.usCurrencyFormat}
              />
            )})

            return (
              <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                  <h3>{this.props.name}</h3>
                </legend>
                {options}
              </fieldset>
            );
          
        
    }
}

export default Features;