import React, { Component } from 'react';
import Timer from '../timer/timer';
import Header from './header';
import Footer from './footer';

const App = ({
    t,
    themeChange,
    children,
    toggleLanguage,
    pathname
}) => (
    <div>
        <button onClick={() => themeChange('pink')}>{t('app:changeThemeToPink')}</button>
        <button onClick={() => themeChange('blue')}>{t('app:changeThemeToBlue')}</button>
        <br />
        <button onClick={() => toggleLanguage('en-gb')}>{t('app:changeToEN')}</button>
        <button onClick={() => toggleLanguage('zh-tw')}>{t('app:changeToZH')}</button>
        <Header />
        <Timer pathname={pathname} />
        {children}
        <Footer />
    </div>
);

module.exports = App;