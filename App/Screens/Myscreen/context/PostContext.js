import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]); // 게시물 상태

  // 게시물 추가
  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  // 게시물 삭제
  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  // 게시물 업데이트
  const updatePost = (id, updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === id ? { ...post, ...updatedPost } : post))
    );
  };

  // 게시물 검색 (예: 제목 기준)
  const searchPosts = (keyword) => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, deletePost, updatePost, searchPosts }}>
      {children}
    </PostContext.Provider>
  );
};
