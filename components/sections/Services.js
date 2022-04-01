import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../SectionTitle';

const ServicesContainer = styled.section`
 background-color: ${({ theme }) => theme.bgService};
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 .container {
    max-width: 1100px;
    width: 100%;
    /* border: 1px solid green; */
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
    
     /* align-items: center; */
     justify-content: center;
     flex-wrap: wrap;

 }
 .list-item{
     display: flex;
     align-items: center;
     /* justify-content: center; */
     flex-direction: column;
     background-color: #00000005;
     backdrop-filter: blur(20px);
     border-radius: 40px;
     padding: 1rem;
     /* padding-left: 1rem; */
    /* padding-right: 1rem; */

    margin: 0 1rem;
 }
 .list-item-icon{
     font-size: 64px;
      /* height: 64px; */

 }
 .list-item-title{
    font-size: 1.2rem;
    line-height: 2rem;
    color: rgba(255, 255, 255, 0.87);
    color: ${({ theme }) => theme.text};
    font-weight: 900;
    margin-bottom: 1.5rem;


    border-radius: 91% 9% 90% 10% / 29% 82% 18% 71%;
    background: rgb(0,76,63);
    background-color:  #EA3B5A;
    /* color: ${({ theme }) => theme.bg}; */
    padding: 0.25rem 0.5rem;

 }
 .list-item-list{
     display: flex;
     align-items: center;
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
 }
`
const Services = () => {
    const serviceData  = [
        { 
            icon: '🧑🏿‍💻',
            title: 'Development',
            list: [
                'Fronted Development',
                'Backend Development',
                'Responsive & Mobile Websites',
                'Mobile apps',
                'Game Development',
                'SaaS Applications',
                'Platform Solutions',
            ]
        }, 
        { 
            icon: '📱',
            title: 'UI/UX',
            list: [
                'User Experience Design',
                'Rapid Prototyping',
                'Usability Testing',
                'UX Reviews',
                'Interaction Design',
            ]
        }, 
        { 
            icon: ' 💻',
            title: 'AI & Machine Learning',
            list: [
                'Web Development',
                'Mobile Development',
                'Desktop Development',
                'Game Development',
                'Blockchain Development',
                'Machine Learning',
                'Data Science',
                'Data Analysis',
                'Data Visualization',
            ]
        }
    ]
    return (
        <ServicesContainer>
            <div className="container">
                <SectionTitle 
                title="My Service"/>
                <div className="spacer"/>
               <div className="list-container">
                   {
                       serviceData.map(({icon, title, list}, i)=>
                            (
                                 <div className="list-item">
                                      <div className="list-item-icon">{icon}</div>
                                      <h3 className="list-item-title">{title}</h3>
                                      <ul className="list-item-list">
                                        {
                                             list.map((item, i)=>
                                                  (
                                                    <li className="list-item-list-item">{item}</li>
                                                  )
                                             )
                                        }
                                      </ul>
                                 </div>
                            )
                          )
                     }
                </div>
                </div>
          </ServicesContainer>
    )
                    }


export default Services
