import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { LayoutWrapper, Main } from './Layout.style';

function Layout({ children }) {

    return (
        <LayoutWrapper>
            <div>
                <Navbar />
                <Main>
                    {children}
                </Main>
            </div>
            <Footer />
        </LayoutWrapper>
    );
}

export default Layout;