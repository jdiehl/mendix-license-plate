/**
 * This file was generated from LicensePlate.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface LicensePlateContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    license: DynamicValue<string>;
    country: DynamicValue<string>;
    height: number;
}

export interface LicensePlatePreviewProps {
    class: string;
    style: string;
    license: string;
    country: string;
    height: number | null;
}
