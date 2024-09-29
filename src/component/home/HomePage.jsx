import React, { useState } from "react";

const HomePage = () => {
    const [roomSearchResults, setRoomSearchResults] = useState([]); // Corrected useState syntax

    const handleSearchResult = (results) => {
        setRoomSearchResults(results);
    };

    return (
        <div>
            {/* {HEADER banner room section} */}
            <section>
                <header className="header-banner">
                    <img src="" alt="" className="" />
                    <div className="overlay"></div>
                    <div className="animated-texts overlay-content">
                        <h1>
                            Welcome to <span className="sky-color">Skytech Hotel</span>
                        </h1>
                        <h3>
                            Step into a sanctuary of warmth and care, where every detail is
                            crafted for your comfort and well-being. Here, you can truly
                            unwind and rejuvenate in an atmosphere that embraces you with
                            kindness and tranquility, making you feel completely at home.
                        </h3>
                    </div>
                </header>
            </section>

            {/* {search available room section} */}
            {/* You may want to include RoomSearch here */}

            <h4>
                <a className="view-rooms-home" href="/rooms">
                    All Rooms
                </a>
            </h4>
            <h2 className="home-services">
                Services at <span className="sky-color">Skytech Hotel</span>
            </h2>

            {/* {Services section} */}
            <section className="service-section">
                <div className="service-card">
                    <img src="./assets/images/air-conditioning.jpg" alt="Air Conditioning" />
                    <div className="service-details">
                        <h3 className="service-title">Air Conditioning</h3>
                        <p>Stay cool and comfortable with our indoor cooling system.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/mini-bar.jpg" alt="Mini Bar" />
                    <div className="service-details">
                        <h3 className="service-title">Mini Bar</h3>
                        <p>Enjoy a convenient selection of beverages and snacks.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/parking.jpg" alt="Parking" />
                    <div className="service-details">
                        <h3 className="service-title">Parking</h3>
                        <p>We offer onsite parking for your convenience.</p>
                    </div>
                </div>
                <div className="service-card">
                    <img src="./assets/images/wifi.jpg" alt="WiFi" />
                    <div className="service-details">
                        <h3 className="service-title">WiFi</h3>
                        <p>Stay connected with our free WiFi and internet services throughout your stay.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
