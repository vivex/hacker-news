import React, {useEffect, useState} from 'react';
import queryString from 'query-string';

import {useSelector, useDispatch} from 'react-redux';
import {fetchStories} from './news.api';
import NewsCard from "./NewsCard.component";
import VotesGraph from './VotesGraph.component';

const NewsList = () => {
  const [error, setError] = useState(null);
  const news = useSelector((state) => state.app.news) || {};
  const dispatch = useDispatch();

  async function fetchStory() {
    let page = 0;
    //fixme use router params
    if (window.location.href.split('?').length > 0) {
      const queryStringParams = queryString.parse(window.location.href.split('?')[1]);
      page = queryStringParams.p || 0;
    }
    try {
      let storiesRes = await fetchStories({query: '', page});
      dispatch({type: 'SET_NEWS', payload: storiesRes});
    } catch (e) {
      console.error('e');
      setError(e);
    }
  }

  useEffect(() => {
    if (!news || !news.hits) {
      fetchStory();
    }
    // eslint-disable-next-line
  }, []);


  return <div>

    {
      error ? (
        <div>Something Went Wrong, Please Try Again. Error: ${error.message}</div>
      ) : null
    }
    {
      news && news.hits && news.hits.map((n, i) => (
        <NewsCard {...n} i={i} key={i}/>
      ))
    }

    {
      news.page > 0 ? <React.Fragment><a href={`/?p=${news.page - 1}`}>Prev</a> |</React.Fragment> : null
    }
    <a href={`/?p=${news.page + 1}`}>Next</a>
    <VotesGraph news={news}/>
  </div>
};

NewsList.serverFetch = async (dispatch, route) => {
  let page = 0;
  if (route.split('?').length > 0) {
    const queryStringParams = queryString.parse(route.split('?')[1]);
    page = queryStringParams.p;
  }
  let storiesRes = await fetchStories({query: '', page});
  dispatch({type: 'SET_NEWS', payload: storiesRes});
};
export default NewsList;