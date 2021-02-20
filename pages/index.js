import Head from 'next/head'


export default function Home() {
  return (
    <>
    <section className="w3l-coming-soon-page">
  <div className="coming-page-infohny">
    <div className="wrapper">
      <div className="header">
        <div className="logo">
          <a className="brand-logo" href="index.html">Alive.</a>
        </div>
        <div className="w3lhny-button text-right">
          <a className="alive-btn" href="index.html">Download</a>
        </div>
      </div>
      <div className="coming-block">
        <h1>Coming Soon Hello from aman</h1>
        <h2 className="parahny">Our Website Coming in 2021</h2>
      </div>
      <div className="alive-bottom">
        <div className="countdown">
          <h6>Launching In</h6>
          <div className="countdown__days">
            <div className="number" />
            <span className>Days</span>
          </div>
          <div className="countdown__hours">
            <div className="number" />
            <span className>Hours</span>
          </div>
          <div className="countdown__minutes">
            <div className="number" />
            <span className>Minutes</span>
          </div>
          <div className="countdown__seconds">
            <div className="number" />
            <span className>Seconds</span>
          </div>
        </div>
        <div className="copyright-footer ">
          <div className="w3lhny-socialicons">
            <ul className="social">
              <li><h6>Follow Us :</h6></li>
              <li><a href="#facebook"><span className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href="#linkedin"><span className="fa fa-linkedin" aria-hidden="true" /></a></li>
              <li><a href="#twitter"><span className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li>
                <a href="#instagram" className="linkedin"><span className="fa fa-instagram" /></a>
              </li>
              <li>
                <a href="#linkedin" className="linkedin"><span className="fa fa-linkedin" /></a>
              </li>
            </ul>
          </div>
          <p>© 2021 Alive Coming Soon. Made with <span className="fa fa-heart" /> | Designed by <a href="https://w3layouts.com" target="_blank">W3layouts</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}
