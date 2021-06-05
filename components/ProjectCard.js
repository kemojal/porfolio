import React, {useRef} from 'react'
import styled from 'styled-components';
import Link from 'next/link'
import Image from 'next/image';
import { useIntersection } from 'react-use';
import { motion } from 'framer-motion';

import ProjectTitle from './ProjectTitle';

const Card = styled(motion.div)`
    padding: 5rem 2rem;
    margin-top: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    p{
    padding-top: 1rem;
    font-size: 1rem;
    letter-spacing: -0.02em;
    font-weight:300;
    color: var(--lightNormalTextTitleColor);
    color: #2D89F5;
    line-height: 1.8em;
}
@media (min-width: 768px) {
    display: flex;
    flex-direction: ${({isReverse})=>(isReverse? "row-reverse": 'row')};
    padding: 20rem 100px;
    padding-left: 0;
    height: 50vh;
    margin-bottom: 10rem;
}
`
const Wrapper = styled(motion.div)`
position: relative;

&:before {
    content: '';
    background: url(/assets/imgs/blobproj.svg) no-repeat center center;
    width:800px;
    height: 674px;
    display: block;
    position: absolute;
    background-size: 100% 100%;
    /* z-index: -1; */
    transform: translate(-20%, 20%) rotate(0deg);
}
@media (min-width: 768px) {
    display: flex;
    flex-direction:column;
    padding-top: 8rem;
    height: 100%;
    width: 60%;
    .discription{
        font-size: 1.2rem;
        padding: 0 120px;
        letter-spacing: 0.05rem;
        text-align: left;
    }

}
`
const CardDetails = styled(motion.div)`
background-color: blue;
`
const ProjectSubTitle = styled(motion.div)`
    padding-bottom:10px;
    p{
        @media (min-width: 768px) {
        font-size: 2.5rem;
        letter-spacing: 0.1rem;
        text-align: center;
        padding-top:0;
    }
    }
`
const PreviewCardWrapper  = styled(motion.div)`
@media (min-width: 768px) {
    width:40%;
    display: flex;
    justify-content: flex-end;
    height: 100%;
}
`
const PreviewCard  = styled(motion.div)`
position: relative;
/* background-color: blue;
background-color: white; */
width: 100%;
margin-top: 50px;
/* border: 1px solid #e8e8e8; */
/* overflow: hidden; */
height: 300px;
border-radius:15px;
display: flex;
justify-content: center;
align-items: center;
@media (min-width: 768px) {
    width: auto;
    height: 530px;
    padding: 0px;
    border-radius:35px
}
&:before {
    content: '';
    position: absolute;
    width: 800px;
    height: 50px;
    bottom:45%;
    left: -50%;
    transform: rotate(-30deg);
    z-index: 0;
    background: #FEDC7B;
    background-size:30% 30%;
    background-position: center center;
}
`
const PreviewCardInner = styled(motion.div)`
position: relative;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
/* overflow: hidden; */


@media (min-width: 768px) {
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    div{
        width: 100%;
        height: 100%;
    }
}
.img{
    width: 100%;
    opacity: 1;
    ${PreviewCard}:hover & {
        opacity: 0.8;
    }
}
`
const PreviewDetails = styled.div`
    position: absolute;
    background-color: white;
    height: 150px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: -200px;
    padding: 60px;
    .subtitle{
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: bold;
        padding: 5px 0;
    }
    
    width: 100%; 
`
const DetailFooter = styled.div`
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
/* background-color: rgba(0, 0, 0,0.2); */
border-top-left-radius: 0px;
border-top-right-radius: 0px;
/* position: absolute; */
margin-top: 2rem;
padding: 10px 1rem;
@media (min-width: 768px) {
    padding: 10px 8rem; 
    margin-top: 5rem;
}

`
const Tech = styled.div`
    display: none;
    span{
    color: #8892B0;
    font-size: 10px;
    background-color: rgb(5, 5, 5, 0.2);
    padding: 1px 3px;
    margin: 0px 2px;
    border-radius:40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .hashtag{
        margin: 0;
        margin-right: 0px;
        color: crimson;
        border-radius: 20px;

    }
    
    ${PreviewCard}:hover & {
        span{
            color: orange;
        }
    }
}
@media (min-width: 768px) {
    width: 60%;
    display: flex;
    justify-content:space-between;
    span {
        padding: 5px 10px;
        font-size: 12px;
        .hashtag{
        margin: 0;
        margin-right: 5px;
        color: crimson;
        border-radius: 20px;

    }
    }
    }
`
const Links = styled.div`
    width: 100%;
    display: flex;
    z-index: 1000;
    justify-content: space-between;
    padding: 0 2rem;
    a{
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: flex-end;
        
    }
    .ionicon{
        color: white;
        opacity: 0.5;

        &:hover{
            opacity: 1;
        }
    }

    @media (min-width: 768px) {
        width: 40%;
        justify-content: space-between;
    }
`
const ProjectCard = ({title, subtitle, discription, color, imgScr, isReverse=false, githubLink}) => {
    const myRef = useRef(null);
  const intersection = useIntersection(myRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  });
  const fadeIn = {
    opacity: 1,
    y: 0,
    x: 0,
  };
  const fadeOut = {
    opacity: 0,
    y: 100,
    x: 0,
  };

  const animationName = intersection && intersection.intersectionRatio < 0.2 ? fadeOut : fadeIn;
    return (
        <Card isReverse={isReverse}  ref={myRef}>
            <Wrapper 
            >
                <ProjectTitle title={title} color ={ color} />
                <ProjectSubTitle>
                    <p>{subtitle}</p>
                </ProjectSubTitle> 
                <motion.p className="discription" animate={animationName}>{discription}</motion.p>
                <DetailFooter >
                        <Tech>
                            <span><span className="hashtag" >#</span>firebase</span>
                            <span><span className="hashtag" >#</span>React.js</span>
                            <span><span className="hashtag" >#</span>Next.js</span>
                        </Tech>
                        <Links>
                        <Link 
                        href={githubLink}>
                            <a target="_blank">
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
                            <a target="_blank">
                            <Image 
                                className="ionicon" 
                                src={'/assets/imgs/link-outline.svg'}
                                alt="Picture of the author"
                                width='32px'
                                height='32px'
                                priority={true}
                            />
                            </a>
                        </Links>
                    </DetailFooter>
            </Wrapper>
            <PreviewCardWrapper>
            <PreviewCard >
                <PreviewCardInner  animate={animationName}>
                <Image 
                    className="img" 
                    src={imgScr}
                    alt="Picture of the author"
                    width='650px'
                    height='650px'
                    priority={true}
                />
                </PreviewCardInner>
                {/* <PreviewDetails color ={ color}>
                    <div className="subtitle">{subtitle}</div>
                    <div className="info">{discription}</div>
                </PreviewDetails> */}
            </PreviewCard>
            </PreviewCardWrapper>
        </Card>
    )
}

export default ProjectCard
