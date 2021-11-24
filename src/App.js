import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Jokes from "./components/Jokes";
import Favorites from "./components/Favorites";
import Nav from "./components/Nav";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Jokes />} />
                        <Route path="/favorites" element={<Favorites />} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default App;
