import { Child } from "./Child";

const Parent = () => {
  return <Child color="to je jedno" onClick={() => console.log("Klik")} />;
};

export default Parent;
