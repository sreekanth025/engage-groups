import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import pages from "./helpers/pages";


const App = () => {
    return (
        <div>
            <h1>Hello Engage</h1>
            <Router>
                <Routes>
                    {pages.map((item, indx) => (
                        <Route 
                            path={item.pageLink}
                            exact
                            element={<item.component />}
                            key={indx}
                        />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
