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
                'SaaS Applications'
            ]
        },
        { 
            icon: ' 💻',
            src:"/assets/imgs/pen.svg",
            title: 'AI & Machine Learning',
            list: [
                'Machine Learning (Tensorflow, Keras)',
                'Data Science ( Python)',
                'Data Analysis ( SQL, Pandas )',
                'Data Visualization ( Excel, Mathplotlip)',
            ]
        },
        { 
            icon: ' 💻',
            title: 'Mobile App Development',
            src:"/assets/imgs/design.svg",
            list: [
                'iOS Development ( SwiftUI)',
                'Android Development ( React Native & Flutter )',
                'Mobile Game Dev ( Unity, Godot, SpritKit )',
            ]
        }, 
        { 
            icon: '🧑🏿‍💻',
            title: 'Web Design',
            src:"/assets/imgs/layers.svg",
            list: [
                'Figma',
                'Sketch',
                'Adobe XD',
                'Framer & Webflow'
            ]
        }, 
        { 
            icon: '📱',
            title: 'UI/UX Design',
            src:"/assets/imgs/pallete.svg",
            list: [
                'Copy Writing',
                'Rapid Prototyping',
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
