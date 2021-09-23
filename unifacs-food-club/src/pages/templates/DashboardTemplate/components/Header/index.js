// dependencies
import React from 'react';

// presentation
import HeaderPresentation from './presentation';

// infra
import { LocalStorageAdapter } from '../../../../../infra'

// constants
import { LOGGED_USER } from '../../../../../constants'

function Header() {
    const storage = React.useMemo(() => {
        return new LocalStorageAdapter();
    }, []); 

    const [hasALoggedUser, setHasALoggedUser] = React.useState(false);

    React.useEffect(() => {
    const loggedUser = storage.getItem(LOGGED_USER);

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


    return React.createElement(HeaderPresentation, {
        hasALoggedUser,

        clearSession,
    });
}

export default Header;