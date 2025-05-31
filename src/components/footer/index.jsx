import { Link } from 'react-router-dom';
import './index.scss';

export default function Footer() {
    return (
        <footer className='footer-container'>
            <div className='footer-left'>
                <h2>Important Links</h2>
                <ul>
                   <li>
                     <Link to={'/'}>Homepage</Link>
                   </li>
                   <li>
                     <Link to={'/plates'}>Plates</Link>
                   </li>
                   <li>
                     <Link to={'/profile'}>Profile</Link>
                   </li>
                </ul>
            </div>
            <div className='footer-right'>
                <p>Jonatas Elieser Moreira</p>
                <a href="" target='_blank'>See my projects!</a>
            </div>
        </footer>
    )
}