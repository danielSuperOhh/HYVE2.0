import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";
import hyvelogo2 from '../../assets/hyvelogo2.png'
import Button from "../button/Button";

const Footer = () => {
return (
	<Box>
	{/* <h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		GeeksforGeeks: A Computer Science Portal for Geeks
	</h1> */}
	<Container>
		<Row>
        <Column >
			<Heading style={{marginBottom:'0px'}}><img src={hyvelogo2} alt="" /></Heading>
            <Heading style={{fontSize: '10px', paddingTop:'0px', paddingBottom:'7px', fontWeight: 'normal'}}>Live beyond borders</Heading>
            <Button padding='10px 10px' width='151px' height='48px' color='#FBFBFB'>Create Account</Button>
		</Column>

		<Column>
			<Heading></Heading>
			<FooterLink href="#" style={{paddingTop: '30px'}}>Home</FooterLink>
			<FooterLink href="#">Features</FooterLink>
			<FooterLink href="#">how it works</FooterLink>
		</Column>
		<Column>
			<Heading>Contact us</Heading>
			<FooterLink href="#">Facebook</FooterLink>
			<FooterLink href="#">Twitter</FooterLink>
			<FooterLink href="#">Instagram</FooterLink>
			<FooterLink href="#">LinkeIn</FooterLink>
		</Column>
		<Column>
			<Heading>Company</Heading>
			<FooterLink href="#">Login</FooterLink>
			<FooterLink href="#">Sign up</FooterLink>
			<FooterLink href="#">FAQs</FooterLink>
			<FooterLink href="#">Privacy and policy</FooterLink>
            <FooterLink href="#">Terms and conditions</FooterLink>
		</Column>
        <Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Administration</FooterLink>
			<FooterLink href="#">Technical team</FooterLink>
		</Column>

		{/* <Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column> */}
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
