import {
  Button,
  Form,
  Input,
  Modal,
  Popconfirm,
  Select,
  Table,
  message,
} from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  PlusSquareOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import CategoryServices from "../services/category.services";
import FeatureServices from "../services/feature.services";

const {
  processDeleteCategory,
  processEditCategory,
  processGetCategory,
  processrAddCategory,
} = CategoryServices;

const { processGetFeature } = FeatureServices;

const Category = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingCategory, setEditingCategory] = useState(null);

  const queryClient = useQueryClient();

  // Fetch categories
  const { data: categoryRes, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: processGetCategory,
  });
  const categories = categoryRes?.data || [];

  // Fetch features
  const { data: featureRes } = useQuery({
    queryKey: ["features"],
    queryFn: processGetFeature,
  });
  const features = featureRes?.data || [];

  // Add category
  const { mutate: addCategory, isPending: isAdding } = useMutation({
    mutationFn: processrAddCategory,
    onSuccess: () => {
      message.success("Category added successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      handleModalCancel();
    },
    onError: () => {
      message.error("Failed to add category");
    },
  });

  // Edit category
  const { mutate: editCategory, isPending: isEditing } = useMutation({
    mutationFn: ({ id, data }) => processEditCategory(id, data),
    onSuccess: () => {
      message.success("Category updated successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      handleModalCancel();
    },
    onError: () => {
      message.error("Failed to update category");
    },
  });

  // Delete category
  const { mutate: deleteCategory, isPending: isDeleting } = useMutation({
    mutationFn: (id) => processDeleteCategory(id),
    onSuccess: () => {
      message.success("Category deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError: () => {
      message.error("Failed to delete category");
    },
  });

  const handleModalCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    setEditingCategory(null);
  };

  const handleFormFinish = (values) => {
    if (editingCategory) {
      editCategory({ id: editingCategory._id, data: values });
    } else {
      addCategory(values);
    }
  };

  const handleEdit = (record) => {
    setEditingCategory(record);
    setIsModalVisible(true);
    form.setFieldsValue({
      categoryName: record.categoryName,
      feature: record.feature,
    });
  };

  const columns = [
    {
      title: "Category Name",
      dataIndex: "categoryName",
      key: "categoryName",
    },
    {
      title: "Feature",
      dataIndex: "feature",
      key: "feature",
      render: (featureId) => {
        const matched = features.find((f) => f._id === featureId);
        return matched ? matched.featureName : "Unknown";
      },
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex flex-col gap-1">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
            style={{ marginBottom: 4 }}
          />
          <Popconfirm
            title="Are you sure to delete this category?"
            onConfirm={() => deleteCategory(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-white my-6 p-8 rounded-md">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button
          className="custom-button"
          onClick={() => {
            form.resetFields();
            setEditingCategory(null);
            setIsModalVisible(true);
          }}
        >
          <PlusSquareOutlined /> Add New
        </Button>
      </div>

      <Table
        dataSource={categories}
        columns={columns}
        rowKey="_id"
        loading={isLoading || isDeleting}
        scroll={{ x: "max-content" }}
      />

      <Modal
        title={editingCategory ? "Edit Category" : "Create Category"}
        open={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <Form form={form} onFinish={handleFormFinish} layout="vertical">
          <Form.Item
            name="categoryName"
            label="Category Name"
            rules={[{ required: true, message: "Please enter category name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="feature"
            label="Feature"
            rules={[{ required: true, message: "Please select a feature" }]}
          >
            <Select placeholder="Select a feature" loading={!features.length}>
              {features.map((feature) => (
                <Select.Option key={feature._id} value={feature._id}>
                  {feature.featureName}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Button
            className="custom-button"
            htmlType="submit"
            loading={isAdding || isEditing}
          >
            {editingCategory ? "Update" : "Create"}
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Category;
