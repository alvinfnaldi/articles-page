import React, { useState, useEffect } from "react";
import apiNews from "../api/apiNews";

const Admin = () => {
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
    <div>
      
        {
            post.map((post, index) => {
                const { id, title, newsBody, writer, writerId } = post
                return (
                <div key={id}>
                    <h5>{title}</h5>
                    <h5>{newsBody}</h5>
                    <h5>{writer}</h5>
                    <h5>{writerId}</h5>
                </div>
                )
            })
        }
      
    </div>
  );
};

export default Admin;
