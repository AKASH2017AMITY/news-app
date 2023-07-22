import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
import News from './components/News';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 11;
  const apiKey = process.env.REACT_APP_NEWS_APIKEY
  
  const [progress, setProgress] = useState(0)

     return (
      <div>

        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}

          />
          <Routes>

            <Route path='/' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="home" country="in" category="general" />}></Route>
            <Route path='/business' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" country="in" category="business" />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" country="in" category="entertainment" />}></Route>
            <Route path='/general' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country="in" category="general" />}></Route>
            <Route path='/health' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" country="in" category="health" />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" country="in" category="science" />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" country="in" category="sports" />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" country="in" category="technology" />}></Route>
          </Routes>
        </Router>

      </div>
    )

}

export default App
