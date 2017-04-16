import { counterAction } from '../../action/counter/counterAction';

describe('counter sync action function', () => {
    it('increment without id, should return object with type property.', () => {
        expect(counterAction.doIncrement()).toEqual({ type: 'INCREMENT' });
    });
    it('increment with id: 0, should return object with type property and id', () => {
        expect(counterAction.doIncrement(0)).toEqual({ type: 'INCREMENT', id: 0 });
    });
    it('decrement without id, should return object with type property', () => {
        expect(counterAction.doDecrement()).toEqual({ type: 'DECREMENT' });
    });
    it('increment with id: 0, should return object with type property and id', () => {
        expect(counterAction.doDecrement(0)).toEqual({ type: 'DECREMENT', id: 0 });
    });
    it('copy counter, should return object with type property', () => {
        expect(counterAction.copyCounter(0)).toEqual({ type: 'COPYCOUNTER' });
    });
    it('set normal data type, should return object with type property', () => {
        expect(counterAction.setNormalDataType()).toEqual({ type: 'SETNORMALDATATYPE' });
    });
});

// TODO: async action