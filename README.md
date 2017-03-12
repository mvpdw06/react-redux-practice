# React redux practice

## Implement targets

### Modules

- [x] React
- [x] webpack
- [x] webpack devServer
- [x] ESLint
- [x] React hot loader
- [x] Redux
- [x] react-redux
- [x] redux-thunk
- [x] react-router
- [x] react-router-redux
- [x] redux-devtools-extension

## Infrastructure

- [x] async action to fetch json data.
- [x] Devide logic in reducer and action creator.

### Global services

- [x] Implement global service for detecting window layout change events (ex: rotate, view size change...).
- [ ] View rotate to changing component's presentation like mobile.
- [ ] Implement header / footer components like navigation bar.
- [ ] Header auto collapse.

### Timer

- [x] Endless Timer component.
- [x] Timer trigger fetching data for synchronization in schedule.
- [x] Timer component implement pause / run feature.
- [x] Let timer should be a part of global service.
- [x] Timer use different time span to count down in different view.
- [x] Change view trigger timer reset.

### Cross modules

- [x] When fetching data is not first time, it can compare it selfs and show different color(better or worse).

### Router

- [x] Implement component to get routing parameter as props.
- [x] Resolve when we stay in some router url and refresh website, it should be not show 404 not found.
- [ ] When react-router changing view, show loading screen.
- [ ] Router link to a page and be redirect to another page.

### Others

- [ ] Form validation.
- [ ] Copy components.

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

## Start with base repository

* Use my [react-webpack-practice](https://github.com/mvpdw06/react-webpack-practice) repository.

## References

* [Redux: React Counter Example by Dan Abramov](https://egghead.io/lessons/javascript-redux-react-counter-example)
* [Redux DevTools Extension](http://extension.remotedev.io/)
