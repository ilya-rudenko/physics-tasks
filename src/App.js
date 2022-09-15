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

function App() {

    return (
        <div className="App">
            <Navbar />
            <div>hellofsa</div>
        </div>
    );

}
export default App;

