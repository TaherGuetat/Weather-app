import { C_WEATHERFAILED, C_WEATHERSUCCESS, FORECASTFAILED, FORECASTSUCCESS, LOADING } from "../types/weatherTypes";

const initState={list:[],loading:true,error:null,forecast:[]}

export const weatherReducers=(state=initState,{type,payload})=>{
    switch (type) {
        case LOADING:
            return{...state,loading:true}
        case C_WEATHERSUCCESS:
            return{
                ...state,loading:false,list:payload
            } 
            case FORECASTSUCCESS:
            return{
                ...state,loading:false,forecast:payload
            } 
            case C_WEATHERFAILED:
                case FORECASTFAILED:
                return{
                    ...state,loading:false,error:payload
                }   
    
        default:
           return state;
    }
}