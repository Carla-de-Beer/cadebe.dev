import React from 'react';
import './App.scss';
import Content from './components/welcome/content/Intro';
import ProjectTiles from './components/welcome/projectTiles/ProjectTiles';
import Footer from './components/welcome/footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.scss';

function App() {
    return (
        <div className='mt-4 ml-5 mr-5 mb-5'>
            <Content/>
            <ProjectTiles/>
            <Footer/>
        </div>
    )
}

export default App;