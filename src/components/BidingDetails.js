import React, { Component } from 'react';
import { Button, Input } from 'reactstrap';
import './bidding.css';

const boxStyle = {
  border: '1px solid rgba(0, 0, 0, 0.125)',
  padding: 20,
  fontSize: 14,
  position: 'sticky',
  top: 10
};

export class BidingDetails extends Component {
  state = {
    clsanimation: ''
  }

  componentWillReceiveProps() {
      console.log('changed');
      this.setState({
        clsanimation:''
      });
      setTimeout(()=> {
        this.setState({
          clsanimation:'bidclick'
        });
      }, 100);

  }

  render() {
    return (
      <div style={boxStyle}>
        <div className="byo-event-info">
          <div className="event-meta ">
            <div className="date-stamp-standard date-container ">
              <span className="date-stamp-standard">
                <span className="date-divider-top"></span>
                <span className="date-stamp-day ">Fri</span>
                <time className="date-stamp-month-dd">Aug 24</time>
                <time className="date-stamp-month-dd"></time>
              </span>
            </div>
          </div>
          <div className="event-details">
            <div className="event-details-box">
              <h1 className="header">
                <a className="performer" href="javascript:void(0);">Green Bay Packers</a> at <a className="performer pid-139" href="/oakland-raiders-tickets/performer/139/">Oakland Raiders</a> Preseason Tickets</h1>
                <div className="event-location-info">
                  <span className="event-time">7:30 PM</span>
                  <span> at </span>
                  <a className="venue" href="javascript:void(0);">
                  <span className="event-venue">Oakland Coliseum</span></a>,
                  <span className="event-location"> Oakland, CA</span>
                </div>
              </div>
            </div>
            <div className="separator"></div>
            <div className="listing-summary">
              <div className="qty-container">
                <div className="titles qty-text">NUMBER OF TICKETS</div>
                <div className="ticket-qty">
                  <span className={this.state.clsanimation}>{this.props.available} tickets</span>
                </div>
              </div>
              <div className="total-cont">
                <div className="titles ticket-price">TICKET PRICE</div>
                <div className={this.state.clsanimation}>${ this.props.price } each</div>
              </div>
            </div>
            <Input className="mb-2" placeholder="Enter your bid" />
            <Button color="secondary" size="sm" block>
              Place Bid
            </Button>
          </div>
      </div>
    )
  }
}
