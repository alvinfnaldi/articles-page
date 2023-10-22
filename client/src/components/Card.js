import React, { useEffect, useState } from "react";
import apiNews from "../api/apiNews";
import Loading from "./Loading";
import moment from "moment";

const Card = () => {
  const imgStyle = {
    width: "100px",
    height: "100px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const [post, setPost] = useState([]);

  const getData = async () => {
    const result = await apiNews.getNews();
    console.log(result.data);
    setPost(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container mt-3">
      {post.length > 0 ? (
        post.map((post) => {
          const { id, title, newsBody, category, writer, createdAt } = post;
          return (
            <div class="card mb-3 text-bg-dark">
              <img
                src="https://picsum.photos/200/300?grayscale"
                class="card-img-top"
                alt="..."
                style={imgStyle}
              />
              <div class="card-body" key={id}>
                <h4 class="card-title fs-3">
                  <strong>{title}</strong>
                </h4>
                <p class="card-text text-start fs-6">{newsBody}</p>

                <p class="card-text d-flex justify-content-around text-bg-light rounded">
                  <small class="text-body-secondary">
                    Category : {category}
                  </small>
                  <small class="text-body-secondary">Writer : {writer}</small>
                  <small class="text-body-secondary">
                    Posted : {moment(createdAt).startOf("minute").fromNow()}
                  </small>
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Card;
