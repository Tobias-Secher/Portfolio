import React from "react";
import SkillList from "../../components/skill-list/skill-list.component";
import Title from "../../components/title/title.component";
import { SkillListModel } from "../../models/skill-list.model";
import "./home.style.scss";

const Home = (): JSX.Element => {

    const skillList: SkillListModel[] = [
        {
            icon: {
                name: 'frontendIcon.svg',
                style: {
                    display: 'flex'
                }
            },
            title: 'Front-end',
            skills: ['ReactJS', 'Ract Native', 'Angular', 'Typescript', 'Node.js', 'HTML/CSS3/SCSS']
        },
        {
            icon: {
                name: 'backendIcon.svg',
                style: {
                    display: 'flex'
                }
            },
            title: 'Backend-end',
            skills: ['C#', 'Visual Basic', 'SQL']
        },
        {
            icon: {
                name: 'otherIcon.svg'
            },
            title: 'other',
            skills: ['Figma', 'Bash', 'Linux']
        },
    ]

    const generateSkills = skillList.map((skill, index) => <SkillList skill={skill} key={`skill-${index}`} />)


    return (
        <div className="home">
            <div className="home__intro hi">
                <div className="hi__image">
                </div>
                <h1 className="hi__name">Tobias Secher</h1>
                <p className="hi__description">
                    I can code your next application in
                    <br />
                    <span>Angular</span>, <span>React</span> and <span>TypeScript</span> and <span>many more</span> languages!
                </p>
            </div>
            <div className="home__about-me center">
                <Title text={'Who am I?'} />
                <p>
                    I started my jurney as a web developer in 2013, where I took my first education.
                    Since then I’ve taken an education in computer science and a bachlors degree in web development.
                    Through out the years I have been lucky to work with some very talented people.
                    I'm quietly confident,
                    naturally curious, and perpetually working on improving my skills one code challange at a time.
                </p>
            </div>
            <div className="home__skills hs">
                <div className="hs__wrapper">
                    {generateSkills}
                </div>
            </div>
            <div className="home__contact hc center">
                <Title text={'Contact'} />
                <p style={{textAlign: "center"}}>Feel free to contact me, by email or phone!</p>
                <label className="hc__label">Phone</label>
                <a href="tel:+4520629791" className="hc__info">+45 20 62 97 91</a>
                <label className="hc__label">Email</label>
                <a href="mailto:tobias.echer@gmail.com" className="hc__info">tobias.secher@gmail.com</a>
            </div>
        </div>
    )
}

export default Home;