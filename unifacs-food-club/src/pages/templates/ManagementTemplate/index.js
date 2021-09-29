// dependencies
import React from 'react';
import { useHistory } from 'react-router-dom'

// presentation
import ManagementTemplatePresentation from './presentation';

// infra
import { LocalStorageAdapter } from '../../../infra'


function ManagementTemplate(props) {
    const { children } = props;

    const history = useHistory();

    const storage = React.useMemo(() => {
        return new LocalStorageAdapter();
    }, []);

    const loggedUser = storage.getItem();

    const [hasALoggedUser, setHasALoggedUser] = React.useState(true);

    React.useLayoutEffect(() => {
    const loggedUser = storage.getItem();

    if (loggedUser) {
        setHasALoggedUser(true);
        return;
    }

    setHasALoggedUser(false);
    }, [storage]);

    React.useLayoutEffect(() => {
        if (!hasALoggedUser) {
            history.push('/');
        }
    }, [hasALoggedUser, history]);

    return React.createElement(ManagementTemplatePresentation, {
        loggedUser,
    }, children)
}

export default ManagementTemplate;