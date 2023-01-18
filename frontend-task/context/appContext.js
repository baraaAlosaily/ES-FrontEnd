import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import reducer from './reducer';


import {
    GET_ALL_DATA_START,
    GET_ALL_DATA_SUCCESS,
    SEARCH_DATA_START,
    SEARCH_DATA_SUCCESS
} from './action';

const initialState = {
    isLoading: false,
    results:[],
    totalResults:0,
	ActionType:[],
	ApplicationType:[]

}

const AppContext = React.createContext();


const BASE_URL = process.env.NEXT_PUBLIC_URL;


const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const getAllData = async (search) => {
		console.log(search);
		dispatch({ type: GET_ALL_DATA_START });
		try {
			let { data } = await axios.get(`https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f`);
			let actionTypey=data?.result?.auditLog.map((item)=>item.actionType);
			actionTypey=actionTypey.filter((element, index) => {
				return actionTypey.indexOf(element) === index;
			});
			let applicationType=data?.result?.auditLog.map((item)=>item.applicationType);
			applicationType=applicationType.filter((element, index) => {
				return applicationType.indexOf(element) === index;
			});
			if(search){
				let {actionType,applicationId,applicationType,creationTimestamp,creationTimestamp2,logId}=search;

             	if(actionType){
				  data.result.auditLog=data.result.auditLog.filter((item)=>item.actionType===search.actionType);
		    	}   
			    if(applicationType){
				data.result.auditLog=data.result.auditLog.filter((item)=>item.applicationType===applicationType);
			    }
			     if(applicationId){
				data.result.auditLog=data.result.auditLog.filter((item)=>item.applicationId==applicationId);
			     }
		        if(logId){
				console.log(logId)
				data.result.auditLog=data.result.auditLog.filter((item)=>item.logId==logId);
		     	}
				if(creationTimestamp&&creationTimestamp2){
					data.result.auditLog = data.result.auditLog.filter((item) => {
						return item.creationTimestamp.split(" ")[0] >= creationTimestamp &&
					        	item.creationTimestamp.split(" ")[0] <= creationTimestamp2
					});
				}
			
			}

			dispatch({ type: GET_ALL_DATA_SUCCESS, payload: {results:data,ActionType:actionTypey,ApplicationType:applicationType}});
		} catch (error) {
			console.log(error);
		}
	};

    
	return (
		<AppContext.Provider
			value={{
				...state,
				getAllData,
			}}
		>
			{children}
		</AppContext.Provider>
	);

}

const useAppContext = () => {
	return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
