const TableRow = ({ employees }) => {
  return (
    <tr>
      <td>{employees.employee_id}</td>
      <td>{employees.first_name}</td>
      <td>{employees.email}</td>
      <td>{employees.salary}</td>
    </tr>
  );
};

export default TableRow;
