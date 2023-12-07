import { configureStore } from '@reduxjs/toolkit';
import mobileNavReducer from './mobileNav';
import doorLinksReducer from './doorLinks';

// calling the configuration function passing in an object with the reducer
export default configureStore({
  reducer: {
    mobileNav: mobileNavReducer,
    doorLinks: doorLinksReducer
  }
});