const userAgent = window.navigator.userAgent;

const browserDetect = {
    isChrome: /Chrome/.test(userAgent),
    isFireFox: /FireFox/.test(userAgent),
    isIE: /IE|Edge/.test(userAgent),
    isEdge: /Edge/.test(userAgent),
    isAndroid: /Android/.test(userAgent),
    isNodeJs: /Node.js/.test(userAgent) // will be use in unit-test
}

browserDetect.name = browserDetect.isChrome ? 'Chrome' : 
            browserDetect.isFireFox ? 'FireFox' :
            browserDetect.isIE ? 'IE' :
            browserDetect.isEdge ? 'Edge' :
            browserDetect.isAndroid ? 'Android' :
            browserDetect.isNodeJs ? 'NodeJs' :
            'unknow browser';

module.exports = browserDetect;