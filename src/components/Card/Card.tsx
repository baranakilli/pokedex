import { Robot } from "../../actions";

const Card = (props: Robot) => {
   const { id, name, email } = props;
   return(
      <div className="bg-light-blue dib br3 pa1 pv3 ma2 grow ba bw1 b--blue shadow-5">
         <img alt="robots" width={'200px'} height={'200px'} src={`https://robohash.org/${id}?size=200x200`} />
         <div style={{width: '300px'}}>
            <h2>{name}</h2>
            <p>{email}</p>
         </div>
      </div>
   );
}

export default Card;