import React from 'react'
import './home.style.scss';

const Home = (): JSX.Element => {
    return (
        <div className={'home-wrapper'}>
            <div className={'home-wrapper__info'}>
                <h1>Hi, I'm Tobias</h1>
                <p>
                    I’m a front-end developer specilizing in React and Angular.
                    Check out my work and skills below and feel free to get in touch if you want to work with me
                </p>
                <button>GET IN TOUCH</button>
            </div>
            <div className={'home-wrapper__image'}>
            </div>
            <div className={'home-wrapper__project'}>pro</div>
            <div className={'home-wrapper__skills'}>
                <h4>Skills</h4>
                
            </div>
        </div>
    )
}

export default Home;