import { StyleModel } from "./style.model";

export interface SkillListModel {
    icon: {
        name: string;
        style?: React.CSSProperties
    };
    title: string;
    skills: string[];
}

