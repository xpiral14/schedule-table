import faker from "faker";
import EmployeeType from "./src/Contracts/Models/Employee";
export default Array.from({ length: 50 }).map(
  () =>
    ({
      id: faker.datatype.uuid(),
      name: faker.name.firstName()
    } as EmployeeType)
);
