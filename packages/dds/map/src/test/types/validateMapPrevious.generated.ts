/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */

/*
 * THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
 * Generated by flub generate:typetests in @fluid-tools/build-cli.
 */

import type * as old from "@fluidframework/map-previous/internal";

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
 * "ClassDeclaration_DirectoryFactory": {"forwardCompat": false}
 */
declare function get_old_ClassDeclaration_DirectoryFactory():
    TypeOnly<old.DirectoryFactory>;
declare function use_current_ClassDeclaration_DirectoryFactory(
    use: TypeOnly<current.DirectoryFactory>): void;
use_current_ClassDeclaration_DirectoryFactory(
    get_old_ClassDeclaration_DirectoryFactory());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassDeclaration_DirectoryFactory": {"backCompat": false}
 */
declare function get_current_ClassDeclaration_DirectoryFactory():
    TypeOnly<current.DirectoryFactory>;
declare function use_old_ClassDeclaration_DirectoryFactory(
    use: TypeOnly<old.DirectoryFactory>): void;
use_old_ClassDeclaration_DirectoryFactory(
    get_current_ClassDeclaration_DirectoryFactory());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ICreateInfo": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_ICreateInfo():
    TypeOnly<old.ICreateInfo>;
declare function use_current_InterfaceDeclaration_ICreateInfo(
    use: TypeOnly<current.ICreateInfo>): void;
use_current_InterfaceDeclaration_ICreateInfo(
    get_old_InterfaceDeclaration_ICreateInfo());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ICreateInfo": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_ICreateInfo():
    TypeOnly<current.ICreateInfo>;
declare function use_old_InterfaceDeclaration_ICreateInfo(
    use: TypeOnly<old.ICreateInfo>): void;
use_old_InterfaceDeclaration_ICreateInfo(
    get_current_InterfaceDeclaration_ICreateInfo());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectory": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_IDirectory():
    TypeOnly<old.IDirectory>;
declare function use_current_InterfaceDeclaration_IDirectory(
    use: TypeOnly<current.IDirectory>): void;
use_current_InterfaceDeclaration_IDirectory(
    get_old_InterfaceDeclaration_IDirectory());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectory": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_IDirectory():
    TypeOnly<current.IDirectory>;
declare function use_old_InterfaceDeclaration_IDirectory(
    use: TypeOnly<old.IDirectory>): void;
use_old_InterfaceDeclaration_IDirectory(
    get_current_InterfaceDeclaration_IDirectory());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectoryDataObject": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_IDirectoryDataObject():
    TypeOnly<old.IDirectoryDataObject>;
declare function use_current_InterfaceDeclaration_IDirectoryDataObject(
    use: TypeOnly<current.IDirectoryDataObject>): void;
use_current_InterfaceDeclaration_IDirectoryDataObject(
    get_old_InterfaceDeclaration_IDirectoryDataObject());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectoryDataObject": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_IDirectoryDataObject():
    TypeOnly<current.IDirectoryDataObject>;
declare function use_old_InterfaceDeclaration_IDirectoryDataObject(
    use: TypeOnly<old.IDirectoryDataObject>): void;
use_old_InterfaceDeclaration_IDirectoryDataObject(
    get_current_InterfaceDeclaration_IDirectoryDataObject());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectoryEvents": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_IDirectoryEvents():
    TypeOnly<old.IDirectoryEvents>;
declare function use_current_InterfaceDeclaration_IDirectoryEvents(
    use: TypeOnly<current.IDirectoryEvents>): void;
use_current_InterfaceDeclaration_IDirectoryEvents(
    get_old_InterfaceDeclaration_IDirectoryEvents());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectoryEvents": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_IDirectoryEvents():
    TypeOnly<current.IDirectoryEvents>;
declare function use_old_InterfaceDeclaration_IDirectoryEvents(
    use: TypeOnly<old.IDirectoryEvents>): void;
use_old_InterfaceDeclaration_IDirectoryEvents(
    get_current_InterfaceDeclaration_IDirectoryEvents());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectoryNewStorageFormat": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_IDirectoryNewStorageFormat():
    TypeOnly<old.IDirectoryNewStorageFormat>;
declare function use_current_InterfaceDeclaration_IDirectoryNewStorageFormat(
    use: TypeOnly<current.IDirectoryNewStorageFormat>): void;
use_current_InterfaceDeclaration_IDirectoryNewStorageFormat(
    get_old_InterfaceDeclaration_IDirectoryNewStorageFormat());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectoryNewStorageFormat": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_IDirectoryNewStorageFormat():
    TypeOnly<current.IDirectoryNewStorageFormat>;
declare function use_old_InterfaceDeclaration_IDirectoryNewStorageFormat(
    use: TypeOnly<old.IDirectoryNewStorageFormat>): void;
use_old_InterfaceDeclaration_IDirectoryNewStorageFormat(
    get_current_InterfaceDeclaration_IDirectoryNewStorageFormat());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectoryValueChanged": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_IDirectoryValueChanged():
    TypeOnly<old.IDirectoryValueChanged>;
