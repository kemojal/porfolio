import React from 'react';
import styled from 'styled-components';
import Blog from '../../components/Blog';

const LayoutContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* .bg-gradient {
    background: radial-gradient(
        at 83% 25%,
        var(--color-gradient-1) 0,
        transparent 21%
      ),
      radial-gradient(at 36% 47%, var(--color-gradient-3) 0, transparent 50%),
      radial-gradient(at 79% 45%, var(--color-gradient-3) 0, transparent 28%),
      radial-gradient(at 66% 38%, var(--color-gradient-1) 0, transparent 53%),
      radial-gradient(at 89% 13%, var(--color-gradient-2) 0, transparent 54%),
      radial-gradient(at 24% 7%, var(--color-gradient-2) 0, transparent 40%),
      radial-gradient(at 76% 46%, var(--color-gradient-1) 0, transparent 50%);

    height: 600px;
    max-width: 900px;
    filter: blur(44px);
    z-index: 0;
    opacity: 0.8;
    position: absolute;
    top: 100px;
  } */
  .container {
    width: 100%;
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    /* max-width: 1000px; */
  }
  .featuredBlog,
  .older-blogs-container {
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    /* background: white; */
  }
  .featuredBlog {
    min-height: 400px;
    background: #ff0057;
    border-bottom-left-radius: 100px;
  }
  .older-blogs-container {
    max-width: 1100px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: 10px 0;
  }
`;

const Blogs = () => {
  const BlogsList = [
    {
      title: 'Digital Craftments',
      summary:
        'Digital Craftments is a digital design studio based in London, UK. We specialise in creating bespoke digital solutions for businesses and individuals.',
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      date: '2020-01-01',
    },
    {
      title: 'Digital Craftments',
      summary:
        'Digital Craftments is a digital design studio based in London, UK. We specialise in creating bespoke digital solutions for businesses and individuals.',
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      date: '2020-01-01',
    },
    {
      title: 'Digital Craftments',
      summary:
        'Digital Craftments is a digital design studio based in London, UK. We specialise in creating bespoke digital solutions for businesses and individuals.',
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      date: '2020-01-01',
    },
    {
      title: 'Digital Craftments',
      summary:
        'Digital Craftments is a digital design studio based in London, UK. We specialise in creating bespoke digital solutions for businesses and individuals.',
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      date: '2020-01-01',
    },
    {
      title: 'Digital Craftments',
      summary:
        'Digital Craftments is a digital design studio based in London, UK. We specialise in creating bespoke digital solutions for businesses and individuals.',
      image:
        'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      date: '2020-01-01',
    },
  ];
  const featuredBlog = BlogsList[0];
  return (
    <LayoutContainer>
      <div className="bg-gradient" />

      <div className="container">
        <div className="featuredBlog">
          <Blog {...BlogsList[0]} type="featured" />
        </div>
        <div className="older-blogs-container">
          {BlogsList.map((blog, index) => (
            <Blog {...blog} key={index} />
          ))}
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Blogs;
