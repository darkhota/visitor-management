import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Row, Col, Card, CardHeader, CardBody, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
// React Slider
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
// Color picker
import { ChromePicker, SketchPicker, BlockPicker, TwitterPicker  } from 'react-color'
// React Select
import Select from 'react-select';
// Masked Input
import MaskedInput from 'react-maskedinput'
// DateTimePicker
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// Filestyle
import 'bootstrap-filestyle';
// React Draft Wysiwyg
import { EditorState, ContentState, convertFromHTML, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../custom.css'
// used for react slider
const marks = {
  '-10': '-10°C',
  0: <strong className="text-info">0°C</strong>,
  26: '26°C',
  37: '37°C',
  50: '50°C',
  100: {
    style: {
      color: 'red',
    },
    label: <strong>100°C</strong>,
  },
};

// used for react select
const STATES = [
    { value: 'australian-capital-territory', label: 'Australian Capital Territory', className: 'State-ACT' },
    { value: 'new-south-wales', label: 'New South Wales', className: 'State-NSW' },
    { value: 'victoria', label: 'Victoria', className: 'State-Vic' },
    { value: 'queensland', label: 'Queensland', className: 'State-Qld' },
    { value: 'western-australia', label: 'Western Australia', className: 'State-WA' },
    { value: 'south-australia', label: 'South Australia', className: 'State-SA' },
    { value: 'tasmania', label: 'Tasmania', className: 'State-Tas' },
    { value: 'northern-territory', label: 'Northern Territory', className: 'State-NT' },
]
// editor initial content
const blocksFromHTML = convertFromHTML('<p>Write something...</p>');
const initialEditorContent = ContentState.createFromBlockArray(
  blocksFromHTML.contentBlocks,
  blocksFromHTML.entityMap
);

class FormExtended extends Component {
    state = {
        displayColorPicker: false,
        displayColorPickerInput: false,
        colorSelected: '#00AABB',

        selectedOption: '',
        selectedOptionMulti: [],

        card: '',
        expiry: '',
        ccv: '',

        editorState: EditorState.createWithContent(initialEditorContent)
    };

    colorpickerHandleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };

    colorpickerHandleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    colorpickerInputHandleClick = () => {
        this.setState({ displayColorPickerInput: !this.state.displayColorPickerInput })
    };

    colorpickerInputHandleClose = () => {
        this.setState({ displayColorPickerInput: false })
    };

    sliderLog(value) {
        console.log(value)
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }
    handleChangeSelectMulti = (selectedOptionMulti) => {
        this.setState({ selectedOptionMulti });
        console.log(`Selected Multi: ${selectedOptionMulti.label}`);
    }

    onChangeMasked = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onEditorStateChange = editorState => {
        this.setState({ editorState })
    }

    render() {

        // used for color picker
        const popover = {
            position: 'absolute',
            zIndex: '302',
        }
        const cover = {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        }
        // used for react select
        const { selectedOption } = this.state;
        const value = selectedOption && selectedOption.value;
        const { selectedOptionMulti } = this.state;
        // editor
        const { editorState } = this.state;

        return (
            <ContentWrapper>
                <div className="form-card">
                <div className=" card-top-tablet">
                            <h3>
                            <a href="/chart-chartjs">
                               <i className="far fa-arrow-alt-circle-left" ></i> 
                           </a>
                              &nbsp;  New Tablet
                            </h3>
                </div >
                <div className="new-tablet-content">
                    <div className="new-tablet-form">
                    <ul>
                                
                                <li className="list-style3 ">
                                    <a href="#" className="list-numbering-tablet">1</a>
                                    <h4>Get the Workwise Visitors app</h4>
                                    <ul>
                                
                                <li >
                                    
                                    <h5>On your tablet, open the app store</h5>
                                </li>
                                <li >
                              
                                    <h5>Search for and download Workwise Visitors Management</h5>
                                </li>
                            </ul>
                                </li>
                                <li className="list-style3 ">
                                <a href="#" className="list-numbering-tablet">2</a>
                                    <h4>Enter the device code</h4>
                                    <ul>
                                
                                <li >
                                    
                                    <h5>Open the Workwise Visitors app.</h5>
                                </li>
                                <li >
                              
                                    <h5>Find the six digit device pairing code and type it below.</h5>
                                </li>
                            </ul>
                                </li>
                            </ul>
                            <input type="text" className="device-code"></input>
                            <a href="#">
                                        <button class="btn btn-secondary btn-lg invite-btn" type="button">Pair Device</button>
                                    </a>

                    </div>
                    <div className="new-tablet-device">
                    <img src="img/ipad.png"></img>
                    </div>
                </div>
                </div>
               
            </ContentWrapper>
            );
    }

}

export default FormExtended;
