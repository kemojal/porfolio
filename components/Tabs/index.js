import { useState } from "react";
import {
    TabWrapper, TabList , TabButton, TabContent, ProductCard, ProductImg, ProductTitle, ProductPrice
} from './styles';
function Tabs({ tabs, defaultTab }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  const handleClick = (id) => {
    setActiveTab(id);
  };

  return (
    <TabWrapper>
       <TabList>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <TabButton
              onClick={() => handleClick(tab.id)}
              active={tab.id === activeTab}
            >
              {tab.label}
            </TabButton>
          </li>
        ))}
      </TabList>
      {tabs.map(
        (tab) =>
          tab.id === activeTab && (
            <TabContent key={tab.id}>
              {tab.content.map((product, index) => (
                <ProductCard key={index}>
                  <ProductImg src={product.productImg} alt="" />
                  <ProductTitle>{product.productTitle}</ProductTitle>
                  <ProductPrice>{product.productPrice}</ProductPrice>
                </ProductCard>
              ))}
            </TabContent>
          )
      )}
    </TabWrapper>
  );
}

export default Tabs;
