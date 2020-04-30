/*
 * @Author: beking
 * @Date: 2020-04-29 16:42:07
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-29 17:24:08
 */

import React from "react";

interface IProps {
  title: string;
  type: string;
  count: number;
}

const MenuTitle = (props: IProps) => {
  const { title = "未命名", type = "未分类", count = 0 } = props;

  return (
    <div
      style={{
        // height: "20%",
        borderBottomStyle: "solid",
        borderBottomColor: "#ced6e0",
        borderBottomWidth: "1px",
        display: "flex",
        flexDirection: "row",
        padding: "14px",
      }}
    >
      <div
        style={{
          height: "40px",
          width: "40px",
          backgroundColor: "white",
          marginRight: "12px",
          boxShadow: "0px 1px 5px #888888",
        }}
      >
        图标
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: "#353b48", fontWeight: "bold", fontSize: "16px" }}>
          {title}
        </div>
        <div style={{ color: "#aaa69d", fontSize: "13px" }}>
          {type}项目，{count}个页面
        </div>
      </div>
    </div>
  );
};
export default MenuTitle;
