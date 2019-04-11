import React, { Component } from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'
import Candidate from './candidate'

const VoteContainer = styled.div`
    width: 100%;
    overflow: auto;
    font-family: 'Roboto', sans-serif;
`

const Inner = styled.div`
    width: 102em;
    border: 1px solid black;
`

const Col = styled.div`
    flex: 0 0 10em;
    width: 10em;
    padding: 2em 0.5em 1em;
    margin: 0.5em 0;
    position: relative;

    &:not(:last-child) {
        border-right: 1px solid black;
    }
`

const ColLabel = styled.span`
    position: absolute;
    top: 0;
    left: 0.5em;
`

const ContentCol = styled.div`
    width: 10em;
    flex: 0 0 10em;
    padding: 0.5em;
    border-right: 1px solid black;
    margin: 0.5em 0;
    font-weight: bold;
    position: relative;
`

const FirstContent = styled.p`
    font-weight: bold;
`

const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    width: 100%;

    &:first-child {
        border-bottom: 1em solid black;
    }
`

const Title = styled.h2`
    display: block;
    margin: 0 0 1rem;
    font-weight: bold;
    font-size: 1.2em;
    line-height: 1;
`

const PartyTitle = styled.span`
    display: block;
    text-transform: uppercase;
    font-weight: bold;
`

const Arrow = styled.span`
    display: block;
    padding: 0.25rem;
    height: 2rem;
    line-height: 1;
    background: linear-gradient(
                90deg,
                black,
                black calc(100% - 1rem),
                transparent calc(100% - 1rem)
            )
            0 0,
        linear-gradient(45deg, black, black 50%, transparent 50%) no-repeat 100%
            0 / 1rem 1rem,
        linear-gradient(-45deg, transparent, transparent 50%, black 50%)
            no-repeat 100% 100% / 1rem 1rem;
    color: white;
    margin: 1rem 0 1rem;
`

const Result = ({ voteData, partyData }) => (
    <VoteContainer>
        {console.log(partyData)}
        {console.log(Object.keys(partyData))}
        <Inner
            style={{ width: `${(Object.keys(partyData).length + 1) * 10}em` }}
        >
            <Row style={{ height: '11.5em', overflow: 'hidden' }}>
                <ContentCol>
                    <Title>
                        You may vote in one of two ways <Arrow>Either:</Arrow>
                    </Title>
                    <Title>Above the line</Title>
                    <FirstContent>
                        the line By numbering at least 6 of these boxes in the
                        order of your choice (with number 1 as your first
                        choice)
                    </FirstContent>
                </ContentCol>
                {Object.keys(partyData).map((val, ind) => (
                    <Col key={ind}>
                        <ColLabel>{val}</ColLabel> {partyData[val].name}
                    </Col>
                ))}
            </Row>
            <Row>
                <ContentCol>
                    <Title>
                        <Arrow>Or:</Arrow>
                    </Title>
                    <Title>Below the line</Title>
                    <FirstContent>
                        By numbering at least 12 of these boxes in the order of
                        your choice (with number 1 as your first choice).
                    </FirstContent>
                </ContentCol>
                {Object.keys(partyData).map((val, ind) => (
                    <Col key={ind}>
                        <ColLabel>{val}</ColLabel>
                        {/* <PartyTitle>{partyData[val].name}</PartyTitle> */}
                        <PartyTitle>{val}</PartyTitle>
                        {/*Loop over Candidate Data later */}
                        {partyData[val].candidates.map((cVal, c) => (
                            <Candidate
                                given={voteData[cVal].given}
                                surname={voteData[cVal].surname}
                                party={partyData[val].name}
                                vote={voteData[cVal].order}
                            />
                        ))}
                    </Col>
                ))}
            </Row>
        </Inner>
    </VoteContainer>
)

Result.propTypes = {
    voteData: propTypes.object.isRequired,
    partyData: propTypes.object.isRequired,
}

export default Result
