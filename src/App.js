import React from 'react';

import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
    const signed = useSelector(state => state.auth.signed);
    const personality = useSelector(state => state.user.profile.personality);

    const Routes = createRouter(signed, personality);

    return <Routes />;
}
