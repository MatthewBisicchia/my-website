import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes.js';
import HeaderBar from './components/HeaderBar.js';

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