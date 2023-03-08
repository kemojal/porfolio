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
  width: 100%;
  max-width: 1000px;
`;

const TabButton = styled.button`
  background-color: ${(props) =>
    props.active ? "lightgray" : "transparent"};
  border: none;
  border: 1px solid #858585;
    border-radius: 0.5rem;
  border: ${(props) =>
    props.active ? "1px solid black" : "1px solid #858585"};
  color: ${(props) => (props.active ? "white" : "#939393")};
  background-color: ${(props) => (props.active ? "#EA4867" : "transparent")};
  cursor: pointer;
  font-size: 1rem;
  font-weight: normal;
  margin: 0 0.5rem;
  padding: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? "lightgray" : "gray")};
    color: ${(props) => (props.active ? "black" : "white")};
  }
`;

const TabContent = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  justify-content: flex-start;
  width: 100%;
  max-width: 1000px;
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