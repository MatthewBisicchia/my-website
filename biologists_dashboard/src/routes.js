import React from 'react';
import Dashboard from './components/Dashboard';
import WelcomeScreen from './components/WelcomeScreen';
import StartNewLab from './components/StartNewLab';

const routes = 
[
    {
        path: 'biolab/dashboard', 
        element: <Dashboard />,
        children: [
            { path: 'welcome', element: <WelcomeScreen /> },
            { path: 'startNewLab', element: <StartNewLab />}
        ]
    }
];

export default routes;