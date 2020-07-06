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
      data[0].points.push({x: n.objectID*1, y: n.points});
    });
  }
  console.log('data', data);
  return (
    <div>
      <div className="App">
        <LineChart
          xLabel="Id"
          yLabel="Votes"
          height={400}
          data={data}
        />
      </div>
    </div>
  );
};

export default VotesGraph;