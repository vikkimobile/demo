import React, { useState } from 'react'
import '../styles/sidebar.css';

function Sidebar() {
    const [select, setSelect] = useState('dashboard')
    const [community, setCommunity] = useState('brokers')
    const [showManagement, setShowManagement] = useState(false)
    const [showCommunity, setShowCommunity] = useState(false)
    const communityData = ['brokers', 'discord', 'blog']
    const managementData = ['task', 'clients', 'portfolios', 'droids']
    const menuSelect = (item) => {
        setSelect(item)
        if (item === 'management') {
            setShowManagement(!showManagement)
            setShowCommunity(false)
        } else if (item === 'community') {
            setShowCommunity(!showCommunity)
            setShowManagement(false)
        }

    }
    return (
        <>
            <div className="menu home-text">
                <div className='logo'><img src={require('../assets/logo.svg').default} className='sidebar-img' alt='' /></div>
                <div className='home' onClick={() => menuSelect('dashboard')}>
                    <div className='d-flex'>
                        <img src={require(`../assets/${select === 'dashboard' ? 'dashboard-fill.svg' : 'dashboard-none.svg'}`)} className='img sidebar-img' alt='' />
                        <div className='sidebar-text'>  <p>Dashboard</p>  </div>
                    </div>

                    <div className="home-hide">
                        <div className='dashboard-shadow d-flex'>
                            <div className='trangle' />
                            <div className='home-content'><h4>Dashboard</h4>I am shown when someone hovers over the div above. </div>
                        </div>
                    </div>
                </div>
                <div className='home' onClick={() => menuSelect('management')}>
                    <div className='d-flex'>
                        <img src={require(`../assets/${select === 'management' ? 'management-fill.svg' : 'management-none.svg'}`)} className='img sidebar-img' alt='' />
                        <div className='sidebar-text'> <p>Management</p> </div>
                    </div>
                    <div className="home-hide">
                        <div className='management-shadow d-flex'>
                            <div className='trangle' />
                            <div className='home-content'><h4>Management</h4> I am shown when someone hovers over the div above. </div>
                        </div>
                    </div>
                </div>
                {showManagement && select === 'management' && <div className='sub-menu-contener'>
                    {managementData?.map((item) => {
                        return (<div className='home' onClick={() => setCommunity(item)}>
                            <div className='d-flex'>
                                <img src={require(`../assets/${community === item ? `${item}-fill.svg` : `${item}-none.svg`}`)} className='sub-img sidebar-img' alt='' />
                                <div className='sidebar-text'> <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p> </div>
                            </div>
                        </div>)
                    })}
                </div>}
                <div className='home' onClick={() => menuSelect('community')}>
                    <div className='d-flex'>
                        <img src={require(`../assets/${select === 'community' ? 'community-fill.svg' : 'community-none.svg'}`)} className='img sidebar-img' alt='' />
                        <div className='sidebar-text'> <p>Community</p> </div>
                    </div>
                    <div className="home-hide">
                        <div className={`community-shadow d-flex ${select === 'management' && 'community-active'}`}>
                            <div className='trangle' />
                            <div className='home-content'><h4>Community</h4>I am shown when someone hovers over the div above. </div>
                        </div>
                    </div>
                </div>
                {showCommunity && select === 'community' && <div className='sub-menu-contener'>
                    {communityData?.map((item, index) => {
                        return (<div className='home' key={index} onClick={() => setCommunity(item)}>
                            <div className='d-flex'>
                                <img src={require(`../assets/${community === item ? `${item}-fill.svg` : `${item}-none.svg`}`)} className='sub-img sidebar-img' alt='' />
                                <div className='sidebar-text'> <p>{item.charAt(0).toUpperCase() + item.slice(1)}</p> </div>
                            </div>
                        </div>)
                    })}
                </div>}
                <div className='home' onClick={() => menuSelect('report')}>
                    <div className='d-flex'>
                        <img src={require(`../assets/${select === 'report' ? 'report-fill.svg' : 'report-none.svg'}`)} className='img sidebar-img' alt='' />
                        <div className='sidebar-text'> <p>Report</p> </div>
                    </div>
                    <div className="home-hide">
                        <div className={`report-shadow d-flex ${select === 'community' ? 'community-active' : select === 'management' ? 'management-active' : ''}`}>
                            <div className='trangle' />
                            <div className='home-content'><h4>Report</h4>I am shown when someone hovers over the div above. </div>
                        </div>
                    </div>
                </div>
                <div className='home bottom-support' onClick={() => menuSelect('support')}>
                    <div className='d-flex'>
                        <img src={require(`../assets/${select === 'support' ? 'support-fill.svg' : 'support-none.svg'}`)} className='img sidebar-img' alt='' />
                        <div className='sidebar-text'> <p>Support</p> </div>
                    </div>
                    <div className="home-hide">
                        <div className='support-shadow d-flex'>
                            <div className='trangle' />
                            <div className='home-content'><h4>Support</h4>I am shown when someone hovers over the div above. </div>
                        </div>
                    </div>
                </div>
                <div className='home bottom-profile' onClick={() => menuSelect('profile')}>
                    <div className='d-flex'>
                        <img src={require(`../assets/profile-none.svg`).default} className='img sidebar-img' alt='' />
                        <div className='sidebar-text'> <p>Profile</p> </div>
                    </div>
                    <div className="home-hide">
                        <div className='profile-shadow d-flex'>
                            <div className='trangle' />
                            <div className='home-content'>I am shown when someone hovers over the div above. </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content">
                <h1>DashBoard</h1>
            </div>


        </>
    )
}

export default Sidebar