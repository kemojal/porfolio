import styled from "styled-components";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TabButton = styled.button`
  background-color: ${(props) =>
    props.active ? "lightgray" : "transparent"};
  border: none;
  border-bottom: ${(props) =>
    props.active ? "2px solid black" : "2px solid transparent"};
  color: ${(props) => (props.active ? "black" : "gray")};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 0 1rem;
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? "lightgray" : "gray")};
    color: ${(props) => (props.active ? "black" : "white")};
  }
`;

// const TabContent = styled.div`
//   margin-top: 1rem;
// `;

const TabContent = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: flex-start;
  /* justify-content: center; */
`;

const ProductCard = styled.div`
  /* border: 1px solid lightgray; */
  border-radius: 0.5rem;
  overflow: hidden;
  /* box-shadow: 2px 2px 2px lightgray; */
  margin: 1rem;
  width: 200px;
`;

const ProductImg = styled.img`
  height: 200px;
  object-fit: contain;
  width: 100%;
  border-radius: 0.5rem;
`;

const ProductTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin: 0.5rem;
`;

const ProductPrice = styled.p`
  font-size: 0.8rem;
  margin: 0.5rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
  background-color: rgba(243,244,246,1);
  border-radius: 5%;
`;
export {
    TabWrapper, TabList , TabButton, TabContent, ProductCard, ProductImg, ProductTitle, ProductPrice
};