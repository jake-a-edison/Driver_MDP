import React, { Component } from "react";

import { SESSION_ID } from "@stitchfix/daylight-utils";

import { logError } from "../utils/";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    logError(error, { errorInfo, type: "errorBoundary" });
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "90vh",
          }}
        >
          <div role="alert">
            <h1>
              <span role="img" aria-label="boom emoji">
                💥
              </span>
              &nbsp; App crashed!
            </h1>
            <hr />
            <pre>{this.state.error.message || "Unknown error"}</pre>
            Current session ID (for use by Algo partners to debug):{" "}
            <pre>{SESSION_ID}</pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
