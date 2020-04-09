import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import '../../styles/MyStyles/custom.css'
import {  Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import classNames from 'classnames';

class DropdownBox extends Component  {
    
    state = { ddOpen: false }
    toggle = () => this.setState({
            ddOpen: !this.state.ddOpen
    })
    render() {
        const ddClass = classNames('animated', this.props.title);
        
        return (
            <div >
                <Dropdown isOpen={this.state.ddOpen} toggle={this.toggle}>
                    <DropdownToggle className="remove-border">
                    <i className="fa fa-ellipsis-h"></i>
                    </DropdownToggle>
                    <DropdownMenu className={ddClass}>
                        <DropdownItem><i class="icon-trash"></i>&nbsp;Remove tablet</DropdownItem>
                        
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}

class Devices extends Component {

    render() {
        const ANIMATIONS = ['fadeIn',]
        return (
            <ContentWrapper>
                <div className="form-card">
                <div className=" card-top">
                            <h2>
                              Tablets
                            </h2>
                            <div className="button-align">
                            <a href="/new-tablet">
                                        <button class="btn btn-secondary btn-lg invite-btn" type="button">New Tablet</button>
                                    </a>
                                    </div>
                            </div >
                            <div className="device-grid"> <div className="device-cards">
                              <div className="device-card-top">
                              { ANIMATIONS.map((title, i) => (
                   
                   <DropdownBox title={title}/>                     
                    ))}
                                  </div> 
                                  <div className="whole-device">
                                <div className="device-content">
                                    <div className ="box">
                                    <img src="img/ipad-air.png" alt="ipad" className="grid-height"></img>
                                    </div>
                                    
                                    <ul>
                                        <li>
                                        <h3 className="device-Name">Ipad</h3>
                                        </li>
                                        <li>
                                        <div className="device-status">
                                    <span data-test-status-icon="" class="deviceStatus small good"></span> Operational
                                    </div>
                                        </li>
                                    </ul>
                                    
                                   
                                    </div>
                                    

                                    <div className="device-desc">
                                        <h5>Device type:</h5>
                                        <h5>
                                            iPad (9.7-inch)</h5>
                                            <h5>Device type:</h5>
                                        <h5>
                                           
                                                iOS - 13.3.1</h5>
                                            <h5>Device type:</h5>
                                        <h5>
                                            
                                            192.168.1.17</h5>
                                        </div> 
                                        
                            </div>
                            </div>

                            <div className="device-cards">
                              <div className="device-card-top">
                              { ANIMATIONS.map((title, i) => (
                   
                   <DropdownBox title={title}/>                     
                    ))}
                                  </div> 
                                  <div className="whole-device">
                                <div className="device-content">
                                    <div className="dancing">
                                    <div className= "box">
                                    <img src="img/ipad-air.png" alt="ipad" className="grid-height"></img>
                                    </div>
                                    
                                    
                                    </div>
                                    
                                    <ul>
                                        <li>
                                        <h3 className="device-Name">Samsung</h3>
                                        </li>
                                        <li>
                                        <div className="device-status disabled">
                                    <span data-test-status-icon="" class="deviceStatus small good"></span> Disabled
                                    </div>
                                        </li>
                                    </ul>
                                    
                                   
                                    </div>
                                    

                                    <div className="device-desc">
                                        <h5>Device type:</h5>
                                        <h5>
                                            
                                                Samsung (11-inch)</h5>
                                            <h5>Device type:</h5>
                                        <h5>
                                        android - 8.3.1</h5>
                                            <h5>Device type:</h5>
                                        <h5>
                                        192.168.8.1</h5>
                                        </div> 
                                        
                            </div>
                            </div></div>
                           
                </div>
            </ContentWrapper>
            );
    }

}

export default Devices;
