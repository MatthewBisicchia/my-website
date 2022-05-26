import React from 'react';
import Dashboard from './components/Dashboard/Dashboard';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import StartNewLab from './components/StartNewLab/StartNewLab';
import OpenLabs from './components/OpenLabs/OpenLabs';

const routes = 
[
    {
        path: 'biolab/dashboard', 
        element: <Dashboard />,
        children: [
            { path: 'welcome', element: <WelcomeScreen /> },
            { path: 'startNewLab', element: <StartNewLab />},
            { path: 'openLabs', element: <OpenLabs />},
            { path: 'openIssues', element: <StartNewLab />},
        ]
    }
];

export default routes;