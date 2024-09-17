import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Content from '../Components/Content/Content'
import Suggestions from '../Components/Suggestions/Suggestions'

const Home = () => {
  return (
    <div>
      <Navbar/>
    <Sidebar/>
    <Suggestions/>
    <Content/>
    </div>
  )
}

export default Home
