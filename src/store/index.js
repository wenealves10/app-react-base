import { createStore } from 'redux';

import rootReducer from './modules/rootReduces';

const store = createStore(rootReducer);

export default store;
