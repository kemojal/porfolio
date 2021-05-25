import React from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import Image from 'next/image';

const MoreProjectContainer = styled.div`
    width: 100%;
    padding: 20px 40px;
    display: flex;
    flex-shrink: 0;
    flex-basis:0;
    background-color: #F8F8F8;
    justify-content: space-between;
    border-bottom: 5px solid #e8e8e8;
    background: #f8f8f8;
    &:hover{
    background-color: white;
    padding: 40px 80px;
    }
`
const MoreProjectNum  = styled.div`
width: 100%;
border-right: 1px solid #e8e8e8;
flex-grow: 0.2;
flex-basis:0;
display: flex;
align-items: center;
font-size: 1.5rem;
color: #8f8e8e;
opacity: .5;
`
const MoreProjectBody = styled.div`
width: 100%;
flex-grow: 0.8;
flex-basis:0;
display: flex;
flex-direction: column;
align-items: center;
h1{
    font-size: 3rem;
    text-align: center;
    color: #8F8E8E;
    padding:  2rem 1rem;
}
p{
    font-size: 1.2rem;
    padding:1rem;
    letter-spacing: 0.05rem;
    text-align: left;
    color: #909090
}
.info{
    flex-grow: 0.8;
    flex-basis: 0;
}
.link{
    border-top: 1px solid #e8e8e8;
    width: 100%;
    flex-grow: 0.2;
    flex-basis: 0;
    a{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:  1rem;
        font-size: 14px;
    }
}
@media (min-width: 768px) {
    flex-direction: row;
    h1{
    font-size: 5rem;
    text-align: left;
    color: #8F8E8E;
    padding:  2rem 1rem;
}
    .link{
    border-top: none;
    }
}

`
const MoreProject = ({num, title, githubLink, discription}) => {
    
    return (
        <MoreProjectContainer>
           <MoreProjectNum>{num}</MoreProjectNum>
            <MoreProjectBody>
                <div className="info">
                    <h1>{title}</h1>
                    <p>{discription}</p>
                </div>
                
            <div
            className="link"
            >
            <Link 
                href={githubLink}>
                    <a target="_blank">
                        VIEW PROJECT
                    <Image 
                        className="ionicon"  
                        src={'/assets/imgs/logo-github.svg'}
                        alt="Picture of the author"
                        width='32px'
                        height='32px'
                        priority={true}
                        />
                    </a>
                </Link>
            </div>
            
            </MoreProjectBody>
        </MoreProjectContainer>
    )
}

export default MoreProject
