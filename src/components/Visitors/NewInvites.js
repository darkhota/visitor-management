import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import '../../styles/MyStyles/custom.css'
import Select from 'react-select';
import "flatpickr/dist/themes/light.css";
import Flatpickr from "react-flatpickr";
import {Card,Input } from 'reactstrap';

    const STATES = [
        { value: 'visitor', label: 'visitor', className: 'State-ACT' },
      
    ]
    function styleFn(provided, state) {
        return { ...provided, color: state.isFocused ? '#00914b' : '' };
      }
      const customStyles = {
        option: (provided, state) => ({
          ...provided,
          
          color: state.isSelected ? '#fff' : '',
          padding: 20,
        }),
       
    }
class NewInvites extends Component {
    constructor() {
        super();
     
        this.state = {
          date: new Date()
        };
      }


    state = {
        dropdownOpen: false,
        splitButtonOpen: false
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
                              &nbsp;Single invite
                            </h3>
                            </div >
                            <div className="visitorForm" >
                                   
                                    <div className="input-field">
                                        <p><small><b>Visitor Type</b></small></p>
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
                                            placeholder="Select visitor"
                                            value={value}
                                            onChange={this.handleChangeSelect}
                                            options={STATES}
                                            
                                        />
                                        </div>
                                        
                                        <div className="form-gird">
                                        <div className="flat-width">
                                        <p>Arrival date <span className="required">*</span></p>
                                        <Flatpickr

                                                    options={{   altInput: true,
                                                        altFormat: "F j, Y",
                                                        dateFormat: "Y-m-d"}}

                                                    value={date}
                                                    onChange={date => {
                                                    this.setState({ date });
                                                    }}
                                                    />
                                                    </div>
                                                   
                                                    <div className="flat-width">
                                                    <p>Arrival time <span className="required">*</span></p>
                                                    <select defaultValue="" className="custom-select" multiple="">
                                                    <option defaultValue="1">12:45 pm</option>
                                                    <option defaultValue="2">1:00 pm</option>
                                                    <option defaultValue="3">1:15 pm</option>
                                                </select>
                                                           </div>
                                        
                                        </div>
                                       
                                        
                                    <div className="input-field">
                                    <p><small><b>Full Name</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter full name"/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>Visitor Email Address </b></small><span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter email"/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>Phone  number</b></small>Phone  number <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text"placeholder="Enter phone number"/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>Private note</b></small></p>
                                        <Card body>
                                            <textarea rows="5" className="form-control note-editor note-editor-margin"></textarea>
                                        </Card>
                                    </div>
                                    <div className="button-align">
                                    <button class="invite-btn" type="button"><i class="icon-paper-plane"></i>&nbsp;&nbsp;Invite</button>
                                    </div>
                                </div>
               </div>
                
            </ContentWrapper>
            );
    }
}
export default NewInvites;
