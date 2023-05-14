export const pending = state => {
  state.isLoading = true;
};
export const fulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const rejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
export const fulfilledGet = (state, { payload }) => {
  state.items = payload;
};
export const fulfilledPost = (state, { payload }) => {
  state.items.push(payload);
};
export const fulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload);
};
