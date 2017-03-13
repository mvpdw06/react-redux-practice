import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreator from '../../action/action';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.runEndlessTimer = this.runEndlessTimer.bind(this);
        this.pauseOrRun = this.pauseOrRun.bind(this);
    }
    componentDidMount() {
        this.timerInstance = setInterval(() => {
            this.runEndlessTimer(this.props.state.currentTime);
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerInstance);
    }
    runEndlessTimer(currentTime) {
        const {
            onCountDown,
            onResetTimer,
            updateCounter
        } = this.props;
        
        if(currentTime < 1) {
            onResetTimer();
            // fetch Counter data.
            updateCounter();
        }
        else {
            !this.isPaused && onCountDown();
        }
    }
    pauseOrRun() {
        this.isPaused = !this.isPaused;
    }
    render() {
        const { 
            state: {
                timespan,
                currentTime
            }
        } = this.props;

        const buttonName = this.isPaused ? 'Run Timer' : 'Pause Timer';

        return(
            <div>
                <h2>This is a Timer</h2>
                <h3>* TimeSpan: {timespan}</h3>
                <h3>* CurrentTime: {currentTime}</h3>
                <button onClick={this.pauseOrRun}>{buttonName}</button>
                <br/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { state: state.timer };
}
const mapDispatchToProps = (dispatch) => ({
    onCountDown: () => dispatch(actionCreator.timer.doCountDown()),
    onResetTimer: () => dispatch(actionCreator.timer.doResetTimer()),
    updateCounter: () => dispatch(actionCreator.counter.updateCounter())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);