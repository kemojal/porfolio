import styled, { keyframes } from 'styled-components';

export const Slide = ({ title, description, coverImage, url, className, onClick, isActive  }) => {
    // console.table({
    //     title, description, coverImage, url, className,  isActive
    // })
    return (
      <SlideContainer className={className} onClick={onClick} isActive={isActive}>
        <SlideContent isActive={isActive}>
          <h1 >{title} </h1>
          <p>{description}</p>
          <div className="hero-buttons"><a href={url}>$10.00</a> <button>Cart</button></div>
          
        </SlideContent>
        <CoverImage src={coverImage} alt={title} isActive={isActive}/>
      </SlideContainer>
    );
  };
  
  const SlideContainer = styled.div`
    flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.5;
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EEEEEE;
    &.active {
      opacity: 1;
    }

    opacity: ${(props) => (props.isActive ? 1 : 0)};
  transition: opacity 1s ease-in-out, transform 2s ease-in-out;

  /* ${(props) =>
    !props.isActive &&
    `
    transform: translateY(100%);
  `} */
  `;
  
  const CoverImage = styled.img`
    max-width: 50%;
    border-radius: 0.5rem;
    height: auto;
    object-fit: cover;
    object-position: center;
    opacity: ${(props) => (props.isActive ? 1 : 0)};
    transform: ${(props) => (props.isActive ? `translateY(0px)` : `translateY(100px)`)};
    transition: opacity 1s ease-in-out, transform 1.5s ease-in-out;
  `;
  
  const SlideContent = styled.div`
    /* position: absolute;
    bottom: 20%;
    left: 10%;
    right: 10%; */
    display: flex;
    flex-direction: column;
    justify-content: center;
     padding: 0 2rem;
    color: black;
  
    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      opacity: ${(props) => (props.isActive ? 1 : 0)};
      transform: ${(props) => (props.isActive ? `translateX(0px)` : `translateX(10px)`)
    };
    transition: opacity 2s ease-in-out, transform 1.5s ease-in-out;
     
    }
  
    p {
      font-size: 1rem;
      margin-bottom: 2rem;
      opacity: ${(props) => (props.isActive ? 1 : 0)};
      transform: ${(props) => (props.isActive ? `translateY(0px);` : `translateY(20px);`)
    };
    transition: opacity 2s ease-in-out, transform 2s ease-in-out;
    }


    .hero-buttons{
        display: flex;
        gap: 1rem;
    }
    button{
        display: flex;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;
      background-color: white;
        color: #000;
        border: 1px solid black;
        border-radius: 0.5rem;
    }
    a {
      display: flex;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;
      background-color: black;
        color: #fff;
        text-decoration: none;
        border-radius: 0.5rem;
        transition: all 0.3s ease-in-out;

        opacity: ${(props) => (props.isActive ? 1 : 0)};
        transform: ${(props) => (props.isActive ? `translateX(0px)` : `translateX(10px)`)};

        &:hover {
        background-color: #000;
        color: #fff;
        }
    }
    `;






