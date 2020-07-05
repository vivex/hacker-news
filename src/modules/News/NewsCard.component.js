import React, {useState} from 'react';
import moment from 'moment';
import './styles/news.scss';
const NewsCard = ({title, points, i, author, created_at, num_comments}) => {
  const [isUpVoted, setUpVoted] = useState(false);

  const toggleVote = () => {
    setUpVoted(!isUpVoted);
  }
  return <div className="c-news">
    <div className="c-news__title"><span onClick={toggleVote} className={`arrow-up ${isUpVoted? 'arrow-up__selected': null}`}></span>{title}</div>
    <div className="c-news__info">{points} points by {author} {moment(created_at).fromNow()} | {num_comments} comments </div>
  </div>
};

export default NewsCard;