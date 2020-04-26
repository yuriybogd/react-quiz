import React from "react";
import Layout from "./hoc/Layout//Layout.js";
import Quiz from '../src/containers/Quiz/Quiz.js'

function App() {
    return (
        <div className="App">
            <Layout>
                <Quiz></Quiz>
            </Layout>
        </div>
    );
}

export default App;
