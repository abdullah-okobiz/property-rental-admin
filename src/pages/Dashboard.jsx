import {
  CarryOutOutlined,
  //   EditOutlined,
  DeleteOutlined,
  DollarOutlined,
  MoneyCollectOutlined,
  ShoppingCartOutlined,
  //   PlusSquareOutlined,
} from "@ant-design/icons";

import React from "react";
import DashboardCountCard from "../components/dashboard/DashboardCountCard";
import PageTitle from "../utils/PageTitle";

const Dashboard = () => {
  return (
    <>
      <PageTitle title={"Dashboard"} />
      <div className="bg-white my-6 p-8 rounded-md">
        <div className="flex justify-between mb-4">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <h1 className="text-xl font-semibold mb-3">Product Summary</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <DashboardCountCard
            value={87}
            label="Total Orders"
            bgColor="#DCECDE"
            icon={<ShoppingCartOutlined />}
          />
          <DashboardCountCard
            value={90}
            bgColor="#DCECDE"
            label="Total Sales"
            icon={<DollarOutlined />}
          />
          <DashboardCountCard
            value={12}
            bgColor="#DCECDE"
            label="Total Stocks"
            icon={<DollarOutlined />}
          />
          <DashboardCountCard
            value={23}
            bgColor="#DCECDE"
            label="Total Stock Value"
            icon={<DollarOutlined />}
          />
        </div>

        <h1 className="text-xl font-semibold mb-3">Service Summary</h1>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <DashboardCountCard
            value={45}
            label="Total Bookings"
            bgColor="#97C7A0"
            icon={<CarryOutOutlined />}
          />
          <DashboardCountCard
            value={60}
            label="Total Booking Sales"
            bgColor="#97C7A0"
            icon={<MoneyCollectOutlined />}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
