import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

export default class LogoIcon extends Component {
    static defaultProps = {
        size: 32
    };

    static propTypes = {
        size: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
        dark: PropTypes.bool
    };

    render() {
        let { dark, height, width, size } = this.props;
        return (
            <img src="http://www.ekomi-us.com/us/wp-content/uploads/2015/11/logo_header1.png" alt="eKomi">
        );
    }
}
