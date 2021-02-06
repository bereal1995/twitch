import {all, call} from 'redux-saga/effects'
import appSaga from './app/saga';
import authSaga from './auth/saga';

function* sagas() {
    yield all([
        call(appSaga),
        call(authSaga),
    ])
}

export default sagas;