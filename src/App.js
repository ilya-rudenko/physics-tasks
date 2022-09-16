import 'react-pro-sidebar/dist/css/styles.css';
import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {

    return (
        <div className="App">
            <Navbar />
            <Home/>
        </div>
    );

}
export default App;

