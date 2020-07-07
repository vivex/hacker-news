import React, {useEffect, useState} from 'react';
import LineChart from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';

const VotesGraph = ({news}) => {
  let windowWidth = typeof window!== 'undefined' ?  window.innerWidth : 300;
  if (windowWidth && windowWidth > 1200)
    windowWidth = 1200;

  const [width, setWidth] = useState(null);
  useEffect(()=> {
    setWidth(windowWidth);
  }, [windowWidth]);

  const data = [
    {
      color: "steelblue",
      points: []
    }
  ];
  if (news && news.hits) {
    news.hits.forEach((n)=> {
      data[0].points.push({y: n.objectID*1, x: n.points});
    });
  }


  return (
    <div className="c-votes-graph">
      <div>
        <LineChart
          xLabel="Votes"
          yLabel="Id"
          height={400}
          width={width}
          data={data}
        />
      </div>
    </div>
  );
};

export default VotesGraph;