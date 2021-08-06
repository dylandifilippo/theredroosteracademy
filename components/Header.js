import Image from 'next/image'

const Header = () => (
  <div>
    <header className="page_header ds justify-nav-center s-pt-10 s-pb-10">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2 col-lg-3 col-11" />
          <a href="./" className="logo">
            {/* <Image src="images/logo.png" alt="" /> */}
          </a>
          <div className="col-xl-8 col-lg-6 col-1 text-sm-center">
            <nav className="top-nav">
              <ul className="nav sf-menu">
                <li>
                  <a href="#box_wrapper">Home</a>
                  <ul>
                    <li>
                      <a href="index.html">MultiPage</a>
                    </li>
                    <li>
                      <a href="index_static.html">Static Intro</a>
                    </li>
                    <li>
                      <a href="index_singlepage.html">Single Page</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#programs">Programs</a>
                </li>
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#form">Contact Us</a>
                </li>
                <li>
                  <a href="#faq">Faq</a>
                </li>
                <li>
                  <a href="#news">News</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-xl-2 col-lg-3 text-right d-none d-xl-block">
            <ul className="top-includes">
              <li>
                <span>
                  <a href="#" className="btn btn-outline-maincolor">
                    trial offer
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <span className="toggle_menu">
        <span />
      </span>
    </header>
  </div>
)

export default Header
