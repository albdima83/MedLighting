const width = window.innerWidth
const height = window.innerHeight

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 1920;
const guidelineBaseHeight = 1080;

console.log(`WINDOW: [${width} x ${height}]`);

const scale = (size:number) => width / guidelineBaseWidth * size;
const verticalScale = (size:number) => height / guidelineBaseHeight * size;
const moderateScale = (size:number, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, verticalScale, moderateScale};