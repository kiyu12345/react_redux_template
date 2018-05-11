import { takeEvery, put } from 'redux-saga/effects';

import {
    SU_DOKO_NANI_DOUSHITA,
} from '../actions_su/index.js';

import {
    Saga_Doko_Nani_Doushita,
} from '../actions_saga/index.js';


export default function* index() {
    yield takeEvery(SU_DOKO_NANI_DOUSHITA, function* (action) {
        yield put(Saga_Doko_Nani_Doushita(action.payload));
    });
}