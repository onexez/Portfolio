import React from "react";
import { styles } from "./Footer.module.scss";
import { BsTelegram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_cr}>
          <h3>Copyright © {new Date().getFullYear()} . All rights are reserved</h3>
          <div className={styles.footer_socials}>
            <a aria-label="telegram" href="https://t.me/onexez">
              <BsTelegram />
            </a>
            <a aria-label="github" href="https://github.com/onexez">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
