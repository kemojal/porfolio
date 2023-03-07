import styled from 'styled-components';

import Slider from './../../components/Slider';
import Tabs from "./../../components/Tabs";
import Layout from './../../Layout'

const tabs = [
    {
      id: "tab1",
      label: "Video Presents",
      content: [
        {
          productTitle: "Instagram Luts",
          productImg: "https://picsum.photos/id/1018/200/200",
          productPrice: "$10.99",
          productUrl: "#",
        },
        {
          productTitle: "Video Luts",
          productImg: "https://picsum.photos/id/1022/200/200",
          productPrice: "$15.99",
          productUrl: "#",
        },
        {
          productTitle: "Teal Orange Luts",
          productImg: "https://picsum.photos/id/1025/200/200",
          productPrice: "$19.99",
          productUrl: "#",
        },
      ],
    },
    {
      id: "tab2",
      label: "Luts & Presets",
      content: [
        {
          productTitle: "Product 2.1",
          productImg: "https://picsum.photos/id/1035/200/200",
          productPrice: "$12.99",
          productUrl: "#",
        },
        {
          productTitle: "Product 2.2",
          productImg: "https://picsum.photos/id/1041/200/200",
          productPrice: "$17.99",
          productUrl: "#",
        },
        {
          productTitle: "Product 2.3",
          productImg: "https://picsum.photos/id/1047/200/200",
          productPrice: "$21.99",
          productUrl: "#",
        },
      ],
    },
    {
      id: "tab3",
      label: "Templates",
      content: [
        {
          productTitle: "Saas Landing Page",
          productImg: "https://picsum.photos/id/1052/200/200",
          productPrice: "$14.99",
          productUrl: "#",
        },
        {
          productTitle: "Framer portfolio website",
          productImg: "https://picsum.photos/id/1063/200/200",
          productPrice: "$19.99",
          productUrl: "#",
        },
        {
          productTitle: "Webflow Website Theme",
          productImg: "https://picsum.photos/id/1066/200/200",
          productPrice: "$24.99",
          productUrl: "#",
        },
      ],
    },
    {
        id: "tab4",
        label: "Notion Templates",
        content:[
            {
              productTitle: "Habit Tracker",
              productImg: "https://picsum.photos/id/1035/200/200",
              productPrice: "$12.99",
              productUrl: "#",
            },
            {
              productTitle: "Daily Planner",
              productImg: "https://picsum.photos/id/1041/200/200",
              productPrice: "$17.99",
              productUrl: "#",
            },
            {
              productTitle: "Personal Budgeting Template",
              productImg: "https://picsum.photos/id/1047/200/200",
              productPrice: "$21.99",
              productUrl: "#",
            },
          ],
      },
      
  ];

  const allTabsContent = tabs.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue.content),
    []
  );
  
  const tab1 = {
    id: 0,
    label: "All Templates",
    content: allTabsContent,
  };
  
  const modifiedTabsData = [tab1, ...tabs.slice(1)];

const slides = [
    {
    title: 'Ultimate Lut Pack',
    description: 'The ultimate pack you need to start your creator journey.',
    coverImage: 'https://placeimg.com/640/480/nature',
    url: 'https://example.com/slide1',
    },
    {
    title: 'Saas Pack',
    description: 'The Best Tools and resources you need to bootstrap your SaaS.',
    coverImage: 'https://placeimg.com/640/480/animals',
    url: 'https://example.com/slide2',
    },
    {
    title: 'Pro Resume Pack',
    description: 'All the tools you need to build a professional looking resume.',
    coverImage: 'https://placeimg.com/640/480/architecture',
    url: 'https://example.com/slide3',
    },
    ];

export default function Store() {
  return (
    <Layout>
    <StoreContainer>
        <Slider 
        slides={slides}
        height="500px"
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 300,
          slidingDelay: 3000,
          onSliding: (nextSlide) => console.debug('onSliding(nextSlide): ', nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug('onBeforeSliding(previousSlide, nextSlide): ', previousSlide, nextSlide),
          onAfterSliding: (nextSlide) => console.debug('onAfterSliding(nextSlide): ', nextSlide),
        }}
        />

<Tabs tabs={modifiedTabsData} />
    </StoreContainer>
    </Layout>
  )
}


const StoreContainer = styled.div`
    margin-top: 3.825rem;
    width: 100vw;
    min-height: 100vh;
`