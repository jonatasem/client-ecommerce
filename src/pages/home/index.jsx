import imgFried from '../../assets/img/home/fried.webp';
import imgSparagus from '../../assets/img/home/sparagus.webp';
import imgCooks from '../../assets/img/home/cooks.jpg';
import { FaMapMarkerAlt, FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";

import './index.scss';

export default function Home() {
    return (
        <section className="home-container">
            <article className='home-head'>
                <h1>Welcome to My Gastronomy.</h1>
                <p>
                    Hello and welcome to our special culinary corner, 
                    where Italian tradition dances with modern creativity 
                    to give you a unique culinary experience. 
                    With us, every dish is a taste hug, 
                    conceived with love and dedication to make 
                    each of your days unforgettable.
                </p>
            </article>

            <article className='home-main'>
                <div>
                    <img src={imgSparagus} alt="‘Asparagus" />
                    <h4>Excellence in Everyday Life</h4>
                    <p>
                        I Tried the Viral ‘Asparagus Carbonara’ Recipe, and It’s Worth Every Step
                    </p>
                </div>
                <div className="layout-home">
                    <div>
                        <img src={imgCooks} alt="Cookies" />
                        <h4>Rhubarb Cookies</h4>
                        <p>We have two prolific rhubarb plants, so I’m always looking for new ways to use the harvest. The recipe for these soft, delicious cookies, flavored with coconut, was given to me by a friend.</p>
                    </div>
                    <div>
                        <img src={imgFried} alt="Fried" />
                        <h4>Fried Apple Pies</h4>
                        <p>Golden brown outside and sweet and fruity inside, these fried apple pies are perfect hand-held treats. Take them to picnics or potlucks, or fry 'em up any time you need a quick and portable piece of pie.</p>
                    </div>
                </div>
            </article>

            <article className='home-footer'>
                <h1>Stay Updated!</h1>
                <p>
                    Enter the world of My Gastronomy by following us on social media. 
                    You'll always be updated on our culinary creations, special events, 
                    and gourmet surprises. Don't miss out on a single bite!
                </p>
                <div>
                    <button><FaInstagram /> Instagram</button>
                    <button><FaFacebookSquare /> Facebook</button>
                    <button><FaWhatsapp /> Whatsapp</button>
                    <button><FaMapMarkerAlt /> Location</button>
                </div>
            </article>
        </section>
    );
}
