import React, { ReactNode } from 'react';
import Helmet from 'react-helmet';
import { AppProvider } from '../reducers/context';

type DefaultLayoutProps = {
    children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div>
            <Helmet
                title="Gatsby Typescript Template"
                meta={[
                    { name: 'description', content: 'template' },
                    { name: 'keywords', content: 'template, something' }
                ]}
            />
            <AppProvider>{children}</AppProvider>
        </div>
    );
};

export default DefaultLayout;
