import styled from 'styled-components';

export const ServicesContainer = styled.section`
 background-color: ${({ theme }) => theme.bgService};
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 .container {
    max-width: 1100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;
    padding-top: 6rem;
 }
 .list-container{
     width: 100%;
     display: flex;
     justify-content: center;
     flex-wrap: wrap;

 }
 .list-item{
     display: flex;
     
     align-items: flex-start;
     flex-direction: column;
     background-color: #00000005;
     backdrop-filter: blur(20px);
     border-radius: 40px;
     padding: 1rem;
     background-color:  transparent;
     width: 30%;
     margin-bottom: 1rem;
    margin: 0 1rem;
    /* &:first-child{
        align-items: flex-start;
    } */

 }
 .list-item-icon{
    font-size: 30px;
    /* background-color: crimson; */
    height: 64px;
    width: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #fe155457; */
    background-color: ${({ theme }) => theme.bgServiceIcons};
    box-shadow: ${({ theme }) => theme.btnBoxShadow};

 }
 .relative-icon{
     position: relative;
     width: 32px;
     height: 32px;
 }
 .list-item-title{
    font-size: 1.2rem;
    line-height: 2rem;
    color: rgba(255, 255, 255, 0.87);
    color: ${({ theme }) => theme.text};
    font-weight: 900;
    margin: 0.5rem 0;


    /* border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%; */
    /* background: rgb(0,76,63); */
    /* background-color:  #EA3B5A; */
    /* color: ${({ theme }) => theme.bg}; */
    padding: 0.25rem 0.5rem;
    padding-bottom:  0;

 }
 .list-item-list{
     display: flex;
     /* align-items: center; */
     align-items: flex-start;
     justify-content: center;
     flex-direction: column;

     list-style: none;
    margin: 0;
    padding: 0;
    font-size: 1.125rem;
    font-size: 0.9rem;
    line-height: 1.75rem;
    color: rgba(255, 255, 255, 0.60);
    color: ${({ theme }) => theme.text};
    opacity: .85;
 }
 .spacer{
    margin-bottom: 4rem;
 }

 @media screen and (max-width: 776px) {
    .list-container{
        flex-direction: column;
        
    }
    .list-item{
     display: flex;
     align-items: center;
     width: 100vw;
     margin: 10px 0;

 }
 .list-item-list{
     align-items: center;
 }
 }
`