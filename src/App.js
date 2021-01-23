import logo from "./logo.svg";
import "./App.css";
import Row from "./components/Row/Row";
import request from "./components/request";
import CoverImage from "./components/CoverImage/CoverImage";
import { useStateValue } from "./components/utilities/StateProvider";
import MovieDetail from "./components/movieDetail/MovieDetail";
import Menu from "./components/Row/Menu/Menu";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EachCategory from "./components/Categories/EachCategory/EachCategory";

import Search from "./components/Search/Search";

function App() {
    const [{ details }] = useStateValue();

    return (
        <Router>
            <div className="App">
                <Menu />
                <MovieDetail detail={details} />;
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/search">
                        <Search />
                    </Route>
                    <Route path="/:id" exact>
                        <EachCategory />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
