import React, { Component } from 'react';
import { withNamespaces, Trans } from 'react-i18next';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../../custom.css'
import CardTool from '../Common/CardTool'
import Sparkline from '../Common/Sparklines';
import Scrollable from '../Common/Scrollable'
import FlotChart from '../Charts/Flot';
import Now from '../Common/Now';

class DashboardV1 extends Component {

    state = {
        flotData: [{
            "label": "Uniques",
            "color": "#768294",
            "data": [
                ["Mar", 70],["Apr", 85],["May", 59],["Jun", 93],["Jul", 66],["Aug", 86],["Sep", 60]
            ]
        }, {
            "label": "Recurrent",
            "color": "#1f92fe",
            "data": [
                ["Mar", 21],["Apr", 12],["May", 27],["Jun", 24],["Jul", 16],["Aug", 39],["Sep", 15]
            ]
        }],

        flotOptions: {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true,
                    radius: 4
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.5
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 1,
                hoverable: true,
                backgroundColor: '#fcfcfc'
            },
            tooltip: true,
            tooltipOpts: {
                content: (label, x, y) => x + ' : ' + y
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 150, // optional: use it for a clear represetation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: v => v /* + ' visitors'*/
            },
            shadowSize: 0
        },

        dropdownOpen: false

    }

    componentDidMount() {
        // Easy pie
        let pieOptions1 = {
            animate: {
                duration: 800,
                enabled: true
            },
            barColor: '#23b7e5',
            trackColor: 'rgba(200,200,200,0.4)',
            scaleColor: false,
            lineWidth: 10,
            lineCap: 'round',
            size: 145
        };
    }

    changeLanguage = lng => {
        this.props.i18n.changeLanguage(lng);
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        // Usse t function instead of Trans component
        // const { t } = this.props;

        return (
            <ContentWrapper>
                <div className="content-heading">
                    <div>Workwise HQ
                        
                    </div>
                  
                </div>
                { /* START cards box */ }
                <div className="cards-container">
                    <div className="dashCards">
                        <div className=" card-top">
                            <h4>
                                Visitors
                            </h4>
                            <button href="#" className="linkButton">
                               <i className="fa fa-arrow-right"></i> 
                            </button>
                        </div>
                        <div className="card-content">
                            <h1>0</h1>
                            <h2>Currently on site</h2>
                            <h1>0</h1>
                            <h2>Expected later today</h2>
                        </div>
                    </div>

                

                { /* END cards box */ }
                { /* START cards box */ }
                
                    <div className="dashCards">
                        <div className=" card-top">
                            <h4>
                                Deliveries
                            </h4>
                            <button href="#" className="linkButton">
                               <i className="fa fa-arrow-right"></i> 
                            </button>
                        </div>
                        <div className="card-content">
                            
                            <h3>Save time and avoid package pile up by automating how you manage incoming packages at your work place</h3>
                            
                        </div>
                    </div>

                

                { /* END cards box */ }
                { /* START cards box */ }
               
                    <div className="dashCards">
                        <div className=" card-top">
                            <h4>
                                Rooms
                            </h4>
                            <button href="#" className="linkButton">
                               <i className="fa fa-arrow-right"></i> 
                            </button>
                        </div>
                        <div className="card-content2">
                            <ul>
                                <li className="list-style">
                                    <i className="fa fa-check-circle"></i>
                                    <h5>import your company's room calenders</h5>
                                </li>
                                <li className="list-style">
                                    <a href="#" className="list-numbering">2</a>
                                    <h5>select the rooms in your office location</h5>
                                </li>
                                <li className="list-style">
                                <a href="#" className="list-numbering">3</a>
                                    <h5>pair an ipad to each room</h5>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                { /* END cards box */ }
                <div className="section-header">
                    <h4>
                        Setup guide
                    </h4>
                </div>
                <div className="section-content">
                    <img src="img/product-desk.svg"></img>
                
                <div className="section-text-content">
                    <h3>
                    Finish setting up your workplace
                    </h3>
                    <h4>
                    Add a logo, sync your employee directory and customize your workplace settings.
                    </h4>
                    <div className="card-content2">
                            <ul>
                                <li className="list-style2">
                                    <i className="fa fa-check-circle"></i>
                                    <h5>import your company's room calenders</h5>
                                </li>
                                <li className="list-style2">
                                    <a href="#" className="list-numbering2">2</a>
                                    <h5>select the rooms in your office location</h5>
                                </li>
                               
                            </ul>
                        </div>
                </div>
                </div>
               
            </ContentWrapper>
            )

    }

}

export default withNamespaces('translations')(DashboardV1);
