import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function header() {
  return (
    <div>
  <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab label="Item One" {...a11yProps(0)} />
    <Tab label="Item Two" {...a11yProps(1)} />
    <Tab label="Item Three" {...a11yProps(2)} />
  </Tabs>
    </div>
  )
}

export default header