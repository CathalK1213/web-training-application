import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/">Training</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">careers</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us </FooterLinkTitle>
                            <FooterLink to="/">Training</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">careers</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle> Training </FooterLinkTitle>
                            <FooterLink to="/">Training</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">careers</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle> Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Training</FooterLink>
                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">careers</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>

                    </FooterLinksWrapper>

                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;