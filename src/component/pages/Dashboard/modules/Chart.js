import React from 'react';
//import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts';
import Title from './Title';

// Generate Sales Data

//const theme = useTheme();

function createData(time, amount) {
  return { time, amount };
}

const drawLine =(data) => {
  return(
    <LineChart
    data={data}
    margin={{
      top: 16,
      right: 16,
      bottom: 0,
      left: 24,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" stroke="#000000" />
    <YAxis stroke="#000000">
      <Label
        angle={270}
        position="left"
        style={{ textAnchor: 'middle', stroke:"#000000"}}
      >
        Sales ($)
      </Label>
    </YAxis>
    <Tooltip />
        <Legend />
    <Line type="monotone" dataKey="amount" stroke="#8884d8" dot={true} />
  </LineChart>
  )
}
const data = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', 2000),
];

export default function Charts() {
  React.useEffect(()=>{  
  },[])

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        {drawLine(data)}
      </ResponsiveContainer>
    </React.Fragment>
  );
}