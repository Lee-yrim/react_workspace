import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { empActions } from "../../toolkit/actions/emp_action";
import TableRow from "./TableRow";
import { useParams } from "react-router-dom";
import PageNavigation from "./PageNavigation";

const EmpList = () => {
  const { currentPage } = useParams();
  const dispatch = useDispatch();

  const getEmpList = (currentPage) => {
    dispatch(empActions.getEmpList(currentPage));
  };

  useEffect(() => {
    getEmpList(currentPage);
  }, []);

  const empList = useSelector((state) => state.employees.empList);

  const pv = useSelector((state) =>
    state.employees.pv ? state.employees.pv : { currentPage: 1 }
  );

  console.log("empList(view) ", empList);

  return (
    <>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <colgroup>
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
          <col width="25%" />
        </colgroup>

        <thead>
          <tr>
            <th>EMPLOYEE_ID</th>
            <th>FIRST_NAME</th>
            <th>EMAIL</th>
            <th>SALARY</th>
          </tr>
        </thead>

        <tbody>
          {empList &&
            empList.map((employees) => {
              return (
                <TableRow employees={employees} key={employees.employee_id} />
              );
            })}
        </tbody>
      </table>

      {pv && <PageNavigation getEmpList={getEmpList} />}
    </>
  );
};

export default EmpList;
