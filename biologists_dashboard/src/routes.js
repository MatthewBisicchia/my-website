import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import StartNewLab from './components/StartNewLab/StartNewLab';

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