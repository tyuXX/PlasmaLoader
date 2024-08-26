//#region Variables

// Metadata
var isPLLoaded = false;
const PLVersion = "0.0.0";

// Elements
var PLButton = document.createElement("button");

// Modloader
var mods = [".examplePLmod.js"];
var modRegistry = [
  {
    name: "examplePLmod",
    url: "N/A",
    version: "0",
  },
];

// API
var windows = document.createElement("div");

//#endregion

//#region InternalFunctions

function savePLData() {
    localStorage.setItem("PLMods", JSON.stringify(mods));
}
function loadPLData() {
    if (localStorage.getItem("PLMods") != null) {
        mods = JSON.parse(localStorage.getItem("PLMods"));
    }
}
function registerPLMod(url) {}
function reloadPL() {

}

//#endregion

//#region ExternalFunctions

function getPLLogger(modid) {

}

function registerPLWindow(modid,id,html){
    
}

function openPLWindow(modid,id){

}

//#endregion

//#region Setup

PLButton.id = "PLButton";
PLButton.innerHTML = "Plasma Mod Loader";
PLButton.addEventListener("click", () => {});

loadPLData();

//#endregion
