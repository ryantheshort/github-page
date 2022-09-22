import { userData } from "./userdata.js";
import { repoData } from "./repo.js";
import { orgsData } from "./orgs.js";

(function() { //IIFE = Immediately Invoked Function Expression. 
    'use strict'



// REPO #
const sourceNum = document.querySelector("#repo-num-template").innerHTML;
const templateNum = Handlebars.compile(sourceNum);
const htmlNum = templateNum(userData);
document.querySelector(".repo-page").insertAdjacentHTML("beforeend", htmlNum);


// USER SIDEBAR
const sourceUserData = document.querySelector("#userdata-sidebar-template").innerHTML;
const templateUserData = Handlebars.compile(sourceUserData);
const htmlUserData = templateUserData(userData);
document.querySelector(".sidebar").insertAdjacentHTML("afterbegin", htmlUserData);

// ORGS
const sourceOrgs = document.querySelector("#organizations-template").innerHTML;
const templateOrgs = Handlebars.compile(sourceOrgs);
const htmlOrgs = templateOrgs(orgsData);
document.querySelector(".organizations").insertAdjacentHTML("afterbegin", htmlOrgs);


// REPO PROJECTS
const sourceRepo = document.querySelector("#repo-list-template").innerHTML;
const templateRepo = Handlebars.compile(sourceRepo);


const repos = {
    repoData,
};
const htmlRepo = templateRepo(repos);
document.querySelector(".repo-list").insertAdjacentHTML("afterbegin", htmlRepo);

const codeType = document.querySelector(".code-type");
const codeColor = document.querySelector(".code-color");
const name = document.querySelector(".name");

function changeLanguageColor() {}
changeLanguageColor();


// NOTHING BELOW THIS LINE...S
})();
