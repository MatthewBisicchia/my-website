const labsReducer = (labs = [], action) => {

    switch(action.type)
    {
        case 'CREATE':
            return [...labs, action.payload];

        case 'GET_ALL':
            return action.payload;
        
        default: 
            return labs; 
    }
};

export default labsReducer;