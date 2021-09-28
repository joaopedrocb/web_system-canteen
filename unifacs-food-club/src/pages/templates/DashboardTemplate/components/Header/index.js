// dependencies
import React from 'react';
import { useLocation } from 'react-router-dom';

// presentation
import HeaderPresentation from './presentation';

// infra
import { LocalStorageAdapter } from '../../../../../infra'

// constants
import { LOGGED_USER } from '../../../../../constants'
import { AccessLevel } from '../../../../../enums';

function Header() {
    const location = useLocation();

    const storage = React.useMemo(() => {
        return new LocalStorageAdapter();
    }, []); 

    const [hasALoggedUser, setHasALoggedUser] = React.useState(false);
    const [isStudent, setIsStudent] = React.useState(false);

    React.useEffect(() => {
    const loggedUser = storage.getItem(LOGGED_USER);

    const { STUDENT } = AccessLevel;


    const isStudent = loggedUser?.accessLevel.id === STUDENT.id
    setIsStudent(isStudent)

    if (loggedUser) {
        setHasALoggedUser(true);

        return;
    }

    setHasALoggedUser(false);
    }, [storage]);

    function clearSession() {
        storage.removeItem(LOGGED_USER);
        document.location.reload();
    }

    const [managementPageHasBeenActive, setManagementPageHasBeenActive] = React.useState(false);

    React.useEffect(() => {
        if (location.pathname === '/' || location.pathname === '/login') {
            setManagementPageHasBeenActive(false);

            return;
        } 

        setManagementPageHasBeenActive(true);
    }, [location.pathname])

    return React.createElement(HeaderPresentation, {
        hasALoggedUser,
        isStudent,
        managementPageHasBeenActive,

        clearSession,
    });
}

export default Header;