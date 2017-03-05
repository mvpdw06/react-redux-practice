import 'whatwg-fetch';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INITCOUNTERSUCCESS = 'INITCOUNTERSUCCESS';
export const UPDATECOUNTERSUCCESS = 'UPDATECOUNTERSUCCESS';

export const counterAction = {
    initCounter() {
        return (dispatch) => {
            fetch('../data/counter.json')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: INITCOUNTERSUCCESS,
                value: data.value
            }));
        };
    },
    updateCounter() {
        return (dispatch) => {
            fetch('../data/counter.json')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: UPDATECOUNTERSUCCESS,
                value: data.value
            }));
        };
    },
    doIncrement: () => ({ type: INCREMENT }),
    doDecrement: () => ({ type: DECREMENT })
}