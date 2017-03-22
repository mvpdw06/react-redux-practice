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
        this.scrollToPosition = this.scrollToPosition.bind(this);
    }
    componentDidMount() {
        if(window.addEventListener) {
            window.addEventListener('orientationchange', this.rotate, false);
            window.addEventListener('resize', this.changeViewSize, false);
            window.addEventListener('scroll', this.scrollToPosition, false);
        }
        else if(window.attachEvent) {
            // only IE8 ~ IE10
            window.attachEvent('orientationchange', this.rotate);
            window.attachEvent('resize', this.rotate);
            window.attachEvent('scroll', this.scrollToPosition);
            // scroll bar document.body.scrollTop
        }
    }
    componentWillReceiveProps(nextProps) {
        const nowTheme = this.props.state.theme;
        const nextTheme = nextProps.state.theme;
        if(nowTheme !== nextTheme) {
            this.changeCSS(nextTheme.path);
        }
    }
    componentWillUnmount() {
        if(window.removeEventListener) {
            window.removeEventListener('orientationchange', this.rotate, false);
            window.removeEventListener('resize', this.changeViewSize, false);
            window.removeEventListener('scroll', this.scrollToPosition, false);
        }
        else if(window.detachEvent) {
            // only IE8 ~ IE10
            window.detachEvent('orientationchange', this.rotate);
            window.detachEvent('resize', this.changeViewSize);
            window.detachEvent('scroll', this.scrollToPosition);
        }
    }
    rotate() {
        // TODO: check this API in all browsers.
        const nowViewVertical = this.props.state.vertical;
        const isNextViewVertical = window.screen.orientation.angle === 0;
        if(nowViewVertical !== isNextViewVertical) {
            this.props.viewRotate();
        }
    }
    changeCSS(cssFilePath) {
        document.getElementsByTagName('link')[0].href = cssFilePath;
    }
    changeViewSize() {
        // can adjust action sensitivity here
        this.props.viewChangeSize(window.innerWidth);
    }
    scrollToPosition() {
        // can adjust action sensitivity here
        console.log('scroll', document.body.scrollTop);
        this.props.scrollToPosition(document.body.scrollTop);
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
    viewChangeSize: (viewSize) => dispatch(global.viewChangeSize(viewSize)),
    themeChange: (theme) => dispatch(global.themeChange(theme)),
    scrollToPosition: (scrollTo) => dispatch(global.scrollTo(scrollTo)),
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);