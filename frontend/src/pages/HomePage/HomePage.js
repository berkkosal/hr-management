import React from 'react';
import { homepageContent } from '../../utils/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./HomePage.css";
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const {
    Mountains,
    Soybeans,
    Trees,
    Clouds,
    Road,
    title,
    subtitle
} = homepageContent;

export default function HomePage() {
    return (

        <div className='container' >
            <div className='flexWrapper'>
                <div className='d-flex'>
                    <div className='col'>
                        <div className='iconWrapper'><FontAwesomeIcon icon={faAddressBook} /></div>
                        <div className="badge bg-secondary">BiGarson</div>
                        <div><h1>Welcome</h1></div>
                        <div><p className='pWrapper'>Fugiat est ex aliquip nulla ipsum non do ad officia amet et fugiat laborum dolore. Et aliquip minim aliqua consectetur officia. Exercitation ex reprehenderit sit sit cupidatat.</p></div>
                        <div className='d-flex justify-content-center p-3'>
                            <div><button className='btn btn-primary'>Login</button></div>
                            <div><button className='btn btn-primary'>Signup</button></div>
                        </div>
                        <div className='iconWrapper'><FontAwesomeIcon icon={faAddressBook} /></div>
                    </div>

                    <div className='col'>
                        <div className='imgWrapper'>
                            <img className='card-img rounded-5' src='https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1978&q=80' />
                        </div>
                    </div>

                </div>
            </div>


        </div>




    );
}
