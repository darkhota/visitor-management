'use strict'
import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Container, Row, Col, Card, CardHeader, CardBody, Input } from 'reactstrap';

import MorrisChart from './Morris';
import '../../custom.css'
import { Link } from 'react-router-dom';
import { SketchPicker } from 'react-color'
import reactCSS from 'reactcss'
class ChartMorris extends Component {

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
                              Location details
                            </h3>
                            </div >
                            <div className="visitorForm" >
                <div className="input-field">
                                    <p>COMPANY NAME <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter Company name"/>
                                    </div>
                                    <div className="input-field">
                                    <p>LOCATION NAME <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter Location name"/>
                                    </div>

                                <div className="form-gird2">
                                    <div className="input-field-large">
                                    <p>ADDRESS <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter a location"/>
                                    </div>
                                    <div className="input-field-small">
                                    <p>ADDRESS LINE 2 </p>
                                        <Input id="input-id-1" type="text" />
                                    </div>
                                </div>
                                <a href="/form-extended" className="save-button">
                                        <button class="btn btn-secondary btn-lg invite-btn" type="button"><i class="icon-plus"></i>&nbsp; &nbsp;Save location info</button>
                                    </a>
                </div>

                <div className=" card-top">
                            <h3>
                             Branding
                            </h3>
                            </div >
                           
                                <div className="upload-logo">
                                <img src="img/logo.svg"></img>
                                <div className="upload-logo-content">
                                        <h4>Logo</h4>
                                        <h5>Upload a logo that will appear on your Visitors kiosk, badges, and invite emails.</h5>

                                        <div className="logo-preview">
                                            <img src="img/icon.png" className="grid-img"></img>
                                            <div className="upload-btn-wrapper">
                                        <button className="btn-upload">Select file</button>
                                        <input type="file" name="myfile" />
                                        </div>
                                                                                    
                                           
                                        <div className="upload-button"><button class="btn-upload2" type="button"><i class="fa fa-upload"></i><Link to="/form-standard"></Link> &nbsp; &nbsp; Upload</button></div>
                                        
                                    <div className="upload-text">
                                        <h5>We recommend uploading a transparent PNG cropped to the edges of your logo and up to 1000px wide or 600px tall.</h5>
                                    </div>
                                    
                                        </div>
                                </div>
                            </div>
               

               
                                <div className="upload-logo">
                                <img src="img/accent.svg"></img>
                                <div className="upload-logo-content">
                                        <h4>Accent color</h4>
                                        <h5>Choose a custom accent color for the details on your Tablet and pre-registration emails.</h5>
                                        <h4>Choose a color</h4>
                                                        <div style={ styles.swatch } onClick={ this.handleClick }>
                        <div style={ styles.color }></div> 
                        </div>
                        { this.state.displayColorPicker ? <div style={ styles.popover }>
                        <div style={ styles.cover } onClick={ this.handleClose }/>
                        <SketchPicker color={ this.state.color } onChange={ this.handleChange } />
                        </div> : null }

                                       
                                </div>
                            </div>

                            <div className=" card-top">
                            <h3>
                             Advanced settings
                            </h3>
                            </div >

                            <div className="upload-logo">
                                <img src="img/export.svg"></img>
                                <div className="upload-logo-content">
                                    <div className="content-grid">
                                        <div className="content-text">
                                            <h4>Export full visitor history</h4>
                                        <h5>Download a CSV file of all visitor data.</h5>  
                                        </div>
                                        <div className="content-button">
                                        <button class="btn btn-secondary btn-lg invite-btn" type="button"><Link to="/#"></Link>  Export</button>
                                        </div>
                                         
                                        </div>      
                                </div>
                            </div>

                            <div className="upload-logo">
                                <img src="img/deactivate.svg"></img>
                                <div className="upload-logo-content">
                                    <div className="content-grid">
                                        <div className="content-text">
                                        <h4>Deactivate location</h4>
                                        <h5>Temporarily disable sign-ins at this location.</h5>  
                                        </div>
                                        <div className="content-button">
                                        <button class="btn-deactivate" type="button"><Link to="/#"></Link>  Deactivate</button>
                                        </div>
                                        </div>      
                                </div>
                            </div>
                </div>
                    
               

               
               
               
            </ContentWrapper>
        );
    }

}

export default ChartMorris;

