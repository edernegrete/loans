import {
  fork
} from 'redux-saga/effects';

import { getLoans, getLoan } from './loans';
export default function * rootSaga() {
  yield fork(getLoans);
  yield fork(getLoan);
}
