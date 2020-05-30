import React from "react";

import "./UserProfile.scss";

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              <img
                src="https://viniciusvinna.netlify.app/assets/api-instagram/profiles/profile-placeholder.png"
                alt=""
              />
            </div>
            <p className="user__name">
              Nome
              <span>@username</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
