export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const action = {
    doIncrement() { 
        return { type: INCREMENT }
    },
    doDecrement() { 
        return { type: DECREMENT }
    }
}