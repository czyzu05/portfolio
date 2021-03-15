import React from 'react'
import styled from 'styled-components'

const ContactElement = ({icon, title, value}) => {
    return (
        <Wrapper>
            <Icon>{icon}</Icon>
            <Information>
                <Header>{title}</Header>
                <Value>{value}</Value>
            </Information>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 15rem;
    background-color: #191D2B;
    padding: 25px;

    display: flex;
    align-items: center;
`

const Icon = styled.div`
    border: 1px solid #2e344e;
    padding: 20px;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #a4acc4;
`

const Information = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 25px;
`

const Header = styled.h4`
    color: #fff;
    text-transform: capitalize;
    padding-bottom: 10px;
`

const Value = styled.p`
  color: #a4acc4;
`

export default ContactElement
