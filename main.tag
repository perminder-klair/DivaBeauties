<main>
  <div id="header">
    <div class="top">
        <div id="logo">
          <span class="image avatar48"><img src="images/me.jpg" alt="" /></span>
          <h1 id="title">Suman Rani</h1>
          <p>Beautician</p>
        </div>
        <nav id="nav">
          <ul>
            <li><a href="#top" id="top-link" class="skel-layers-ignoreHref"><span class="icon fa-home">Intro</span></a></li>
            <li><a href="#portfolio" id="portfolio-link" class="skel-layers-ignoreHref"><span class="icon fa-th">Portfolio</span></a></li>
            <li><a href="#about" id="about-link" class="skel-layers-ignoreHref"><span class="icon fa-user">About Me</span></a></li>
            <li><a href="#contact" id="contact-link" class="skel-layers-ignoreHref"><span class="icon fa-envelope">Contact</span></a></li>
          </ul>
        </nav>
    </div>
    <div class="bottom">
        <ul class="icons">
          <li><a href={content.twitter} class="icon fa-twitter"><span class="label">Twitter</span></a></li>
          <li><a href={content.facebook} class="icon fa-facebook"><span class="label">Facebook</span></a></li>
          <li><a href={content.mobile} class="icon fa-mobile"><span class="label">Mobile</span></a></li>
          <li><a href={content.email} class="icon fa-envelope"><span class="label">Email</span></a></li>
        </ul>
    </div>
  </div>
  <div id="main">
    <section id="top" class="one dark cover">
      <div class="container">
        <header>
          <h2 class="alt">Hi! I'm <strong>Suman</strong>, welcome to <a href="#">divabeautes</a></h2>
          <p>{content.intro}</p>
        </header>
      </div>
    </section>

    <section id="portfolio" class="two">
      <div class="container">
        <header>
          <h2>Portfolio</h2>
        </header>
        <raw content="{content.portfolioInfo}"/>
        <div class="row">
          <div class="4u 12u$(mobile)" each={ item in portfolio }>
            <article class="item">
              <a href="#" class="image fit">
                <img src={item.data.image.url} alt="" />
              </a>
              <header>
                <h3>{item.data.title}</h3>
              </header>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="three">
      <div class="container">
        <header>
          <h2>About Me</h2>
        </header>
        <raw content="{content.aboutMe}"/>
      </div>
    </section>

    <section id="contact" class="four">
      <div class="container">
        <header>
          <h2>Contact</h2>
        </header>
        <raw content="{content.contactInfo}"/>
      </div>
    </section>
  </div>
  <div id="footer">
      <ul class="copyright">
        <li>&copy; DivaBeauties. All rights reserved.</li>
      </ul>
  </div>

  <!-- this script tag is optional -->
  <script>
    var stackable = new Stackable('BMAGPYdZjGxT');

    this.treatments = [];
    this.portfolio = [];
    this.content = {};

    stackable.getContainerItems('SswTbWoJFTiSLsKnh', (error, result) => {
        //console.log(error, result);
        this.treatments = result.data;
        this.update();
    });

    stackable.getContainerItems('9adTcEQXZCHRMrcWN', (error, result) => {
        //console.log(error, result);
        this.portfolio = result.data;
        this.update();
    });

    stackable.getContainerItems('gkrsWbwRu5k2WnwiH', (error, result) => {
        //console.log(error, result.data[0].data);
        this.content = result.data[0].data;
        this.update();
    });
  </script>
</main>
