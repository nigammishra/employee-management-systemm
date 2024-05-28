import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { EmployeeService } from "../EmployeeService/EmployeeDetails";
import AddModel from "./AddModel";
import DeleteModal from "./DeleteModal";


const employeeService = new EmployeeService();


const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const deleteModalRef = useRef();
  const addUpdateModalRef = useRef();

  useEffect(() => {
    getEmployees();
    // getContacts();
  }, []);

  const getEmployees = () => {
    employeeService
      .getEmployee()
      .then((data) => {
        setEmployees(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

 
  const handleDeleteContact = (id) => {
    employeeService
      .deleteEmployee(id)
      .then(() => {
        getEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSaveContact = (employee) => {
    if (employee.id) {
      employeeService
        .updateEmployee(employee)
        .then(() => {
          getEmployees();
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      employeeService
      .addEmployee(employee)
      .then((data) => {
       getEmployees();
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  const openDeleteModal = (employee) => {
    deleteModalRef.current.openModal(employee);
  };

  const openAddUpdateModal = (employee = null) => {
    addUpdateModalRef.current.openModal(employee);
  };

  return (
    <div>
      <DeleteModal ref={deleteModalRef} onDelete={handleDeleteContact} />
      <AddModel ref={addUpdateModalRef} onSave={handleSaveContact} />

      {/* Employee Table */}
      <button type="button" onClick={() => openAddUpdateModal()} className="btn btn-primary">Add</button>
      <div className="container">
        <table className="demo-table">
          <thead>
            <tr>
              <td>Profile Picture</td>
              <td>User</td>
              {/* <td>Username</td> */}
              <td>Status</td>
              <td>Location</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}
              >
                <td>
                  <div className="profile">
                    <img src={employee.profilePicture} alt={employee.user} />
                  </div>
                </td>
                <td>
                  <div className="info">
                  
                    {/* <div className="title">{employee.user}</div> */}
                    
                    
                    <div className="username">{employee.username}</div>
                   
                  </div>
                  </td>
                <td>
                  <div className="status">
                    <div className={employee.status}>
                      <span />{employee.status}
                    </div>
                  </div>
                </td>
                <td>{employee.location}</td>
                <td>
                  <Link to="">
                  <button type="button" className="btn btn-primary" onClick={() => openAddUpdateModal(employee)}>Edit</button>
                  </Link>
                  <button type="button" className="btn btn-primary" onClick={() => openDeleteModal(employee)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     
    </div>
  );
};

export default Employee;


