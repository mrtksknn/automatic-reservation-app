import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PeopleTable from '../components/PeopleTable';

const Reports = ({ reportData }) => {

  return (
    <div>
      <h3>User Activities Reports</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={reportData}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid vertical={false} stroke="#f5f5f5" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="login" stroke="green" />
          <Line type="monotone" dataKey="logout" stroke="red" />
          {/* Diğer aktiviteler için buraya Line bileşeni ekleyebilirsiniz */}
        </LineChart>
      </ResponsiveContainer>

      <PeopleTable data={reportData} activity={true} />
    </div>
  );
};

export default Reports;