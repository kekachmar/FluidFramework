## API Report File for "@fluidframework/odsp-urlresolver"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { IContainerPackageInfo } from '@fluidframework/driver-definitions/internal';
import { IRequest } from '@fluidframework/core-interfaces';
import { IResolvedUrl } from '@fluidframework/driver-definitions/internal';
import { IUrlResolver } from '@fluidframework/driver-definitions/internal';

// @internal
export class FluidAppOdspUrlResolver implements IUrlResolver {
    // (undocumented)
    getAbsoluteUrl(resolvedUrl: IResolvedUrl, relativeUrl: string, packageInfoSource?: IContainerPackageInfo): Promise<string>;
    // (undocumented)
    resolve(request: IRequest): Promise<IResolvedUrl | undefined>;
}

// @internal (undocumented)
export class OdspUrlResolver implements IUrlResolver {
    // (undocumented)
    getAbsoluteUrl(resolvedUrl: IResolvedUrl, relativeUrl: string): Promise<string>;
    // (undocumented)
    resolve(request: IRequest): Promise<IResolvedUrl | undefined>;
}

// (No @packageDocumentation comment for this package)

```
