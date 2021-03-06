/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Diagnostics, Program } from '@angular/compiler-cli';
import * as ts from 'typescript';
export declare enum DiagnosticMode {
    Syntactic = 1,
    Semantic = 2,
    All = 3,
    Default = 3
}
export declare class CancellationToken implements ts.CancellationToken {
    private _isCancelled;
    requestCancellation(): void;
    isCancellationRequested(): boolean;
    throwIfCancellationRequested(): void;
}
export declare function hasErrors(diags: Diagnostics): boolean;
export declare function gatherDiagnostics(program: ts.Program | Program, jitMode: boolean, benchmarkLabel: string, mode?: DiagnosticMode, cancellationToken?: CancellationToken): Diagnostics;
export declare function reportDiagnostics(diagnostics: Diagnostics, reportError: (msg: string) => void, reportWarning: (msg: string) => void): void;
