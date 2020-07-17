<template>
  <div>
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">

        <div class="logo mr-auto">
          <h1 class="text-light"><a href=""><span>Odeffe</span></a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->
        </div>

        <nav class="nav-menu d-none d-lg-block">
          <ul>
            <li><a href="#clients">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tariff">Tariff</a></li>
            <li><a href="#affiliations">Affiliations</a></li>
            <li><a href="#faqs">FAQ's</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="get-started"><a href="#about">Get Started</a></li>
          </ul>
        </nav><!-- .nav-menu -->

      </div>
    </header>
    <section id="hero" class="d-flex align-items-center">

    <div class="container">
      <div class="row">
        <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
          <h1 data-aos="fade-up">Take control of your financial future with an ingenious solution</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">Machine and mind work together to create smart algorithms of profit.</h2>
          <div data-aos="fade-up" data-aos-delay="800">
            <a href="#about" class="btn-get-started scrollto">Get Started</a>
          </div>
        </div>
        <div class="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
          <img src="assets/img/hero-img.png" class="img-fluid animated" alt="">
        </div>
      </div>
    </div>

  </section><!-- End Hero -->

  <div id="main">

    <!-- ======= Clients Section ======= -->
    <section id="clients" class="clients clients">
      <div class="container">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-1.png" class="img-fluid" alt="" data-aos="zoom-in">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-2.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-3.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-4.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-5.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400">
          </div>

          <div class="col-lg-2 col-md-4 col-6">
            <img src="assets/img/clients/client-6.png" class="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500">
          </div>

        </div>

      </div>
    </section><!-- End Clients Section -->

    <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <p>
              Start getting a SMART guaranteed income which no one has ever committed
            </p>
            <ul>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>S – Systematic Planning</li>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>M – Machines with Intelligence </li>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>A – Advanced Algorithms </li>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>R – Robust Risk-free Trading</li>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>T – Transactions at Ease</li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div>
              <p>
                Odeffe.com is founded by a team of young, enthusiastic and intellectual graduates from the field of Computer Engineering, Data Science and Finance. Having developed a unique program with Artificial Intelligence and Advance Robotic Trading for making profits in digital currencies, financial and foreign exchange markets.
              </p>
              <p>
                Odeffe.com specialists are well qualified in their field with various years of expertise in research and study.
              </p>
            </div>
            <div v-if="showAbout">
              <p>
                Odeffe.com team has managed to garner the support of large investment funds and big Investors to conduct investment research and activities across the globe. Using our own state of art proprietary AI trading system allows Odeffe.com to conduct accurate calculations on the stock, currency and cryptocurrency exchanges and consistently generate profits to our Investors automatically paid out on a weekly basis!
              </p>
              <p>
                Start getting a stable and GUARANTEED Returns of 180% just by registering and investing on Odeffe.com. Profits will be generated automatically using our State of Art Proprietary AI Trading System right from day 1! This works well with people who are experts and novice traders as we give them guaranteed returns and that to risk free.
              </p>
              <p>
                Our unique State of Art Proprietary AI Trading System has managed to successfully predict the behaviour of different markets with a probability of 95.9% and consistently generate profits to our Investors always keeping them ahead of the curve!
              </p>
              <p>
                More Than 90% Of Current Assets Are Personal Funds Of Odeffe.com. Odeffe.com is registered and operates from Japan with expansions plans in Dubai, France, Canada, New Zealand in next 12-24months.
              </p>
              <p>
                All servers of Odeffe.com are protected with the most up-to-date encryption and data storage tools, so you can be sure that your information is safe and secure with industry leading encryption tools and methods. Also, all funds are securely stored in different cold wallets. Odeffe.com is decentralized in nature and also keep investors information secure and confidential.
              </p>
              <p>
                Do you want to receive regular weekly income using a unique State of Art Proprietary AI Trading System that has generated significant profits and changed the lives of many?
              </p>
            </div>
            <button v-if="!showAbout" @click="showAbout = !showAbout" class="btn-learn-more">Read More</button>
            <button v-else @click="showAbout = !showAbout" class="btn-learn-more">Read Less</button>
          </div>
        </div>

      </div>
    </section><!-- End About Us Section -->

    <!-- ======= Counts Section ======= -->
    <section id="counts" class="counts">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>WHY DO INVESTORS CHOOSE ODEFFE.COM?</h2>
        </div>
        <div class="row">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
            <img src="assets/img/counts-img.svg" alt="" class="img-fluid">
          </div>

          <div class="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
            <div class="content d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-simple-smile"></i>
                    <span>MODERN TRADING METHODS</span>
                    <p><strong>Our State of Art Proprietary AI Trading System </strong> is designed to make profits globally in the vast majority of exchanges by detecting patterns to lock in trades using unique techniques such as machine learning, deep learning with AI & Financial experts, it is a combination of Mathematical and Statistical models, Quantum Mechanics, Demand and Supply Economics, Technical Analysis for Buy Low and Sell High to Arbitrage and various other tools which successfully detects profit generating trades in financial, digital and forex markets always keeping us ahead of the curve.</p>
                  </div>
                </div>
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-document-folder"></i>
                    <span>AUTO CREDIT OF INTEREST</span>
                    <p><strong>We at odeffe</strong> use the most advanced transaction processing techniques, which allows our company to process all payments instantly and automatically! There is no need to place withdrawal requests as payouts are done automatically every Sunday until the expiry of the program without any hassle.</p>
                  </div>
                </div>
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-clock-time"></i>
                    <span>ADVANCED DATA PROTECTION TOOLS</span>
                    <p><strong>All servers</strong> of the company are cloud based which simply means there would be no downtime and are well protected with the most up-to-date encryption and data storage tools & techniques, so you can be sure that all your information is safe and secure which is on part with leading industry standards.</p>
                  </div>
                </div>
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-award"></i>
                    <span>GUARANTEED INCOME</span>
                    <p><strong>Odeffe.com</strong> rguarantees to each investor the income of 180% in form of interests as per the individual chosen tariff plans which will be paid in any case irrespective of the market outcomes. Odeffe.com is fully responsible for your money in accordance with our core values.</p>
                  </div>
                </div>
              </div>
            </div><!-- End .content-->
          </div>
        </div>

      </div>
    </section><!-- End Counts Section -->
    
    <!-- ======= Pricing Section ======= -->
    <section id="tariff" class="pricing">
      <div class="container">

        <div class="section-title">
          <h2>TARIFF</h2>
          <p>The interest automatically stops generating at the end of the above weekly programs after accruing 180% of the initial deposit.</p>
          <h4>BITCOIN PAYMENT SYSTEM</h4>
          <p>Odeffe.com has taken an active decision to deal only with the King of Digital Currency - BITCOIN for all Investors deposits and payouts. Bitcoin is the most popular digital currency and a safe payment method which is widely accepted.</p>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="box" data-aos="zoom-in-right" data-aos-delay="200">
              <h3>Basic</h3>
              <h4><sup>$</sup>100 - <sup>$</sup>999</h4>
              <ul>
                <li>5% Weekly for 36 Weeks</li>
                <li>Auto credit every Sunday</li>
                <li>(No refund of Deposits)</li>
                <li>Return - 180%</li>
                <!-- <li class="na">Pharetra massa</li>
                <li class="na">Massa ultricies mi</li> -->
              </ul>
              <!-- <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div> -->
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-4 mt-md-0">
            <div class="box recommended" data-aos="zoom-in" data-aos-delay="100">
              <h3>Advance</h3>
              <h4><sup>$</sup>1,000 - <sup>$</sup>9,999</h4>
              <ul>
                <li>10% bonus on your working capital</li>
                <li>5% Weekly for 33 Weeks</li>
                <li>Auto credit every Sunday</li>
                <li>(No refund of Deposits)</li>
                <li>Return - 180%</li>
              </ul>
              <!-- <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div> -->
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <div class="box" data-aos="zoom-in-left" data-aos-delay="200">
              <h3>Pro</h3>
              <h4><sup>$</sup>10,000 and Above</h4>
              <ul>
                <li>20% bonus on your working capital</li>
                <li>5% Weekly for 30 Weeks</li>
                <li>Auto credit every Sunday</li>
                <li>(No refund of Deposits)</li>
                <li>Return - 180%</li>
              </ul>
              <!-- <div class="btn-wrap">
                <a href="#" class="btn-buy">Buy Now</a>
              </div> -->
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Pricing Section -->

    <!-- ======= Services Section ======= -->
    <section id="affiliations" class="services">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Affiliations</h2>
          <h4>THE POSSIBILITY OF ACTIVE REFERRAL EARNINGS</h4>
          <p>The company gives additional bonus of every direct and indirect referral investors. This is over and above 180% of guaranteed returns that Odeffe.com offers you.</p>
          <h3>We have 3 Referral Levels</h3>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100" style="min-width: 364px;">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">Level 1</a></h4>
              <p class="description">7% Commission</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200" style="min-width: 364px;">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Level 2</a></h4>
              <p class="description">3% Commission</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300" style="min-width: 364px;">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Level 3</a></h4>
              <p class="description">1% Commission</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->

    <!-- ======= More Services Section ======= -->
    <!-- <section id="more-services" class="more-services">
      <div class="container">

        <div class="row">
          <div class="col-md-6 d-flex align-items-stretch">
            <div class="card" style='background-image: url("assets/img/more-services-1.jpg");' data-aos="fade-up" data-aos-delay="100">
              <div class="card-body">
                <h5 class="card-title"><a href="">Lobira Duno</a></h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua.</p>
                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="card" style='background-image: url("assets/img/more-services-2.jpg");' data-aos="fade-up" data-aos-delay="200">
              <div class="card-body">
                <h5 class="card-title"><a href="">Limere Radses</a></h5>
                <p class="card-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem.</p>
                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>

          </div>
          <div class="col-md-6 d-flex align-items-stretch mt-4">
            <div class="card" style='background-image: url("assets/img/more-services-3.jpg");' data-aos="fade-up" data-aos-delay="100">
              <div class="card-body">
                <h5 class="card-title"><a href="">Nive Lodo</a></h5>
                <p class="card-text">Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores.</p>
                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-stretch mt-4">
            <div class="card" style='background-image: url("assets/img/more-services-4.jpg");' data-aos="fade-up" data-aos-delay="200">
              <div class="card-body">
                <h5 class="card-title"><a href="">Pale Treda</a></h5>
                <p class="card-text">Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem.</p>
                <div class="read-more"><a href="#"><i class="icofont-arrow-right"></i> Read More</a></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section> -->
    <!-- End More Services Section -->

    <!-- ======= Features Section ======= -->
    <!-- <section id="features" class="features">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Features</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="300">
          <div class="col-lg-3 col-md-4">
            <div class="icon-box">
              <i class="ri-store-line" style="color: #ffbb2c;"></i>
              <h3><a href="">Lorem Ipsum</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="ri-bar-chart-box-line" style="color: #5578ff;"></i>
              <h3><a href="">Dolor Sitema</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="ri-calendar-todo-line" style="color: #e80368;"></i>
              <h3><a href="">Sed perspiciatis</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <i class="ri-paint-brush-line" style="color: #e361ff;"></i>
              <h3><a href="">Magni Dolores</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-database-2-line" style="color: #47aeff;"></i>
              <h3><a href="">Nemo Enim</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-gradienter-line" style="color: #ffa76e;"></i>
              <h3><a href="">Eiusmod Tempor</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-file-list-3-line" style="color: #11dbcf;"></i>
              <h3><a href="">Midela Teren</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-price-tag-2-line" style="color: #4233ff;"></i>
              <h3><a href="">Pira Neve</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-anchor-line" style="color: #b2904f;"></i>
              <h3><a href="">Dirada Pack</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-disc-line" style="color: #b20969;"></i>
              <h3><a href="">Moton Ideal</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-base-station-line" style="color: #ff5828;"></i>
              <h3><a href="">Verdo Park</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-fingerprint-line" style="color: #29cc61;"></i>
              <h3><a href="">Flavor Nivelanda</a></h3>
            </div>
          </div>
        </div>

      </div>
    </section>End Features Section -->

    <!-- ======= Testimonials Section ======= -->
    <!-- <section id="testimonials" class="testimonials section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Testimonials</h2>
          <p>Magnam dolores commodi suscipit eum quidem consectetur velit</p>
        </div>

        <div class="owl-carousel testimonials-carousel" data-aos="fade-up" data-aos-delay="200">

          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="assets/img/testimonials/testimonials-1.jpg" class="testimonial-img" alt="">
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="assets/img/testimonials/testimonials-2.jpg" class="testimonial-img" alt="">
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="assets/img/testimonials/testimonials-3.jpg" class="testimonial-img" alt="">
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="assets/img/testimonials/testimonials-4.jpg" class="testimonial-img" alt="">
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

          <div class="testimonial-wrap">
            <div class="testimonial-item">
              <img src="assets/img/testimonials/testimonials-5.jpg" class="testimonial-img" alt="">
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <p>
                <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>End Testimonials Section -->

    <!-- ======= Portfolio Section ======= -->
    <!-- <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div class="row" data-aos="fade-up" data-aos-delay="200">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container" data-aos="fade-up" data-aos-delay="400">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" class="venobox" title="App 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" class="venobox" title="Card 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" class="venobox" title="Web 2"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" class="venobox" title="App 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" class="venobox" title="Card 1"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" class="venobox" title="Card 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <div class="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" class="img-fluid" alt="">
              <div class="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div class="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" class="venobox" title="Web 3"><i class="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" title="More Details"><i class="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>End Portfolio Section -->

    <!-- ======= Team Section ======= -->
    <!-- <section id="team" class="team section-bg">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Team</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
        </div>

        <div class="row">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="100">
              <div class="member-img">
                <img src="assets/img/team/team-1.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="200">
              <div class="member-img">
                <img src="assets/img/team/team-2.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="300">
              <div class="member-img">
                <img src="assets/img/team/team-3.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member" data-aos="fade-up" data-aos-delay="400">
              <div class="member-img">
                <img src="assets/img/team/team-4.jpg" class="img-fluid" alt="">
                <div class="social">
                  <a href=""><i class="icofont-twitter"></i></a>
                  <a href=""><i class="icofont-facebook"></i></a>
                  <a href=""><i class="icofont-instagram"></i></a>
                  <a href=""><i class="icofont-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>End Team Section -->

    <!-- ======= F.A.Q Section ======= -->
    <section id="faqs" class="faq">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div 
          v-for="faq in faqs"
          :key="faq.question"
          class="row faq-item d-flex align-items-stretch"
          data-aos="fade-up"
          :data-aos-delay="faq.time"
          >
          <div class="col-lg-5">
            <i class="ri-question-line"></i>
            <h4>{{ faq.question }}</h4>
          </div>
          <div class="col-lg-7">
            <p>{{ faq.answer }}</p>
          </div>
        </div><!-- End F.A.Q Item-->
        <p>If you do not find the appropriate answer to your any of your question above, please use the feedback form and our technical support will help you alternatively you can also write to us on support@odeffe.com</p>
      </div>
    </section><!-- End F.A.Q Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div class="row">

          <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="contact-about">
              <h3>Odeffe</h3>
              <p>If you have any query about anything. Contact us with your ease.</p>
              <div class="social-links">
                <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
                <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <div class="info">
              <div>
                <i class="ri-map-pin-line"></i>
                <p>Toranomon Hills Mori Tower,<br>1 Chome-23-1 Toranomon, Minato City, Tokyo 105-6390, Japan</p>
              </div>

              <div>
                <i class="ri-mail-send-line"></i>
                <p>info@odeffe.com</p>
              </div>

              <div>
                <i class="ri-phone-line"></i>
                <p></p>
              </div>

            </div>
          </div>

          <div class="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            <form @submit="contact" method="post" role="form" class="php-email-form">
              <div class="form-group">
                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </div><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container">
      <div class="row d-flex align-items-center">
        <div class="col-lg-6 text-lg-left text-center">
          <div class="copyright">
            <!-- &copy; Copyright <strong>Vesperr</strong>. All Rights Reserved -->
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/vesperr-free-bootstrap-template/ -->
            <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
            <a href="#intro" class="scrollto">Home</a>
            <a href="#about" class="scrollto">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </nav>
        </div>
      </div>
    </div>
  </footer><!-- End Footer -->

  <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      showAbout: false,
      faqs: [
        {
          question: 'WHO CAN REGISTER ON Odeffe.com?',
          answer: 'ANY PERSON OVER 18 YEARS OF AGE CAN REGISTER AS INVESTOR TO MAXIMISE THEIR PROFITS',
          time: '100'
        },
        {
          question: 'HOW TO REGISTER ON Odeffe.com?',
          answer: 'TO REGISTER SIMPLY CLICK ON THE "SIGN UP" BUTTON, FILL OUT A SIMPLE REGISTRATION FORM AND ACCEPT THE TERMS & CONDITIONS OF THE USER AGREEMENT!',
          time: '200'
        },
        {
          question: 'MINIMUM INVESTMENT AMOUNT?',
          answer: 'YOU CAN START MAKING MONEY IN OUR COMPANY WITH A DEPOSIT OF $100!',
          time: '300'
        },
        {
          question: 'HOW TO BUY BITCOIN?',
          answer: 'YOU CAN BITCOIN (BTC) FROM WWW.BITCOIN.ORG OR WWW.BINANCE.COM',
          time: '400'
        },
        {
          question: 'HOW TO DEPOSIT THE AMOUNT?',
          answer: 'AFTER REGISTRATION, CLICK ON DEPOSITS TO TRANSFER THE REQUIRED BTC AS PER YOUR CHOSEN PROGRAM.',
          time: '500'
        },
        {
          question: 'IS THERE ANY LIMIT ON THE NUMBER OF DEPOSITS?',
          answer: 'YOU CAN HAVE ANY UNLIMITED NUMBER OF DEPOSITS.',
          time: '600'
        },
        {
          question: 'WHAT IS BONUS?',
          answer: '10% BONUS IS ADDED FOR BASIC PLAN AND 20% FOR FEATURE PLAN.\nBASIC PLAN EXAMPLE: YOU INVEST $2,000, COMPANY ADDS 10% AS BONUS ON YOUR WORKING CAPITAL. IT MEANS YOU START GETTING INTEREST ON $2,200 ($2,000 + 10%)\nFEATURE PLAN EXAMPLE: YOU INVEST $12,000, COMPANY ADDS 20% AS BONUS ON YOUR WORKING CAPITAL. IT MEANS YOU START GETTING INTEREST ON $14,400 ($12,000 + 20%)',
          time: '700'
        },
        {
          question: 'HOW SOON THE CALCULATIONS START AFTER I DEPOSIT?',
          answer: 'YOUR DEPOSIT WILL BE CREDITED AFTER 3 CONFIRMATIONS OF NETWORK. THIS PROCESS GENERALLY TAKES LESS THAN 15 MINS.',
          time: '800'
        },
        {
          question: 'HOW DOES THE INTEREST ACCRUED GETS CALCULATED?',
          answer: 'INTEREST ACCRUAL IS CALCULATED FROM THE TIME DEPOSIT IS RECEIVED BY THE COMPANY FROM YOUR REGISTERED ACCOUNT. ACCRUALS ARE DONE 5 DAYS A WEEK ACCORDING TO THE TARIFF PLANS AND PAID OUT EVERY SUNDAY AUTOMATICALLY TO YOUR WALLET.',
          time: '900'
        },
        {
          question: 'CAN I LOSE MONEY HERE?',
          answer: 'ALL ACTIONS OF THE COMPANY ARE STATISTICALLY VERIFIED BY USING ADVANCE TECHNIQUES USING AI, DEEP LEARNING AND ROBOTICS SO THEY VERY RARELY GIVE “NEGATIVE" TRADE SIGNALS.',
          time: '1000'
        },
        {
          question: 'CAN I EDIT MY INFORMATION AFTER I REGISTER?',
          answer: 'YOU ARE NOT ALLOWED TO EDIT YOUR USERNAME, EMAIL. YOUR BTC WALLET ADDRESS CAN BE CHANGED AFTER CONFIRMING THE OTP SENT ON YOUR REGISTERED MAIL ID. OTHER INFORMATION SUCH AS NAME, COUNTRY, MOBILE NUMBER, TELEGRAM ID ETC IS ONLY OPTIONAL CAN BE CHANGED.',
          time: '1100'
        },
        {
          question: 'HOW DOES TECHNICAL SUPPORT WORK?',
          answer: 'WHILE MOST OF THE QUERIES ARE ANSWERED IN THE FAQ SECTION, THE TECHNICAL CONSULTANTS OF Odeffe.com WILL RETURN AN ANSWER TO ALL YOUR QUESTIONS WITHIN A MAXIMUM OF 24 HOURS.',
          time: '1200'
        },
        {
          question: 'IS MY DEPOSIT GUARANTEED?',
          answer: 'ONE OF THE UNIQUE FEATURES OF Odeffe.com IS THAT ALL THE DEPOSITS MADE TO US ARE 100% INSURED WITH OUR OWN INTERNAL INSURANCE FUND WHICH SIMPLY MEANS THAT ALL THE INVESTORS DEPOSITS ARE ALWAYS SAFE AND ASSURED OF THE 180% PAYOUT IRRESPECTIVE OF MARKET SCENARIOS.',
          time: '1300'
        },
        {
          question: 'HOW MUCH I EARN HERE?',
          answer: 'UNLIMITED, ALL ACTIVE INVESTORS ON Odeffe.com CAN INCREASE THEIR PROFITS AND REFERRAL INCOME OVER AND ABOVE THE GUARANTEED 180%, DEPENDING ON THE PARTICIPATION OF THEIR REFERRALS IN THE PROJECT WITH A NEVER SEEN BEFORE 7-3-1 TREE NODE PARTNER MODULE. \n SIMPLE STEPS TO EARN GUARANTEED PROFITS OF 180% AND EVEN MORE.',
          time: '1400'
        },
        {
          question: 'IS THERE ANY COMMISSION ON WEEKLY WITHDRAWALS?',
          answer: 'NO, THERE ARE NO COMMISSIONS ON ANY WITHDRAWALS.',
          time: '1500'
        },
        {
          question: 'WHAT DIGITAL CURRENCY IS REQUIRED TO INVEST?',
          answer: 'OUR INVESTORS ARE REQUIRED TO INVEST ONLY IN BITCOIN AND THEY WILL BE PAID BACK IN BITCOIN ONLY.',
          time: '1600'
        },
        {
          question: 'HOW INTEREST IS CALCULATED?',
          answer: 'INTEREST IS CALCULATED BASED ON THE AMOUNT INVESTED RANGING FROM 5% - 15% PER WEEK \nA. $ 100- $ 999 EARNS THEM WEEKLY RETURN OF 5%\nB. $ 1,000- $ 9,999 EARNS THEM WEEKLY RETURN OF 10% \nC. $ 10,000 AND ABOVE EARNS THEM WEEKLY RETURN OF 15% \nMAX RETURN IS 180%, NO RETURN OF DEPOSIT',
          time: '1700'
        },
        {
          question: 'HOW TO WITHDRAW MY WEEKLY INTEREST?',
          answer: 'WE HAVE MADE IT HASSLE FREE ALL YOUR ACCRUED INTEREST WILL BE AUTO-CREDITED TO YOUR WALLET ON SUNDAYS UNTIL THE CHOSEN PROGRAM IS ACTIVE.',
          time: '1800'
        },
        {
          question: 'WHAT IS THE MINIMAL WITHDRAWAL?',
          answer: 'THERE IS NO MINIMAL OR MAXIMUM WITHDRAWAL. ALL ACCRUED INTEREST WILL BE PAID WEEKLY ON SUNDAY.',
          time: '1900'
        },
        {
          question: 'CAN I CANCEL MY INVESTMENT?',
          answer: 'YES, INVESTORS ARE ALLOWED TO CANCEL THEIR INVESTMENTS WITHIN 2 WEEKS OF THE DEPOSIT, THE DEPOSIT WILL BE RETURNED AFTER DEDUCTING ANY ACCRUED INTEREST ALREADY PAID WITHIN THIS PERIOD. YOU CAN SEND A EMAIL TO SUPPORT TO CANCEL THE PROGRAM ALONG WITH THE REASON, THE PENDING AMOUNT WILL BE CREDITED TO YOUR WALLET ON SUNDAY.',
          time: '2000'
        },
        {
          question: 'IS THERE AN AFFILIATION PROGRAM?',
          answer: 'YES, WE BELIEVE IN SHARING THE JOY WITH PEOPLE, YOU CAN REFER Odeffe.com AMONG PEOPLE BY SHARING YOUR UNIQUE LINK TO START EARNING ADDITIONAL REVENUE WITH OUR INNOVATIVE 7-3-1 TREE NODE PARTNER MODULE.',
          time: '2100'
        },
        {
          question: 'CAN ANYONE PARTICIPATE IN THE REFERRAL PROGRAM?',
          answer: 'ONLY INVESTORS WITH AN ACTIVE DEPOSIT CAN RECEIVE REWARDS WITH OUR INNOVATIVE 7-3-1 TREE NODE PARTNER MODULE.',
          time: '2200'
        }
      ]
    }
  },
  methods: {
    contact (e) {
      e.preventDefault()
      console.log('Contacted')
    }
  }
}
</script>

<style scoped>
/* @import url('../../public/assets/vendor/bootstrap/css/bootstrap.min.css');
@import url('../../public/assets/vendor/icofont/icofont.min.css');
@import url('../../public/assets/vendor/remixicon/remixicon.css');
@import url('../../public/assets/vendor/boxicons/css/boxicons.min.css');
@import url('../../public/assets/vendor/owl.carousel/assets/owl.carousel.min.css');
@import url('../../public/assets/vendor/venobox/venobox.css');
@import url('../../public/assets/vendor/aos/aos.css');
@import url('../../public/assets/css/style.css'); */
</style>