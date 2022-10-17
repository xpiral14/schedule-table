import { createContext, useContext, useEffect, useMemo, useState } from "react";
import EmployeeType from "../Contracts/Models/Employee";
import EventType from "../Contracts/Models/Event";
import employees from "../../employees";
import events from "../../events";
type Schedule = {
  id: number;
  totalDays: number;
  events: Record<string, EventType[]>;
  employees: EmployeeType[];
};

type ScheduleContextType = {
  schedule: Schedule;
  loadingEmployees: boolean;
  loadingEvents: boolean;
};

const scheduleContext = createContext<ScheduleContextType>(null as any);

export const useScheduleContext = () => {
  const context = useContext(scheduleContext);

  if (!context) {
    throw new Error(
      "Component must be children of <ScheduleContextProvider />"
    );
  }

  return context;
};

export default function ScheduleContextProvider({ children }: any) {
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [loadingEmployees, setLoadingEmployees] = useState(true);
  const [schedule, setSchedule] = useState<Schedule>(() => {
    return {
      id: 1,
      totalDays: 31,
      events: {},
      employees: []
    };
  });

  useEffect(() => {
    setLoadingEmployees(true);
    setTimeout(() => {
      setSchedule((prev) => ({
        ...prev,
        employees
      }));

      setLoadingEmployees(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!employees.length) return;
    setLoadingEvents(true);
    setTimeout(() => {
      setSchedule((prev) => ({
        ...prev,
        events
      }));

      setLoadingEvents(false);
    }, 1000);
  }, [employees]);

  return (
    <scheduleContext.Provider
      value={{ schedule, loadingEmployees, loadingEvents }}
    >
      {children}
    </scheduleContext.Provider>
  );
}
