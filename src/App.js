import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card, CardTitle } from 'reactstrap';
import pages from "./helpers/pages";


const App = () => {
    return (
        <div>
            <Card body className="text-center">
                <CardTitle tag="h3">Engage Groups</CardTitle>
            </Card>
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
