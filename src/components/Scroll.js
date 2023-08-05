const Scroll = (props) => {
  return (
    <div className='pt3' style={{ overflowY: 'scroll', borderTop: '2px solid lightgray', borderBottom: '4px solid lightgray', height: '770px'}}>
        {props.children}
    </div>                            
  );
}

export default Scroll