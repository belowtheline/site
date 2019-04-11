import React, { Component } from 'react'
import styled from 'styled-components'

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

const Candidate = ({ given, surname, party, vote }) => (
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

export default Candidate
