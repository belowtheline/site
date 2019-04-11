import React, { Component } from 'react'
import styled from 'styled-components'
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

const voteData = {
    name: 'Batman',
    slug: 'vote-batman',
    candidates: [],
}

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

const CandidateData = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
]

const Result = () => (
    <VoteContainer>
        <Inner style={{ width: `${(CandidateData.length + 1) * 10}em` }}>
            <Row>
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
                {CandidateData.map((val, ind) => (
                    <Col key={ind}>
                        <ColLabel>{val}</ColLabel> Above the line data
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
                {CandidateData.map((val, ind) => (
                    <Col key={ind}>
                        <ColLabel>{val}</ColLabel>
                        <PartyTitle>
                            {'The Dingo Party of Australia'}
                        </PartyTitle>
                        {/*Loop over Candidate Data later */}
                        <Candidate
                            given={'Johnny'}
                            surname={'Citizen'}
                            party={'The Dingo Party of Australia'}
                            vote={10}
                        />
                        <Candidate
                            given={'Koala'}
                            surname={'Fluffy'}
                            party={'The Dingo Party of Australia'}
                            vote={10}
                        />
                    </Col>
                ))}
            </Row>
        </Inner>
    </VoteContainer>
)

export default Result
