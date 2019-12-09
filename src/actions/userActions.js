import { FETCH_POSTS } from './types';
import axios from 'axios';
// GET ALL DATA FOR HOME PAGE
export const fetchPosts= () => dispatch => {   
            axios.get('http://localhost:8000/profile')
                .then(data => dispatch({
                    type: FETCH_POSTS,
                    payload: data
                }))
                .catch(err => {
                    console.log(err)
                })
                
        }