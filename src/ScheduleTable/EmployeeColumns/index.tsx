import EmployeeType from "../../Contracts/Models/Employee";

export type EmployeeColumnsProps = {
  employee: EmployeeType;
};
export default function EmployeeColumns({ employee }: EmployeeColumnsProps) {
  return <div>{employee.name}</div>;
}
