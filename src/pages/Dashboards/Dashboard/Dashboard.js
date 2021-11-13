import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css';
import {
  Switch,
  Route,
  Link, useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import Pay from '../Pay/Pay';


const Dashboard = () => {
  const { logout, admin } = useAuth();
  let { path, url } = useRouteMatch();
  return (
    <div>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/home">Flaming Wheels</a>

        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <div class="navbar-nav">
          <div class="nav-item text-nowrap">
            <Link className='nav-link px-3 my-auto' style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold', marginLeft: '10px' }} to="/login" onClick={logout}>LOGOUT</Link>
          </div>
        </div>
      </header>
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link to={`${url}`} className="nav-link active" aria-current="page">
                    <span data-feather="home"></span>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={`${url}#myorder`} >
                    <span data-feather="file"></span>
                    My Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`${url}/pay`} className="nav-link">
                    <span data-feather="shopping-cart"></span>
                    Pay
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`${url}#review`} className="nav-link">
                    <span data-feather="shopping-cart"></span>
                    Review
                  </Link>
                </li>
                {admin && 
                  <div>
                <li className="nav-item">
                  <Link to={`${url}/makeAdmin`} className="nav-link">
                    <span data-feather="shopping-cart"></span>
                    Make Admin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`${url}/addProduct`} className="nav-link">
                    <span data-feather="shopping-cart"></span>
                    Add a product
                  </Link>
                </li>
                </div>}
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                </div>
                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                  <span data-feather="calendar"></span>
                  This week
                </button>
              </div>
            </div>

            <div>
              <Switch>
                <Route exact path={path}>
                  <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/pay`}>
                  <Pay></Pay>
                </Route>
                <Route path={`${path}#review`}>
                  <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}#myorder`}>
                  <DashboardHome></DashboardHome>
                </Route>
                <Route path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route>
                <Route path={`${path}/addProduct`}>
                  <AddProduct></AddProduct>
                </Route>
              </Switch>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;