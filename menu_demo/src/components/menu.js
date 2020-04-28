/*
 * @Author: beking
 * @Date: 2020-04-28 11:10:15
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-28 18:35:05
 */

import React, { Component } from "react";

import Core from "@any-touch/core";
import Tap from "@any-touch/tap";

class Menu extends Component {
  showMenu = () => {
    Core.use(Tap, { pointLength: 2 });
    const at = new Core(this.handler);
    at.on("tap", (ev) => {
      this.drawer.style.transform = "translateY(40vh)";
      this.drawer.style.transition = "all 200ms";
    });
  };

  hideMenu = () => {
    Core.use(Tap);
    const att = new Core(this.cancel);
    att.on("tap", (ev) => {
      this.drawer.style.transform = "translateY(-40vh)";
      this.drawer.style.transition = "all 200ms";
    });
  };

  render() {
    return (
      <div
        style={{ height: "100vh" }}
        ref={(ref) => {
          this.handler = ref;
        }}
        onClick={this.showMenu}
      >
        <div
          style={{   // 这要如何定位呢？
            height: "40vh",
            width: "100%",
            backgroundColor: "#F5F5F5",
            display: "flex",
            flexDirection: "column",
          }}
          ref={(ref) => {
            this.drawer = ref;
          }}
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
            ref={(ref) => {
              this.cancel = ref;
            }}
            onClick={this.hideMenu}  // 为啥没反应呢？
          >
            取消
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
