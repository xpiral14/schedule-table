import { format } from "date-fns";
import EventType from "../Contracts/Models/Event";
import { Container } from "./style";

type EventProps = {
  event: EventType;
};

export default function Event({ event }: EventProps) {
  return <Container>{event.start.toLocaleDateString()}</Container>;
}
