
import React, { Component } from "react";
import PropTypes from "prop-types";
import Icon from "metabase/components/Icon";
import { capitalize } from "humanize-plus"
import { Link } from "react-router";

const propTypes = {
  provider: PropTypes.string.isRequired
};

class EkomiConnectButton extends Component {
  ekomiConnectOld(){
    // const w = 400;
    // const h = 400;
    // let left = (screen.width/2)-(w/2);
    // let top = (screen.height/2)-(h/2);
    // window.open("http://smart-widget-staging-2.ekomiapps.de/connect/ekomi_connect", 'abc', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
  }
  
  // eKomiConnect() {
  //   let { login, location } = this.props;
  //   let { credentials } = this.state;

  //   loginEkomi('', location.query.redirect);
  // }
    
  render () {
    const { provider } = this.props
    return (
        <div className="relative z2  p2 cursor-pointer shadow-hover text-centered sm-text-left rounded block sm-inline-block bordered shadowed ekomi-btn">
            <div className="flex align-center">
                <Icon className="mr1" name={provider} />
                <h4 onClick={this.ekomiConnect}>LOGIN VIA EKOMI CONNECT</h4>
            </div>
        </div>
    )
  }
}


EkomiConnectButton.proptypes = propTypes

export default EkomiConnectButton;
