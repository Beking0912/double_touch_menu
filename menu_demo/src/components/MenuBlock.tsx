/*
 * @Author: beking
 * @Date: 2020-04-29 16:40:05
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-30 10:11:33
 */

import React from "react";
import styles from "./style.css";

interface IProps {
  name: string;
  icon?: string;
  isRed?: boolean;
  onHandle?: () => void;
}

const MenuBlock = (props: IProps) => {
  const {
    name = "未命名",
    icon = null,
    onHandle = null,
    isRed = false,
  } = props;

  return (
    <div className={styles.iconBox}>
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          height: "55px",
          width: "55px",
          marginBottom: "8px",
        }}
        onClick={onHandle}
      >
        图标
      </div>
      <div style={{ fontSize: "14px", color: "#84817a" }}>{name}</div>
    </div>
  );
};
export default MenuBlock;
