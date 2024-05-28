import React, { forwardRef, useImperativeHandle, useState } from 'react';

const AddModel = forwardRef(({ onSave }, ref) => {
    const [show, setShow] = useState(false);
    const [employees, setEmployees] = useState({ id: undefined,username: '', status: '',location: '', profilePicture: '' });

    useImperativeHandle(ref, () => ({
        /**
         * Opens the modal dialog to add or update a contact.
         * 
         * @param {Object} contact - The contact object to be added or updated.
         * 
         * @remarks
         * We use `useImperativeHandle` here to expose the `openModal` function to the parent component.
         * This allows the parent component to directly call the `openModal` function on the child component's ref.
         * By doing so, we can trigger the modal dialog to open from the parent component when needed.
         */
        openModal(employee) {
            setEmployees(employee || { id: undefined, username: '', status: '',location: '', profilePicture: '' });
            setShow(true);
        },
        closeModal() {
            setShow(false);
        }
    }));

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployees((prevEmployee) => ({ ...prevEmployee, [name]: value }));
    };

    const handleSave = () => {
        onSave(employees);
        setShow(false);
    };

    return (
        <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{employees.id ? 'Update Contact' : 'Add Contact'}</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setShow(false)}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={employees.username}
                                    onChange={handleChange}
                                />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="name">UserName</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    value={employees.username}
                                    onChange={handleChange}
                                />
                            </div> */}
                            <div className="form-group">
                                <label htmlFor="email">status</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="status"
                                    value={employees.status}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">location</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="location"
                                    value={employees.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="image">Image URL</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="profilePicture"
                                    name="profilePicture"
                                    value={employees.profilePicture}
                                    onChange={handleChange}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setShow(false)}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AddModel;
