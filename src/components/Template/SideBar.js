import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Houston Callaway</h2>
        <p><a href="mailto:houstoncallaway@gmail.com">houstoncallaway@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Houston. I am a <a href="https://www.lmc.edu/">Lees-McRae College</a> graduate,
        and am currently a Product Manager at <a href="https://www.axon.com/">Axon</a>. Previously,
        I was a Product Manager at <a href="https://imubit.com/">Imubit</a>. I have also worked as a project or product manager for Tailored Labs,
        {' '}<a href="https://www.cruiseplanners.com/">Cruise Planners Corporate Office</a>, and Evil Genius Technologies.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
