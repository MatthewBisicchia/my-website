import React from 'react';
import HeaderBar from './components/HeaderBar.js';
import { useRoutes } from 'react-router-dom';
import routes from './routes.js';

const App = () => {

    const elementsToRoute = useRoutes(routes);

    return(
        <>
 
            <HeaderBar />
            {elementsToRoute}
        </>
    );
}

export default App;
