import React from 'react'
import { Layout } from 'antd';
import '../styles/dashboard.css'
import Sidebar from '../components/Sidebar';

const { Header } = Layout;

const DashboardScreen = () => {
  return (
    <div>
    <Sidebar/>
       {/* <Layout>
      <Header className='headerStyle' style={{color:'white'}}>Dashboard</Header><br /><br /><br /><br /><br /><br /><br />
        <h1>This page is under construction</h1>
    </Layout> */}
</div>
  )}

export default DashboardScreen;
