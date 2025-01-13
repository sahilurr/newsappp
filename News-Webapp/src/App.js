import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

 


function App() {
 const pagesize =12;
  const [progress, setprogress] = useState(0);
  return (
  
     <div>
        <Router>
        <Navbar/>
     
        <Routes>
          <Route path="/" element={<News setprogress={setprogress}  apiKey="7e9559dc8777495ab3afac23c5c3d7df"  pagesize={pagesize} key= "general" category = "general" country = "us" />} />
          <Route path="/business" element={<News setprogress={setprogress} apiKey="7e9559dc8777495ab3afac23c5c3d7df"   pagesize={pagesize} key= "business" category = "business" country = "us" />} />
          <Route path="/entertainment" element={<News setprogress={setprogress}  apiKey="7e9559dc8777495ab3afac23c5c3d7df"  pagesize={pagesize} key= "entertainment" category = "entertainment" country = "us" />} />
          <Route path="/health" element={<News setprogress={setprogress}  apiKey="7e9559dc8777495ab3afac23c5c3d7df"  pagesize={pagesize} key= "health" category = "health" country = "us" />} />
          <Route path="/science" element={<News setprogress={setprogress} apiKey="7e9559dc8777495ab3afac23c5c3d7df"   pagesize={pagesize} key= "science" category = "science" country = "us" />} />
          <Route path="/sports" element={<News setprogress={setprogress}  apiKey="7e9559dc8777495ab3afac23c5c3d7df"  pagesize={pagesize} key= "sports" category = "sports" country = "us" />} />
          <Route path="/technology" element={<News setprogress={setprogress}  apiKey="7e9559dc8777495ab3afac23c5c3d7df"  pagesize={pagesize} key= "technology" category = "technology" country = "us" />} />          
        </Routes>
        <LoadingBar
        height={5}
        color='#2597DE'
        progress={progress}
       
      />
     
    </Router>
     
     </div>
  )
}

export default App


