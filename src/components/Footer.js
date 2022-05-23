import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className='pt-5'>
        <hr />
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <h6>
                <b>COMPANY INFORMATION</b>
              </h6>
              <div className='row'>
                <p className='pl-3'>
                  <b>Address:</b>
                </p>
                <p className='pl-3'>
                  <small>
                    530 New Los Angeles Ave #115-338
                    <br />
                    Moorpark, CA 93021, USA
                  </small>{' '}
                </p>
              </div>
              <div className='row'>
                <p className='pl-3'>
                  <b>Call Us:</b>
                </p>
                <p className='pl-3'>
                  <small>1.805.823.8888:</small>{' '}
                </p>
              </div>
              <div className='row'>
                <p className='pl-3'>
                  <b>Email Us:</b>
                </p>
                <p className='pl-3'>
                  <small>sales@bestwatchesdeal.com</small>{' '}
                </p>
              </div>
              <div className='row'>
                <p className='pl-3'>
                  <b>
                    Customer <br />
                    Service
                    <br /> Hours:
                  </b>
                </p>
                <p className='pl-3'>
                  <small>
                    Monday - Wednesday: 7:00 AM - 6:00 PM
                    <br />
                    Thursday - Sunday: CLOSED
                    <br /> Email Support Available 7 Days a Week{' '}
                  </small>
                </p>
              </div>
            </div>
            <div className='col-md-2'>
              <h6>
                <b>CUSTOMER SERVICE</b>
              </h6>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>About Us</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Why Buy From Us</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Sell My Watch</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Frequently Asked Questions</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Customer Reviews</small>
                </a>
                <br />
              </div>
            </div>
            <div className='col-md-2'>
              <h6>
                <b>POLICIES</b>
              </h6>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Extended Return Policy</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>No Restocking Fee*</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Shipping Policies</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Privacy Policy</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Payment Methods</small>
                </a>
                <br />
              </div>
            </div>
            <div className='col-md-2'>
              <h6>
                <b>HELP CENTER</b>
              </h6>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Site Map</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Free Bracelet Sizing</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Authenticity & Service Guarantee</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>No Restocking Fee*</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Warranty Policy</small>
                </a>
                <br />
              </div>
            </div>
            <div className='col-md-2'>
              <h6>
                <b>WATCH EDUCATION</b>
              </h6>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>AuthenticWatches.com Blog</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Rolex Serial Numbers</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Watch Terminology</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Watch Movements</small>
                </a>
                <br />
              </div>
              <div className='pt-2'>
                <a href='#' class='serv'>
                  <small>Watch Accuracy</small>
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row justify-content-center'>
            <img src='images/white-header-details.gif' alt='' className='pt-3' />
          </div>
        </div>
        <p className='text-center pt-4 pb-2'>
          Copyright ©2001-2022 BestDealWatches.com. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
