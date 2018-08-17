import { Component } from "react";

export interface DropzoneComponentProps {
    djsConfig?: any
    config?: any
    eventHandlers?: any
}

export default class DropzoneComponent<T extends DropzoneComponentProps> extends Component<DropzoneComponentProps, any> {
    
}