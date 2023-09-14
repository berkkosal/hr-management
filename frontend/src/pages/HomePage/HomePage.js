import React from 'react';
import { homepageContent } from '../../utils/Content';
import "./HomePage.css";

const {
    Mountains,
    Soybeans,
    Trees,
    Clouds,
    title,
    subtitle
} = homepageContent;

export default function HomePage() {
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10 col-12 shadow p-3 mb-5 bg-white rounded">
                    <div className="d-flex justify-content-center align-items-center">
                    <h1>{title}</h1>
                            <h4>{subtitle}</h4>
                        <div className="ml-4">
                            
                            <img src={Mountains} className="img-fluid" alt="Mountains" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
