import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ControlSlider extends Component{
    constructor(props){
        super(props);
        this.state = {
            delay: 1000,
            isFullScreen: false,
            isPlay: false,
        };
        this.timeoutId = null;
    }
}

/*
state: delay, isFullScreen, isPlay
props: next, prev
*/