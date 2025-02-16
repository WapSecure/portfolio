import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const MobileNavigation = ({ variants, isOpen }: any) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">WE COULD HOOK UP YOU KNOW</h4>
          <div className="navigation-top__left--links">
            <Link
              href="https://github.com/wapsecure"
              rel="noopener"
              target="_blank"
            >
              👾 GH
            </Link>
            <Link
              href="https://twitter.com/orjitypescript"
              rel="noopener"
              target="_blank"
            >
              🐦 TW
            </Link>
            <Link
              href="https://www.linkedin.com/in/wapsecure"
              rel="noopener"
              target="_blank"
            >
              💼 LD
            </Link>
            <Link
              href="https://www.instagram.com/wappsecure"
              rel="noopener"
              target="_blank"
            >
              📸 IN
            </Link>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE A BUSINESS IDEA?</h4>
          <Link
            href="mailto:writewapsecure@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Tell me about it
          </Link>
        </div>
        <a
          className="resume"
          href="svg/Joseph-Orji-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume 📗
        </a>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <Link
            target="_blank"
            rel="noopener"
            href="https://roqqu.com"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/roqque.webp" alt="roqqu" />
            <h2>
              Roqqu
              <br />
              Crypto Currency exchange market
            </h2>
          </Link>
          <Link
            href="https://hashnode.com/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/hashnode.png" alt="hashnode" />
            <h2>
              Hashnode
              <br />
              Social Network blogging application
            </h2>
          </Link>
          <Link
            href="https://hydrogenpay.com/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src="webp/Hydrogen.jpg" alt="Hydrogen" />
            <h2>
              HydrogenPay Microfinance Bank.
              <br /> Financial Technology for Payment Collection
            </h2>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
