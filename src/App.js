import titleFish from './assets/yellowFish.png';
import titleFishGroup from './assets/fishGroup.png';
import gradSeaLion from "./assets/gradSeaLion.png"
import brightonUni from "./assets/uobLogo.jpg"
import network from "./assets/1x2Logo.jpg"
import brightonZoo from "./assets/brightonZooLogo.jpg"
import yellowFishSeaLion from "./assets/yellowFishSeaLion.png"
import endSeaLion from "./assets/endSeaLion.png"
import peekingSeaLion from "./assets/popupSeaLion.png"
import linkedIn from "./assets/linkedIn.png"
import email from "./assets/email.png"


import bubbles from './assets/bubbles.png'
import './App.sass';
import { useEffect, useRef } from 'react';

function ArchText(className, text, angle, radius){
  const canvas = document.querySelector(`.${className}`);
  const context = canvas.getContext('2d');

  const gradient = context.createLinearGradient(0, 0, 0, -50);
  gradient.addColorStop(0, "#d69508ff");
  gradient.addColorStop(1, "#f3da86ff");

  context.font = "56px Modak, serif";
  context.textAlign = "center";
  context.fillStyle = gradient;

  context.translate(canvas.width / 2, canvas.width / 2);
  context.rotate((-1 * (Math.PI * angle)) / 2);

  for (const element of text) {

    context.rotate((Math.PI * angle) / text.length);
    context.save();
    context.translate(0, -1 * radius);
    context.fillText(element, 0, 0);
    context.strokeStyle = "black";
    context.lineWidth = 2;
    context.strokeText(element, 0, 0);
    context.restore();
  }
}

