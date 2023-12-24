import { ReactNode } from 'react';

interface ScrollProps {
  children: ReactNode;
}

const Scroll = (props: ScrollProps) => {
  return (
    <div
      className="pt3"
      style={{
        overflowY: 'scroll',
        borderTop: '2px solid lightgray',
        height: '770px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
