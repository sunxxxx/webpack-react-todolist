// import { createStore, combineReducers, applyMiddleware } from 'redux'

// function user(state = {name: 'redux'}, action) {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       }
//   }

//   return state
// }

// function project(state = {name: 'min-react'}, action) {
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       }
//   }

//   return state
// }


// var rootReducer = combineReducers({
//   user,
//   project
// })

// var store = createStore(rootReducer)




import { createStore } from 'redux'

const initState = {
    count:0
}

const ADD_TODO = {
    type:'ADD',
    payload:'加法操作'
}

const LESS_TODO = {
    type:'LESS',
    payload:'减法操作'
}

const counter = (state = initState,action) => {
    switch(action.type){
        case 'ADD':
            return {
                count:state.count+1
            }
        case 'LESS':
            return {
                count:state.count-1
            }
        default:
            return state;
    }
}

let  store = createStore(counter);

let unlistener = store.subscribe(()=>{ //用来添加一个变化监听器
    console.log(store.getState())
})

store.dispatch(ADD_TODO);
store.dispatch(LESS_TODO);

unlistener()

export default store;
