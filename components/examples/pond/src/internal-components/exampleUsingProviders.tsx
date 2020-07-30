/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { DataObject, DataObjectFactory } from "@fluidframework/aqueduct";
import { SharedMap } from "@fluidframework/map";
import { IFluidHTMLView } from "@fluidframework/view-interfaces";

import React from "react";
import ReactDOM from "react-dom";

import { IComponentUserInformation } from "../interfaces";

// eslint-disable-next-line @typescript-eslint/no-require-imports, @typescript-eslint/no-var-requires
const pkg = require("../../package.json");

/**
 * Basic example that takes a container provider
 */
export class ExampleUsingProviders
    extends DataObject<IComponentUserInformation>
    implements IFluidHTMLView {
    public get IFluidHTMLView() { return this; }

    private userInformation: IComponentUserInformation | undefined;

    public static readonly ComponentName = `${pkg.name as string}-example-using-provider`;

    protected async hasInitialized() {
        this.userInformation = await this.providers.IComponentUserInformation;
    }

    // start IFluidHTMLView

    public render(div: HTMLElement) {
        let element: JSX.Element = <span></span>;
        if (this.userInformation !== undefined) {
            element = <ExampleUsingProvidersView userInfo={this.userInformation} />;
        } else {
            console.log("No IComponentUserInformation Provided");
        }

        ReactDOM.render(
            element,
            div);
    }

    // end IFluidHTMLView

    // ----- COMPONENT SETUP STUFF -----

    public static getFactory() { return ExampleUsingProviders.factory; }

    private static readonly factory = new DataObjectFactory(
        ExampleUsingProviders.ComponentName,
        ExampleUsingProviders,
        [SharedMap.getFactory()],
        { IComponentUserInformation });
}

interface ExampleUsingProvidersViewProps {
    readonly userInfo: IComponentUserInformation;
}

interface ExampleUsingProvidersViewState {
    readonly count: number;
    readonly users: string[];
}

class ExampleUsingProvidersView
    extends React.Component<ExampleUsingProvidersViewProps, ExampleUsingProvidersViewState>
{
    constructor(props: ExampleUsingProvidersViewProps) {
        super(props);

        this.state = {
            count: this.props.userInfo.userCount,
            users: this.props.userInfo.getUsers(),
        };

        this.props.userInfo.on("membersChanged", () => this.setState(
            {
                count: this.props.userInfo.userCount,
                users: this.props.userInfo.getUsers(),
            },
        ));
    }

    public render() {
        const users: JSX.Element[] = [];
        this.state.users.forEach((user) => {
            users.push(<div>{user}</div>);
        });
        return (
            <div style={{ border: "1px dotted green" }}>
                <h3>Provider Information</h3>
                <div><b>Count:</b></div>
                <div>{this.state.count}</div>
                <b>Users:</b>
                {users}
            </div>);
    }
}
