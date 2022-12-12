import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Layout, Menu, Divider, message } from 'antd';
// import { showItems } from "../../Helpers/customFunctions";
import {
  PushpinOutlined,
  HomeOutlined,
  CodeOutlined,
  AppstoreAddOutlined,
  PoweroffOutlined,
  VideoCameraOutlined,
  YoutubeOutlined
} from '@ant-design/icons';

const SideNav = () => {

    const [collapsed, setCollapsed] = useState(false);
  
    const onCollapse = (collapsed) => {
      setCollapsed(collapsed)
    };

    return (
        <Layout.Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{borderTopRightRadius: 38, borderBottomRightRadius: 38, backgroundColor: "#3B4343"}}>
          <center>
              {/* <img 
                  src="https://res.cloudinary.com/coictfms/image/upload/v1646580579/udsmlogopngtransparent_tezwmp.png" 
                  className="sidenav-image-logo"
                  alt='imagelogo'
              /> */}
          </center>
          <Divider style={{color: "gray", fontSize:"14px"}}/>
          <Menu theme="dark" mode="inline" style={{"backgroundColor":"#3B4343", "color":"#ffffff"}}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/home">Home</Link>
          </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/movies">Movies</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<YoutubeOutlined />}>
              <Link to="/tvseries">TV Series</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<CodeOutlined />}>
              <Link to="/upcoming">Upcoming</Link>
            </Menu.Item>
          </Menu>
        </Layout.Sider>
      );
};

export default SideNav;