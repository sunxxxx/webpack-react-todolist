//引入新的类库
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

//store部分做如下修改
const finalCreateStore = compose(applyMiddleware(thunk))(createStore)
const store = finalCreateStore(rootReducer, {})

// redux-thunk的作用就是让dispatch方法不仅仅只接收action对象，还可以包含一个方法。我们可以在这个方法内部去调用异步代码
store.dispatch<any>(function(dispatch, getState) {
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_USER_NAME',
        name: value
      })
    }, 2000)
})