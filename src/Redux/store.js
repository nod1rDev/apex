// store.js
import { configureStore } from '@reduxjs/toolkit';

import ControlSilce from './ControlSilce';

const store = configureStore({
  reducer: {
    control: ControlSilce,
  },
});

export default store;
