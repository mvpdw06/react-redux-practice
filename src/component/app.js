import React, { Component } from 'react';
import { connect } from 'react-redux';

import Counter from './counter/counter';
import Timer from './timer/timer';
import actionCreator from '../action/action';

class App extends Component {
    constructor(props) {
        super(props);
        this.rotate = this.rotate.bind(this);
        this.changeViewSize = this.changeViewSize.bind(this);
    }
    componentDidMount() {
        if(window.addEventListener) {
            window.addEventListener('orientationchange', this.rotate, false);
        }
        else if(window.attachEvent) {
            // only IE8 ~ IE10
            window.attachEvent('orientationchange', this.rotate);
        }
    }
    componentWillUnmount() {
        if(window.removeEventListener) {
            window.removeEventListener('orientationchange', this.rotate, false);
        }
        else if(window.detachEvent) {
            // only IE8 ~ IE10
            window.detachEvent('orientationchange', this.rotate);
        }
    }
    rotate() {
        this.props.viewRotate();
    }
    changeViewSize() {
        this.props.changeViewSize();
    }
    render() {
        return(
            <div>
                <Timer />
                <Counter />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { state: state.global };
}
const mapDispatchToProps = (dispatch) => ({
    viewRotate: () => dispatch(actionCreator.global.viewRotate()),
    viewChangeSize: () => dispatch(actionCreator.global.viewChangeSize())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);