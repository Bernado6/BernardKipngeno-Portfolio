import { Link } from 'react-router-dom';
import LogoTitle  from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import { useState , useEffect} from 'react';
import './index.scss'

const Home = () => {
    const [LetterClass, setLetterClass] = useState('text-animate');
    const nameArray = [ 'l','o','b','o','d','a','n']
    const jobArray = [ 'w','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={LetterClass}>H</span>
                    <span className={`{LetterClass} _12`}>i</span>
                    <br />
                    <span className={`{LetterClass} _13`}>I</span>
                    <span className={`{LetterClass} _14`}>'m</span>

                <img src= {LogoTitle} alt = "Web Developer" />

                <AnimatedLetters LetterClass={LetterClass} strArray = {nameArray} idx = {15}/>
                <br />

                <AnimatedLetters LetterClass={LetterClass} strArray = {jobArray} idx = {22}/>
                </h1>

                <h2><b>Data Scientist / Cloud Developer / Full stack Developer / AWS Cloud Solutions Architect / Economist and Statistician</b></h2>
                <Link to = "/contact" className='flat-button'> CONTACT BERNARD</Link>

            </div>

        </div>
    );
}

export default Home;