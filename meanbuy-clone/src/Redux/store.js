import {
    legacy_createStore as createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
 import { authReducer } from "./Auth/Reducer";
 import productReducer from "./Products/reducer"
  
  
  
  const rootReducer = combineReducers({ productReducer,authReducer });
  
  
  export const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );