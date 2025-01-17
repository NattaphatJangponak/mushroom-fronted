import React from 'react';
const Navbar = () => {
    const today = new Date();
    const date = today.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    return (
        <nav className="nav-bar">
            <div className="flex items-center">
                <img src="/Image/mushroom.png" alt="App Mushroom IOT" className="nav-logo" />
                <h1 className="font-bold text-xl">App Mushroom IOT</h1>
            </div>
            <ul className="flex">
                <li className="mx-2">
                    <a href="/homepage" className="nav-link">HOMEPAGE</a>
                </li>
                <li className="mx-2">
                    <a href="/systemOverview" className="nav-link">SYSTEM OVERVIEW</a>
                </li>

                <li className="mx-2">
                    <a href="/rowselection" className="nav-link">APPLICATION</a>
                </li>
            </ul>
            <div>
                <p className="font-title" >{date}</p>

            </div>
        </nav>
    );
};

export default Navbar;
