import {AddData} from '../Actions/actiontype';



const state={
    todoList:[]
};

function todoReducer (mState = {...state}, action){
    switch(action.type){
        case AddData:
            if(action.payload === null || action.payload === undefined){

            }else{
                mState.todoList.push(action.payload);
            }
            return deepCopy(mState);
        default:
            return deepCopy(mState);
    }
}


const deepCopy =obj =>{
    const newObj = JSON.parse(JSON.stringify(obj));
    return newObj;
}


export default todoReducer;