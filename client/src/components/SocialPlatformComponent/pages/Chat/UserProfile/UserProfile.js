import React, {Component, useState} from "react";
import "./UserProfile.css";
import Avatar from "../../../../../images/avatar.jpeg";
import {useSelector} from "react-redux";

export default function  UserProfile () {
  const { currentUser } = useSelector(state => state.auth);
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src={currentUser?.profile_picture ? `/api/files/storage/${currentUser?.profile_picture}` : Avatar} />
          </div>
          <h4>{currentUser?.name}</h4>
          <p>{currentUser?.position}</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );

}
