import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import '../../styles/MyStyles/custom.css'
import Select from 'react-select';
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import {Card,Input } from 'reactstrap';

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
      
class NewInvites extends Component {
   
    state = {
        dropdownOpen: false,
        splitButtonOpen: false,
        date: new Date(),
    
    }

    toggleDropDown = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    toggleSplit = () => {
        this.setState({
            splitButtonOpen: !this.state.splitButtonOpen
        });
    }

    onSubmit = e => {
        console.log('Form submitted..');
        e.preventDefault();
    }
    

    render() {
        const { date } = this.state;
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        const { selectedOptionMulti } = this.state;
        

        return (
            <ContentWrapper>
               <div className="form-card">
               <div className=" card-top-tablet">
                            <h3><a href="/invites">
                               <i className="far fa-arrow-alt-circle-left" ></i> 
                           </a>
                              &nbsp;Create a new employee
                            </h3>
                            </div >
                            <div className=" newEmplGrid" >
                                   
                                    <div className="input-field">
                                        <p><small><b>Account Type</b></small><span className="required">*</span></p>
                                        <Select                                       
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
                                                value={value}
                                                onChange={this.handleChangeSelect}
                                                options={STATES}
                                            
                                        />
                                        </div>
                                        <div className="input-field">
                                        <p><small><b>Company</b></small><span className="required">*</span></p>
                                        <Select                                       
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
                                                value={value}
                                                onChange={this.handleChangeSelect}
                                                options={COMPANIES}
                                            
                                        />
                                        </div>
                                        <div className="input-field">
                                        <p><small><b>Gender</b></small><span className="required">*</span></p>
                                        <Select                                       
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
                                                value={value}
                                                onChange={this.handleChangeSelect}
                                                options={GENDER}
                                            
                                        />
                                        </div>
                                        
                                       
                                        <div className="input-field">
                                    <p><small><b>EMAIL</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter email"/>
                                    </div>
                                        
                                    <div className="input-field">
                                    <p><small><b>FIRST NAME</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter first name"/>
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
                                    </div>
                                    <hr></hr>
                                    <div className="employee-button-align">
                                    <button class="invite-btn" type="button"><i class="icon-paper-plane"></i>&nbsp;&nbsp;Invite</button>
                                    </div>
                                
               </div>
                
            </ContentWrapper>
            );
    }
}
export default NewInvites;
