import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate, Interpolate } from 'react-i18next';

import i18n from '../../i18n';
import { global } from '../../action/action';
import Timer from '../timer/timer';
import Header from './header';
import Footer from './footer';

@translate(['app'], { wait: true })
class App extends Component {
    constructor(props) {
        super(props);
        this.rotate = this.rotate.bind(this);
        this.changeViewSize = this.changeViewSize.bind(this);
        this.changeCSS = this.changeCSS.bind(this);
        this.scrollToPosition = this.scrollToPosition.bind(this);
        this.toggleLanguage = this.toggleLanguage.bind(this);
    }
    componentWillMount() {
        //TODO: may can set default language here, when language code is not support.
        this.toggleLanguage(this.props.params.lang)
    }
    componentDidMount() {
        window.addEventListener('orientationchange', this.rotate, false);
        window.addEventListener('resize', this.changeViewSize, false);
        window.addEventListener('scroll', this.scrollToPosition, false);
    }
    componentWillReceiveProps(nextProps) {
        const nowTheme = this.props.state.theme;
        const nextTheme = nextProps.state.theme;
        if(nowTheme !== nextTheme) {
            this.changeCSS(nextTheme.path);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('orientationchange', this.rotate, false);
        window.removeEventListener('resize', this.changeViewSize, false);
        window.removeEventListener('scroll', this.scrollToPosition, false);
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
        this.props.scrollToPosition(document.body.scrollTop);
    }
    toggleLanguage(newLanguage) {
        if(newLanguage !== i18n.language) {
            i18n.changeLanguage(newLanguage);
        }
    }
    render() {
        const { 
            t,
            themeChange,
            children
        } = this.props;
        return(
            <div>
                <button onClick={() => themeChange('pink')}>{t('app:changeThemeToPink')}</button>
                <button onClick={() => themeChange('blue')}>{t('app:changeThemeToBlue')}</button>
                <br />
                <button onClick={() => this.toggleLanguage('en-gb')}>{t('app:changeToEN')}</button>
                <button onClick={() => this.toggleLanguage('zh-tw')}>{t('app:changeToZH')}</button>
                <Header />
                <Timer />
                { children }
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