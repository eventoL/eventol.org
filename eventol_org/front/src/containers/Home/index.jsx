import React from 'react';
import PropTypes from 'prop-types';

import Timeline from '../../components/Timeline';

import './index.scss';

class Home extends React.PureComponent {
  static propTypes = {
    handleOnChangeLanguage: PropTypes.func,
    languages: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string,
      })
    ),
  };

  static defaultProps = {
    handleOnChangeLanguage: null,
    languages: [],
  };

  handlerOnChangeLanguage = languageCode => {
    const {handleOnChangeLanguage} = this.props;
    if (handleOnChangeLanguage) {
      handleOnChangeLanguage(languageCode);
    }
  };

  render() {
    const {languages} = this.props;
    return (
      <>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              EventoL
            </a>
            <button
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
              data-target="#navbarResponsive"
              data-toggle="collapse"
              type="button"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#stats">
                    Stats
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#timeline">
                    Timeline
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="masthead text-center text-white d-flex cover has-mask">
          <div className="mask" />
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <img
                    alt="logo"
                    className="img-fluid"
                    data-origin="static/assets/eventol/logo.png"
                    src="static/assets/eventol/logo.png"
                  />
                </h1>
                <hr />
              </div>
              <div className="col-lg-8 mx-auto">
                <h3>Event Management Software</h3>
                <p className="text-faded mb-5 description">
                  EventoL is a event management software initially developed to
                  manage FLISoL conference.
                </p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#about"
                >
                  Find Out More
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">
                  Event Management Software
                </h2>
                <hr className="light my-4" />
                <p className="text-faded mb-4">
                  EventoL is a event management software initially developed to
                  manage FLISoL conference.
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#stats"
                >
                  Get Started!
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="stats">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Github Stats</h2>
                <hr className="my-4" />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-code-branch text-primary mb-3 sr-icon-1" />
                  <h4 className="mb-3 counter-title">Forks</h4>
                  <h1
                    className="mb-3 font-eventol eventol-color counter-value"
                    id="counter-forks"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-users text-primary mb-3 sr-icon-1" />
                  <h4 className="mb-3 counter-title">Contributors</h4>
                  <h1
                    className="mb-3 font-eventol eventol-color counter-value"
                    id="counter-contributors"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-tags text-primary mb-3 sr-icon-1" />
                  <h4 className="mb-3 counter-title">Versions</h4>
                  <h1
                    className="mb-3 font-eventol eventol-color counter-value"
                    id="counter-versions"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fas fa-4x fa-star text-primary mb-3 sr-icon-1" />
                  <h4 className="mb-3 counter-title">Stars</h4>
                  <h1
                    className="mb-3 font-eventol eventol-color counter-value"
                    id="counter-stars"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-primary" id="features">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">Features</h2>
                <hr className="light my-4" />
              </div>
            </div>
          </div>
          <div
            className="carousel slide"
            data-ride="carousel"
            id="featuresCarousel"
          >
            <ol className="carousel-indicators">
              <li
                className="active"
                data-slide-to="0"
                data-target="#featuresCarousel"
              />
              <li data-slide-to="1" data-target="#featuresCarousel" />
              <li data-slide-to="2" data-target="#featuresCarousel" />
              <li data-slide-to="3" data-target="#featuresCarousel" />
              <li data-slide-to="4" data-target="#featuresCarousel" />
              <li data-slide-to="5" data-target="#featuresCarousel" />
              <li data-slide-to="6" data-target="#featuresCarousel" />
              <li data-slide-to="7" data-target="#featuresCarousel" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  alt="events"
                  className="d-block carousel-responsive"
                  src="static/assets/features/fullsize/events.png"
                />
                <div className="carousel-caption">
                  <h5>Manage events</h5>
                  <p>One day events or multiple days events</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  alt="attendance"
                  className="d-block carousel-responsive"
                  src="static/assets/features/fullsize/attendance.png"
                />
                <div className="carousel-caption">
                  <h5>Manage attendance</h5>
                  <p>Send tickets, manage attendance, generate reports, ...</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  alt="languages"
                  className="d-block carousel-responsive"
                  src="static/assets/features/fullsize/languages.png"
                />
                <div className="carousel-caption">
                  <h5>Internationalization</h5>
                  <p>English, Spanish, Norwegian, Dutch, ...</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  alt="rooms"
                  className="d-block carousel-responsive"
                  src="static/assets/features/fullsize/rooms.png"
                />
                <div className="carousel-caption">
                  <h5>Manage rooms</h5>
                  <p>Create, edit and remove rooms for schedule</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  alt="reports"
                  className="d-block carousel-responsive"
                  src="static/assets/features/fullsize/reports.png"
                />
                <div className="carousel-caption">
                  <h5>Reports</h5>
                  <p>Day by day and summary reports</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  alt="schedule"
                  className="d-block carousel-responsive"
                  src="static/assets/features/fullsize/schedule.png"
                />
                <div className="carousel-caption">
                  <h5>Schedule</h5>
                  <p>Automatically from activities, days and rooms</p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  alt="talks"
                  className="d-block carousel-responsive"
                  src="static/assets/features/fullsize/talks.png"
                />
                <div className="carousel-caption">
                  <h5>Manage activiities</h5>
                  <p>
                    Vote, confirm, reject and edit talks, proposals and
                    activities
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  alt="tickets"
                  className="d-block carousel-responsive"
                  src="static/assets/features/fullsize/tickets.png"
                />
                <div className="carousel-caption">
                  <h5>Mails and Tickets</h5>
                  <p>Send tickets for attendees, speakers and collaborators</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              data-slide="prev"
              href="#featuresCarousel"
              role="button"
            >
              <span aria-hidden="true" className="carousel-control-prev-icon" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              data-slide="next"
              href="#featuresCarousel"
              role="button"
            >
              <span aria-hidden="true" className="carousel-control-next-icon" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>

        <section className="bg-dark" id="timeline">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">Timeline</h2>
                <hr className="light my-4" />
              </div>
            </div>
          </div>
          <Timeline />
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading">Contact</h2>
                <h4 id="forks-count" />
                <hr className="my-4" />
                <p className="mb-5" style={{marginBottom: '0px !important'}}>
                  Ready to start your next event with EventoL?
                </p>
                <p className="mb-5">
                  That's great! Select a EventoL instance or deploy a new
                  instance and do it.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
