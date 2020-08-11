"use strict";
var counter = 0;

/**
 * This function is called when the Add button is clicked
 */
var addBtn = () => {
    var toDo = document.getElementById("to-do");

    if (toDo.value.trim() === "") {
        toDo.value = "";
        return;
    }
       
    addListItem(toDo.value);
    toDo.value = "";
}

/**
 * This function adds a To Do item and displays it on the screen
 * @param {string} toDoValue = value of the To Do item to be displayed
 */
var addListItem = (toDoValue) => {
    var id = counter++;
    var glyphiconDivID = "glyphicon-div" + id;
    var mainOuterDiv = document.getElementById("to-do-list");

    createDynamicElement("div", id, null, null, mainOuterDiv);
    var outerDiv = document.getElementById(id);

    createDynamicElement("div", null, toDoValue, "text-div", outerDiv);
    createDynamicElement("div", glyphiconDivID, null, "glyphicon-div", outerDiv);

    var glyphiconDiv = document.getElementById(glyphiconDivID);
    createDynamicElement("span", null, null, "glyphicon glyphicon-remove", glyphiconDiv);
}

/**
 * This function creates elements dynamically
 * @param {string} elementName = name of element to create
 * @param {string} id = unique id of the element
 * @param {string} text = value to be displayed in element 
 * @param {string} classNAme = name of css class
 * @param {string} parentObj = name of the parent object to append the created element to
 */
var createDynamicElement = (elementName, id = null, text = null, className = null, parentObj = null) => {
    var elem = document.createElement(elementName);

    if (id !== null) elem.setAttribute("id", id);
    if (className !== null) {
        elem.setAttribute("class", className);

        if (className === "glyphicon-div") elem.setAttribute("onclick", "deleteListItem(this)");
    }
    if (text !== null) {
        var content = document.createTextNode(text);
        elem.appendChild(content);
    }

    parentObj.appendChild(elem);
}

/**
 * This function deletes a To Do list item
 * @param {object} obj = dynamically created element
 */
var deleteListItem = (obj) => {
    var parentObj = document.getElementById(obj.parentElement.id);
    parentObj.remove();
}

/**
 * This function is called once the page is loaded
 */
window.onload =  () => {
    document.getElementById("add-btn").addEventListener("click", addBtn);
}