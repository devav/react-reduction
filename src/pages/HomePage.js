import React from 'react';

import {
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardLink,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback
} from 'reactstrap';

import { Line } from 'react-chartjs-2';

import { overlayCards, bgCards, gradientCards } from 'demos/cardPage';

import { getStackLineChart, stackLineChartOptions } from 'demos/chartjs';

import Page from 'components/Page';
import { UserCard } from 'components/Card';
import { SampleMap } from '../components/SampleMap';
import { BidingDetails } from '../components/BidingDetails';
import { WrapperCard } from '../components/WrapperCard';
import { EventCard } from '../components/EventCard';

import bg1Image from 'assets/img/bg/background_640-1.jpg';
import bg3Image from 'assets/img/bg/background_640-3.jpg';
import bg11Image from 'assets/img/bg/background_1920-11.jpg';
import bg18Image from 'assets/img/bg/background_1920-18.jpg';
import user1Image from 'assets/img/users/100_1.jpg';
import eventImg1 from 'assets/img/event/football.jpg';
import eventImg2 from 'assets/img/event/baseball.jpg';
import eventImg3 from 'assets/img/event/raiders1.jpg';
import eventImg4 from 'assets/img/event/kesha.jpg';
import eventImg5 from 'assets/img/event/eimg5.jpg';
import eventImg6 from 'assets/img/event/eimg6.jpg';
import eventImg7 from 'assets/img/event/eimg7.jpg';
import eventImg8 from 'assets/img/event/eimg8.jpg';
import footballfieldsvg from 'assets/img/football-st.svg';

//const CardPage = () => {
class CardPage extends React.Component {




  render() {
  return (
    <Page title="Cards" breadcrumbs={[{ name: 'cards', active: true }]} style={{marginTop: '80px'}}>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <EventCard
            image={eventImg1}
            title="North Carolina Tar Heels at Cal Bears Football"
            date="Sat, Sep 01, 2018"
            location="California Memorial Stadium, Berkeley, CA, US"
            lowPrice="120"
            highPrice="230"
            modalTitle="North Carolina Tar Heels at Cal Bears Football"
          >
            <Form className="col-sm-6">
              <FormGroup row>
                <Label for="exampleEmail" sm={4}>
                  Bid per Ticket ($)
                </Label>
                <Col sm={8}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter Amount per Ticket"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={4}>
                  No.Of Tickets
                </Label>
                <Col sm={8}>
                  <Input type="select" name="select">
                    <option>1</option>
                    <option>2</option>
                    <option>4</option>
                    <option>6</option>
                    <option>8</option>
                    <option>8</option>
                </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleSelect" sm={4}>
                  Bid Expires on
                </Label>
                <Col sm={8}>
                  <Input type="select" name="select">
                    <option>Event Date</option>
                    <option>1 DAY</option>
                    <option>2 DAYS</option>
                    <option>4 DAYS</option>
                    <option>6 DAYS</option>
                    <option>10 DAYS</option>
                </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="exampleText" sm={4}>
                  Additional Notes
                </Label>
                <Col sm={8}>
                  <Input type="textarea" name="text" />
                </Col>
              </FormGroup>
              <FormGroup check row>
                <Col sm={{ size: 10, offset: 9 }}>
                  <Button>Place Bid</Button>
                </Col>
              </FormGroup>
            </Form>
          </EventCard>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <EventCard
            image={eventImg3}
            title="Green Bay Packers at Oakland Raiders  Preseason Tickets"
            date="Mon, Jun 11, 2018"
            location="Oakland Coliseum, CA, US"
            lowPrice="190"
            highPrice="330"
            modalTitle="Green Bay Packers at Oakland Raiders  Preseason Tickets"
            >
          </EventCard>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <EventCard
            image={eventImg2}
            title="Stockton Ports at San Jose Giants"
            date="Fri, Jun 08, 2018"
            location="San Jose Municipal Stadium, San Jose, CA, US"
            lowPrice="550"
            highPrice="760"
            modalTitle="Stockton Ports at San Jose Giants"
            >
          </EventCard>
        </Col>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <EventCard
            image={eventImg4}
            title="Kesha and Macklemore"
            date="Thu, Jun 14, 2018"
            location="Shoreline Amphitheatre, Mountain View, CA, US"
            lowPrice="420"
            highPrice="630"
            modalTitle="Kesha and Macklemore"
            >
          </EventCard>
        </Col>
      </Row>
      <Row>
        <Col md={6} sm={6} xs={12} className="mb-3">
          <EventCard
            image={eventImg5}
            title="LAFC  at San Jose Earthquakes"
            date="Sat, Jun 09, 2018"
            location="Avaya Stadium, San Jose, CA, US"
            lowPrice="320"
            highPrice="999"
            modalTitle="LAFC  at San Jose Earthquakes"
            >
          </EventCard>
        </Col>

        <Col md={6} sm={6} xs={12} className="mb-3">
          <EventCard
            image={eventImg6}
            title="Beyoncé & Jay-Z Tickets"
            date="Thu, Jun 14, 2018"
            location="Levis Stadium, Santa Clara, CA, US"
            lowPrice="110"
            highPrice="440"
            modalTitle="Beyoncé & Jay-Z Tickets"
            >
          </EventCard>
        </Col>
      </Row>
      <Row>

      <Col md={7} sm={7} xs={12} className="mb-3">
        <EventCard
          image={eventImg7}
          title="San Francisco 49ers Packages"
          date="Fri, Jun 22, 2018"
          location="Memorabilia San Francisco, Santa Clara, California, US"
          lowPrice="200"
          highPrice="940"
          modalTitle="San Francisco 49ers Packages"
          >
        </EventCard>
      </Col>
        <Col md={5} sm={5} xs={12} className="mb-3">
          <EventCard
            image={eventImg8}
            title="5 Seconds of Summer"
            date="Tue, Jul 17, 2018"
            location="Event Center at San Jose State University, San Jose, CA, US"
            lowPrice="100"
            highPrice="560"
            modalTitle="5 Seconds of Summer"
            >
          </EventCard>
        </Col>
      </Row>
    </Page>
  );

}
};

export default CardPage;
