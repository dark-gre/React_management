import React, { useState } from "react";
import { Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import "./index.scss";

const myTestComponent = () => {
  const [rowIndex, setRowIndex] = useState<Number>();
  const dataSource = [
    {
      key: "1",
      name: "胡彦斌",
      age: 32,
      address: "西湖区湖底公园1号",
    },
    {
      key: "2",
      name: "胡彦祖",
      age: 42,
      address: "西湖区湖底公园1号",
    },
  ];

  const columns = [
    {
      title: "姓名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "年龄",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "住址",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <div className="wodediv">
      我的div
      <Table
        dataSource={dataSource}
        columns={columns}
        rowClassName={(record, index) => {
          let classname = rowIndex === index ? "ant-table-row-selected" : "";
          return classname;
        }}
        onRow={(record, index) => {
          return {
            onClick: () => {
              console.log(record, index);
              setRowIndex(index);
            },
          };
          console.log("record,index", record, index);
        }}
      />
    </div>
  );
};

export default myTestComponent;
