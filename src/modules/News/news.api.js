import axios from 'axios';

let API_HOST = 'https://hn.algolia.com/api/v1';

if (typeof window !== 'undefined') //for development
 API_HOST = 'https://techient.herokuapp.com/api/v1';


export const fetchStories = async ({query = '', tags='story', page=0}) => {
    let response = await axios({url: `${API_HOST}/search?query=${query}&tags=${tags}&page=${page}`, responseType: 'json'});
    return response.data;
}