import { addDays, startOfDay, startOfMonth } from "date-fns";
import faker from "faker";
import employees from "./employees";
import EventType from "./src/Contracts/Models/Event";
import { setHours } from "date-fns";

export default employees.reduce((employees, employee) => {
  employees[employee.id] = Array.from({ length: 30 }).map((_, day) => {
    const date = startOfDay(addDays(startOfMonth(new Date()), day));
    const start = setHours(date, 8);
    const end = setHours(date, 18);
    return {
      id: faker.datatype.uuid(),
      date,
      event_type_id: faker.datatype.number(70),
      employeeId: employee.id,
      start,
      end
    } as EventType;
  });

  return employees;
}, {} as Record<string, EventType[]>);
