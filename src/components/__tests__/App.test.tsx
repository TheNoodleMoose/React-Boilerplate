import React from "react";
import { render } from "@testing-library/react";

import App from "../App";

describe("<App />", () => {
  it("Should render correctly with props", async () => {
    render(<App userName='Christian' lang='TypeScript' />);
  });
});
