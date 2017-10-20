import React, { Component } from 'react';
import './App.css';


var navbar = {};
navbar.brand =  {
                    linkTo: "#", 
                    text: "React Bootstrap Navbar"
                };
navbar.links = [
        {
            linkTo: "#", 
            text: "Link 1"
        },
        {
            linkTo: "#", 
            text: "Link 2"
        },
        {
            dropdown: true, 
            text: "Dropdown", 
            links: [
                {
                    linkTo: "#", 
                    text: "Dropdown Link 1"
                },
                {
                    linkTo: "#", 
                    text: "Dropdown Link 2", 
                    active: true
                }
            ]
        }
];

export default Navbar;