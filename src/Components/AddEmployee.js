import React, { useState } from "react";

function AddEmployee() {
    const [formData, setFormData] = useState({
        employeeName: "",
        employeeNumber: "",
        dateOfJoining: "",
        emailId: "",
        mobileNumber: "",
        employeeStatus: "",
        dateOfBirth: "",
        gender: "",
        maritalStatus: "",
        isPhysicalChange: "",
        bloodgroup: "",
        personalEmailId: ""
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <div className="employee-table-container">
            <div className="add-employee-card">
                <div className='employee-button'><h4 className="add-employee-heading">Add Details Of an Employee</h4>
                    <div >
                        <button className="button-margin add-employee-button">-</button>
                    </div>

                </div>
                <form className="employee-form">
                    <div className="input-group">
                        <label>Employee Name <span className="required">*</span></label>
                        <input
                            type="text"
                            name="employeeName"
                            value={formData.employeeName}
                            onChange={handleInputChange}
                            placeholder="Enter Employee Name"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <label>Employee Number <span className="required">*</span></label>
                        <input
                            type="text"
                            name="employeeNumber"
                            value={formData.employeeNumber}
                            onChange={handleInputChange}
                            placeholder="Enter Emplopyee Number"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <label>Date of Joining <span className="required">*</span></label>
                        <input
                            type="date"
                            name="dateOfJoining"
                            value={formData.dateOfJoining}
                            onChange={handleInputChange}
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <label>Email Id <span className="required">*</span></label>
                        <input
                            type="email"
                            name="emailId"
                            value={formData.emailId}
                            onChange={handleInputChange}
                            placeholder="Enter Email id"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <label>Mobile Number <span className="required">*</span></label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            placeholder="Enter Mobile Number"
                            className="input"
                        />
                    </div>

                    <div className="input-group">
                        <label>Employee Status <span className="required">*</span></label>
                        <select
                            name="employeeStatus"
                            value={formData.employeeStatus}
                            onChange={handleInputChange}
                            className="input"
                        >
                            <option value="" disabled>
                                Employee Status
                            </option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                            <option value="On Leave">On Leave</option>
                        </select>
                    </div>
                </form>

            </div>
            <div className="add-employee-card">
                <div className='employee-button'><h4 className="add-employee-heading">Personal Details</h4>
                    <div >
                        <button className="button-margin add-employee-button">-</button>

                    </div></div>
                <form className="employee-form">
                    <div className="input-group">
                        <label>Date of Birth <span className="required">*</span></label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className="input"
                        />
                    </div>
                    <div className="input-group">
                        <label>Gender <span className="required">*</span></label>
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="input"
                        >
                            <option value="" disabled>
                                Gender
                            </option>
                            <option value="Active">Male</option>
                            <option value="Inactive">Female</option>
                            <option value="On Leave">Others</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Marital Status <span className="required">*</span></label>
                        <select
                            name="maritalStatus"
                            value={formData.maritalStatus}
                            onChange={handleInputChange}
                            className="input"
                        >
                            <option value="" disabled>
                                Marital Status
                            </option>
                            <option value="Active">Yes</option>
                            <option value="Inactive">No</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Is PhysicalChanged <span className="required">*</span></label>
                        <select
                            name="isPhysicalChange"
                            value={formData.isPhysicalChange}
                            onChange={handleInputChange}
                            className="input"
                        >
                            <option value="" disabled>
                                Is PhysicalChanged
                            </option>
                            <option value="Active">Yes</option>
                            <option value="Inactive">No</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Blood Group <span className="required">*</span></label>
                        <select
                            name="bloodgroup"
                            value={formData.bloodgroup}
                            onChange={handleInputChange}
                            className="input"
                        >
                            <option value="" disabled>
                                Blood Group
                            </option>
                            <option value="APos">A+</option>
                            <option value="BPos">B+</option>
                            <option value="ABPos">AB+</option>
                            <option value="OPos">O+</option>
                            <option value="ANeg">A-</option>
                            <option value="BNeg">B-</option>
                            <option value="ABNeg">AB-</option>
                            <option value="ONeg">O-</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Personal Email Id <span className="required">*</span></label>
                        <input
                            type="personalEmailId"
                            name="personalEmailId"
                            value={formData.personalEmailId}
                            onChange={handleInputChange}
                            placeholder="Enter Email id"
                            className="input"
                        />
                    </div>

                </form>
            </div>
            <div className="add-employee-sub-card">
            <div className='employee-button'><h4 className="add-employee-heading">Add Department</h4>
                    <div >
                        <button className="button-margin add-employee-button">+</button>
                    </div>

                </div>
                  </div>
                  <div className="add-employee-sub-card">
            <div className='employee-button'><h4 className="add-employee-heading">Configuration</h4>
                    <div >
                    <button className="secondrayButton">Cancel</button>
                    <button className="primaryButton" >Save</button>
                    </div>

                </div>
                  </div>
        </div>
        
    )

}
export default AddEmployee