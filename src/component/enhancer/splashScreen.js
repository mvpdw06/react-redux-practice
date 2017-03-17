import React, { Component } from 'react';

const splashScreen = (ComposedComponent) => class extends Component {
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
        const { data } = this.state;
        if(!data) return <div>Waiting...</div>;
        return <ComposedComponent {...this.props} data={data} />;
    }
}

module.exports = splashScreen; 