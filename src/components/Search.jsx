import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class Search extends React.Component {
    render() {
        return (
            <InputGroup onChange={e => this.props.handleChange(e.target.value)} className="mb-3">
                <FormControl placeholder="Search a joke" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
            </InputGroup>
        );
    }
}

export default Search;
