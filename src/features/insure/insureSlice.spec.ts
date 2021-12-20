import insureReducer, {
  InsureState,
  reset,
  fetchProductAsync,
} from './insureSlice';

describe('counter reducer', () => {
  const initialState: InsureState = {
    value: undefined,
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(insureReducer(undefined, { type: 'unknown' })).toEqual({
      value: undefined,
      status: 'idle',
    });
  });

  it('should handle reset state', () => {
    expect(insureReducer(undefined, reset())).toEqual({
      value: undefined,
      status: 'idle',
    });
  });
});
