import React from "react";
import Search from "./Search";
import Joke from "./Joke";

class Favorites extends React.Component {
    constructor() {
        super();
        this.state = {
            storageList: [],
            searchList: [],
            query: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (localStorage.length) {
            this.setState(state => ({
                storageList: state.storageList.concat(JSON.parse(localStorage.getItem("favoriteJokes")))
            }));
        }
    }

    handleChange(string) {
        this.setState({ query: string });

        this.setState(state => ({
            searchList: state.storageList.filter(j => j.joke.includes(this.state.query))
        }));
    }

    render() {
        if (this.state.storageList.length) {
            return (
                <div className="favorites">
                    <h1>Favorites</h1>
                    <div className="row">
                        <Search handleChange={this.handleChange} />
                    </div>
                    <div className="row">
                        {this.state.query
                            ? this.state.searchList.map(j => <Joke id={j.id} key={j.id} joke={j.joke} status={"saved"} />)
                            : this.state.storageList.map(j => <Joke id={j.id} key={j.id} joke={j.joke} status={"saved"} />)}
                    </div>
                </div>
            );
        } else {
            return <div>No saved jokes</div>;
        }
    }
}

export default Favorites;
