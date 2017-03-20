# React redux practice

## Implement targets

### Frameworks

- [x] React
- [x] webpack
- [x] webpack devServer
- [x] ESLint
- [x] babel-eslint
- [x] React hot loader
- [x] Redux
- [x] react-redux
- [x] redux-thunk
- [x] react-router
- [x] react-router-redux
- [x] redux-devtools-extension
- [x] whatwg-fetch
- [x] Jest
- [x] eslint-plugin-jest

## Infrastructure

- [x] Async action to fetch json data.(redux-thunk, fetch api)
- [x] Devide logic in reducer / action / constant.
- [x] Hot-module-replacement for component.(React-hot-loader)
- [x] Hot-module-replacement for reducer.
- [x] Eslint can accept rule of Object Rest / Spread operator.
- [x] Eslint can accept class decorator.(babel-eslint)
- [ ] Webpack config file devide from production / development.

### Global services

- [x] Implement global service for detecting window layout change events (ex: rotate, view size change...).
- [ ] View rotate to changing component's presentation like mobile.
- [ ] Implement header / footer components like navigation bar.
- [ ] Header auto collapse.
- [ ] Theme change.

### Timer

- [x] Endless Timer component.
- [x] Timer trigger fetching data for synchronization in schedule.
- [x] Timer component implement pause / run feature.
- [x] Let timer should be a part of global service.
- [x] Timer use different time span to count down in different view.
- [x] Change view trigger timer reset.

- [ ] Trigger current page module update only.

### Counter
- [x] Simple counter component.
- [x] Copy counter component.
- [x] When fetching data is not first time, it can compare it selfs and show different color(better or worse).(data structure in reducer, css)
- [ ] Resolve after first time compare data, css will not change will cause color show be display.

### Router

- [x] Router handle url changing events.(react-router)
- [x] Router url change with action like redux.(react-router-redux)
- [x] Implement component to get routing parameter as props.(route rule setting)
- [x] Resolve when we stay in some router url and refresh website, it should be not show 404 not found.(devServer historyApiFallback: true)
- [x] Router link to a page and be redirect to another page.(browserHistory.push)

### High-order component

- [x] simple HOC.(enhancerFunction(Component))
- [x] HOC as class decorator.(@enhancer)
- [x] When view is changed, show loading screen.

### Unit-test

- [x] Using Jest framework.
- [x] Run Jest test script.
- [x] Resolve Jest API warning in eslint.(eslint-plugin-jest)
- [x] Test reducer's simple scenario.(reducer(state, actionObject))
- [x] Test all reducer sync action on expected.
- [x] All unit test's input and output should be fixed.
- [ ] Test all reducers async action.
- [ ] Test current location changed action.
- [ ] Test React Component.
- [x] Code coverage report.
- [ ] Test result report.

### Form validation

- [x] Simple form.
- [ ] Form validation.

## Dependencies

1. webpack
2. webpack-dev-server
3. babel-cli
4. babel-loader
5. babel-preset-es2015
6. babel-preset-react
7. babel-preset-stage-0
8. react
9. react-dom
10. react-hot-loader
11. redux
12. react-redux
13. redux-devtools-extension
14. redux-thunk
15. react-router
16. react-router-redux
17. whatwg-fetch
18. eslint
19. babel-eslint
20. babel-plugin-transform-decorators-legacy
21. jest
22. eslint-plugin-jest

## Start with base repository

* Use my [react-webpack-practice](https://github.com/mvpdw06/react-webpack-practice) repository.

## References

* [Redux: React Counter Example by Dan Abramov](https://egghead.io/lessons/javascript-redux-react-counter-example)
* [Redux DevTools Extension](http://extension.remotedev.io/)
