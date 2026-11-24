import Image from "next/image";
import Link from "next/link";
import { talents, peso } from "@/data/talents";

export function Hero() {
  const featured = talents[0];
  return (
    <>
      <section className="hero">
        <Image src="/studio/microphone.webp" alt="" fill preload sizes="100vw" className="hero-photo" />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <div className="hero-copy">
            <p className="kicker hero-kicker"><span className="rule" /> Event hosting &amp; voice over</p>
            <h1>A voice for<br /><em>your moment.</em></h1>
            <p className="hero-description">From the first welcome to the final word. Find a host for your celebration or a voice for your next production.</p>
            <div className="hero-actions">
              <Link href="/plan" className="btn btn-gold">Plan your event <span aria-hidden="true">↗</span></Link>
              <Link href="/#voices" className="hero-secondary">Meet the talent <span aria-hidden="true">↓</span></Link>
            </div>
          </div>
        </div>
      </section>
      <div className="rate-strip">
        <dl className="wrap facts">
          <div><dt>Event hosting</dt><dd>From {peso(featured.hosting.from)} <span>/ event</span></dd></div>
          <div><dt>Voice over</dt><dd>From {peso(featured.voRates[0].price)} <span>/ recording</span></dd></div>
          <div><dt>Home base</dt><dd>Tuguegarao <span>/ Philippines</span></dd></div>
        </dl>
      </div>
    </>
  );
}
