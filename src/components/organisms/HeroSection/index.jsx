import { useMediaQuery } from 'react-responsive'

import HeroImg from 'assets/img/hero.png';
import MobHeroImg from 'assets/img/mobHero.png';

function Index() {
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  return (
    <div className="hero position-relative w-100">
      {
        isMobile ? <img src={MobHeroImg} alt="herobanner" className="position-absolute" />
        : <img src={HeroImg} alt="herobanner" className="position-absolute" />
      }
      <div className="hero__text text-center px-4 text-light d-flex align-items-center justify-content-center flex-column h-100 w-100">
        <h1>Hello Developer!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
  )
}

export default Index;