﻿import * as ts from "typescript";

/**
 * Represents a span of text.
 */
export class TextSpan {
    /** @internal */
    private readonly _compilerObject: ts.TextSpan;

    /** @internal */
    constructor(compilerObject: ts.TextSpan) {
        this._compilerObject = compilerObject;
    }

    /** Gets the compiler text span. */
    get compilerObject() {
        return this._compilerObject;
    }

    /**
     * Gets the start.
     */
    getStart() {
        return this.compilerObject.start;
    }

    /**
     * Gets the length.
     */
    getLength() {
        return this.compilerObject.length;
    }
}
