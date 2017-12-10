import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import RootDrawer from './src/routes'


export default class AnatomyExample extends Component {
  render() {
    return (
      <RootDrawer/>
    );
  }
}