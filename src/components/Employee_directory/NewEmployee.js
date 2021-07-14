import React, {useState, useContext} from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import '../../styles/MyStyles/custom.css'
import Select from 'react-select';
import "flatpickr/dist/themes/light.css";
import {Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import EmployeeContext from '../../context/employees/employeeContext';
    const STATES = [
        { value: 'australian-capital-territory', label: 'Employee', className: 'State-ACT' },
        { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
        { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
     
    ]
    const COMPANIES = [
        { value: 'australian-capital-territory', label: 'Employee', className: 'State-ACT' },
        { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
        { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
     
    ]
    const GENDER = [
        { value: 'australian-capital-territory', label: 'Male', className: 'State-ACT' },
        { value: 'new-south-wales', label: 'Female', className: 'State-NSW' },
        { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
     
    ]
    
    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          
          color: state.isSelected ? '#fff' : '',
          padding: 20,
        }),
       
    }
      
const NewEmployees = () => {

    const employeeContext = useContext(EmployeeContext);
    const [employee, setEmployee] = useState (
        {
            empName: '',
            accountType: '',
            gender: '',
            company: '',
            email: '',
            status: '',
        }
    );
    const { email, empName } = employee;
    const onChange = e => setEmployee({ ...employee, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        employeeContext.newEmployee(employee);
        setEmployee({
            empName: '',
            accountType: '',
            gender: '',
            company: '',
            email: '',
            status: '',
        });
    };

        return (
            <ContentWrapper>
               <div className="form-card">
               <div className=" card-top-tablet">
                            <h3><Link to="/all-employees">
                               <i className="far fa-arrow-alt-circle-left" ></i> 
                           </Link>
                              &nbsp;Create a new employee
                            </h3>
                            </div >
                            <form className="newEmplGrid" onSubmit={onSubmit}>
                                   
                                    <div className="input-field">
                                        <p><small><b>ACCOUNT TYPE</b></small><span className="required">*</span></p>
                                        <Select   
                                        className="sectionTest"                                    
                                            theme={theme => ({
                                                ...theme,
                                                borderRadius: 5,                                            
                                                colors: {
                                                  ...theme.colors,
                                                 
                                                  primary: '#00914b',
                                                  
                                                },
                                              })}
                                            styles={customStyles}
                                                name="select-name"
                                                placeholder="Select account type"
                                                
                                               
                                                options={STATES}
                                            
                                        />
                                        </div>
                                        <div className="input-field">
                                        <p><small><b>COMPANY</b></small><span className="required">*</span></p>
                                        <Select  
                                        className="sectionTest"                                     
                                            theme={theme => ({
                                                ...theme,
                                                borderRadius: 5,                                            
                                                colors: {
                                                  ...theme.colors,
                                                 
                                                  primary: '#00914b',
                                                  
                                                },
                                              })}
                                            styles={customStyles}
                                                name="select-name"
                                                placeholder="Select company"
                                                
                                             
                                                options={COMPANIES}
                                            
                                        />
                                        </div>
                                        <div className="input-field">
                                        <p><small><b>GENDER</b></small><span className="required">*</span></p>
                                        <Select   
                                        className="sectionTest"                                    
                                            theme={theme => ({
                                                ...theme,
                                                borderRadius: 5,                                            
                                                colors: {
                                                  ...theme.colors,
                                                 
                                                  primary: '#00914b',
                                                  
                                                },
                                              })}
                                            styles={customStyles}
                                                name="select-name"
                                                placeholder="Select gender"
                                               
                                               
                                                options={GENDER}
                                            
                                        />
                                        </div>
                                        
                                       
                                        <div className="input-field">
                                    <p><small><b>EMAIL</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter email" name="email" value={email} onChange={onChange}/>
                                    </div>
                                        
                                    <div className="input-field">
                                    <p><small><b>FIRST NAME</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter first name" name="empName" value = {empName} onChange={onChange}/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>LAST NAME </b></small><span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter last name"/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>PHONE NUMBER</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text"placeholder="Enter phone number"/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>PASSWORD</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="password" placeholder="Enter password"/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>CONFIRM PASSWORD</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="password" placeholder="Retype password"/>
                                    </div>

                                    <hr></hr>
                                    <div className="employee-button-align">
                                    <button class="invite-btn" type="submit" value= "new employee"><i class="icon-paper-plane"></i>&nbsp;&nbsp;Invite</button>
                                    </div>
                                    </form>
                                    
                                
               </div>
                
            </ContentWrapper>
            );
  
}
export default NewEmployees;
