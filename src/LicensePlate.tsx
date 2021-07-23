import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";

import { LicensePlateContainerProps } from "../typings/LicensePlateProps";

import "./ui/LicensePlate.css";

export default class LicensePlate extends Component<LicensePlateContainerProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText ? this.props.sampleText : "World"} />;
    }
}
