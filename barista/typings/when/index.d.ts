// Type definitions for When 2.4.0
// Project: https://github.com/cujojs/when
// Definitions by: Derek Cicerone <https://github.com/derekcicerone>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

export declare function resolve<T>(value: T): Promise<T>;
export declare function promise<T>(resolver: (resolve: (value: T) => void, reject: (error: any) => void) => void): Promise<T>;

export declare function reduce<T, U>(
	values: Promise<T>[],
	reducer: (acc: U, value: T, index: number, count: number) => U,
	initial: U
): Promise<U>;

export interface Deferred<T> {
	promise: Promise<T>;
	reject(reason: any): void;
	resolve(value?: T): void;
	resolve(value?: Promise<T>): void;
}

export interface Promise<T> {
	catch<U>(onRejected?: (reason: any) => Promise<U>): Promise<U>;
	catch<U>(onRejected?: (reason: any) => U): Promise<U>;

	ensure(onFulfilledOrRejected: Function): Promise<T>;

	inspect(): Snapshot<T>;

	otherwise<U>(onRejected?: (reason: any) => Promise<U>): Promise<U>;
	otherwise<U>(onRejected?: (reason: any) => U): Promise<U>;

	then<U>(onFulfilled: (value: T) => Promise<U>, onRejected?: (reason: any) => Promise<U>, onProgress?: (update: any) => void): Promise<U>;
	then<U>(onFulfilled: (value: T) => Promise<U>, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): Promise<U>;
	then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => Promise<U>, onProgress?: (update: any) => void): Promise<U>;
	then<U>(onFulfilled: (value: T) => U, onRejected?: (reason: any) => U, onProgress?: (update: any) => void): Promise<U>;
}

export interface Snapshot<T> {
	state: string;
	value?: T;
	reason?: any;
}
