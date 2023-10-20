import React from "react";
import { Button } from "antd";
import Link from "next/link";

const Buttons = () => (
  <div className="App">
    <Link href={"../productsList"}>
      <Button type="primary">Go to Produtcs page</Button>
    </Link>
  </div>
);

export default Buttons;
