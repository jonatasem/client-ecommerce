
import './index.scss';

import imgHomeLeft from '../../assets/img/home/home-fundo.png'
import imgHomeRight from '../../assets/img/home/milk.png'

export default function Home() {
    return (
        <section className="home-container">
            <article className="home-head">
                <h1>Desfrute de comida saudável e deliciosa</h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dicta dolor totam fuga reiciendis? Maxime animi accusantium, minus temporibus nulla quisquam itaque nostrum vitae laborum ipsam quae a ipsa qui.
                    </p>
                    <img className='img-home-right' src={imgHomeLeft} alt="" />
                </div>
                <p className='text-home'>Lorem ipsum dolor sit amet consectetur adipisicing elit At omnis dolorem earum iure voluptatibus veniam impedit, est quas nisi.</p>
            </article>
            <article className="home-right">
                <img src={imgHomeRight} alt="" />
                <p>
                    Milkshakes podem ser feitos com vários sabores, como chocolate, morango ou baunilha, e geralmente incluem ingredientes como frutas, nozes ou biscoitos. 
                </p>
            </article>
        </section>
    );
}
