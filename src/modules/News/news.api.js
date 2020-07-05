import axios from 'axios';

const API_HOST = 'http://localhost:3000/api/v1';

export const fetchStories = async ({query = '', tags='story', page=0}) => {
    let response = await axios({url: `${API_HOST}/search?query=${query}&tags=${tags}&page=${page}`, responseType: 'json'});
    return response.data;
}