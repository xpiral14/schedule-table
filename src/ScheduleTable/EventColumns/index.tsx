import EventType from "../../Contracts/Models/Event";
import Day from "../../Day";
export type EventColumnsProps = {
  events: EventType[];
};
export default function EventColumns({ events }: EventColumnsProps) {
  return (
    <>
      {events.map((e) => (
        <Day event={e} />
      ))}
    </>
  );
}
