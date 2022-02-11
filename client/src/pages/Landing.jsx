import { Logo } from '../components'
import { Link } from 'react-router-dom'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'


const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo/>
        </nav>
        <div className="container page">
            <div className="info">
                <h1>job <span>tracking</span> app</h1>
                <p>I'm baby succulents godard pitchfork beard, chia mustache hexagon. Dreamcatcher crucifix slow-carb banjo freegan lyft. Pitchfork beard wolf truffaut readymade portland roof party 8-bit hoodie affogato ramps unicorn brunch. Gochujang cliche chartreuse bicycle rights 90's.</p>
                <Link to='/register' className="btn btn-hero">Login/Register</Link>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </Wrapper>
  )
}


export default Landing