import {AddData} from './actiontype';


export const addDataFunction = Data=> dispatch=>{
    console.log(Data,"Action Data");
    dispatch({
        payload:Data,
        type:AddData
    })
}