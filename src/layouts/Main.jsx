import { Layout, Menu, message } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import logo from "../assets/logo/logo.png";
import { IoMdLogOut } from "react-icons/io";
import { Avatar } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
import React, { useState } from "react";
import { menuItems } from "../constants/navItems";
import RenderdMenuItems from "../components/RenderedMenuItems";
import { getFirstLetters } from "../utils/getFirstLetters";
import AuthServices from "../services/auth.services";
import { useMutation } from "@tanstack/react-query";
const { processLogout } = AuthServices;

const Main = () => {
  const { mutate: logout } = useMutation({
    mutationFn: processLogout,
    onSuccess: () => {
      message.success("Logout Successful");
      localStorage.removeItem("accessToken");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    onError: (error) => {
      message.error(error?.response?.data?.message || "Logout failed");
    },
  });
  const navigate = useNavigate();
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    localStorage.getItem("selectedMenuItem") || "summary"
  );
  const handleMenuItemClick = (key) => {
    setSelectedMenuItem(key);
    localStorage.setItem("selectedMenuItem", key);
    key === "dashboard" ? navigate("/") : navigate(`/${key}`);
  };
  const [hideLayout] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider className="">
      {!hideLayout && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={300}
          className="bg-secondary h-screen border"
        >
          <div
            className={`text-black mx-auto font-bold text-2xl text-center rounded-full mt-5 mb-5 ${
              collapsed
                ? `w-[50px] h-[50px] leading-[50px]`
                : `w-[110px] h-[100px] leading-[110px]`
            }`}
          >
            <img src={logo} alt="Logo" />
          </div>
          <Menu
            theme="light"
            className="h-[calc(100vh-140px)] overflow-y-auto bg-secondary pb-3"
            mode="inline"
            defaultSelectedKeys={["summary"]}
            selectedKeys={[selectedMenuItem]}
            onClick={({ key }) => handleMenuItemClick(key)}
            rootClassName="custom-menu"
          >
            {RenderdMenuItems(menuItems)}
          </Menu>
        </Sider>
      )}
      <Layout className="h-screen">
        <Header className="w-full flex justify-between mx-0 px-0 items-center bg-secondary">
          <div
            onClick={() => setCollapsed(!collapsed)}
            className="px-4 text-white hover:text-gray-200 bg-secondary hover:bg-secondary/70 cursor-pointer"
          >
            {collapsed ? (
              <MenuUnfoldOutlined className="text-xl" />
            ) : (
              <MenuFoldOutlined className="text-xl" />
            )}
          </div>
          <div className="flex items-center justify-center gap-2">
            {/* <Avatar size="large" className="bg-primary">
              {getFirstLetters("hb")}
            </Avatar> */}

            <div
              className="px-4 cursor-pointer font-medium mr-6 text-white hover:text-gray-200"
              onClick={logout}
            >
              <IoMdLogOut size={30} />
            </div>
          </div>
        </Header>

        <Content className="px-5 pb-20 overflow-y-auto h-full">
          <Outlet />
        </Content>
        <h1 className="my-4 text-center">
          Developed by{" "}
          <a href="https://okobiz.com" className="font-bold text-black">
            okobiz
          </a>
        </h1>
      </Layout>
    </Layout>
  );
};

export default Main;
