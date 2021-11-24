import React from "react";

class Joke extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.id}</h5>
                    <p className="card-text">{this.props.joke}</p>
                    <a href="#" className="card-link">
                        Add to favorites
                    </a>
                </div>
            </div>
        );
    }
}

export default Joke;
