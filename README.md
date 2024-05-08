<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![MIT License][license-shield]][license-url]
<!-- [![LinkedIn][linkedin-shield]][linkedin-url] -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/UnknownSean8/PEM">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

<h3 align="center">Personality Emotion Mapping</h3>

  <p align="center">
    Personality Emotion Mapping (PEM) is designed as an online platform that enables students to participate in multi-modal surveys.
    
    This is written in ReactJS for frontend and ExpressJS and Firebase used for much of the backend functionality including data storage, authentication, and hosting.
<!-- <br /> -->
<!-- <a href="https://github.com/UnknownSean8/PEM"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://github.com/UnknownSean8/PEM">View Demo</a>
·
<a href="https://github.com/UnknownSean8/PEM/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
·
<a href="https://github.com/UnknownSean8/PEM/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a> -->
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <!-- <li><a href="#prerequisites">Prerequisites</a></li> -->
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#important">Important</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![PEM Screen Shot][product-screenshot]](/images/Quizss.png)

Personality Emotion Mapping (PEM) is a comprehensive modular framework that establishes a quantifiable and two-way connection between 15 personality traits and basic emotions. PEM’s workflow aims to provide an end-to-end solution that enables researchers to map personality and emotions via Affective Computing (AC) methodology at scale.

<!-- Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `UnknownSean8`, `PEM`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description` -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![Firebase][Firebase-shield]][Firebase-url]
- [![Express][Express-shield]][Express-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you can set up PEM locally.
To get a local copy up and running follow these simple example steps.

<!-- ### Prerequisites -->

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/UnknownSean8/PEM.git
   ```
2. Change node version to v16.20.0 using [nvm](https://github.com/nvm-sh/nvm)
   ```sh
   nvm use v16.20.0
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `.env` file
   ```js
   REACT_APP_FIREBASE_API_KEY = $npm_package_config_firebase_apiKey;
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

PEM employs AC techniques to map this relationship across self-reporting, facial expressions, language analysis, and emotional intonation. PEM offers an all-in-one solution for data collection, feature extraction, analysis and result generation, resulting in a real-time model that finely correlates personality traits with basic emotions. Its strength lies in its capacity to perform meta-analytical and multi-modal analyses, continuously updating the significance, direction and magnitude of trait-to-emotion mappings as more data is processed.

PEM is valuable for research in Psychology and AC, addressing questions related to the emotional aspect of personality, reducing context-related variances in basic emotions research, and exploring how the sequence of emotions relates to individual differences. Additionally, PEM’s methodology can be applied in various domains requiring personalized services, such as advertising, clinical care and research.

<!-- _For more examples, please refer to the [Documentation](https://example.com)_ -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] Open-source Software
- [ ] Create multiple Quizzes
- [ ] Anonymous Questionnaire
- [ ] Employs Affective Computing techniques

<!-- See the [open issues](https://github.com/UnknownSean8/PEM/issues) for a full list of proposed features (and known issues). -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Important

Please make sure to thoroughly test out any surveys/quizzes that you make before sending them out. There have been a number of issues that have previously popped up when testing that may have never been noticed. These might be small or else they may end up breaking an entire section of your study.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

<!-- Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com -->

Project Link: [https://github.com/UnknownSean8/PEM](https://github.com/UnknownSean8/PEM)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Dr. Ruairi O'Reilly]()
- [Jamie Cotter]()
- [Sean Leong]()

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/UnknownSean8/PEM.svg?style=for-the-badge
[contributors-url]: https://github.com/UnknownSean8/PEM/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/UnknownSean8/PEM.svg?style=for-the-badge
[forks-url]: https://github.com/UnknownSean8/PEM/network/members
[stars-shield]: https://img.shields.io/github/stars/UnknownSean8/PEM.svg?style=for-the-badge
[stars-url]: https://github.com/UnknownSean8/PEM/stargazers
[issues-shield]: https://img.shields.io/github/issues/UnknownSean8/PEM.svg?style=for-the-badge
[issues-url]: https://github.com/UnknownSean8/PEM/issues
[license-shield]: https://img.shields.io/github/license/UnknownSean8/PEM.svg?style=for-the-badge
[license-url]: https://github.com/UnknownSean8/PEM/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/Quizss.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Express-shield]: https://img.shields.io/badge/express-0769AD?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Firebase-shield]: https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black
[Firebase-url]: https://firebase.google.com/
