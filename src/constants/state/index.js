import { createGlobalState } from 'react-hooks-global-state';

const { setGlobalState, useGlobalState } = createGlobalState({
    menuActivePage: '',
});

export { setGlobalState, useGlobalState};