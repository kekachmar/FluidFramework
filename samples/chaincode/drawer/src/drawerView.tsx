/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import {
    IComponentHTMLOptions,
    IComponentHTMLView,
} from "@prague/component-core-interfaces";
import { mergeStyles } from 'office-ui-fabric-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DrawerCommandBar } from './drawerCommandBar';
import { DocumentList } from "./documentList";
import { IDocumentFactory } from "@prague/host-service-interfaces";
import { ISharedMap } from "@prague/map";

// Inject some global styles
mergeStyles({
    selectors: {
        ':global(body), :global(html), :global(#app)': {
            margin: 0,
            padding: 0,
            height: '100vh'
        }
    }
});

export class DrawerView implements IComponentHTMLView {
    private packages: { pkg: string, name: string, version: string, icon: string }[] = [];
    private elm: HTMLElement;

    constructor(
        private readonly documentsFactory: IDocumentFactory,
        private readonly documentsMap: ISharedMap,
        packagesP: Promise<{ pkg: string, name: string, version: string, icon: string }[]>,
        public remove: () => void,
    ) {
        packagesP.then((packages) => {
            this.packages = packages;
            this.renderCore();
        });
    }

    public render(elm: HTMLElement, options?: IComponentHTMLOptions): void {
        this.elm = elm;
        this.renderCore();
    }

    private renderCore() {
        ReactDOM.render(
            <div>
                <DrawerCommandBar
                    packages={this.packages}
                    documentFactory={this.documentsFactory}
                    documentsMap={this.documentsMap}
                />
                <DocumentList values={this.documentsMap} />
            </div>,
            this.elm);
    }
}
