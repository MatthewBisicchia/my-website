import React from 'react';
import HomePage from './components/HomePage.js';
import ProjectsPage from './components/ProjectsPage.js';

const routes = 
[
    {
        path: 'home', 
        element: <HomePage />
    },
    {
        path: 'projects', 
        element: <ProjectsPage />
    }
];

export default routes;