import titleFish from './assets/yellowFish.png';
import titleFishGroup from './assets/fishGroup.png';
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
    //loading="lazy"
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
          <p>Hi, I’m <span className="personalKeywords">Lynx Button</span>! I’m a Junior Games Developer and Computer Science Graduate looking to apply for your open role of <span className="yellowFishKeywords">Junior Frontend Developer</span>. I am eagerly seeking opportunities to learn and grow as a developer 
          and I strongly believe <span className="yellowFishKeywords">Yellow Fish</span> will be the perfect place for me. 
          With this website I plan to show you who I am and why I think I will be a great fit for this role.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
