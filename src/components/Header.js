import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className= {black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://aluraflix-jade.vercel.app/static/media/Logo.5e7b3578.png" alt="Logo AluraFlix" />
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Usuário" />
                </a>
            </div>
        </header>
    );
}