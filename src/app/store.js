import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import matchReducer from '../features/match/matchSlice';
import tournamentReducer from '../tournamentSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    match: matchReducer,
    tournament: tournamentReducer
  },
});
