var tabButtons=document.getElementById("buttonContainer").children;
var tabPanels=document.getElementById("tabContainer").children;

function showPanel(panelIndex, colorCode){
    for(let button of tabButtons){
        button.style.backgroundColor="";
        button.style.color="";
    };
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    for(let panel of tabPanels){
        panel.style.display="none";
    };
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0, '#f44336');