declare function use_current_InterfaceDeclaration_IDirectoryValueChanged(
    use: TypeOnly<current.IDirectoryValueChanged>): void;
use_current_InterfaceDeclaration_IDirectoryValueChanged(
    get_old_InterfaceDeclaration_IDirectoryValueChanged());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IDirectoryValueChanged": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_IDirectoryValueChanged():
    TypeOnly<current.IDirectoryValueChanged>;
declare function use_old_InterfaceDeclaration_IDirectoryValueChanged(
    use: TypeOnly<old.IDirectoryValueChanged>): void;
use_old_InterfaceDeclaration_IDirectoryValueChanged(
    get_current_InterfaceDeclaration_IDirectoryValueChanged());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISerializableValue": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_ISerializableValue():
    TypeOnly<old.ISerializableValue>;
declare function use_current_InterfaceDeclaration_ISerializableValue(
    use: TypeOnly<current.ISerializableValue>): void;
use_current_InterfaceDeclaration_ISerializableValue(
    get_old_InterfaceDeclaration_ISerializableValue());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISerializableValue": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_ISerializableValue():
    TypeOnly<current.ISerializableValue>;
declare function use_old_InterfaceDeclaration_ISerializableValue(
    use: TypeOnly<old.ISerializableValue>): void;
use_old_InterfaceDeclaration_ISerializableValue(
    get_current_InterfaceDeclaration_ISerializableValue());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISharedDirectory": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_ISharedDirectory():
    TypeOnly<old.ISharedDirectory>;
declare function use_current_InterfaceDeclaration_ISharedDirectory(
    use: TypeOnly<current.ISharedDirectory>): void;
use_current_InterfaceDeclaration_ISharedDirectory(
    get_old_InterfaceDeclaration_ISharedDirectory());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISharedDirectory": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_ISharedDirectory():
    TypeOnly<current.ISharedDirectory>;
declare function use_old_InterfaceDeclaration_ISharedDirectory(
    use: TypeOnly<old.ISharedDirectory>): void;
use_old_InterfaceDeclaration_ISharedDirectory(
    get_current_InterfaceDeclaration_ISharedDirectory());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISharedDirectoryEvents": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_ISharedDirectoryEvents():
    TypeOnly<old.ISharedDirectoryEvents>;
declare function use_current_InterfaceDeclaration_ISharedDirectoryEvents(
    use: TypeOnly<current.ISharedDirectoryEvents>): void;
use_current_InterfaceDeclaration_ISharedDirectoryEvents(
    get_old_InterfaceDeclaration_ISharedDirectoryEvents());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISharedDirectoryEvents": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_ISharedDirectoryEvents():
    TypeOnly<current.ISharedDirectoryEvents>;
declare function use_old_InterfaceDeclaration_ISharedDirectoryEvents(
    use: TypeOnly<old.ISharedDirectoryEvents>): void;
use_old_InterfaceDeclaration_ISharedDirectoryEvents(
    get_current_InterfaceDeclaration_ISharedDirectoryEvents());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISharedMap": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_ISharedMap():
    TypeOnly<old.ISharedMap>;
declare function use_current_InterfaceDeclaration_ISharedMap(
    use: TypeOnly<current.ISharedMap>): void;
use_current_InterfaceDeclaration_ISharedMap(
    get_old_InterfaceDeclaration_ISharedMap());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISharedMap": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_ISharedMap():
    TypeOnly<current.ISharedMap>;
declare function use_old_InterfaceDeclaration_ISharedMap(
    use: TypeOnly<old.ISharedMap>): void;
use_old_InterfaceDeclaration_ISharedMap(
    get_current_InterfaceDeclaration_ISharedMap());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISharedMapEvents": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_ISharedMapEvents():
    TypeOnly<old.ISharedMapEvents>;
declare function use_current_InterfaceDeclaration_ISharedMapEvents(
    use: TypeOnly<current.ISharedMapEvents>): void;
use_current_InterfaceDeclaration_ISharedMapEvents(
    get_old_InterfaceDeclaration_ISharedMapEvents());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_ISharedMapEvents": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_ISharedMapEvents():
    TypeOnly<current.ISharedMapEvents>;
declare function use_old_InterfaceDeclaration_ISharedMapEvents(
    use: TypeOnly<old.ISharedMapEvents>): void;
use_old_InterfaceDeclaration_ISharedMapEvents(
    get_current_InterfaceDeclaration_ISharedMapEvents());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IValueChanged": {"forwardCompat": false}
 */
declare function get_old_InterfaceDeclaration_IValueChanged():
    TypeOnly<old.IValueChanged>;
declare function use_current_InterfaceDeclaration_IValueChanged(
    use: TypeOnly<current.IValueChanged>): void;
use_current_InterfaceDeclaration_IValueChanged(
    get_old_InterfaceDeclaration_IValueChanged());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "InterfaceDeclaration_IValueChanged": {"backCompat": false}
 */
