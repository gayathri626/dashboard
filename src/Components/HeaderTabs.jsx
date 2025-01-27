import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const HeaderTabs = ({currentTab,setCurrentTab}) => {
  return (
    
 <Tabs value={currentTab} onChange={(e, val)=> setCurrentTab(val)}>
    <Tab label="Operation"/>
    <Tab label="Sustainability" />
    <Tab label="All Insight" />
    <Tab label="My Custom  Dashboard" />

  </Tabs>
  )
}

export default HeaderTabs