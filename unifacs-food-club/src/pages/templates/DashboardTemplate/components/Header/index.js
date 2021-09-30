// dependencies
import React from 'react';
import { useLocation } from 'react-router-dom';

// presentation
import HeaderPresentation from './presentation';

function Header() {
    const location = useLocation();

    const [managementPageHasBeenActive, setManagementPageHasBeenActive] = React.useState(false);

    React.useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/login') {
            setManagementPageHasBeenActive(false);

            return;
        } 

        setManagementPageHasBeenActive(true);
    }, [location.pathname])

    return React.createElement(HeaderPresentation, {
        managementPageHasBeenActive,
    });
}

export default Header;