'use strict'
import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Card, CardHeader, CardBody, Input, Table } from 'reactstrap';


import '../../styles/MyStyles/custom.css'
import { Link } from 'react-router-dom';
import { SketchPicker } from 'react-color'
import reactCSS from 'reactcss'
class FormValidation extends Component {

    state = {
        // Data for charts
        chartdata: [
            { y: "2006", a: 100, b: 90 },
            { y: "2007", a: 75, b: 65 },
            { y: "2008", a: 50, b: 40 },
            { y: "2009", a: 75, b: 65 },
            { y: "2010", a: 50, b: 40 },
            { y: "2011", a: 75, b: 65 },
            { y: "2012", a: 100, b: 90 }
        ],
        donutdata: [
            {label: "Download Sales", value: 12},
            {label: "In-Store Sales", value: 30},
            {label: "Mail-Order Sales", value: 20}
        ],
        // Line Chart
        lineOptions: {
            element: 'morris-line',
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ["#31C0BE", "#7a92a3"],
            resize: true
        },
        // Donut Chart
        donutOptions: {
            element: 'morris-donut',
            colors: ['#f05050', '#fad732', '#ff902b'],
            resize: true
        },
        // Bar Chart
        barOptions: {
            element: 'morris-bar',
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Series A", "Series B"],
            xLabelMargin: 2,
            barColors: ['#23b7e5', '#f05050'],
            resize: true
        },
        // Area Chart
        areaOptions: {
            element: 'morris-area',
            xkey: 'y',
            ykeys: ["a", "b"],
            labels: ["Serie A", "Serie B"],
            lineColors: ['#7266ba', '#23b7e5'],
            resize: true
        },
        displayColorPicker: false,
            color: {
                r: '0',
                g: '145',
                b: '74',
                a: '1',
         },
    }
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
      handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
    
      handleChange = (color) => {
        this.setState({ color: color.rgb })
      };

    render() {

        const styles = reactCSS({
            'default': {
              color: {
                width: '160px',
                height: '40px',
                borderRadius: '2px',
                background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
              },
              swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
              },
              popover: {
                position: 'absolute',
                zIndex: '2',
              },
              cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
              },
            },
          });
        return (
            <ContentWrapper>
                <div className="form-card">
                <div className=" card-top">
                            <h3>
                              Billing
                            </h3>
                            </div >
                            
                <div className=" card-top billing ">
                            <h3>
                            Products
                            </h3>
                            </div >

                <div className="billing-content">
                <div className="upload-logo billing-box">
                                        <div className="content-text">
                                            <h4>Visitor Basic</h4>
                                        </div>
                                        <div className="content-button">
                                        <button class="btn btn-secondary btn-lg " type="button"><Link to="/#"></Link>  Manage subscription</button>
                                        </div>
                            </div>
                            <div className="upload-logo billing-box">
                                        <div className="content-text">
                                            <h4>Deliveries</h4>
                                            <h5>The simple solution of office deliveries.</h5> 
                                        </div>
                                        <div className="content-button learn-more">
                                        <button class="btn btn-secondary btn-lg invite-btn" type="button"><Link to="/#"></Link>  Learn more</button>
                                        </div>
                            </div>

                            <div className=" card-top billing billing-box2">
                            <h3>
                            Payment method
                            </h3>
                            </div >
                            <div className="upload-logo billing-box">
                                        <div className="content-text">
                                            <h4>No card on file</h4>
                                            <h5>Add a credit card to continue using Workwise.</h5> 
                                        </div>
                                        <div className="content-button learn-more">
                                        <button class="btn btn-secondary btn-lg invite-btn" type="button"><Link to="/#"></Link>  Add</button>
                                        </div>
                            </div>

                            <div className=" card-top billing billing-box2 ">
                            <h3>
                            Billing history
                            </h3>
                            </div >

                            <div className="billing-box2">
                            <Card >
                            <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>DATE</th>
                                            <th>AMOUNT</th>
                                            <th>RECEIPT</th>
                                            <th>STATUS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mar 11, 2020</td>
                                            <td>₦35,000</td>
                                            <td>WW10321</td>
                                            <td>Pending</td>
                                        </tr>
                                        
                                    </tbody>
                                </Table>
                                </Card>
                                </div>
                                   </div>
                </div>
            </ContentWrapper>
        );
    }

}

export default FormValidation;

