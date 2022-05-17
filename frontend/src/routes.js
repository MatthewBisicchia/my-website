import React from 'react';
import HomePage from './components/HomePage.js';
import ProjectsPage from './components/ProjectsPage.js';

const routes = 
[
    {
        path: 'mainSite/home', 
        element: <HomePage />
    },
    {
        path: 'mainSite/projects', 
        element: <ProjectsPage />
    }
];

export default routes;