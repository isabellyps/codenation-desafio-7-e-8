import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import "./Post.scss";

const Post = ({ postInfo, userInfo }) => {
  return (
    <article className="post" data-testid="post">
      <div class="post__header">
        <div class="user">
          <a className="user__thumb" href="/">
            <img
              src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-profile.jpg"
              alt="T'Challa"
            />
          </a>
          <a className="user__name" href="/">
            T'Challa
          </a>
        </div>
        <button className="post__context">
          <span className="follow-btn">Seguir</span>
        </button>
        <div className="post__figure">
          <img
            src="https://viniciusvinna.netlify.app/assets//api-instagram/profiles/black-panther/black-panther-1.jpg"
            alt=""
          />
        </div>
        <nav class="post__controls">
          <button class="post__controls">
            <i class="far fa-heart"></i>
          </button>
          <div className="post_status">
            <div className="user">
              <span>
                curtido por<a href="/">Santino Rowe</a>
                <span>e outra</span>
                <a href="/">1 pessoas</a>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </article>
  );
};

export default Post;
