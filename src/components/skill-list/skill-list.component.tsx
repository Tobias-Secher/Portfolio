import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SkillListModel } from "../../models/skill-list.model";
import { StyleModel, buildStyleToString } from "../../models/style.model";
import "./skill-list.style.scss";

interface props {
    skill: SkillListModel
}

const SkillList = (props: props): JSX.Element => {

    const skills = props.skill.skills.map((skill: string, index) => {
        return (
            <li className="skill" key={`skill-${skill}`}>
                <FontAwesomeIcon className="skill__icon" icon={["fas", "check"]} />
                <span className="skill__text">{skill}</span>
            </li>
        )
    })

    return (
        <div className="skill-wrapper">
            <div className="skill-wrapper__icon" style={{display: props.skill.iconUseFlex ? 'flex' : ''}}  >
                <img style={{ width: '100%', height: '100%' }} src={`${props.skill.icon}`} />
            </div>
            <h4 className="skill-wrapper__title">
                {props.skill.title}
            </h4>
            <ul className="skill-wrapper__list">
                {skills}
            </ul>
        </div>
    )
}

export default SkillList