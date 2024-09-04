import { Page, withModel } from "@adobe/aem-react-editable-components";
import React, { Suspense } from "react";

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          {this.childComponents}
          {this.childPages}
        </div>
      </Suspense>
    );
  }
}

export default withModel(App);
