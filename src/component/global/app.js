import React, { Component } from 'react';
import { connect } from 'react-redux';

import { global } from '../../action/action';
import Timer from '../timer/timer';
import Header from './header';
import Footer from './footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.rotate = this.rotate.bind(this);
        this.changeViewSize = this.changeViewSize.bind(this);
        this.changeCSS = this.changeCSS.bind(this);
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
    componentWillReceiveProps(nextProps) {
        const { theme } = nextProps.state;
        this.changeCSS(theme.path);
    }
    changeCSS(cssFilePath) {
        document.getElementsByTagName('link')[0].href = cssFilePath;
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
                <button onClick={() => this.props.themeChange('pink') }>Change Theme to Pink</button>
                <button onClick={() => this.props.themeChange('blue') }>Change Theme to Blue</button>
                <Header />
                <Timer />
                { this.props.children }
                <Footer />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return { state: state.global };
}
const mapDispatchToProps = (dispatch) => ({
    viewRotate: () => dispatch(global.viewRotate()),
    viewChangeSize: () => dispatch(global.viewChangeSize()),
    themeChange: (theme) => dispatch(global.themeChange(theme)),
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);