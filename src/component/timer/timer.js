import React, { Component } from 'react';
import { connect } from 'react-redux';
import { timer, counter } from '../../action/action';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.runEndlessTimer = this.runEndlessTimer.bind(this);
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
            updateCounter,
            state: {
                isPaused
            }
        } = this.props;
        
        if(currentTime < 1) {
            onResetTimer();
            // fetch Counter data.
            updateCounter();
        }
        else {
            !isPaused && onCountDown();
        }
    }
    render() {
        const { 
            state: {
                timespan,
                currentTime,
                isPaused
            },
            pauseTimer
        } = this.props;

        const buttonName = isPaused ? 'Run Timer' : 'Pause Timer';

        return(
            <div>
                <h2>This is a Timer</h2>
                <h3>* TimeSpan: {timespan}</h3>
                <h3>* CurrentTime: {currentTime}</h3>
                <button onClick={() => pauseTimer && pauseTimer()}>{buttonName}</button>
                <br/>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { state: state.timer };
}
const mapDispatchToProps = (dispatch) => ({
    onCountDown: () => dispatch(timer.doCountDown()),
    onResetTimer: () => dispatch(timer.doResetTimer()),
    pauseTimer: () => dispatch(timer.pauseTimer()),
    updateCounter: () => dispatch(counter.updateCounter())
});

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);