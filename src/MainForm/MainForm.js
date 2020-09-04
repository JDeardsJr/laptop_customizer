import React from 'react';
import './MainForm.css';
import Features from '../Features/Features';
import FEATURES from '../FeaturesObject/FEATURES';

class MainForm extends React.Component {
    render() {
        const features = Object.keys(FEATURES).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <Features
                    name={feature}
                    key={featureHash}
                    featureHash={featureHash}
                    options={FEATURES[feature]}
                    selected={this.props.selected}
                    handleUpdateFeature={this.props.handleUpdateFeature}
                    usCurrencyFormat={this.props.usCurrencyFormat}
                />
            )
        })
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        );
    }
}

export default MainForm;