declare function get_current_InterfaceDeclaration_IValueChanged():
    TypeOnly<current.IValueChanged>;
declare function use_old_InterfaceDeclaration_IValueChanged(
    use: TypeOnly<old.IValueChanged>): void;
use_old_InterfaceDeclaration_IValueChanged(
    get_current_InterfaceDeclaration_IValueChanged());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassDeclaration_MapFactory": {"forwardCompat": false}
 */
declare function get_old_ClassDeclaration_MapFactory():
    TypeOnly<old.MapFactory>;
declare function use_current_ClassDeclaration_MapFactory(
    use: TypeOnly<current.MapFactory>): void;
use_current_ClassDeclaration_MapFactory(
    get_old_ClassDeclaration_MapFactory());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "ClassDeclaration_MapFactory": {"backCompat": false}
 */
declare function get_current_ClassDeclaration_MapFactory():
    TypeOnly<current.MapFactory>;
declare function use_old_ClassDeclaration_MapFactory(
    use: TypeOnly<old.MapFactory>): void;
use_old_ClassDeclaration_MapFactory(
    get_current_ClassDeclaration_MapFactory());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "VariableDeclaration_SharedDirectory": {"forwardCompat": false}
 */
declare function get_old_VariableDeclaration_SharedDirectory():
    TypeOnly<typeof old.SharedDirectory>;
declare function use_current_VariableDeclaration_SharedDirectory(
    use: TypeOnly<typeof current.SharedDirectory>): void;
use_current_VariableDeclaration_SharedDirectory(
    get_old_VariableDeclaration_SharedDirectory());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "VariableDeclaration_SharedDirectory": {"backCompat": false}
 */
declare function get_current_VariableDeclaration_SharedDirectory():
    TypeOnly<typeof current.SharedDirectory>;
declare function use_old_VariableDeclaration_SharedDirectory(
    use: TypeOnly<typeof old.SharedDirectory>): void;
use_old_VariableDeclaration_SharedDirectory(
    get_current_VariableDeclaration_SharedDirectory());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "TypeAliasDeclaration_SharedDirectory": {"forwardCompat": false}
 */
declare function get_old_TypeAliasDeclaration_SharedDirectory():
    TypeOnly<old.SharedDirectory>;
declare function use_current_TypeAliasDeclaration_SharedDirectory(
    use: TypeOnly<current.SharedDirectory>): void;
use_current_TypeAliasDeclaration_SharedDirectory(
    get_old_TypeAliasDeclaration_SharedDirectory());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "TypeAliasDeclaration_SharedDirectory": {"backCompat": false}
 */
declare function get_current_TypeAliasDeclaration_SharedDirectory():
    TypeOnly<current.SharedDirectory>;
declare function use_old_TypeAliasDeclaration_SharedDirectory(
    use: TypeOnly<old.SharedDirectory>): void;
use_old_TypeAliasDeclaration_SharedDirectory(
    get_current_TypeAliasDeclaration_SharedDirectory());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "VariableDeclaration_SharedMap": {"forwardCompat": false}
 */
declare function get_old_VariableDeclaration_SharedMap():
    TypeOnly<typeof old.SharedMap>;
declare function use_current_VariableDeclaration_SharedMap(
    use: TypeOnly<typeof current.SharedMap>): void;
use_current_VariableDeclaration_SharedMap(
    get_old_VariableDeclaration_SharedMap());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "VariableDeclaration_SharedMap": {"backCompat": false}
 */
declare function get_current_VariableDeclaration_SharedMap():
    TypeOnly<typeof current.SharedMap>;
declare function use_old_VariableDeclaration_SharedMap(
    use: TypeOnly<typeof old.SharedMap>): void;
use_old_VariableDeclaration_SharedMap(
    get_current_VariableDeclaration_SharedMap());

/*
 * Validate forward compatibility by using the old type in place of the current type.
 * If this test starts failing, it indicates a change that is not forward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "TypeAliasDeclaration_SharedMap": {"forwardCompat": false}
 */
declare function get_old_TypeAliasDeclaration_SharedMap():
    TypeOnly<old.SharedMap>;
declare function use_current_TypeAliasDeclaration_SharedMap(
    use: TypeOnly<current.SharedMap>): void;
use_current_TypeAliasDeclaration_SharedMap(
    get_old_TypeAliasDeclaration_SharedMap());

/*
 * Validate backward compatibility by using the current type in place of the old type.
 * If this test starts failing, it indicates a change that is not backward compatible.
 * To acknowledge the breaking change, add the following to package.json under
 * typeValidation.broken:
 * "TypeAliasDeclaration_SharedMap": {"backCompat": false}
 */
declare function get_current_TypeAliasDeclaration_SharedMap():
    TypeOnly<current.SharedMap>;
declare function use_old_TypeAliasDeclaration_SharedMap(
    use: TypeOnly<old.SharedMap>): void;
use_old_TypeAliasDeclaration_SharedMap(
    get_current_TypeAliasDeclaration_SharedMap());
