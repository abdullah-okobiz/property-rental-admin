import { Table, Button, Select, Input, Image, Popconfirm } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

const Flat = () => {
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState();
  const [sortOrder, setSortOrder] = useState();
  const [page, setPage] = useState(1);

  const dummyData = [
    {
      _id: "1",
      coverTitle: "Luxury Apartment Downtown",
      category: "Apartment",
      userName: "Jane Doe",
      userEmail: "jane@example.com",
      status: "in_progress",
      coverImage: "https://via.placeholder.com/80",
    },
    {
      _id: "2",
      coverTitle: "Cozy Suburban House",
      category: "House",
      userName: "John Smith",
      userEmail: "john@example.com",
      status: "pending",
      coverImage: "https://via.placeholder.com/80",
    },
  ];

  const columns = [
    {
      title: "SL",
      render: (_, __, index) => index + 1,
    },
    {
      title: "Cover Title",
      dataIndex: "coverTitle",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "User Name",
      dataIndex: "userName",
    },
    {
      title: "User Email",
      dataIndex: "userEmail",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status) => (
        <Select
          value={status}
          onChange={(value) => console.log("Change status:", value)}
          style={{ width: 120 }}
        >
          <Option value="in_progress">in_progress</Option>
          <Option value="pending">pending</Option>
          <Option value="approve">approve</Option>
          <Option value="rejected">rejected</Option>
        </Select>
      ),
    },
    {
      title: "Cover Image",
      dataIndex: "coverImage",
      render: (img) =>
        img ? (
          <Image width={80} src={img} />
        ) : (
          <div className="w-20 h-20 bg-gray-200 flex items-center justify-center">
            N/A
          </div>
        ),
    },
    {
      title: "Actions",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this flat?"
          onConfirm={() => console.log("Delete:", record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button icon={<DeleteOutlined />} danger />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div
      className="w-full bg-white my-6 p-8 rounded-md overflow-y-auto"
      style={{ maxHeight: "80vh" }}
    >
      <h1 className="text-2xl font-bold mb-4">Flat Management</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Search by cover title or user email"
          prefix={<SearchOutlined />}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          allowClear
          style={{ width: 250 }}
        />

        <Select
          placeholder="Filter by Status"
          value={statusFilter}
          onChange={(value) => {
            setStatusFilter(value);
            setPage(1);
          }}
          allowClear
          style={{ width: 180 }}
        >
          <Option value="in_progress">in_progress</Option>
          <Option value="pending">pending</Option>
          <Option value="approve">approve</Option>
          <Option value="rejected">rejected</Option>
        </Select>

        <Select
          placeholder="Sort By"
          value={sortOrder}
          onChange={(value) => {
            setSortOrder(value);
            setPage(1);
          }}
          allowClear
          style={{ width: 150 }}
        >
          <Option value={1}>New</Option>
          <Option value={-1}>Old</Option>
        </Select>
      </div>

      <Table
        dataSource={dummyData}
        columns={columns}
        rowKey="_id"
        pagination={{
          current: page,
          pageSize: 10,
          total: dummyData.length,
          onChange: (p) => setPage(p),
        }}
        scroll={{ x: "max-content" }}
      />
    </div>
  );
};

export default Flat;
