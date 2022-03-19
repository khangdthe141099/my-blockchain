import React from 'react'
import styled from 'styled-components'
import { 
  Wrapper,
  AccentedButton,
  Author,
  Button,
  CardContainer,
  Container,
  ContentWrapper,
  CopyContainer,
  CtaContainer,
  Description,
  InfoContainer,
  InfoIcon,
  Name,
  Title
 } from './styled/header'

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <ContentWrapper>
          <CopyContainer>
            <Title>
              Discover, collect, and sell extraordinary NFTs
            </Title>
            <Description>
              <span style={{color: '#4d98e3', fontSize: '25px'}}>My Blockchain</span> is the world&apos;s about NFT marketplace
            </Description>
            <CtaContainer>
              <AccentedButton>Explore</AccentedButton>
              <Button>Create</Button>
            </CtaContainer>
          </CopyContainer>
          <CardContainer>
            <img
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/H-LDthYRKPWJdIKEI3WrZFFpxetO77jl1ALd3t4BJQ3Qj661B3WfopzTJ1iNtjD4JqjsLLqblkfWNtaHEzRUsCcbLsUZEiVGkNGE=s550"
              alt=""
            />
            <InfoContainer>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <Author>
                <Name>Jolly</Name>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </Author>
            </InfoContainer>
          </CardContainer>
        </ContentWrapper>
      </Container>
    </Wrapper>
    
  )
}

export default Hero