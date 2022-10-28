import {call, put, takeEvery ,take, takeLeading, takeLatest, select, fork, spawn} from 'redux-saga/effects'
import {setIsLoading, setUsers, setComments} from '../actions/users-actions'
import {store} from '../index'

const customTimeout = () => new Promise((resolve) =>setTimeout(resolve,2000) )
export async function getPlaceholder(link){
    const request = await fetch(`https://jsonplaceholder.typicode.com/${link}`);
    const data = await request.json();
    return data;
}

export function* loadUsers(inp){
    const people = yield call(getPlaceholder, `users/${inp}`);
    yield put(setUsers(people));
}

export function* loadComments(inp){
    const comments = yield call(getPlaceholder, `comments/${inp}`);
    yield put(setComments(comments));
}

export function* usersWorker(){
    yield put(setIsLoading(true));
    yield customTimeout();
    const state = yield select(s => s.inputData)
    yield call(loadUsers,state);
    yield call(loadComments,state);
    yield put(setIsLoading(false));
}

export function* watchUsers(){
    yield takeEvery("FETCH_USERS", usersWorker);
}

export function* rootSaga(){
    yield watchUsers();
}

