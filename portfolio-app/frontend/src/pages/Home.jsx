import { Link } from 'react-router-dom';
import Marquee from '../components/Marquee.jsx';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="hero-eyebrow">Application support ✦ full-stack in progress</p>
          <h1>
            Hi, I'm Success.
            <br />
            <span className="strike">Support engineer</span> becoming a
            <br />
            full-stack developer.
          </h1>
          <p className="hero-sub">
            Self-taught, curiosity-driven, and based in Lagos — I keep production systems
            running by day, and I'm building toward full-stack and DevOps by night.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-outline">What I do</Link>
            <Link to="/contact" className="btn btn-solid">Let's talk</Link>
          </div>
        </div>
        <div className="hero-mark" aria-hidden="true">
          <div className="mark-block">
            <span className="mark-letter">S</span>
            <span className="mark-letter accent">.</span>
          </div>
        </div>
      </section>

      <Marquee />

      <section className="section intro">
        <p className="intro-label">Currently</p>
        <p className="intro-text">
          Hands-on with Windows Server, IIS, SQL, and API integrations across financial and
          payment systems infrastructure — while working through DevOps, cloud, and full-stack
          fundamentals on the side.
        </p>
      </section>
    </>
  );
}
