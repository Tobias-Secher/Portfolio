import React from "react";
import SkillList from "../../components/skill-list/skill-list.component";
import Title from "../../components/title/title.component";
import { SkillListModel } from "../../models/skill-list.model";
import "./home.style.scss";


import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/app';

import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyBN18JAFPb8lE6WpqCXBC7bTJXPjyQeqYE",
    authDomain: "portfolio-581e7.firebaseapp.com",
    databaseURL: "https://portfolio-581e7.firebaseio.com",
    projectId: "portfolio-581e7",
    storageBucket: "portfolio-581e7.appspot.com",
    messagingSenderId: "642931936655",
    appId: "1:642931936655:web:97634345b5996189534ffa",
    measurementId: "G-XDNBG8WFP7"
})

interface IntroductionI {
    name: string;
    description: string;
}
interface AboutMeI {
    title: string;
    description: string;
}
const Home = (): JSX.Element => {

    const firestore: firebase.firestore.Firestore = firebase.firestore();
    // Skill collection
    const skillsCollection = firestore.collection('skills').orderBy('index');
    const [skills] = useCollectionData<SkillListModel>(skillsCollection);
    // Introduction Collection
    const introductionCollection = firestore.collection('introduction');
    const intro = useCollectionData<IntroductionI>(introductionCollection)[0];
    /**
     *  Creates markup to insert text as HTML
     */
    const createMarkup = () => {
        return { __html: intro ? intro[0].description : '' }
    }

    // About me
    const aboutCollection = firestore.collection('aboutMe');
    const about = useCollectionData<AboutMeI>(aboutCollection)[0];




    return (
        <div className="home">
            <div className="home__intro hi">
                <div className="hi__image">
                </div>
                <h1 className="hi__name">{intro && intro[0].name}</h1>
                <p className="hi__description" dangerouslySetInnerHTML={createMarkup()}>
                </p>
            </div>
            <div className="home__about-me center">
                <Title text={about ? about[0].title : 'Who am i?'} />
                <p>
                    {about ? about[0].description : 'Fetching data'}
                </p>
            </div>
            <div className="home__skills hs">
                <div className="hs__wrapper">
                    {skills && skills.map((skill, index) => <SkillList skill={skill} key={`skill-${index}`} />)}
                </div>
            </div>
            <div className="home__contact hc center">
                <Title text={'Contact'} />
                <p style={{ textAlign: "center" }}>Feel free to contact me, by email or phone!</p>
                <label className="hc__label">Phone</label>
                <a href="tel:+4520629791" className="hc__info">+45 20 62 97 91</a>
                <label className="hc__label">Email</label>
                <a href="mailto:tobias.echer@gmail.com" className="hc__info">tobias.secher@gmail.com</a>
            </div>
        </div>
    )
}

export default Home;