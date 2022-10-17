import { Container } from "./style";
import EmployeeType from "../../Contracts/Models/Employee";
import EmployeeColumns from "../EmployeeColumns";
import EventColumns from "../EventColumns";
import EventType from "../../Contracts/Models/Event";
type RowProps = {
  events: EventType[];
  employee: EmployeeType;
};

export default function Row(props: RowProps) {
  return (
    <Container>
      <EmployeeColumns employee={props.employee} />
      <EventColumns events={props.events} />
    </Container>
  );
}
