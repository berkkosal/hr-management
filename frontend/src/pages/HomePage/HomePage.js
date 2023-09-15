import React from 'react';
import { homepageContent } from '../../utils/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./HomePage.css";
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const {
    SpiderMan,
    titleBrand,
    title,
    subtitle
} = homepageContent;



const HomePage = () => {
    return (
        <div className='container' >
            <div className='flexWrapper'>
                <div className='d-flex'>
                    <div className='col'>
                        <div className='iconWrapper'><FontAwesomeIcon icon={faAddressBook} /></div>
                        <div className="badge bg-secondary">{title}</div>
                        <div><h1>{titleBrand}</h1></div>
                        <div><p className='pWrapper'>{subtitle}</p></div>
                        <div className='d-flex justify-content-center p-3'>
                            <div><Link to="/login" className='btn btn-info'>Login</Link></div>
                            <div><Link to="/sign-up" className='btn btn-info'>Signup</Link></div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='imgWrapper'>
                            <img alt='' className='card-img rounded-5' src={SpiderMan} />
                        </div>
                    </div>

                </div>
            </div>


        </div>

    );
}

export default HomePage;
