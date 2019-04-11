import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

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

const CandidateBlock = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;

    &:not(:first-child) {
        margin-top: 1em;
    }

    &:not(:last-child) {
        margin-bottom: 1em;
    }
`

const CandidateVoteCol = styled.div`
    width: 2em;
    margin-right: 0.25em;
`

const VoteInput = styled.input`
    width: 2rem;
    height: 2rem;
    border: 1px solid black;
    padding: 0.25rem;
    font-size: 0.75em;

    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

const CandidateInfoCol = styled.div`
    word-break: break-word;
    overflow-wrap: break-word;
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

const Surname = styled.span`
    display: block;
    font-family: arial, sans-serif;
    text-transform: uppercase;
`

const GivenName = styled.span`
    display: block;
    font-family: arial, sans-serif;
`

const Party = styled.span`
    display: block;
    text-transform: uppercase;
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

export const Candidate = ({ given, surname, party, vote }) => (
    <CandidateBlock>
        <CandidateVoteCol>
            <label style={{ display: 'none' }}>
                {given} {surname} {party} - preference
            </label>
            <VoteInput type="number" value={vote} increment="1" />
        </CandidateVoteCol>
        <CandidateInfoCol>
            <Surname>{surname}</Surname>
            <GivenName>{given}</GivenName>
            <Party>{party}</Party>
        </CandidateInfoCol>
    </CandidateBlock>
)

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

export default ({ data }) => {
    // const state = data.statesYaml
    const vote = voteData
    return (
        <Layout>
            <div>
                <h1>{vote.name}</h1>
            </div>
            <VoteContainer>
                <Inner
                    style={{ width: `${(CandidateData.length + 1) * 10}em` }}
                >
                    <Row>
                        <ContentCol>
                            <Title>
                                You may vote in one of two ways{' '}
                                <Arrow>Either:</Arrow>
                            </Title>
                            <Title>Above the line</Title>
                            <FirstContent>
                                the line By numbering at least 6 of these boxes
                                in the order of your choice (with number 1 as
                                your first choice)
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
                                By numbering at least 12 of these boxes in the
                                order of your choice (with number 1 as your
                                first choice).
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
        </Layout>
    )
}

// export const query = graphql`
//     query($slug: String!) {
//         statesYaml(fields: { slug: { eq: $slug } }) {
//             name
//         }
//     }
// `
