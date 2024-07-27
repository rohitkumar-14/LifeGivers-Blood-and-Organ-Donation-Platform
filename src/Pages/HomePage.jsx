import React from "react";
import banner_video from "../assets/img/banner_video.png.webp";
import top_service from "../assets/img/top_service.png.webp";
import { NavLink, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <section class="banner_part">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-7">
              <div class="banner_text text-center">
                <div class="banner_text_iner">
                  <h1>
                    Heroes Among Us <br /> Be a Donor
                  </h1>
                  <p>
                    Become a real-life hero by donating blood and organs. Your
                    simple act of giving can save lives and bring hope to those
                    in desperate need. Register now and be the change.
                  </p>
                  <Link to="/register" class="btn_2">
                    Register Today
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-lg-7">
              <div class="banner_video">
                <div class="banner_video_iner">
                  <img src="https://t4.ftcdn.net/jpg/07/46/63/99/240_F_746639949_XFW6jrfjDGXjbiTHtotV5k24TqAtNObR.jpg" width={600} height={400} alt />
                  <div class="extends_video">
                    <a
                      id="play-video_1"
                      class="video-play-button popup-youtube"
                      href="https://www.youtube.com/watch?v=pBFQdxA-apI">
                      <span class="fas fa-play"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="service_part">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-4 col-sm-10">
              <div class="service_text">
                <h2>We are LifeGivers Network Worldwide</h2>
                <p>
                  Join us in our mission to save lives. Every blood and organ
                  donation can bring hope to those in need. Be a hero today and
                  register to donate. Your generosity can make a lasting impact
                  on countless lives.
                </p>
                <Link to="/login" class="btn_2">
                  Learn more
                </Link>
              </div>
            </div>
            <div class="col-lg-7 col-xl-6">
              <div class="service_part_iner">
                <div class="row">
                  <div class="col-lg-6 col-sm-6">
                    <div class="single_service_text">
                      <i class="fas fa-tint"></i>
                      <h4>Blood Donation</h4>
                      <p>
                        Help save lives by donating blood. Your blood can
                        provide critical support to patients in emergencies and
                        ongoing medical treatments.
                      </p>
                      <NavLink to="/login">Donate Now</NavLink>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="single_service_text">
                      <i class="fas fa-heart"></i>
                      <h4>Organ Donation</h4>
                      <p>
                        Become an organ donor and give the gift of life. Your
                        donation can save multiple lives and bring hope to
                        patients in need of transplants.
                      </p>
                      <NavLink to="/login">Donate Now</NavLink>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="single_service_text">
                      <i class="fas fa-hospital"></i>
                      <h4>Hospital/Blood Bank Registration</h4>
                      <p>
                        Register your hospital to connect with our network.
                        Access vital resources and support for blood and organ
                        donations.
                      </p>
                      <NavLink to="/details">View Details</NavLink>
                    </div>
                  </div>
                  <div class="col-lg-6 col-sm-6">
                    <div class="single_service_text">
                      <i class="fas fa-notes-medical"></i>
                      <h4>Patient Details</h4>
                      <p>
                        Access detailed information about patients in need of
                        blood and organ donations. Help us match donors with
                        those in need.
                      </p>
                      <NavLink to="/details">View Details</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="about_us">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6">
              <div class="about_us_img">
                <img src="https://as2.ftcdn.net/v2/jpg/00/22/94/17/1000_F_22941711_wUzYNvIasOnPBkcskJICaUsSJrjm0ZWm.jpg" alt="About Us Image" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about_us_text">
                <h5>
                  2024
                  <br />
                </h5>
                <h2>About LifeGivers</h2>
                <p>
                  LifeGivers Network is dedicated to saving lives through blood
                  and organ donations. Our mission is to connect generous donors
                  with patients in need, providing hope and a second chance at
                  life. With a committed team of volunteers and partners, we
                  strive to make a significant impact on global healthcare.
                </p>
                <div class="banner_item">
                  <div class="single_item">
                    <h2>
                      <span class="count">50</span>k
                    </h2>
                    <h5>Total Volunteers</h5>
                  </div>
                  <div class="single_item">
                    <h2>
                      <span class="count">25</span>k
                    </h2>
                    <h5>Successful Missions</h5>
                  </div>
                  <div class="single_item">
                    <h2>
                      <span class="count">100</span>k
                    </h2>
                    <h5>Total Donations</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer class="footer_part">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="copyright_text">
                        <p>
                            Copyright &copy;
                            <script>
                                document.write(new Date().getFullYear());
                            </script> All rights reserved | Rohit Kumar
                        </p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="footer_icon social_icon">
                        <ul class="list-unstyled">
                            <li><a href="#" class="single_social_icon"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" class="single_social_icon"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#" class="single_social_icon"><i class="fas fa-globe"></i></a></li>
                            <li><a href="#" class="single_social_icon"><i class="fab fa-behance"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    </>
  );
};

export default HomePage;
