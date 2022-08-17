import './App.css';
import {Provider} from "react-redux";
import store from "./app/Store";
import {Counter} from "./features/counter/Counter";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Counter/>
            </Provider>
        </div>
    );
}

export default App;
