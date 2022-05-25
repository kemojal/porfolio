import React from 'react';
import styled from 'styled-components';

const BlogCardContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: ${({ type }) => (type === 'featured' ? '100%' : '100%')};
  max-width: ${({ type }) => (type === 'featured' ? '1000px' : '100%')};
  margin: ${({ type }) => (type === 'featured' ? '0' : '10px')};
  padding: 15px;
  background: ${({ type }) => (type === 'featured' ? '#fff' : '#f5f5f5')};
  border-bottom-left-radius: ${({ type }) =>
    type === 'featured' ? '100px' : '0'};
  /* border: ${({ type }) =>
    type === 'featured' ? 'none' : '0.5px solid #eaeaea'}; */
  border-bottom: 1px solid #00000010;
  height: ${({ type }) => (type === 'featured' ? '400px' : 'auto')};
  background-color: ${({ type }) => (type === 'featured' ? 'white' : 'white')};
  color: ${({ type }) => (type === 'featured' ? 'blue' : 'black')};
  /* border-radius: 28px; */
  border-radius: 0;

  .blog-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    position: relative;
  }

  .b-left,
  .b-right {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
  }
  .b-left {
    overflow: hidden;
    /* width: 40%; */
    /* height: ${({ type }) => (type === 'featured' ? '400px' : '250px')}; */
    height: ${({ type }) => (type === 'featured' ? '100%' : '200px')};
    border-radius: 5%;
    justify-content: center;
    align-items: center;
  }
  .b-left img {
    width: auto;
    height: calc(100% - 0px);
    object-fit: cover;
    border-radius: 25px;
  }
  .b-right {
    /* width: 60%; */
    padding: 0 20px;
  }
  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  p {
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 0.5rem;
  }
  button {
    background: transparent;
    border: none;
    width: auto;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 500;
    color: #00000029;
    padding: 0.5rem;
  }
  .tag-container {
    width: 100%;
  }
  .tag {
    padding: 2px 8px;
    background-color: rgba(242, 242, 242, 1);
    font-weight: 400;
    font-size: 13px;
    line-height: 20px;
    border-radius: 100px;
  }
`;
const Blog = ({ title, summary, date, img, type, tags }) => {
  return (
    <BlogCardContainer type={type}>
      <div className="blog-wrapper">
        <div className="b-left">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
        <div className="b-right">
          <h1>{title}</h1>
          <p>{summary}</p>
          <p>{date}</p>
          <button>READ MORE</button>
        </div>
      </div>
      <div className="tag-container">
        {tags.map((tag, index) => (
          <span className="tag" key={title + index}>
            {tag}
          </span>
        ))}
      </div>
    </BlogCardContainer>
  );
};

export default Blog;
