import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";

const MovieEditModal = ({ film, updateFilm}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const saveMovie = (values) => {
    updateFilm(values);
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        <EditOutlined />
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form labelCol={{ span: 6 }} initialValues={film} onFinish={saveMovie}>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              { required: true, message: "Movie Name is required" },
              { min: 3 },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Year"
            name="year"
            rules={[{ required: true }, { pattern: /^\d{4}$/ }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Image" name="image">
            <Input />
          </Form.Item>

          <Form.Item label="Director" name="director">
            <Input />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>

          <Form.Item hidden={true} name="id">
            <Input/>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default MovieEditModal;
