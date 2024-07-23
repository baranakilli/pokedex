import { ReactNode } from "react";

interface ScrollProps {
  children: ReactNode;
}

const Scroll = (props: ScrollProps) => {
  return (
    <div
      className="pt3 pb5"
      style={{
        overflowY: "scroll",
        height: "75vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
