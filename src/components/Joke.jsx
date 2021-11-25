import React from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

let favoritesList = [];

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddFavorites = this.handleAddFavorites.bind(this);
    }

    handleAddFavorites() {
        let obj = {};
        obj.id = this.props.id;
        obj.joke = this.props.joke;
        obj.category = [];
        favoritesList.push(obj);
        localStorage.setItem("favoriteJokes", JSON.stringify(favoritesList));
    }

    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.id}</h5>
                    <p className="card-text">{this.props.joke}</p>
                    <p>{this.props.status}</p>
                    {this.props.status === "notSaved" ? (
                        <Link to="/favorites" onClick={this.handleAddFavorites} className="card-link btn btn-primary">
                            Add to favorites
                        </Link>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default Joke;
