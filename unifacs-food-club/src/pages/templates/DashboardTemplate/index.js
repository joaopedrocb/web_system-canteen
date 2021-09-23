// dependencies
import React from 'react';
import { useLocation  } from 'react-router';

// presentation
import DashboardTemplatePresentation from './presentation';

function DashboardTemplate(props) {
    const { children } = props;

    const [loginPageIsActive, setLoginPageIsActive] = React.useState(false);

    const loginPathName = '/login';

    const location = useLocation();


    React.useEffect(() => {
        if (location.pathname === loginPathName) {
            setLoginPageIsActive(true);

            return;
        }

        setLoginPageIsActive(false);
    }, [location])

    return React.createElement(DashboardTemplatePresentation, {
        loginPageIsActive,
    }, children)
}

export default DashboardTemplate;