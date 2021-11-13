import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [])
  return (
    <div className='bg-dark'>
      <h1 className="reviews-h1 text-white mt-4 pt-4">Reviews</h1>
      <Carousel>
        {reviews.map(review => (
          <Carousel.Item interval={7000} key={review._id}>
            <div className="container-fluid px-1 py-5 mx-auto">
              <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                  <div className="card">
                    <div className="row justify-content-left d-flex">
                      <div className="col-md-4 d-flex flex-column">
                        <div className="rating-box">
                          <h1 className="pt-4">{review.rating}</h1>
                          <p className="">out of 5</p>
                        </div>
                        <div> <span className="fa fa-star star-active mx-1"></span> <span className="fa fa-star star-active mx-1"></span> <span className="fa fa-star star-active mx-1"></span> <span className="fa fa-star star-active mx-1"></span> <span className="fa fa-star star-inactive mx-1"></span> </div>
                      </div>
                      <div className="col-md-8">
                        <div className="rating-bar0 justify-content-center">
                          <table className="text-left mx-auto">
                            <tr>
                              <td className="rating-label">Excellent</td>
                              <td className="rating-bar">
                                <div className="bar-container">
                                  <div className="bar-5"></div>
                                </div>
                              </td>
                              <td className="text-right">123</td>
                            </tr>
                            <tr>
                              <td className="rating-label">Good</td>
                              <td className="rating-bar">
                                <div className="bar-container">
                                  <div className="bar-4"></div>
                                </div>
                              </td>
                              <td className="text-right">23</td>
                            </tr>
                            <tr>
                              <td className="rating-label">Average</td>
                              <td className="rating-bar">
                                <div className="bar-container">
                                  <div className="bar-3"></div>
                                </div>
                              </td>
                              <td className="text-right">10</td>
                            </tr>
                            <tr>
                              <td className="rating-label">Poor</td>
                              <td className="rating-bar">
                                <div className="bar-container">
                                  <div className="bar-2"></div>
                                </div>
                              </td>
                              <td className="text-right">3</td>
                            </tr>
                            <tr>
                              <td className="rating-label">Terrible</td>
                              <td className="rating-bar">
                                <div className="bar-container">
                                  <div className="bar-1"></div>
                                </div>
                              </td>
                              <td className="text-right">0</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="row d-flex">
                      <div className=""> <img className="profile-pic" src={review.img} alt='mukesh' /> </div>
                      <div className="d-flex flex-column">
                        <h3 className="mt-2 mb-0">{review.name}</h3>
                        <div>
                          <p className="text-left"><span className="text-muted">{review.rating}</span> <span className="fa fa-star star-active ml-3"></span> <span className="fa fa-star star-active"></span> <span className="fa fa-star star-active"></span> <span className="fa fa-star star-active"></span> <span className="fa fa-star star-inactive"></span></p>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <p className="text-muted pt-5 pt-sm-3">{review.date}</p>
                      </div>
                    </div>
                    <div className="row text-left">
                      <h4 className="blue-text mt-3">{review.title}</h4>
                      <p className="content">{review.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Reviews;