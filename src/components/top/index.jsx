import React from "react";

import "./style.scss";

import Weather from "./weather";

import { Manager, Reference, Popper } from "react-popper";

export default class TopSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelectLLocationOpen: false
    };
  }

  onToggleSelectLocation() {
    this.setState(prev => ({
      isSelectLLocationOpen: !prev.isSelectLocationOpen
    }));
  }

  render() {
    const { isSelectLocationOpen } = this.state;

    return (
      <div className="top-container">
        <div className="title">Weather App</div>
        <Weather {...this.props} />
        <Manager>
          <Reference>
            {({ ref }) => (
              <button
                className="btn btn-select-location"
                ref={ref}
                onClick={this.onToggleSelectLocation.bind(this)}
              >
                Select Location
              </button>
            )}
          </Reference>
          <Popper placement="top">
            {({ ref, style, placement, arrowProps }) =>
              isSelectLocationOpen && (
                <div
                  className="popup-container"
                  ref={ref}
                  style={style}
                  data-placement={placement}
                >
                  Popper Element
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </div>
              )
            }
          </Popper>
        </Manager>
      </div>
    );
  }
}
