"use client";

import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <Footer style={{ textAlign: "center" }}>
      Hoi dan IT ©{new Date().getFullYear()} Created by @hoidanit
    </Footer>
  );
};

export default AdminFooter;
