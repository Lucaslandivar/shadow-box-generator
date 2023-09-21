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

    initialize() {
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.spreadRef.value = this.spread.value;
        this.blurRef.value = this.blur.value;

        this.applyRule();
        this.showRule();
    }

    applyRule() {
        this.previewBox.style.boxShadow = `${this.horizontalRef.value}px ${this.verticalRefRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px #000000`;
        this.currentRule = this.previewBox.style.boxShadow;
    }

    showRule() {
        this.rule.innerText = this.currentRule;
        this.webkitRulerule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;
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

boxShadow.initialize();

// ?Eventos