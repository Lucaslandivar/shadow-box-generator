class BoxShadowGenerator {

    constructor(
        horizontal,
        horizontalRef, 
        vertical, 
        verticalRef, 
        blur, 
        blurRef, 
        spread, 
        spreadRef,
        previewBox,
        rule,
        webkitRule,
        mozRule
    ) {
        this.horizontal = horizontal
        this.horizontalRef = horizontalRef 
        this.vertical = vertical 
        this.verticalRef = verticalRef 
        this.blur = blur 
        this.blurRef = blurRef 
        this.spread = spread 
        this.spreadRef = spreadRef
        this.previewBox = previewBox
        this.rule = rule
        this.webkitRule = webkitRule
        this.mozRule = mozRule
    }
}

// ?Seleção de elementos
// *Controles
const horizontal = document.getElementById("horizontal");
const horizontalRef = document.getElementById("horizontal-value");
const vertical = document.getElementById("vertical");
const verticalRef = document.getElementById("vertical-value");
const blur = document.getElementById("blur");
const blurRef = document.getElementById("blur-value");
const spread = document.getElementById("spread");
const spreadRef = document.getElementById("spread-value");

// *Preview
const previewBox = document.getElementById("box");

// *Regras geradas
const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

// *Minha classe com meu novo objeto
const boxShadow = new BoxShadowGenerator(
    horizontal,
    horizontalRef, 
    vertical, 
    verticalRef, 
    blur, 
    blurRef, 
    spread, 
    spreadRef,
    previewBox,
    rule,
    webkitRule,
    mozRule
);

console.log(boxShadow);

// ?Eventos