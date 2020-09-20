import React from 'react';

import {
    Switch,
    Route
  } from "react-router-dom";

import Menu from '../../components/menu/menu';

import './dashboard.css';

function Dashboard() {
    return(
        <div className="page">
            <section className="side-menu">
                <Menu />
            </section>
            <section className="side-content">
                <Switch>
                    <Route path="/dashboard/home">
                        <h2>Home 2</h2>
                    </Route>
                    <Route path="/dashboard/">
                        <h2>Home</h2>
                    </Route>
                </Switch>
            </section>
        </div>
    );
}

export default Dashboard;