import 'whatwg-fetch';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INITCUNTERSUCCESS = 'INITCUNTERSUCCESS';

export const counterAction = {
    initCounter() {
        return (dispatch) => {
            fetch('../data/counter.json')
            .then((response) => response.json())
            .then((value) => dispatch({
                type: INITCUNTERSUCCESS,
                value
            }));
        };
    },
    doIncrement: { type: INCREMENT },
    doDecrement: { type: DECREMENT }
}