'use strict'
import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Input } from 'reactstrap';
import '../../styles/MyStyles/custom.css';
import { Link } from 'react-router-dom';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import PlacesAutocomplete, {geocodeByAddress, getLatLng} from "react-places-autocomplete";
import Palette from 'react-palette';
import { usePalette } from 'react-palette';
import { ColorExtractor } from 'react-color-extractor';
import ColorThief from 'colorthief';


class ChartMorris extends Component {
   
   constructor(props) {
    super(props);
    this.imgRef = React.createRef();
   this. state = {
        
        displayColorPicker: false,
            color: {
                r: '0',
                g: '145',
                b: '74',
                a: '1',
         },
         address: '',
         colors: [],
         imgPrevUrl: "img/icon.png",
         file: ''
        
    };
    
  }
 
  getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }))
  //.then(results => console.log(results[0].formatted_address))
    handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
      };
    
      handleClose = () => {
        this.setState({ displayColorPicker: false })
      };
    
      handleChange = (color) => {
        this.setState({ color: color.rgb })
        
      };
      
       handleChange2 = address => {
    this.setState({ address });
  };
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => this.setState({address:results[0].formatted_address}))
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };

      convertToHex = (result, color) => {
        const r = result[0];
         const g = result[1];
         const b = result[2];
         const rgbVal = 'rgb('+ r + ',' + g + ',' + b + ')';
         this.setState(prevState => ({
            color: {                  
                ...prevState.color,    
                r: r,
                g: g,
                b: b       
            }
        }))
         //this.setState({rState:r})
            console.log(this.state.color);
            console.log(this.rgbToHex(r, g, b));
      };

     
       rgbToHex =(r, g, b) =>{
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        
      };
    
      _handleImageChange(e) {
        e.preventDefault();
    
        let reader = new FileReader();
        let file = e.target.files[0];
       
        reader.onloadend = () => {
          console.log(reader.result);
          this.setState({
            file: file,
            imgPrevUrl: reader.result
          });
        }
    
        reader.readAsDataURL(file)
      }
      
      
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
                <div className=" card-top no-button">
                            <h3>
                              Location details
                            </h3>
                            <div>
                        
       
      </div>
                            </div >
                            <div className="visitorForm" >
                <div className="input-field">
                                    <p><small><b>COMPANY NAME </b></small><span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter Company name"/>
                                    </div>
                                    <div className="input-field">
                                    <p><small><b>LOCATION NAME</b></small> <span className="required">*</span></p>
                                        <Input id="input-id-1" type="text" placeholder="Enter Location name"/>
                                    </div>

                                <div className="form-gird2">
                                    <div className="input-field-large">
                                    <p><small><b>ADDRESS</b></small> <span className="required">*</span></p>

                                        <PlacesAutocomplete 
                                        value ={this.state.address}
                                         onChange ={this.handleChange2}
                                          onSelect ={this.handleSelect}>
                                          {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (<div><Input  {...getInputProps({placeholder: "Enter a location",
                                                            className: 'location-search-input',})} id="input-id-1" type="text" autoComplete="off" value ={this.state.address} />
                                        <div className="autocomplete-dropdown-container">
                                            {loading && <div>...loading </div> }
                                            {suggestions.map(suggestion => {
                                                const className = suggestion.active
                                                ? 'suggestion-item--active'
                                                : 'suggestion-item';
                                              // inline style for demonstration purpose
                                              const style = suggestion.active
                                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                              return (
                                                <div
                                                  {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    style,
                                                  })}
                                                >
                                                  <span>{suggestion.description}</span>
                                              </div>);
                                            })}
                                        </div>
                                        </div>)}
                                        
                                        </PlacesAutocomplete>
                                        
                                    </div>
                                    <div className="input-field-small">
                                    <p><small><b>ADDRESS LINE 2</b></small> </p>
                                        <Input id="input-id-1" type="text" />
                                    </div>
                                </div>
                                <a href="/form-extended" className="save-button">
                                        <button className="btn btn-secondary btn-lg invite-btn" type="button"><i className="icon-plus"></i>&nbsp; &nbsp;Save location info</button>
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
                                            <img  crossOrigin={"anonymous"}
            ref={this.imgRef}
            src={
              this.state.imgPrevUrl
            }
            alt={"example"}
           
            onLoad={() => {
              const colorThief = new ColorThief();
              const img = this.imgRef.current;
              const result = colorThief.getColor(img, 25);
              {this.convertToHex(result)};
            }} className="grid-img"></img>
                                            <div className="upload-btn-wrapper">
                                        <button className="btn-upload">Select file</button>
                                        <input type="file" className="add-cursor" accept="image/png,image/gif,image/jpeg" name="myfile" onChange={(e)=>this._handleImageChange(e)}></input>
                                        
                                        </div>
                                                                                    
                                           
                                        <div className="upload-button"><button class="btn-upload2" type="button"><i class="fa fa-upload"></i><Link to="/#"></Link> &nbsp; &nbsp; Upload</button></div>
                                        
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
                        <SketchPicker color={ this.state.colors } onChange={ this.handleChange } />
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

