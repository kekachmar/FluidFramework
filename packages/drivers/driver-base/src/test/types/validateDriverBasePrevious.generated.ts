/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by flub generate:typetests in @fluid-tools/build-cli.
 */

import type * as old from "@fluidframework/driver-base-previous/internal";

import type * as current from "../../index.js";

type ValueOf<T> = T[keyof T];
type OnlySymbols<T> = T extends symbol ? T : never;
type WellKnownSymbols = OnlySymbols<ValueOf<typeof Symbol>>;
/**
 * Omit (replace with never) a key if it is a custom symbol,
 * not just symbol or a well known symbol from the global Symbol.
 */
type SkipUniqueSymbols<Key> = symbol extends Key
	? Key // Key is symbol or a generalization of symbol, so leave it as is.
	: Key extends symbol
		? Key extends WellKnownSymbols
			? Key // Key is a well known symbol from the global Symbol object. These are shared between packages, so they are fine and kept as is.
			: never // Key is most likely some specialized symbol, typically a unique symbol. These break type comparisons so are removed by replacing them with never.
		: Key; // Key is not a symbol (for example its a string or number), so leave it as is.
/**
 * Remove details of T which are incompatible with type testing while keeping as much as is practical.
 *
 * See 'build-tools/packages/build-tools/src/typeValidator/compatibility.ts' for more information.
 */
type TypeOnly<T> = T extends number
	? number
	: T extends boolean | bigint | string
		? T
		: T extends symbol
			? SkipUniqueSymbols<T>
			: {
					[P in keyof T as SkipUniqueSymbols<P>]: TypeOnly<T[P]>;
				};

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassDeclaration_DocumentDeltaConnection": {"forwardCompat": false}
 */
declare function get_old_ClassDeclaration_DocumentDeltaConnection():
    TypeOnly<old.DocumentDeltaConnection>;
declare function use_current_ClassDeclaration_DocumentDeltaConnection(
    use: TypeOnly<current.DocumentDeltaConnection>): void;
use_current_ClassDeclaration_DocumentDeltaConnection(
    get_old_ClassDeclaration_DocumentDeltaConnection());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassDeclaration_DocumentDeltaConnection": {"backCompat": false}
 */
declare function get_current_ClassDeclaration_DocumentDeltaConnection():
    TypeOnly<current.DocumentDeltaConnection>;
declare function use_old_ClassDeclaration_DocumentDeltaConnection(
    use: TypeOnly<old.DocumentDeltaConnection>): void;
use_old_ClassDeclaration_DocumentDeltaConnection(
    get_current_ClassDeclaration_DocumentDeltaConnection());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "FunctionDeclaration_getW3CData": {"forwardCompat": false}
 */
declare function get_old_FunctionDeclaration_getW3CData():
    TypeOnly<typeof old.getW3CData>;
declare function use_current_FunctionDeclaration_getW3CData(
    use: TypeOnly<typeof current.getW3CData>): void;
use_current_FunctionDeclaration_getW3CData(
    get_old_FunctionDeclaration_getW3CData());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "FunctionDeclaration_getW3CData": {"backCompat": false}
 */
declare function get_current_FunctionDeclaration_getW3CData():
    TypeOnly<typeof current.getW3CData>;
declare function use_old_FunctionDeclaration_getW3CData(
    use: TypeOnly<typeof old.getW3CData>): void;
use_old_FunctionDeclaration_getW3CData(
    get_current_FunctionDeclaration_getW3CData());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "FunctionDeclaration_promiseRaceWithWinner": {"forwardCompat": false}
 */
declare function get_old_FunctionDeclaration_promiseRaceWithWinner():
    TypeOnly<typeof old.promiseRaceWithWinner>;
declare function use_current_FunctionDeclaration_promiseRaceWithWinner(
    use: TypeOnly<typeof current.promiseRaceWithWinner>): void;
use_current_FunctionDeclaration_promiseRaceWithWinner(
    get_old_FunctionDeclaration_promiseRaceWithWinner());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "FunctionDeclaration_promiseRaceWithWinner": {"backCompat": false}
 */
declare function get_current_FunctionDeclaration_promiseRaceWithWinner():
    TypeOnly<typeof current.promiseRaceWithWinner>;
declare function use_old_FunctionDeclaration_promiseRaceWithWinner(
    use: TypeOnly<typeof old.promiseRaceWithWinner>): void;
use_old_FunctionDeclaration_promiseRaceWithWinner(
    get_current_FunctionDeclaration_promiseRaceWithWinner());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "FunctionDeclaration_validateMessages": {"forwardCompat": false}
 */
declare function get_old_FunctionDeclaration_validateMessages():
    TypeOnly<typeof old.validateMessages>;
declare function use_current_FunctionDeclaration_validateMessages(
    use: TypeOnly<typeof current.validateMessages>): void;
use_current_FunctionDeclaration_validateMessages(
    get_old_FunctionDeclaration_validateMessages());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "FunctionDeclaration_validateMessages": {"backCompat": false}
 */
declare function get_current_FunctionDeclaration_validateMessages():
    TypeOnly<typeof current.validateMessages>;
declare function use_old_FunctionDeclaration_validateMessages(
    use: TypeOnly<typeof old.validateMessages>): void;
use_old_FunctionDeclaration_validateMessages(
    get_current_FunctionDeclaration_validateMessages());
