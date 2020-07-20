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
            <!-- <li><router-link to="/login">Login / Signup</router-link></li> -->
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
          <h2 data-aos="fade-up" data-aos-delay="400">Machine & Mind work together to create smart algorithms of profit.</h2>
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
    <!-- <section id="clients" class="clients clients">
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
    </section>End Clients Section -->

    <!-- ======= About Us Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>About Us</h2>
        </div>

        <div class="row content">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="150">
            <!-- <p>
              Start getting a SMART guaranteed income which no one has ever committed
            </p>
            <ul>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>S – Systematic Planning</li>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>M – Machines with Intelligence </li>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>A – Advanced Algorithms </li>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>R – Robust Risk-free Trading</li>
              <li style="text-align: left;"><i class="ri-check-double-line"></i>T – Transactions at Ease</li>
            </ul> -->
            <img src="assets/img/hero-img.png" class="img-fluid animated" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div>
              <p>
                Odeffe is founded by a team of young, enthusiastic and intellectual graduates from the field of Computer Engineering, Data Science and Finance. Having developed a unique program with Artificial Intelligence and Advance Robotic Trading for making profits in Digital Currencies, Financial and Forex markets. Our specialists are well qualified in their field with various years of expertise in research and study.
              </p>
            </div>
            <div v-if="showAbout">
              <p>
                Odeffe team has managed to garner the support of big Investors to build our own state of art proprietary AI trading system (O-AIT). Our tools & techniques has managed to successfully predict the behavior of different markets with an accuracy of 95.9%. Using our O-AIT system, enables Odeffe to take the entire risk on itself.
              </p>
              <p>
                Odeffe is willing to share its O-AIT system to enable guaranteed profits even for regular investors who are looking for secured returns thus always keeping them ahead of the curve!
              </p>
              <p>
                All servers of Odeffe are protected with the most up-to-date encryption, advanced & secured data storage tools. All funds are securely stored in different cold wallets. Odeffe is registered and operates from Tokyo, Japan with expansion plans in Dubai, France, Canada, New Zealand over the period of 12-24 months.
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
                    <p>
                      <strong>
                        O-AIT is a combination of Mathematical and Statistical 
                      </strong>
                      models, Quantum Mechanics, Demand and Supply Economics, Technical Analysis to successfully execute profit making trades.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-document-folder"></i>
                    <span>PAYMENT SYSTEM</span>
                    <p>
                      <strong>
                        Bitcoin is digital and decentralized,  
                      </strong> 
                      it is the safest and most popular in crypto currency hence Odeffe deals only with Bitcoin for all deposits and payouts.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-award"></i>
                    <span>GUARANTEED INCOME</span>
                    <p>
                      <strong>
                        Odeffe guarantees to each investor 
                      </strong>
                      the income of 180% in form of interests as per the individual chosen tariff plans which will be paid in any case irrespective of the market outcomes. Odeffe.com is fully responsible for your money in accordance with our core values.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="icofont-award"></i>
                    <span>AUTO CREDIT OF INTEREST</span>
                    <p>
                      <strong>
                        All payouts are done every Sunday 
                      </strong>
                      until the expiry of the investment plan by using the most advanced payment processing techniques.
                    </p>
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
          <h4>The interest automatically stops generating at the end of the below weekly programs after accruing 180% of the initial deposit.</h4>
         </div>

        <div class="row">

          <div class="col-lg-4 col-md-6">
            <div class="box" data-aos="zoom-in-right" data-aos-delay="200">
              <h3>Basic</h3>
              <p><strong>5% Weekly for 36 Weeks</strong></p>
              <h4><sup>$</sup>100 - <sup>$</sup>999</h4>
              <ul>
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
            <div class="box" data-aos="zoom-in" data-aos-delay="100">
              <h3>Advance</h3>
              <p><strong>5% Weekly for 33 Weeks</strong></p>
              <h4><sup>$</sup>1,000 - <sup>$</sup>9,000</h4>
              <ul>
                <li>10% Deposit Bonus</li>
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
              <h3>Feature</h3>
              <p><strong>5% Weekly for 30 Weeks</strong></p>
              <h4><sup>$</sup>10,000 - <sup>$</sup>99,000</h4>
              <ul>
                <li>20% Deposit Bonus</li>
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
          <h4>Odeffe gives the possibility of active referral earnings for every direct and indirect referral which is over and above the guaranteed returns of 180%.</h4>
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

    <!-- ======= F.A.Q Section ======= -->
    <section id="faqs" class="faq">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div 
          v-for="faq in startfaqs"
          :key="faq.question"
          class="row faq-item d-flex align-items-stretch"
          data-aos="fade-up"
          :data-aos-delay="faq.time"
          >
          <div class="col-lg-5">
            <i class="ri-question-line"></i>
            <h4>{{ faq.question }}</h4>
          </div>
          <div class="col-lg-7" v-if="faq.time === 400">
            <p><strong>ADVANCED PLAN: </strong>INVESTMENT OF $1,000 GENERATES INTEREST ON $1,100 (10% DEPOSIT BONUS)</p>
            <p><strong>FEATURE PLAN: </strong>INVESTMENT OF $10,000 GENERATES INTEREST ON $12,000 (20% DEPOSIT BONUS)</p>
          </div>
          <div class="col-lg-7" v-else>
            {{ faq.answer }}
          </div>
        </div><!-- End F.A.Q Item-->
        <div v-if="showFAQ">
          <div 
            v-for="faq in morefaqs"
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
        </div>
        <div class="about">
          <button v-if="!showFAQ" @click="showFAQ = !showFAQ" class="faq-ml-btn">More FAQ's</button>
          <button v-else @click="showFAQ = !showFAQ" class="faq-ml-btn">Less FAQ's</button>
        </div>
        <p>If you do not find the appropriate answer to your any of your question above, please use the feedback form and our technical support will help you alternatively you can also write to us on Support@Odeffe. All your queries will be answered within 48 hours.</p>
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

              <!-- <div>
                <i class="ri-phone-line"></i>
                <p></p>
              </div> -->

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
            <a href="#client">Terms of Use</a>
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
      showFAQ: false,
      showAbout: false,
      faqs: [
        {
          question: 'HOW TO BUY BITCOIN?',
          answer: 'YOU CAN BITCOIN (BTC) FROM WWW.BITCOIN.ORG OR WWW.BINANCE.COM',
          time: 100
        },
        {
          question: 'HOW TO DEPOSIT THE AMOUNT?',
          answer: 'AFTER REGISTRATION, CLICK ON DEPOSITS TO TRANSFER THE REQUIRED BTC AS PER YOUR CHOSEN PROGRAM.',
          time: 200
        },
        {
          question: 'IS THERE ANY LIMIT ON THE NUMBER OF DEPOSITS?',
          answer: 'YOU CAN HAVE ANY UNLIMITED NUMBER OF DEPOSITS.',
          time: 300
        },
        {
          question: 'WHAT IS DEPOSIT BONUS?',
          time: 400
        },
        {
          question: 'HOW SOON THE INTEREST STARTS AFTER I DEPOSIT?',
          answer: 'YOUR INTEREST WILL START TO ACCURE ON THE SAME DAY OF THE DEPOSIT',
          time: 500
        },
        {
          question: 'HOW DOES THE INTEREST ACCRUALS GETS CALCULATED?',
          answer: 'ACCRUALS ARE CALCULATED 5 DAYS A WEEK ACCORDING TO YOUR PLAN AND PAID OUT EVERY SUNDAY AUTOMATICALLY TO YOUR WALLET.',
          time: 100
        },
        {
          question: 'CAN I LOSE MONEY HERE?',
          answer: 'ALL ACTIONS OF ODEFFE ARE STATISTICALLY VERIFIED BY USING OUR STATE OF ART PROPRIETARY AI TRADING SYSTEM (O-AIT) WHICH VERY RARELY GIVE “NEGATIVE" TRADE SIGNALS.',
          time: 200
        },
        {
          question: 'CAN I EDIT MY INFORMATION AFTER I REGISTER?',
          answer: 'YOU ARE NOT ALLOWED TO EDIT YOUR USERNAME, EMAIL. YOUR BTC WALLET ADDRESS CAN BE CHANGED AFTER CONFIRMING THE OTP SENT ON YOUR REGISTERED MAIL ID.',
          time: 300
        },
        {
          question: 'IS MY DEPOSIT GUARANTEED?',
          answer: 'ONE OF THE UNIQUE FEATURES OF ODEFFE IS THAT ALL THE DEPOSITS MADE TO US ARE 100% INSURED WITH OUR OWN INTERNAL INSURANCE FUND.',
          time: 400
        },
        {
          question: 'IS THERE ANY COMMISSION ON WITHDRAWALS?',
          answer: 'NO, THERE ARE NO COMMISSIONS ON WITHDRAWALS.',
          time: 500
        },
        {
          question: 'WHAT DIGITAL CURRENCY IS REQUIRED TO INVEST?',
          answer: 'OUR INVESTORS ARE REQUIRED TO INVEST ONLY IN BITCOIN AND THEY WILL BE PAID BACK IN BITCOIN.',
          time: 600
        },
        {
          question: 'HOW TO WITHDRAW MY WEEKLY INTEREST?',
          answer: 'ALL YOUR ACCRUED INTEREST WILL BE AUTO-CREDITED TO YOUR WALLET ON SUNDAYS UNTIL THE CHOSEN PLAN IS ACTIVE.',
          time: 700
        },
        {
          question: 'WHAT IS THE MINIMAL WITHDRAWAL LIMIT?',
          answer: 'THERE IS NO WITHDRAWAL LIMIT.',
          time: 800
        },
        {
          question: 'IS THERE AN AFFILIATION PROGRAM?',
          answer: 'YOU CAN REFER ODEFFE AMONG PEOPLE BY SHARING YOUR UNIQUE LINK TO START EARNING ADDITIONAL REVENUE WITH OUR 7-3-1 DIRECT & INDIRECT REFERRAL PROGRAM.',
          time: 900
        },
        {
          question: 'CAN ANYONE PARTICIPATE IN THE REFERRAL PROGRAM?',
          answer: 'ONLY INVESTORS WITH AN ACTIVE DEPOSIT CAN RECEIVE REWARDS WITH OUR 7-3-1 DIRECT & INDIRECT REFERRAL PROGRAM.',
          time: 1000
        }
        
      ],
      startfaqs: [],
      morefaqs: []
    }
  },
  methods: {
    contact (e) {
      e.preventDefault()
      console.log('Contacted')
    }
  },
  created () {
    const startfaqs = []
    const morefaqs = []
    this.faqs.map(
      (faq, index) => {
        if (index < 5) {
          startfaqs.push(faq)
        } else {
          morefaqs.push(faq)
        }
      }
    )
    this.startfaqs = startfaqs
    this.morefaqs = morefaqs
    console.log(process.env.BASE_ADDRESS)
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
.faq-ml-btn {
  font-family: "Raleway", sans-serif;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 32px;
  border-radius: 50px;
  transition: 0.3s;
  line-height: 1;
  color: #3498db;
  -webkit-animation-delay: 0.8s;
  animation-delay: 0.8s;
  margin-top: 6px;
  border: 2px solid #3498db;
  margin-bottom: 6px;
}
.faq-ml-btn:hover {
  background: #3498db;
  color: #fff;
  text-decoration: none;
}
</style>