import React from 'react';
import styled from 'styled-components';

const BlogCardContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: ${({ type }) => (type === 'featured' ? '1000px' : '500px')};
  margin: ${({ type }) => (type === 'featured' ? '0' : '5px')};
  padding: 10px;
  background: ${({ type }) => (type === 'featured' ? '#fff' : '#f5f5f5')};
  border-bottom-left-radius: ${({ type }) =>
    type === 'featured' ? '100px' : '0'};
  border: ${({ type }) =>
    type === 'featured' ? 'none' : '0.5px solid #eaeaea'};
  height: ${({ type }) => (type === 'featured' ? '400px' : 'auto')};
  background-color: ${({ type }) =>
    type === 'featured' ? 'transparent' : 'transparent'};
  color: ${({ type }) => (type === 'featured' ? 'white' : 'black')};

  .b-left,
  .b-right {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
  }
  .b-left {
    overflow: hidden;
    background: red;
    width: 40%;
    height: ${({ type }) => (type === 'featured' ? '400px' : '250px')};
    border-radius: 5%;
    justify-content: center;
    align-items: center;
  }
  .b-left img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }
  .b-right {
    width: 60%;
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
`;
const Blog = ({ title, summary, date, img, type }) => {
  return (
    <BlogCardContainer type={type}>
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
    </BlogCardContainer>
  );
};

export default Blog;
