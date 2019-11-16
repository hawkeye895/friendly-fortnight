import { GET_WORDS } from "./types";
import axios from 'axios';

//GET WORDS


export const getWords = () => dispatch => {
    axios.get('/api/words/').then(res => {
            dispatch({
                type: GET_WORDS,
                payload: res.data
            });
        }).catch(err => console.log(err));
}