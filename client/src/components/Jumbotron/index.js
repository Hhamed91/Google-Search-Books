import React from "react";
import "./style.css";

function Jumbotron ({children}){
return (

    <div className="className=jumbotron jumbotron-fluid d-flex align-items-cente">   
        <div className="container text-center">   
            {children}
        </div>

    </div>
);
}