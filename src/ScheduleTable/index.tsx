import { Container } from "./style";
import { useScheduleContext } from "../ScheduleContext";
import Row from "./Row";
export default function ScheduleTable() {
  const { schedule } = useScheduleContext();

  return (
    <Container>
      {schedule.employees.map((e) => (
        <Row employee={e} events={schedule.events[e.id]} />
      ))}
    </Container>
  );
}