function App() {

  const fishRef = useRef(null);
  const fishButtonRef = useRef(null);
  const titleIntroRef = useRef(null);

  const handleFishTitleClick = event => {
      fishRef.current.classList.add('fishTitleAnim');
      setTimeout(() => {
        fishButtonRef.current.disabled = true;
        fishRef.current?.classList.remove('fishTitleAnim');
        fishRef.current?.classList.add('fishTitleBobAnim');
        titleIntroRef.current?.classList.add('titleMoveAnim')

        setTimeout(() => {
          titleIntroRef.current?.classList.remove('titleMoveAnim')
          titleIntroRef.current?.classList.add('titleBobAnim')
        }, 2000);

      }, 3000);
    };

  useEffect(() => {
    document.fonts.ready.then((fontFaceSet) => {
      ArchText('yellowFishTitle', "Hello, Yellow Fish!", 0.75, 310);
    })

  }, []);

  return (
    <div className="App">
      <div className="titleSection">
        <div className="text">
          <canvas className='yellowFishTitle' width="700"
            height="400" alt="Hello Yellow Fish!"></canvas>
            <button ref={fishButtonRef} onClick={handleFishTitleClick}>Click me!</button>
        </div>
        <img src={titleFish} className='titleFish' alt="Fish with Yellow Fish's logo ontop." ref={fishRef}/>
        <div ref={titleIntroRef} className="briefIntro">
          <img src={titleFishGroup} alt=""></img>
          <p>
            Hi, I’m <b>Lynx Button</b>!
            I am eagerly seeking opportunities to learn and grow as a developer and I strongly believe I will be a great fit for Yellow Fish’s <b>Junior Frontend Developer role</b>.  
            With this website I plan to show you who I am and why I think I will be a great team player within Yellow Fish’s frontend development team.
          </p>
        </div>
        <img className="bubbles" src={bubbles} alt=''></img>
      </div>
      <h1>Let Me Introduce Myself:</h1>
      <div className="introductionBanner">
        <img src={gradSeaLion} alt="Art of a Sea Lion wearing a graduation cap"/>
      </div>
      <p className="sandIntro">
        I’m <b>Lynx Button</b>, a BSc (Hons) Computer Science for Games graduate. Over the past six years, through both my studies and industry experience, I’ve developed strong skills in web development particularly with <b>TypeScript, JavaScript, HTML, CSS and Node.js</b>, alongside libraries such as <b>Pixi.js, Phaser, and GSAP</b>.
        </p>
      <div className="introduction">
        <div className="clipboard">
          <p>
            <h3>The Professional Me:</h3>
            I am an <b>analytical, communicative, and hard-working</b> programmer with a passion for developing unforgettable experiences, I have previously found this within the gaming sector however I am looking for a place where I will be able to expand my knowledge of front-end development outside of this niche area. <br/><br/>
            My current professional goals are focused on learning as much as I can about front-end development, especially when providing <b>accessible, responsive and fun</b> web experiences. I am very <b>eager to learn</b> from senior developers to strengthen and improve my current skills and to build up new skills with their guidance. On top of this I am looking to be part of a hard-working team of interesting people where I can make friends as well as build up my skills.<br/><br/>
            I have technical skills with languages such as <b>HTML, CSS, TypeScript, JavaScript and Node.js</b>, I also have experience with version control software such as <b>Git and Bitbucket</b> as well as bug tracking software such as <b>JIRA</b>.
            <h3>The Regular Me:</h3>
            In general I am an <b>approachable, creative, bubbly</b> person who loves animals, especially pinnipeds and canines, musicals, animation and games! (Right now I am currently playing through the Resident Evil games).<br/><br/>
            I thoroughly enjoy <b>creative crafts</b> such as crochet, needle felting, embroidery, and cross stitching and spend a lot of my free time doing these different crafts. I have been crocheting specifically since I was 13 years old and have built up a lot of skills in it.
          </p>
        </div>
        <div className="paper">
          <div className="card">
            <img src = {brightonUni} alt="The Univeristy of Brighton Logo"></img>
            <p>
              <u>Sep 2021 - Jun 2024<br/>BSc (Hons) Computer Science for Games<br/>University of Brighton<br/>Grauated with First Class Honours<br/></u><br/>
              Modules covered in-depth topics such as <b>HTML, CSS & JavaScript fundamentals</b> with focus on creating <b>simple, responsive layouts and clean, readable code</b>.
            </p>
          </div>
          <div className="card">
            <img src = {network} alt="The Univeristy of Brighton Logo"></img>
            <p>
              <u>Jul 2024 - Present<br/>Junior Game Developer<br/>1X2 Network<br/></u><br/>
              <ul>
                <li>Worked within a small team to develop the Front-End side of iGaming content using <b>TypeScript, Node JS and the build tool webpack</b>.</li>
                <li>Demonstrated <b>effective verbal communication skills<b/> by presenting my workload and completion schedule at team meetings.</b></li>
                <li>Used version control software, <b>Git & Bitbucket</b>, to push, pull, commit and merge changes to the needed branch of software.</li>
                <li><b>Actively listened and implemented team feedback</b> that was received through team meetings and software such as BitBucket and JIRA</li>
              </ul>
            </p>
          </div>
          <div className="card">
            <img src = {brightonZoo} alt="The Univeristy of Brighton Logo"></img>
            <p>
              <u>Jul 2023 - Sep 2023<br/>Junior Game Developer Intern<br/>Brighton Zoo Animation Company<br/></u><br/>
              <ul>
                <li>Worked with guidance to produce interactive e-books from children’s comic content using <b>Pubcoder, Javascript & JQuery</b>.</li>
                <li>Used <b>effective verbal communication skills</b> to share ideas with clients and co-workers in team meetings.</li>
                <li><b>Understood, interpreted,</b>and storyboarded comic content into interactive experiences for children.</li>
                <li><b>Adapted swiftly to the unfamiliar software</b> Pubcoder and JQuery.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <h1>Why Yellow Fish?</h1>
      <div className="seaLayout">
        <p>
        Yellow Fish is an agency focused on using the Science of Experience to create unforgettable brand experiences. The <b>experimental and creative nature</b> of your projects are <b>incredibly fun and intriguing</b> with many different challenges being tackled. <b>My biggest desire from programming has always been to create experiences that inspire connection in it’s users which would make a role at Yellow Fish perfect for me.</b><br/><br/>
        Yellow Fish’s reward and recognition programs in particular stand out the most to me especially the project for <b>Curry’s BeAmazing portal</b>. The project in particular aims to be a central hub for key campaigns, sales training programmes and supplier incentives. It creates a personalised friendly experience between brand and colleague with it’s competitions and gamification between peers. BeAmazing interests me massively as it is a project that <b>affects Currys employees everyday</b>to not only create a simple platform for feedback on their work but an involved gamified experience that <b>encourages natural engagement and therefore motivation</b>. This web app seems like so much fun to use and very clearly <b>has made a massive difference to colleagues who use it</b>.<br/>
      </p>
      <div className="columns">
        <div>
          <img src={yellowFishSeaLion} alt="A drawing of a sea lion sticking it's tongue out happily"/>
        </div>
        <div>
          <p>
          On top of this Yellow Fish is a B-corporation who <b>cares deeply about our environment and focuses on creating a nurturing and inclusive work environment</b>. This is really important to me as a queer person with ADHD who is very concerned with the progressing state of the planet. <br/>
          It would be an honour to work with Yellow Fish to create the experiences I have always wanted to make with a team of interesting, different people and knowing that we are doing our part to keep ourselves and our planet safe from further harm.
        </p>
        </div>
      </div>
      </div>
      <h1>Why me for this role?</h1>
      <div className="whyMe">
        <div>
          <p>
            I think I would be a perfect fit for this role as I am a Junior Developer <b>early in their developmental career</b> who is extremely eager to build upon my skills since I am a <b>curious, ambitious person with a keen eye for details and a love for team working</b>. Mine and Yellow Fish’s value line up amazingly well and I feel I would fit in perfectly within the team at Yellow Fish.<br/>
            I feel I hit all of the essential skills within this job role well and feel I could learn all shown skills as desirable at a quick pace. To display my ability and <b>eagerness to learn and adapt I designed and created this website from React JS and SASS from scratch, both of which I had not used before this project.</b> I have had a lot of fun working on this project and feel that it successfully shows who I am as a person rather than just a developer.
          </p>
        </div>
        <div>
          <img src={peekingSeaLion} className="peekingSeaLion" />
        </div>
      </div>
      <h1>So, What now?</h1>
      <div className="whatNow">
        <p>
          Thank you so much for reading and experiencing my site, I hope you’ve enjoyed it as much as I’ve enjoyed making it!<br/><br/>
          In the email I sent you along with this link should be my CV for your viewing pleasure. Thank you for considering my application and I look forward to hearing from you!
          <div className="links">
            <a href="mailto:104buttons@gmail.com"><img src={email} alt="A link to my email address"/></a>
            <a href="https://www.linkedin.com/in/lynx-button/"><img src={linkedIn} alt="A link to my LinkedIn profile"/></a>
          </div>
        </p>
        <img src={endSeaLion} alt="A drawing of a sea lion pulling a silly face"/>
      </div>
      <footer>
        Created by Lynx Button - 2026<br/>
      </footer>
    </div>
  );
}

export default App;
