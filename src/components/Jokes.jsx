import React from "react";
import Joke from "./Joke";

class Jokes extends React.Component {
    constructor() {
        super();
        this.state = {
            jokes: []
        };
    }

    componentDidMount() {
        fetch("http://api.icndb.com/jokes/id/1")
            .then(response => response.json())
            .then(data => {
                this.setState({ jokes: data.value });
            });
    }

    render() {
        if (localStorage.length) {
            return (
                <div className="jokes">
                    {this.state.jokes.map(j =>
                        JSON.parse(localStorage.getItem("favoriteJokes")).find(c => c.id === j.id) ? (
                            <Joke id={j.id} joke={j.joke} status="saved" />
                        ) : (
                            <Joke id={j.id} joke={j.joke} status="notSaved" />
                        )
                    )}
                </div>
            );
        } else if (this.state.jokes.length) {
            return (
                <div className="jokes">
                    {this.state.jokes.map(j => (
                        <Joke id={j.id} key={j.id} joke={j.joke} />
                    ))}
                </div>
            );
        } else {
            return (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status"></div>
                </div>
            );
        }
    }
}

export default Jokes;
