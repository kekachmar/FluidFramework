/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by flub generate:typetests in @fluid-tools/build-cli.
 */

import type { TypeOnly, MinimalType, FullType, requireAssignableTo } from "@fluidframework/build-tools";
import type * as old from "@fluidframework/devtools-core-previous/internal";

import type * as current from "../../index.js";

declare type MakeUnusedImportErrorsGoAway<T> = TypeOnly<T> | MinimalType<T> | FullType<T> | typeof old | typeof current | requireAssignableTo<true, true>;

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Function_createDevtoolsLogger": {"backCompat": false}
 */
declare type current_as_old_for_Function_createDevtoolsLogger = requireAssignableTo<TypeOnly<typeof current.createDevtoolsLogger>, TypeOnly<typeof old.createDevtoolsLogger>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Function_initializeDevtools": {"backCompat": false}
 */
declare type current_as_old_for_Function_initializeDevtools = requireAssignableTo<TypeOnly<typeof current.initializeDevtools>, TypeOnly<typeof old.initializeDevtools>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_ContainerDevtoolsProps": {"forwardCompat": false}
 */
declare type old_as_current_for_Interface_ContainerDevtoolsProps = requireAssignableTo<TypeOnly<old.ContainerDevtoolsProps>, TypeOnly<current.ContainerDevtoolsProps>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_ContainerDevtoolsProps": {"backCompat": false}
 */
declare type current_as_old_for_Interface_ContainerDevtoolsProps = requireAssignableTo<TypeOnly<current.ContainerDevtoolsProps>, TypeOnly<old.ContainerDevtoolsProps>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_FluidDevtoolsProps": {"forwardCompat": false}
 */
declare type old_as_current_for_Interface_FluidDevtoolsProps = requireAssignableTo<TypeOnly<old.FluidDevtoolsProps>, TypeOnly<current.FluidDevtoolsProps>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_FluidDevtoolsProps": {"backCompat": false}
 */
declare type current_as_old_for_Interface_FluidDevtoolsProps = requireAssignableTo<TypeOnly<current.FluidDevtoolsProps>, TypeOnly<old.FluidDevtoolsProps>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_HasContainerKey": {"forwardCompat": false}
 */
declare type old_as_current_for_Interface_HasContainerKey = requireAssignableTo<TypeOnly<old.HasContainerKey>, TypeOnly<current.HasContainerKey>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_HasContainerKey": {"backCompat": false}
 */
declare type current_as_old_for_Interface_HasContainerKey = requireAssignableTo<TypeOnly<current.HasContainerKey>, TypeOnly<old.HasContainerKey>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_IDevtoolsLogger": {"backCompat": false}
 */
declare type current_as_old_for_Interface_IDevtoolsLogger = requireAssignableTo<TypeOnly<current.IDevtoolsLogger>, TypeOnly<old.IDevtoolsLogger>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_IFluidDevtools": {"forwardCompat": false}
 */
declare type old_as_current_for_Interface_IFluidDevtools = requireAssignableTo<TypeOnly<old.IFluidDevtools>, TypeOnly<current.IFluidDevtools>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "Interface_IFluidDevtools": {"backCompat": false}
 */
declare type current_as_old_for_Interface_IFluidDevtools = requireAssignableTo<TypeOnly<current.IFluidDevtools>, TypeOnly<old.IFluidDevtools>>

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "TypeAlias_ContainerKey": {"forwardCompat": false}
 */
declare type old_as_current_for_TypeAlias_ContainerKey = requireAssignableTo<TypeOnly<old.ContainerKey>, TypeOnly<current.ContainerKey>>

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "TypeAlias_ContainerKey": {"backCompat": false}
 */
declare type current_as_old_for_TypeAlias_ContainerKey = requireAssignableTo<TypeOnly<current.ContainerKey>, TypeOnly<old.ContainerKey>>
