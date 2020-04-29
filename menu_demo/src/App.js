/*
 * @Author: beking
 * @Date: 2020-04-28 11:10:10
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-29 11:39:03
 */

import React, { useEffect } from "react";
import Core from "@any-touch/core";
import Tap from "@any-touch/tap";
// import Menu from "./components/menu";

function App() {
  useEffect(() => {
    Core.use(Tap, { pointLength: 2 });
    const handler = document.getElementById("handler");
    const at = new Core(handler);
    const drawer = document.getElementById("drawer");
    at.on("tap", (ev) => {
      drawer.style.transform = "translateY(-40vh)";
      drawer.style.transition = "all 500ms";
    });
  });

  const hideMenu = () => {
    Core.use(Tap, { pointLength: 1 });
    const cancel = document.getElementById("cancel")
    const att = new Core(cancel);
    const drawer = document.getElementById("drawer");
    att.on("tap", (ev) => {
      drawer.style.transform = "translateY(40vh)";
      drawer.style.transition = "all 500ms";
    });
  };

  return (
    <div style={{ height: "120vh" }}>
      <div style={{ height: "100vh" }} id="handler"></div>
      <div
        style={{
          height: "40vh",
          width: "100%",
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
        }}
        id="drawer"
      >
        <div
          style={{
            height: "20%",
            borderBottomStyle: "solid",
            borderBottomColor: "#ced6e0",
            borderBottomWidth: "1px",
          }}
        >
          标题
        </div>
        <div style={{ flex: 1 }}>功能</div>
        <div
          style={{
            height: "20%",
            borderTopStyle: "solid",
            borderTopColor: "#ced6e0",
            borderTopWidth: "1px",
          }}
          id="cancel"
          onClick={hideMenu}
        >
          取消
        </div>
      </div>
    </div>
  );
}

export default App;
