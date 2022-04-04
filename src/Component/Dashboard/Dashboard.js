
import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend,Line,Pie,PieChart,Tooltip, Treemap, XAxis, YAxis} from 'recharts';
import { useCharts } from '../../hooks/useCharts';

const Dashboard = () => {
    const [users, setUsers] = useCharts()
    console.log(users);
    return (
        <div className='mb-5'>
            <h1 className='text-center mt-5'>User Monthly Sallery</h1>
           
            <div className='row g-0'  style={{width:"100%"}}>
                <div className='col-md-6 col-12'>
                <h1 className='text-center mt-5'>User Sallery In BarChart</h1>
                    <BarChart className='mb-5 mx-auto' width={400} height={500} data={users}  isAnimationActive={true}>
                       
            <CartesianGrid strokeDasharray="3 3" />
           <XAxis dataKey="month" />
          <YAxis />
           <Tooltip/>
          <Legend  verticalAlign="top" height={36}/>
            <Bar dataKey="investment"  fill="#F6771F" />
            <Bar dataKey="revenue"  fill="#82ca9d" />
            </BarChart>
                </div>
                <div className='col-md-6 col-12'>
                <h1 className='text-center mt-5'>User Sallery In ComposedChart</h1>
                    <ComposedChart className='mx-auto mb-5' width={400 }height={500} data={users}>
        <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <CartesianGrid stroke="#f5f5f5" />
  <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
  <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
  <Line type="monotone" dataKey="investment" stroke="#ff7300" />
</ComposedChart>
                </div>
                <div className='col-md-6 col-12'>
                <h1 className='text-center mt-5'>User Sallery In Treemap</h1>
                <Treemap className='mx-auto mb-5'
  width={400}
  height={500}
  data={users}
  dataKey="sell"
  ratio={4 / 3}
  stroke="#fff"
                        fill="#8884d8"

                       
                       
                    >
                         <Tooltip/>
</Treemap>
                </div>

           </div>
           
        </div>
    );
};

export default Dashboard;