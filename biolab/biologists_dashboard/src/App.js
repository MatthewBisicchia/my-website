import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getLabs } from './api/state_management/actions/labs';
import { useRoutes } from 'react-router-dom';
import routes from './routes.js';
import HeaderBar from './components/HeaderBar/HeaderBar.js';

const App = () => {

    //const [id, setId] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getLabs());
    }, [dispatch]);

    const elementsToRoute = useRoutes(routes);

    return(
        <React.Fragment> 
            <HeaderBar />
            {elementsToRoute}
        </React.Fragment>
    );
}

export default App;