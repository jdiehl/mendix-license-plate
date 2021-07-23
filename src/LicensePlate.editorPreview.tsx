import { Component, ReactNode, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { LicensePlatePreviewProps } from "../typings/LicensePlateProps";

declare function require(name: string): string;

export class preview extends Component<LicensePlatePreviewProps> {
    render(): ReactNode {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}

export function getPreviewCss(): string {
    return require("./ui/LicensePlate.css");
}
