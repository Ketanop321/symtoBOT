import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import axios from 'axios';

const Dashboard = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: process.env.REACT_APP_COVID_API_URL,  
      };
      
      try {
        const response = await axios.request(options);
        console.log(response.data);  
        setData(response.data);  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="Dashboard">
      <h1 className="Dashboard-title">COVID-19 Dashboard</h1>
      <div className="Dashboard-items">
        <h1 className="Confirmed">Confirmed Cases: {data.cases}</h1>
        <h1 className="Recovered">Recovered: {data.recovered}</h1>
        <h1 className="Deaths">Deaths: {data.deaths}</h1>
        <h1 className="lastUpdated">Last Updated: {new Date(data.updated).toLocaleString()}</h1>
      </div>
      <div className="Button3">
        <h1><Link className='App-link' to='/'>Go Home</Link></h1>
      </div>
    </div>
  );
};

export default Dashboard;
