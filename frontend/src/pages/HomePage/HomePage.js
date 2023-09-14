import React from 'react'
import { homepageContent } from '../../utils/Content';

const {
    Mountains,
    Soybeans,
    Trees,

} = homepageContent


export default function HomePage() {
    return (
        <div className="container">
            <div className="row justify-content-center align-items-center vh-100">
                <div className="col-4 rounded bg-primary p-2 text-center">
                    
                    <h2>My Rounded Square</h2>
                </div>

            </div>
        </div>
    )
}
