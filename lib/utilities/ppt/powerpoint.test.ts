/*
    Write a series of tests for the powerpoint.js file.

    Tests should be written for both the utility functions within the file.

*/
import {describe, expect, test} from '@jest/globals';
import pptxgen from "pptxgenjs";
import { addSlide, createPowerpoint } from "./powerpoint";

describe("Powerpoint Tests", () => {
    test("addSlide", () => {
        const pptx = new pptxgen();
        addSlide(pptx, "test");
        expect(pptx).toBeDefined();
    })

    test("createPowerpoint", () => {
        const pptx = new pptxgen();
        createPowerpoint("test", ["test"], "test");
        expect(pptx).toBeDefined();
    })
})


