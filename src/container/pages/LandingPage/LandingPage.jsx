import React from 'react';
import './LandingPage.css';

const LandingPage = (props) => {
  return (
    <div className="d-flex vh-100 text-center text-white bg-dark">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <main class="px-3 main-deep-margin">
          <h1>Cover your page.</h1>
          <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</a>
          </p>
        </main>

        <footer class="mt-auto text-white-50 footer-negative-margin">
          <p>Cover template for <a href="https://getbootstrap.com/" class="text-white">Bootstrap</a>, by <a href="https://twitter.com/mdo" class="text-white">@mdo</a>.</p>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;