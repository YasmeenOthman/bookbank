import { FETCH_POSTS } from './types';
import axios from 'axios';
// GET ALL DATA FOR HOME PAGE
path[path.length - 1]
var bookId = parseInt(path[path.length - 1]);
export const fetchPosts= () => dispatch => {   
            axios.get('http://localhost:8000/profile/:userId')
                .then(data => dispatch({
                    type: FETCH_POSTS,
                    payload: data
                }))
                .catch(err => {
                    console.log(err)
                })
                
        }