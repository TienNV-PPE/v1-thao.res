import {Fragment} from "react";
import {Col, DatePicker} from "antd";
import {Text} from "./components/text";
import MasterLayout from "@layouts/masterLayout";

const App = () => {
  return (
    <Fragment>
      <MasterLayout/>
      NGUYEN VAN TIEN
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <Text title="Hello AsurRaa"/>
          <DatePicker/>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
