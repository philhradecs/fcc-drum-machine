import React, { Component } from "react";
import styled from "styled-components";

const Btn = styled.div`
	background-color: red;
`;

class Button extends Component {
	render() {
		return <Btn>Button</Btn>;
	}
}

export default Button;
