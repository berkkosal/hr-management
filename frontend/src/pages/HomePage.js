import React from 'react'
import { homepageContent } from '../utils/Content';

const {
    Mountains,
    Soybeans,
    Trees,
    Clouds
} = homepageContent


export default function HomePage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <div className="card" style={{ width: "15rem" }}>
                        <img className="card-img-top" src={Mountains} alt="" />
                        <div className="card-body">
                            <p className="card-text">Hoşgeldiniz</p>
                            <button>Giriş yap</button>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card" style={{ width: "16rem" }}>
                        <img className="card-img-top" src={Soybeans} alt="" />
                        <div className="card-body">
                            <p className="card-text">Hoşgeldiniz</p>
                            <button>Giriş yap</button>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card" style={{ width: "18rem" }}>
                        <img className="card-img-top" src={Trees} alt="" />
                        <div className="card-body">
                            <p className="card-text">Hoşgeldiniz</p>
                            <button>Giriş yap</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
