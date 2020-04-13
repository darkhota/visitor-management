import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import '../../styles/MyStyles/custom.css'
import "flatpickr/dist/themes/light.css";
import {Input,} from 'reactstrap';

class FormStandard extends Component {
    constructor() {
        super();
     
        this.state = {
          date: new Date(),
          checked: false 
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange() {
        this.setState({
          checked: !this.state.checked
        })
      }

    render() {
        const content = this.state.checked 
      ? <div className="hidden-form">  <div className="input-field">
      <p><small><b>PASSWORD </b></small><span className="required">*</span></p>
          <Input id="input-id-1" type="text" placeholder="Enter email"/>
      </div> 
      <div className="input-field">
      <p><small><b>CONFIRM PASSWORD</b></small> <span className="required">*</span></p>
          <Input id="input-id-1" type="text" placeholder="Enter email"/>
      </div>
      </div>
      : null;

        const { date } = this.state;
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        const { selectedOptionMulti } = this.state;

        return (
            <ContentWrapper>
                
                
               <div className="form-card">
               <div className=" card-top-tablet">
                            <h3>User Profile
                            </h3>
                            </div >
                            <div className="visitorForm new-room-form profile-form" >
                                   
                            <div className="input-field">
                                    <p><small><b>EMAIL</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter email"/>
                                    </div>
                                        
                                    <div className="input-field">
                                    <p><small><b>FIRST NAME </b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter email"/>
                                    </div>
                                       
                                        
                                    <div className="input-field">
                                    <p><small><b>LAST NAME</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter email"/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>PHONE NUMBER</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter email"/>
                                    </div>
                                    <div class="checkbox c-checkbox">
                                        <label><Input id="password-chk" type="checkbox" value=""  checked={ this.state.checked } 
          onChange={ this.handleChange }/><span className="fa fa-check"></span>  Change Password </label>
                                    </div>
                                    { content }
                                    
                                </div>
                             
                                    <div className="profile-btn">
                                        <button class="invite-btn" type="button"><i class="icon-paper-plane"></i>&nbsp;&nbsp;Update</button>
                                        </div>
                                    
                                    
               </div>
                
            </ContentWrapper>
            );
    }

}

export default FormStandard;
