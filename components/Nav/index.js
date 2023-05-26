import React, { useState } from "react";
import Image from "next/image";

import {
  Nav,
  NavLogo,
  Hamburger,
  Menu,
  MenuLink,
  MenuTitleBody,
  SayHelloMenu,
} from "./styles";
import TemplatesIcon from "../svg/icons/templates";
import NewsletterIcon from "../svg/icons/newsletter";
import ConsultingIcon from "../svg/icons/consulting";
import HireMeIcon from "../svg/icons/hire";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuLinks = [
    // { index: '01.', title: 'About', href: '#about' },
    // { index: "01.", title: "Work", href: "#projects" },
    // { index: "02.", title: "Blogs", href: "/blog" },
    { index: "03.", title: "Templates", href: "/store" },
    { index: "04.", title: "Consulting", href: "#contact" },
    { index: "05.", title: "Newsletter", href: "#contact" },
    { index: "06.", title: "Hire Me", href: "#contact" },
  ];

  // Mapping between titles and icon components
  const iconMap = {
    Templates: TemplatesIcon,
    Newsletter: NewsletterIcon,
    Consulting: ConsultingIcon,
    "Hire Me": HireMeIcon,
  };

  return (
    <Nav isOpen={isOpen}>
      <div className="container">
        <Menu isOpen={isOpen}>
          <MenuTitleBody>
            {menuLinks.map((menuLink, index) => {
              const IconComponent = iconMap[menuLink.title];
              return (
                <MenuLink
                  key={menuLink.title}
                  href={menuLink.href}
                  isOpen={isOpen}
                  index={index + 1}
                  onClick={toggleMenu}
                >
                  <div
                    className="icon-wrapper"
                    style={{
                      
                    }}
                  >
                    {IconComponent && <IconComponent />}
                  </div>

                  <div>
                    <span className="number">
                      {isOpen ? menuLink.index : ""}{" "}
                    </span>
                    <span className="s-name">{menuLink.title}</span>
                  </div>
                </MenuLink>
              );
            })}
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
        <Hamburger onClick={toggleMenu} isOpen={isOpen}>
          <div>
            {[1, 2, 3].map((_, index) => (
              <span
                key={index}
                className={isOpen ? `open-${index + 1}` : `close-${index + 1}`}
              />
            ))}
          </div>
        </Hamburger>
      </div>
    </Nav>
  );
}

export default Navbar;
