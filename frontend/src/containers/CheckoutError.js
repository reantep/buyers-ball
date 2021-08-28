import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Container,
  Divider,
  Grid,
  Header,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';



const CheckoutErrorLayout = () => (
    <ResponsiveContainer>
      <Segment style={{ padding: "0em" }} vertical>
          <p>
              <h1>Sorry but our payment system is under maintenance please contact admin @ ReantePatterson@gmail.com</h1>
          </p>
      </Segment>
      <Segment style={{ padding: "0em 0em" }} vertical>
        <Container text>
          <Divider
            as="h1"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="/products">Shop</a>
          </Divider>
          
          
          
        </Container>
      </Segment>
    </ResponsiveContainer>
  );
  export default CheckoutErrorLayout;