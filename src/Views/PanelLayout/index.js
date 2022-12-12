import React from 'react';
import { Layout } from 'antd';
import Routes from '../../Routes';

import HeaderComponent from '../../Components/HeaderComponent';
import FooterComponent from '../../Components/FooterComponent';
import SideNav from "../../Components/SideNav";

const PanelLayout = () => {

    return(
        <Layout style={{ minHeight: '100vh', backgroundColor: "#333636" }}>
            <SideNav/>
            <Layout className="site-layout" style={{ backgroundColor: "#333636" }}>
                <HeaderComponent/>
                <Layout.Content style={{ margin: '0 16px', paddingTop:"80px" }}>
                    <div className="site-card-wrapper">
                        <Routes/>
                    </div>
                </Layout.Content>
            {/* <FooterComponent/> */}
            </Layout>
        </Layout>
    );
};

export default PanelLayout;