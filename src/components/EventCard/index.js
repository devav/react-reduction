import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Badge, Modal, ModalHeader, ModalBody  } from 'reactstrap';
import { WrapperCard } from '../WrapperCard';
import './style.css';
export class EventCard extends Component {

  state = {
    modal: false,
    modal_backdrop: false,
    modal_form: false,
    modal_nested_parent: false,
    modal_nested: false,
    backdrop: false,
  };

  toggle = modalType => () => {
    if (!modalType) {
      return this.setState({
        modal: !this.state.modal,
      });
    }

    this.setState({
      [`modal_${modalType}`]: !this.state[`modal_${modalType}`],
    });
  };

  render() {
    const modalChildren = this.props.children ? this.props.children : <WrapperCard />;
    return (
      <Card className="hover-effect flex-col">
        <div className="img-fluid" style={{ backgroundImage:`url('${this.props.image}')`, backgroundPosition:'top center', height:270, backgroundRepeat:'no-repeat', backgroundColor:'#000' }}></div>
        <CardBody>
          <CardTitle><span style={{ fontSize: '18px'}}>{ this.props.title }</span> <span style={{ color: '#00b5b5', fontSize: '14px'}}>({this.props.date})</span></CardTitle>
          <CardText>
            <span style={{fontSize: '13px', color: 'gray'}}>{this.props.location}</span>
          </CardText>
          <div style={{ marginTop:'10px'}}>
          <Button color="primary" outline className="mr-1" size="sm">
            Lowest Price <Badge color="primary">${ this.props.lowPrice }</Badge>
          </Button>&nbsp;&nbsp;&nbsp;
          <Button color="info" outline className="mr-1" size="sm">
            Highest Price <Badge color="info">${ this.props.highPrice }</Badge>
          </Button>
          <Button color="secondary" onClick={this.toggle('backdrop')} className="mr-1" size="sm" style={{ float:'right'}}>
            Place Bid
          </Button>
          </div>
          <Modal
            isOpen={this.state.modal_backdrop}
            toggle={this.toggle('backdrop')}
            backdrop={this.state.backdrop}>
            <ModalHeader toggle={this.toggle('backdrop')}>
              { this.props.modalTitle } <span style={{ color: '#00b5b5', fontSize: '16px'}}>({this.props.date})</span>
            </ModalHeader>
            <ModalBody>
              {modalChildren}
            </ModalBody>
          </Modal>
        </CardBody>
      </Card>
    )
  }
}
