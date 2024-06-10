"use client";

import { useState } from "react";
import { DeviceBreakpoint, Color } from "../../../constants";
import useWindowDimensions from "../../../hooks/useWindowDimensions";

import styles from "./Navbar.module.css";
import Image from "next/image";
import LogoIcon from "../../../assets/general/logo-icon.svg";
import HamburgerIcon from "../../../assets/general/hamburger-icon.svg";

import Button from "../../atoms/Button";
import Dropdown from "../Dropdown";

/**
 * The Navbar at the top of the page.
 */
export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { width } = useWindowDimensions();
  const isMobile = width <= DeviceBreakpoint.MEDIUM;

  return (
    <>
      <div className={styles.container}>
        {isMobile ? (
          <>
            {/* Collapsed mobile view with hamburger selector. */}
            <div className={styles.leftContent}>
              <Image src={LogoIcon} alt="logo" />
            </div>
            <div className={styles.rightContent}>
              {/* TODO: Get another icon for opened.  */}
              <Image
                src={HamburgerIcon}
                alt="logo"
                draggable="false"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </>
        ) : (
          <>
            {/* Uncollapsed desktop view. */}
            <div className={styles.leftContent}>
              <Image src={LogoIcon} alt="logo" draggable="false" />
              <div className={styles.links}>
                <a>IT Talent</a>
                <a>Sponsor</a>
              </div>
            </div>
            <div className={styles.rightContent}>
              <div className={styles.buttons}>
                {/* TODO: These buttons still need to be implemented, so currently,
                  we are hardwriting styles in. */}
                <Button
                  style={{
                    width: "70px",
                    height: "56px",
                    fontWeight: "bold",
                    border: "none",
                    backgroundColor: Color.SECONDARY,
                    color: Color.PRIMARY,
                  }}
                >
                  Log In
                </Button>
                <Button
                  style={{
                    width: "167px",
                    height: "56px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: Color.PRIMARY,
                    color: Color.SECONDARY,
                  }}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Hamburger dropdown. */}
      <div className={styles.hamburgerDropdown}>
        <Dropdown open={isDropdownOpen && isMobile}>
          {/* TODO: Fill this in. */}
          <Dropdown.Item>IT Talent</Dropdown.Item>
          <Dropdown.Item>Sponsor</Dropdown.Item>
          <Dropdown.Item>Log In</Dropdown.Item>
          <Dropdown.Item>Sign Up</Dropdown.Item>
        </Dropdown>
      </div>
    </>
  );
}
