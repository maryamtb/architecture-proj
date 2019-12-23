import React, { Component } from 'react';
import './App.css';
import styled, { keyframes } from 'styled-components';
import { bounceInDown } from 'react-animations';

const bounceAnimation = keyframes`${bounceInDown}`;
 
const Bounce = styled.div`
  animation: 1.8s ${bounceAnimation};
  color: white;
  font-size: 35px;
  box-shadow: 3px 3px 15px 0px grey; 
`;

export default class ReactAnimations extends Component {
	render () {
		return (
			<Bounce><h1> ALA </h1></Bounce>
		);
	}
}