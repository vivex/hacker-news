import axios from 'axios';

const API_HOST = 'http://localhost:3001/api/v1';

export const fetchStories = async ({query = '', tags='story', page}) => {
    let response = await axios({url: `${API_HOST}/search?query=${query}&tags=${tags}&page=${page}`, responseType: 'json'});
    return response.data;
}