import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Initial state
const initialState = {
  user: null,
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(rootReducer);

// Provider component to provide the store to your app
const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;