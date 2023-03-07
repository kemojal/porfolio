import React from 'react'

import SectionTitle from '../../SectionTitle';
import Image from 'next/image'
import {ServicesContainer } from './styles';

const Services = () => {
    const serviceData  = [
        { 
            icon: '🧑🏿‍💻',
            src:"/assets/imgs/layer-con.svg",
            title: 'Web Development',
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
            icon: ' 💻',
            src:"/assets/imgs/pen.svg",
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
        },
        { 
            icon: ' 💻',
            title: 'Mobile App Development',
            src:"/assets/imgs/design.svg",
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
        }, 
        { 
            icon: '🧑🏿‍💻',
            title: 'Web Design',
            src:"/assets/imgs/layers.svg",
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
            title: 'UI/UX Design',
            src:"/assets/imgs/pallete.svg",
            list: [
                'User Experience Design',
                'Rapid Prototyping',
                'Usability Testing',
                'UX Reviews',
                'Interaction Design',
            ]
        }, 
        { 
            icon: '📱',
            title: 'Graphic Design',
            src:"/assets/imgs/brush.svg",
            list: [
                'User Experience Design',
                'Rapid Prototyping',
                'Usability Testing',
                'UX Reviews',
                'Interaction Design',
            ]
        }, 
        
    ]
    return (
        <ServicesContainer>
            <div className="container">
                <SectionTitle 
                title="My Service"/>
                <div className="spacer"/>
               <div className="list-container">
                   {
                       serviceData.map(({icon, title, list, src}, i)=>
                            (
                                 <div className="list-item">
                                      <div className="list-item-icon">
                                          <div className="relative-icon">
                                              <Image 
                                              layout='fill'
                                              objectFit='contain'
                                              src={src} alt={title}/>
                                          </div>
                                      </div>
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
