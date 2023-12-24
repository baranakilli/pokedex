import Card from "../Card/Card";
import { Robot } from "../../actions";

type CardListProps = {
   robots: Robot[];
}

const CardList = ({ robots }: CardListProps) => {
   return (
      <div>
         {robots.map((robot) => {
            return (
               <Card 
                  id={robot.id}
                  name={robot.name} 
                  email={robot.email}
               />
            );
         })}
      </div>
   )
}

export default CardList