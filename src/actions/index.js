//import axios from 'axios';
//import {useState ,useEffect} from 'react';
export function loadData(){
    
    // const [posts, setPosts] = useState([])
    // useEffect(()=>{
    //     axios
    //     .get("http://localhost:8000/")
    //     .then(res => {
    //         console.log(res.data)
    //         setPosts(res.data)
    //     }).catch(err =>{
    //         console.log(err)
    //     })
    // }, [])
    // axios.get(`http://localhost:8000/`)
    // .then(res => {
    //   return res.data;
      
    // })
    // return(dispatch)=>{
    //      return axios.get("http://localhost:8000/").then((response)=>{
    //         console.log(response.data)
    //        dispatch(allData(response.data));
    //     // return allData(response.data)
    //     })
    // }
    // return dispatch => {
    //     dispatch(allData());
    //     axios.get("http://localhost:8000/")
    //     .then(res => res.json())
    //     .then(res => {
    //         if(res.error) {
    //             throw(res.error);
    //         }
    //         dispatch(allData(res.data));
    //         console.log(res.data)
    //         return res.data;
            
    //     })
    //     .catch(error => {
    //         dispatch(allData(error));
    //     })
    // }
 return {'x':1}
}

export const allData = (data) =>{
    return{
        type:"ALL_DATA",
        data: loadData(data)
    }
}
export const loginStatus = () =>{
    return{
        type:'SIGN_IN'
    };
};

export const logoutStatus = () =>{
    return{
        type:'SIGN_OUT'
    };
};
