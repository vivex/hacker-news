import React, {useEffect} from 'react';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';

const VotesGraph = ({news}) => {

  useEffect(()=> {

  }, [news]);

  const data = [
    {
      color: "steelblue",
      points: []
    }
  ];
  console.log('news', news);
  if (news && news.hits) {
    news.hits.forEach((n)=> {
      data[0].points.push({y: n.objectID*1, x: n.points});
    });
  }
  let windowWidth = typeof window!== 'undefined' ?  window.innerWidth : null;
  if (windowWidth && windowWidth > 1200)
    windowWidth = 1200

  return (
    <div className="c-votes-graph">
      <div>
        <LineChart
          xLabel="Votes"
          yLabel="Id"
          height={400}
          width={windowWidth}
          data={data}
        />
      </div>
    </div>
  );
};

export default VotesGraph;