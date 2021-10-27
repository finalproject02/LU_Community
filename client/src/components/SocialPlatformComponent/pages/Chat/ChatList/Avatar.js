import React, { Component } from "react";

const Avatar =(props)=> {
    // constructor(props) {
    //     super(props);
    // }
        return (
            <div className="avatar">
                <div className="avatar-img">
                    <img src={props.image} alt="#" />
                </div>
                <span className={`isOnline ${props.isOnline}`}></span>
            </div>
        );
}
export default Avatar;
