import { FETCH_POSTS } from './types';
import axios from 'axios';
export const fetchPosts= () => dispatch => {
    console.log('fitching');
            axios.get('https://blooming-refuge-64917.herokuapp.com/getData')
                .then(data => dispatch({
                    type: FETCH_POSTS,
                    payload: data
                }))
                .catch(err => {
                    console.log(err)
                })
                
}
    
