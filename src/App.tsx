import "./styles.css";
import ScheduleContextProvider from "./ScheduleContext";
import ScheduleTable from "./ScheduleTable";
export default function App() {
  return (
    <ScheduleContextProvider>
      <ScheduleTable />
    </ScheduleContextProvider>
  );
}
