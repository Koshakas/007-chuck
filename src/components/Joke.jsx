import React from "react";
import { Button } from "react-bootstrap";

let favoritesList = [];

class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddFavorite = this.handleAddFavorite.bind(this);
        this.handleRemoveFavorite = this.handleRemoveFavorite.bind(this);
        this.state = {
            status: props.status
        };
    }

    handleAddFavorite() {
        let obj = {};
        obj.id = this.props.id;
        obj.joke = this.props.joke;
        obj.category = [];
        favoritesList.push(obj);
        localStorage.setItem("favoriteJokes", JSON.stringify(favoritesList));
        this.setState({ status: "saved" });
    }

    handleRemoveFavorite() {
        favoritesList = JSON.parse(localStorage.getItem("favoriteJokes"));
        const newList = favoritesList.filter(joke => joke.id !== this.props.id);
        localStorage.setItem("favoriteJokes", JSON.stringify(newList));
        this.setState({ status: "notSaved" });
        if (window.location.pathname === "/favorites") window.location.reload();
    }

    render() {
        return (
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.id}</h5>
                    <p className="card-text">{this.props.joke}</p>
                    {this.state.status !== "saved" ? (
                        <Button variant="primary" onClick={this.handleAddFavorite}>
                            Add to favorites
                        </Button>
                    ) : (
                        <Button variant="warning" onClick={this.handleRemoveFavorite}>
                            Remove from favorites
                        </Button>
                    )}
                </div>
            </div>
        );
    }
}

export default Joke;
