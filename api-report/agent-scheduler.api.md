## API Report File for "@fluidframework/agent-scheduler"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { FluidDataStoreRuntime } from '@fluidframework/datastore';
import { IEvent } from '@fluidframework/core-interfaces';
import { IEventProvider } from '@fluidframework/core-interfaces';
import { IFluidDataStoreContext } from '@fluidframework/runtime-definitions';
import { IFluidDataStoreFactory } from '@fluidframework/runtime-definitions';
import { IFluidLoadable } from '@fluidframework/core-interfaces';
import { NamedFluidDataStoreRegistryEntry } from '@fluidframework/runtime-definitions';
import { TypedEventEmitter } from '@fluid-internal/client-utils';

// @public (undocumented)
export class AgentSchedulerFactory implements IFluidDataStoreFactory {
    // (undocumented)
    static createChildInstance(parentContext: IFluidDataStoreContext): Promise<IAgentScheduler>;
    // (undocumented)
    get IFluidDataStoreFactory(): this;
    // (undocumented)
    instantiateDataStore(context: IFluidDataStoreContext, existing: boolean): Promise<FluidDataStoreRuntime>;
    // (undocumented)
    static get registryEntry(): NamedFluidDataStoreRegistryEntry;
    // (undocumented)
    static readonly type = "_scheduler";
    // (undocumented)
    readonly type = "_scheduler";
}

// @public (undocumented)
export const IAgentScheduler: keyof IProvideAgentScheduler;

// @public
export interface IAgentScheduler extends IProvideAgentScheduler, IEventProvider<IAgentSchedulerEvents>, IFluidLoadable {
    pick(taskId: string, worker: () => Promise<void>): Promise<void>;
    pickedTasks(): string[];
    register(...taskUrls: string[]): Promise<void>;
    release(...taskUrls: string[]): Promise<void>;
}

// @public (undocumented)
export interface IAgentSchedulerEvents extends IEvent {
    (event: "picked" | "released" | "lost", listener: (taskId: string) => void): any;
}

// @public (undocumented)
export interface IProvideAgentScheduler {
    // (undocumented)
    readonly IAgentScheduler: IAgentScheduler;
}

// @public (undocumented)
export interface ITaskSubscriptionEvents extends IEvent {
    // (undocumented)
    (event: "gotTask" | "lostTask", listener: () => void): any;
}

// @public
export class TaskSubscription extends TypedEventEmitter<ITaskSubscriptionEvents> {
    constructor(agentScheduler: IAgentScheduler, taskId: string);
    haveTask(): boolean;
    // (undocumented)
    readonly taskId: string;
    volunteer(): void;
}

// (No @packageDocumentation comment for this package)

```