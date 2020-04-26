import React from 'react';
import Layout from './hoc/Layout//Layout.js'

function App() {
    return (
        <div className="App">
            <Layout>
                <div
                    style={{
                    width: '400px',
                    border: '1px solid black'
                }}>
                    <h1>Layout works</h1>
                </div>
            </Layout>
        </div>
    );
}

export default App;
