import React, { Component } from 'react';
import { browserHistory } from 'react-router';

const Enhancer = (ComposedComponent) => class extends Component {
    constructor(props) {
        super(props);
        this.state = { data: null };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ data: 'Hello' });
        }, 3000);
    }
    render() {
        return <ComposedComponent {...this.props} data={this.state.data} />;
    }
}

@Enhancer
class Hoc extends Component {
    render() {
        const { data } = this.props;
        if (!data) return <div>Waiting...</div>;
        return (
            <div>
                <h2>{data}</h2>
                <button onClick={browserHistory.goBack}>Go back!</button>
            </div>
        );
    }
}

module.exports = Hoc;