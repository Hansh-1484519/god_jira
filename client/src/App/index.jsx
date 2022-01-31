import React, { Fragment} from 'react';

import NormalizeStyles from './NormalizeStyle'
import Toast from './Toast';
import BaseStyles from './BaseStyles';
import Routes from './Routes';
import './fontStyles.css';

const App = () => {
    return (
        <Fragment>
            <NormalizeStyles/>
            <BaseStyles/>
            <Toast/>
            <Routes/>
        </Fragment>
      
    );
};
export default App;