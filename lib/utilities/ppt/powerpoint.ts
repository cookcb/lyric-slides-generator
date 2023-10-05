import pptxgen from "pptxgenjs";

export const createPowerpoint = (title: string, lyrics: string[], fileName: string) => {
    const pptx = new pptxgen();
    addSlide(pptx, title)

    lyrics.forEach((lyric) => {
        addSlide(pptx, lyric)
    });
    
    pptx.writeFile({fileName: fileName});
}

/*
    Create a utility function based on the above function to create a new slide for a provided
    powerpoint object. The function should take in a powerpoint object and text to add for the slide.

*/

export const addSlide = (pptx: pptxgen, text: string) => {
    const slide = pptx.addSlide();
    slide.addText(text, {
        x: 0,
        y: 0,
        w: "100%",
        h: "100%",
        align: "center",
        fontSize: 44,
    });
}