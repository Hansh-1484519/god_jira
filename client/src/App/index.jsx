import React, { Fragment} from 'react';

import Routes from './Routes'
import NormalizeStyles from './NormalizeStyle'
import BaseStyles from './BaseStyles'
import './fontStyles.css';

const App = () => {
    return (
        <Fragment>
            <NormalizeStyles/>
            <BaseStyles/>
            <Routes/>
            <fontStyles/>
        </Fragment>
      
    );
};
export default App;