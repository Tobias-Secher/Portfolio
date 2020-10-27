import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface MenuProps {
    menu: MenuModel[];
}

export interface MenuModel {
    route: string;
    label: string;
    icon: IconProp;
    screen: JSX.Element;
    exact: boolean;
    color: 'blue' | 'green' | 'purple' | 'orange' | 'red'
}