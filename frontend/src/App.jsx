import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import Body from './components/Body';
import Feature from './components/Feature.jsx';
import Home from './components/Home.jsx';
import Layout from './components/Layout';
import Plan from './components/Plan';
import SetUp from './components/SetUp';
import SignUp from './components/SignUp';
import Site from './components/Site.jsx';
import Welcome from './components/Welcome';
const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setup" element={<SetUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/body" element ={<Body/>}/>
          <Route path="/feature" element ={<Feature/>}/>
          <Route path="/site" element ={<Site/>}/>
          <Route path="/plan" element={<Plan/>}></Route>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

