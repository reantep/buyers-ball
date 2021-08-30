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
import ImgShoes from "../images/homepge.PNG";

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        />
        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        {children}
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "0em" }} vertical>
      <img src={ImgShoes} class="ui fluid image " />
    </Segment>
    <Segment style={{ padding: "0em 0em" }} vertical>
      <Container text>
        <Divider
          as="h1"
          className="header"
          horizontal
          style={{ margin: "0em 0em", textTransform: "uppercase" }}
        >
          <a href="/products">Shop</a>
        </Divider>
        
        
        
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;