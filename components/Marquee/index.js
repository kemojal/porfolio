import  { useState, useRef, useEffect } from 'react';
import  styled, { keyframes } from 'styled-components';

// Wrapper
const WrapperContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = ({ children }) => {
  return <WrapperContainer>{children}</WrapperContainer>;
};

// Marquee
const moveLeft = keyframes`
  from {
    transform: translateX(0);
  }
`;

const MarqueeContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 20px;
  padding: 0px 0;
  /* background-color: white; */
  overflow: hidden;
  &:hover {
    animation-play-state: paused;
  }
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.body},
      transparent 40%,
      transparent 60%,
      ${({ theme }) => theme.body}
    );
  }
`;

const MarqueeArea = styled.div`
  display: inline-block;
  white-space: nowrap;
  transform: translateX(-${(props) => props.move}px);
  animation: ${moveLeft} ${(props) => props.time}s linear infinite
    ${(props) => (props.toRight ? " reverse" : "")};
  animation-play-state: inherit;
`;

const MarqueeItem = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 2em;
`;

const getFillList = (list, copyTimes = 1) => {
  let newlist = [];
  for (let i = 0; i < copyTimes; i++) {
    newlist.push(...list);
  }
  console.log("newlist", newlist);
  return newlist;
};

export const Marquee = ({ list, time, toRight, ...props }) => {
  const marqueeContainer = useRef(null);
  const marqueeArea = useRef(null);
  const [moveLeft, setMoveLeft] = useState(0);
  const [showList, setShowList] = useState(list || []);
  const [realTime, setRealTime] = useState(time || 10);
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
    const areaWidth = Math.floor(marqueeArea.current.scrollWidth);
    const copyTimes = Math.max(2, Math.ceil((containerWidth * 2) / areaWidth));
    const newMoveLeft = areaWidth * Math.floor(copyTimes / 2);
    const newRealTime =
      time * parseFloat((newMoveLeft / containerWidth).toFixed(2));


      const item = document.querySelector(".marquee-item");
      const newItemWidth = item ? item.offsetWidth : 0;


    setShowList(getFillList(list, copyTimes));
    setMoveLeft(newMoveLeft);
    setRealTime(newRealTime);
  }, [list]);



  useEffect(() => {
    const containerWidth = Math.floor(marqueeContainer.current.offsetWidth);
    const totalWidth = showList.length * itemWidth;

    if (moveLeft < -totalWidth) {
      const [firstItem, ...restItems] = showList;
      const newItem = React.cloneElement(firstItem, { key: Date.now() });
      setShowList([...restItems, newItem]);
      setMoveLeft(moveLeft + itemWidth);
    }
  }, [moveLeft]);

  const handleItemClick = (event, link) => {
    event.preventDefault();
    window.open(link, "_blank");
  };



  return (
    <MarqueeContainer ref={marqueeContainer} {...props}>
      <MarqueeArea
        ref={marqueeArea}
        move={moveLeft}
        time={realTime}
        toRight={toRight}
      >
        {showList.map((item) => {
          return <MarqueeItem>
            <item.component />
          </MarqueeItem>;
        })}
      </MarqueeArea>
    </MarqueeContainer>
  );
};

// Marquee.propTypes = {
//   list: PropTypes.array,
//   time: PropTypes.number,
//   toRight: PropTypes.boolean
// };

// Marquee.defaultProps = {
//   list: [],
//   time: 500
// };