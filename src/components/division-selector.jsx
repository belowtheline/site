import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

class StateDivisionList extends Component {
    render = () => {
        let display = "none";
        if (this.props.visible) {
            display = "block";
        }

        return (
            <div style={{ display }}>
                <ul style={{ columnWidth: "15em", columnFill: "auto" }}>
                    {(this.props.divisions.map((division) => (
                        <li key={division.node.name} style={{ marginBefore: 0, marginAfter: 0, marginBottom: 0 }}><Link to={division.node.fields.slug}>{division.node.name}</Link></li>
                    )))}
                </ul>
            </div>
        )
    }
}

class DivisionSelector extends Component {
    constructor(props) {
        super(props)
        this.state = { state: "" }
    }

    render = () => (<StaticQuery
        query={graphql`
            query {
                allDivisionsYaml {
                    group(field: state) {
                        fieldValue
                        edges {
                            node {
                                name
                                state
                                fields {
                                    slug
                                }
                            }
                        }
                    }
                }
                allStatesYaml {
                    edges {
                        node {
                            name
                            abbreviation
                        }
                    }
                }        
            }
        `}
        render={data => {
            let states = {};
            data.allStatesYaml.edges.forEach((state) => {
                states[state.node.abbreviation] = state.node.name;
            });

            let orderedStates = data.allStatesYaml.edges;
            orderedStates.sort((a, b) => {
                if (a.node.name < b.node.name) {
                    return -1;
                }
                if (a.node.name > b.node.name) {
                    return 1;
                }
                return 0;
            });
            let options = orderedStates.map((state) => (
                <option key={"selector-" + state.node.abbreviation} value={state.node.abbreviation}>{state.node.name}</option>
            ));
            let selector = (<select key="selector" onChange={this.changeState}><option value="">Select your state...</option>{options}</select>);

            let divisions = data.allDivisionsYaml.group.map((state) => (
                <StateDivisionList key={state.fieldValue} visible={this.state.state == state.fieldValue} stateName={states[state.fieldValue]} divisions={state.edges} />
            ));
            divisions.unshift(selector);
            return divisions;
        }}
    />)

    changeState = (e) => {
        e.preventDefault();
        this.setState({ state: e.currentTarget.value });
    }
}

export default DivisionSelector
