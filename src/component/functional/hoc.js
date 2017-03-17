import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import splashScreen from '../enhancer/splashScreen';

@splashScreen
class Hoc extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                <h2>{data}</h2>
                <button onClick={browserHistory.goBack}>Go back!</button>
            </div>
        );
    }
}

module.exports = Hoc;