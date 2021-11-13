import React from 'react';
import { Image } from 'react-bootstrap';
import Navigation from '../Navigation/Navigation';
import './Blogs.css';

const Blogs = () => {
  return (
    <div>
      <Navigation/>

      <main className="container">
        <div id='top' className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Cycling is good for health</h1>
            <p className="lead my-3">Cycling is very good for health. So we should choice the best cycle. Multiple lines of text that form the lede.</p>
          </div>
        </div>

        <div className="row mb-2">
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">World</strong>
                <h3 className="mb-0">Racing is On</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">Another race was held on the dhaka kolabagan to Gulistan Sadarghat. Some people reach the destination by foot.This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <Image height='300px' src="https://images.unsplash.com/photo-1623216216626-f8bfd191552d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"></Image>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Design</strong>
                <h3 className="mb-0">A greate Cycle Designer Was found</h3>
                <div className="mb-1 text-muted">Nov 11</div>
                <p className="mb-auto">On Sunday 9, there was an axibhition on manhattan building. . A famous cyclis was there. This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              </div>
              <div className="col-auto d-none d-lg-block">
                <Image src="https://images.unsplash.com/photo-1622777255699-9287e0191b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-md-8">
            <h3 className="pb-4 mb-4 fst-italic border-bottom">
              From the Firehose
            </h3>

            <article className="blog-post">
              <h2 className="blog-post-title">Again hight price in Cycle parts market</h2>
              <p className="blog-post-meta">January 1, 2021 by Mark</p>

              <p> Cycling habitually, especially at a high intensity, helps lower body fat levels, which promotes healthy weight management. Plus, you'll increase , code, and more are all supported as expected.</p>
              <hr/>
             
              <h2>Parts are weak</h2>
              <p>Now a days the parts of the company like the giant one veloce is going down. This is some additional paragraph placeholder content.It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <p>This is some additional paragraph placeholder content.It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              
            </article>

            <article className="blog-post">
              <h2 className="blog-post-title">One month left to start the final Compitition </h2>
              <p className="blog-post-meta">December 23, 2020 by Jacob</p>

              <p>This is some additional paragraph placeholder content.It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              
              <p>This is some additional paragraph placeholder content.It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              

              <p>This is some additional paragraph placeholder content.It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
            </article>

            <article className="blog-post">
              <h2 className="blog-post-title">New feature of veloce 507</h2>
              <p className="blog-post-meta">December 14, 2020 by Chris</p>

              <Image style={{width:'100%'}} src="https://images.unsplash.com/photo-1600492110568-f9bf4835500a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"/>
              <p>This is some additional paragraph placeholder content.It has been written to fill the available space and show how a longer snippet of text affects the surrounding content.We'll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>
              <ul>
                <li>Strong body</li>
                <li>Carbon fiber frame</li>
                <li>Third list item to close it out</li>
              </ul>
              <p>This is some additional paragraph placeholder content.It's a slightly shorter version of the other highly repetitive body text used throughout.</p>
            </article>

            <nav className="blog-pagination" aria-label="Pagination">
              <a className="btn btn-outline-primary" href="#top">Older</a>
              <a href="#top" className="btn btn-outline-secondary disabled">Newer</a>
            </nav>

          </div>

          <div className="col-md-4">
            <div className="position-sticky">
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">We are a selling different types of cycle like mountain bike, off road cycle , kids cycle. We always try to fulfill customers demand. publication, writers, content, or something else entirely.Totally up to you.</p>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li> March 2021</li>
                  <li> February 2021</li>
                  <li> January 2021</li>
                  <li> December 2020</li>
                </ol>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li><i className="fab fa-facebook-square"></i></li>
                  <li><i className="fab fa-instagram-square"></i></li>
                  <li><i className="fab fa-twitter-square"></i></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blogs;