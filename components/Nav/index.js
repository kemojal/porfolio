import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import {
  Nav,
  FluidContainer,
  NavLogo,
  Hamburger,
  Menu,
  MenuLink,
  MenuTitleBody,
  SayHelloMenu
} from './styles';
const nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <Nav isOpen={isOpen}>
      <div className="container">
        <Menu isOpen={isOpen}>
          <MenuTitleBody>
            <MenuLink href="#about" isOpen={isOpen} index={1} onClick={onClick}>
              <span className="number" isOpen={isOpen}>
                01.
              </span>
              <span className="s-name">About</span>
            </MenuLink>
            <MenuLink
              href="#projects"
              isOpen={isOpen}
              index={1}
              onClick={onClick}
            >
              <span className="number">02.</span>
              <span className="s-name">Projects</span>
            </MenuLink>
            <MenuLink
              href="#contact"
              isOpen={isOpen}
              index={1}
              onClick={onClick}
            >
              <span className="number">03.</span>
              <span className="s-name">Contact</span>
            </MenuLink>
            <SayHelloMenu>
              <h3>Say Hello </h3>
              <a href="youtu.be/z3vusUCorz0">youtube/kemojallow</a>
              <p>@kemo_jallow</p>
              <p>Twitter</p>
            </SayHelloMenu>
          </MenuTitleBody>
        </Menu>
        <NavLogo>
          <Image
            src="/assets/imgs/logo2.svg"
            alt="Picture of the author"
            width={45}
            height={45}
          />
        </NavLogo>
        <Hamburger onClick={onClick} isOpen={isOpen}>
          <div>
            <span className="first" isOpen={isOpen} />
            <span className="center" isOpen={isOpen} />
            <span className="second" isOpen={isOpen} />
          </div>
        </Hamburger>
      </div>
    </Nav>
  );
};

export default nav;
