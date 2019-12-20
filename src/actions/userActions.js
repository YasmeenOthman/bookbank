import { FETCH_POSTS } from './types';
import {MARK_NOTIFICATIONS_READ} from './types';

import axios from 'axios';
// GET ALL DATA FOR HOME PAGE
var path = window.location.href;
var userId = parseInt(path[path.length - 1]);
export const fetchPosts= () => dispatch => {   
            axios.get(`https://rbk-bookbank.herokuapp.com/profile/${userId}`)
                .then(data => dispatch({
                    type: FETCH_POSTS,
                    payload: data
                }))
                .catch(err => {
                    console.log(err)
                })
                
        }

export const markNotificationsRead = (notificationIds) => dispatch => {
    axios.post('/', notificationIds)
    .then(res => {
        dispatch({
            type: MARK_NOTIFICATIONS_READ
        })
    })
    .catch(err => console.log(err))
}

