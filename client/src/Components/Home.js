import React, { Component } from "react";
import bg from "../images/bg.jpg";
import logo from "../images/logo.jpg";


export default class Home extends Component{
    render(){
        return(
            <div style={{ backgroundImage:`url(${bg})`,backgroundRepeat:"no-repeat",backgroundSize:"100% 100%" }}>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top pr-2"/>
                        LandBlock
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="btn-group btn-group-lg justify-content-center align-items-center" role="group" aria-label="Basic outlined example" style={{height:'100vh'}}>
                <button type="button" class="btn btn-outline-light">User</button>
                <button type="button" class="btn btn-outline-light">Government</button>
            </div>
            </div>
        );
    }
}