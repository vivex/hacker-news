import React, {useEffect, useState} from 'react';
import queryString from 'query-string';

import {useSelector, useDispatch} from 'react-redux';
import {fetchStories} from './news.api';
import NewsCard from "./NewsCard.component";

const NewsList = () => {
  const news = useSelector((state)=> state.app.news) || {};
  const dispatch = useDispatch();
  useEffect(()=> {
    if (!news || !news.hits) {
      fetchStory();
    }
  }, [])
  async function fetchStory(commentId) {
    let storiesRes = await fetchStories({query: ''});
    dispatch({type: 'SET_NEWS', payload: storiesRes});
  }
  return <div>
    {news && news.hits && news.hits.map((n, i)=> (
      <NewsCard {...n} i={i}/>
    ))}
    <a href={`/?p=${news.page+1}`}>More...</a>
  </div>
};

NewsList.serverFetch = async (dispatch, route) => {
  let page = 0;
  if (route.split('?').length > 0) {
    const queryStringParams = queryString.parse(route.split('?')[1]);
    console.log('queryStringParams', queryStringParams);
    page = queryStringParams.p;
  }
  let storiesRes = await fetchStories({query: '', page});
  dispatch({type: 'SET_NEWS', payload: storiesRes});
};
export default NewsList;