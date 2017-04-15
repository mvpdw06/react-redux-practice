import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class BeRedirect extends Component {
    componentDidMount() {
        setTimeout(() => {
            browserHistory.push('./counter');
        }, 3000);
    }
    render() {
        return(
            <div>
                <h1>This component will be reditect to Counter component in 3 seconds.</h1>
            </div>
        )
    }
}

module.exports = BeRedirect;