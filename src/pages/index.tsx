import React, { useContext } from 'react';
import DefaultLayout from '../layouts/default-layout';
import { AppContext } from '../reducers/context';

const IndexPage = () => {
    const { state } = useContext(AppContext);
    return (
        <DefaultLayout>
            <h1>Template for</h1>
            <p>Gatsby</p>
            <p>Typescript</p>
            <p>Styled Components</p>
            <p>Global State (useContext + useReducer)</p>
            <hr />
            <p>{state.salute}</p>
        </DefaultLayout>
    );
};

export default IndexPage;
