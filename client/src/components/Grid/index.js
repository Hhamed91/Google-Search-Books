import React from "react";

export function Container({fluid, childern}){
    return <div className={`constainer${fluid ? "-fluid":""}`}></div>
}

export function Row({fluid, childern}){
    return <div className={`row${fluid ?"-fluid":""}`}></div>
}

export function Col({size, childern}){
    return (
        <div className={size.split(" ").map(size=>"col-" + size).join(" ")}>   

        {childern}
            
        </div>
    );
}