import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card, CardTitle } from 'reactstrap';
import pages from "./helpers/pages";
import { useState } from 'react';
import  { Navigate } from 'react-router-dom';


const App = () => {

    const [isAuth, setIsAuth] = useState(false);
    // localStorage.clear();

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
                            element={
                                        (item.pageLink==="/login" | item.pageLink==="/signup") ? 
                                            (isAuth ? <Navigate to="/home" /> : <item.component setIsAuth={setIsAuth}/>)
                                        : (isAuth ? <item.component setIsAuth={setIsAuth}/> : <Navigate to="/login" />)
                                    }
                            key={indx}
                        />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
