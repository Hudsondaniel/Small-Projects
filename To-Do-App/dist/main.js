/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/TaskManager/taskManager.js":
/*!****************************************!*\
  !*** ./src/TaskManager/taskManager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderTasks: () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _createNewPro_newProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createNewPro/newProject */ \"./src/createNewPro/newProject.js\");\n/* harmony import */ var _Assets_Icons_Add_Icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Assets/Icons/Add-Icon.svg */ \"./Assets/Icons/Add-Icon.svg\");\n/* harmony import */ var _Assets_Icons_Bell_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Assets/Icons/Bell-icon.svg */ \"./Assets/Icons/Bell-icon.svg\");\n/* harmony import */ var _Assets_Icons_notes_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Assets/Icons/notes-icon.svg */ \"./Assets/Icons/notes-icon.svg\");\n/* harmony import */ var _Assets_Icons_Tag_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Assets/Icons/Tag-icon.svg */ \"./Assets/Icons/Tag-icon.svg\");\n\n\n\n\n\nconst taskList = document.querySelector(\".task-list\");\nconst taskInnerList = document.querySelector(\"#task-details\");\nfunction renderTasks(projectId) {\n  const project = _createNewPro_newProject__WEBPACK_IMPORTED_MODULE_0__.projects.find(p => p.id === projectId);\n  if (!project) {\n    console.log(\"Project not found\");\n    return;\n  }\n  taskList.innerHTML = `\n    <div class=\"task-container\">\n        <h2 class = \"project-name\">${project.name}</h2>\n        <ul class=\"tasks\">\n            ${project.tasks.map(task => `\n                <li class=\"unique-Task\" id=\"task-${task.id}\">\n                    <input type=\"radio\" name=\"radio-button\" class=\"task-radio\" data-task-id=\"${task.id}\">\n                    <span>\n                        <div class=\"task-name\">${task.name}</div>\n                    </span>\n                </li>`).join('')}\n        </ul>\n        <div class = \"input-button\">\n            <button class=\"add-task\"><img src=\"${_Assets_Icons_Add_Icon_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]}\" alt=\"Add Task\"></button>\n            <input type=\"text\" id=\"taskInput\" placeholder=\"Add a new task\">\n        </div>\n    </div>\n`;\n  const addTaskButton = taskList.querySelector('.add-task');\n  const taskInput = taskList.querySelector('#taskInput');\n  addTaskButton.addEventListener('click', () => {\n    const taskName = taskInput.value;\n    if (taskName.trim()) {\n      project.tasks.push({\n        name: taskName,\n        id: project.tasks.length + 1,\n        description: []\n      });\n      renderTasks(projectId); // Re-render tasks\n    }\n  });\n\n  //Function to add a unique container for task details\n  project.tasks.forEach(task => {\n    const taskElement = document.querySelector(`#task-${task.id}`);\n    taskElement.addEventListener('click', () => {\n      taskInnerList.innerHTML = `\n                <div class=\"task-inner-div\">\n                    <div class=\"inner-title\"><h1>${task.name}</h1></div>\n                    <div class=\"icons-tasks\">\n                        <div class=\"inner-icons\"><img class=\"inner-img1\" src=\"${_Assets_Icons_Bell_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]}\" alt=\"\"><h4 class=\"inner-task\">Remind me</h4></div>\n                        <div class=\"inner-icons\"><img class=\"inner-img2\" src=\"${_Assets_Icons_notes_icon_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]}\" alt=\"\"><h4 class=\"inner-task\">Personal</h4></div>\n                        <div class=\"inner-icons\"><img class=\"inner-img3\" src=\"${_Assets_Icons_Tag_icon_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]}\" alt=\"\"><h4 class=\"inner-task\">Tags</h4></div>\n                    </div>\n                    <div class=\"inner-notes\">\n                        <h2 class=\"notes-title\">Notes</h2>\n                        ${task.description.map(desc => `\n                        <div>${desc.notes} - ${desc.timestamp}</div>\n                        `).join('')}\n                        <div class=\"Notes\">\n                            <input class=\"notes-box\" type=\"text\" id=\"additionalNotesInput\" placeholder=\"Insert Your Notes\">\n                            <button class=\"notes-button\" id=\"addNotesButton\">Add Notes</button>\n                        </div>\n                    </div>\n                    <div class=\"inner-attachments\">\n                        <h2 class=\"heading-attachment\">Attachments</h2>\n                        <div class=\"attachment-box\">\n                            <div class=\"add-content-button\"> Click here to add attachments </div>\n                        </div>\n                    </div>\n                </div>\n            `;\n      const additionalNotesInput = document.getElementById('additionalNotesInput');\n      const addNotesButton = document.getElementById('addNotesButton');\n      addNotesButton.addEventListener('click', () => {\n        const newNote = additionalNotesInput.value.trim();\n        if (newNote) {\n          task.description.push({\n            notes: newNote,\n            timestamp: new Date().toISOString()\n          });\n          // Re-render the task details with the updated notes\n          renderTasks(projectId);\n        }\n        console.log(task.description[0]);\n      });\n    });\n  });\n\n  //Function to delete a task\n  const taskRadios = document.querySelectorAll('.task-radio');\n  taskRadios.forEach(radio => {\n    radio.addEventListener('click', e => {\n      const taskId = e.target.getAttribute('data-task-id');\n      project.tasks = project.tasks.filter(task => task.id != taskId);\n      renderTasks(projectId); // Re-render tasks\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./src/TaskManager/taskManager.js?");

/***/ }),

/***/ "./src/createNewPro/newProject.js":
/*!****************************************!*\
  !*** ./src/createNewPro/newProject.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   handleOutsideClick: () => (/* binding */ handleOutsideClick),\n/* harmony export */   hidePopup: () => (/* binding */ hidePopup),\n/* harmony export */   projects: () => (/* binding */ projects),\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects)\n/* harmony export */ });\n/* harmony import */ var _Assets_Icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Assets/Icons/delete-icon.svg */ \"./Assets/Icons/delete-icon.svg\");\n/* harmony import */ var _Assets_Icons_check_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Assets/Icons/check-icon.svg */ \"./Assets/Icons/check-icon.svg\");\n/* harmony import */ var _TaskManager_taskManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TaskManager/taskManager */ \"./src/TaskManager/taskManager.js\");\n\n\n\nconst plusButton = document.querySelector(\".plus-symbol\");\nconst newProjectList = document.querySelector(\".new-project\");\nconst newList = document.querySelector(\".my-lists\");\nlet projects = []; // Array to store tasks\n\nfunction createProject() {\n  if (plusButton) {\n    plusButton.addEventListener('click', function (e) {\n      // Prevent the outside click handler from immediately triggering\n      e.stopPropagation();\n      newProjectList.innerHTML = `\n                <div class=\"overlay active\">\n                    <div class=\"pop-up-content\">\n                        <input type=\"text\" id=\"getInput\" placeholder=\"Add A Project To The List\">\n                        <button class=\"continue\">Continue</button>\n                    </div>\n                </div>`;\n\n      // Add event listener for outside click\n      setTimeout(() => {\n        document.addEventListener('click', handleOutsideClick);\n      }, 0);\n\n      // Add event listener for the close button\n      const closeMark = document.querySelector(\".close-mark\");\n      if (closeMark) {\n        closeMark.addEventListener('click', function (e) {\n          e.stopPropagation(); // Prevent the outside click handler from triggering\n          hidePopup();\n        });\n      }\n\n      // Add event listener for continue button\n      const continueButton = document.querySelector(\".continue\");\n      if (continueButton) {\n        continueButton.addEventListener('click', function (e) {\n          e.stopPropagation(); // Prevent the outside click handler from triggering\n          console.log(\"continue button clicked\");\n          const getInput = document.getElementById('getInput');\n          const projectName = getInput.value;\n\n          // Create a new task object\n          const project = {\n            id: projects.length + 1,\n            // Unique ID for the task\n            name: projectName,\n            tasks: []\n          };\n\n          // Add the new task to the tasks array\n          projects.push(project);\n\n          // Render the tasks list\n          renderProjects();\n\n          // Hide the popup after adding the task\n          hidePopup();\n        });\n      }\n    });\n  } else {\n    console.log(\"Plus button not found\");\n  }\n}\n\n// Function to render tasks\nfunction renderProjects() {\n  newList.innerHTML = ''; // Clear the current list\n\n  projects.forEach(project => {\n    const projectItem = document.createElement('li');\n    projectItem.innerHTML = `\n            <div class=\"new-project-list\">\n                <div>${project.name}</div>\n                <div class=\"icons\">\n                    <div class=\"task-complete\"><img src=${_Assets_Icons_check_icon_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]} alt=\"\"></div>\n                    <div class=\"trash\"><img src=${_Assets_Icons_delete_icon_svg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]} alt=\"\"></div>\n                </div>\n            </div>`;\n    newList.appendChild(projectItem);\n    projectItem.addEventListener('click', () => {\n      (0,_TaskManager_taskManager__WEBPACK_IMPORTED_MODULE_2__.renderTasks)(project.id);\n    });\n  });\n}\n\n// Function to handle clicks outside the popup\nfunction handleOutsideClick(event) {\n  const clickedElement = event.target;\n  const popup = document.querySelector('.overlay.active');\n\n  // Check if the clicked element is not part of the popup\n  if (popup && !clickedElement.closest('.pop-up-content')) {\n    hidePopup();\n  }\n}\n\n// Function to hide the popup\nfunction hidePopup() {\n  const popup = document.querySelector('.overlay.active');\n  if (popup) {\n    popup.classList.remove('active');\n    popup.remove();\n  }\n  document.removeEventListener('click', handleOutsideClick); // Remove event listener after closing\n  console.log(\"Popup hidden\");\n}\n\n// Initialize the createProject function\ncreateProject();\n\n\n//# sourceURL=webpack:///./src/createNewPro/newProject.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _src_TaskManager_taskStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/TaskManager/taskStyle.css */ \"./src/TaskManager/taskStyle.css\");\n/* harmony import */ var _src_createNewPro_newProjectStyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/createNewPro/newProjectStyle.css */ \"./src/createNewPro/newProjectStyle.css\");\n/* harmony import */ var _Assets_BG_Img2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Assets/BG-Img2.jpg */ \"./Assets/BG-Img2.jpg\");\n/* harmony import */ var _src_createNewPro_newProject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/createNewPro/newProject.js */ \"./src/createNewPro/newProject.js\");\n\n\n\n\n\ndocument.body.style.backgroundImage = `url(${_Assets_BG_Img2_jpg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]})`;\n(0,_src_createNewPro_newProject_js__WEBPACK_IMPORTED_MODULE_4__.createProject)();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/TaskManager/taskStyle.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/TaskManager/taskStyle.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.task-container{\r\n    display: grid;\r\n    grid-template-rows: 60px auto 60px;\r\n    overflow: hidden;\r\n    height: 92%;\r\n    width: auto;\r\n    margin: 0px 30px 30px 50px;\r\n    background-color: rgba(255, 255, 255, 0.705);\r\n    border-radius: 20px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.project-name{\r\n    display: flex;\r\n    font-size: 30px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.input-button{\r\n    display: grid;\r\n    grid-template-columns: 80px 1fr;\r\n    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\ninput{\r\n    border: none;\r\n}\r\n\r\ninput::placeholder{\r\n    padding-left: 30px;\r\n}  \r\n.add-task{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: none;\r\n}\r\n\r\nimg{\r\n    size: 30px;\r\n}\r\n\r\n.unique-Task{\r\n    display: grid;\r\n    grid-template-columns: 20px 1fr 200px;\r\n    padding: 10px 20px 10px 20px;\r\n    margin: 5px 10px 5px 10px;\r\n    border-radius: 10px;\r\n}\r\n\r\n.unique-Task:hover{\r\n    box-shadow: 1px 1px 7px rgba(0, 0, 0, 0.199);\r\n    transition: box-shadow 0.3s ease-in-out;\r\n}\r\n\r\n.task-name{\r\n    padding-left: 10px;\r\n    font-size: 20px;\r\n}\r\n\r\n.task-inner-div{\r\n    display: grid;\r\n    grid-template-rows: 80px 40px 0.5fr 1fr;\r\n    margin: 0px 40px 30px 15px;\r\n    height: 92%;\r\n    width: auto;\r\n    background-color: rgb(255, 255, 255);\r\n    border-radius: 20px;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.inner-title, .inner-notes, .inner-attachments, .icons-tasks{\r\n    padding-left: 30px;\r\n}\r\n\r\n.icons-tasks{\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.inner-icons{\r\n    display: flex;\r\n    flex-direction: row;\r\n    margin-right: 30px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.281);\r\n    border-radius: 20px;\r\n}\r\n\r\n.inner-task{\r\n    padding-right: 25px;\r\n    padding-bottom: 18px;\r\n    padding-left: 6px;\r\n    font-weight:500;\r\n\r\n}\r\n\r\n.inner-img1, .inner-img2, .inner-img3{\r\n    padding-left: 10px;\r\n}\r\n\r\n.Notes{\r\n    display: grid;\r\n    grid-template-rows: 150px 30px;\r\n    margin-right: 30px;\r\n}\r\n\r\n.notes-title{\r\n    padding-top: 30px;\r\n}\r\n\r\n.notes-box{\r\n    margin: 20px 0px 20px 0px;\r\n    border-radius: 20px;\r\n    background-color: rgba(201, 201, 201, 0.349);\r\n}\r\n\r\n.notes-button {\r\n    margin-right: 50px;\r\n    margin-left: 50px;\r\n    border-radius: 20px;\r\n    background-color: #097cf7; /* Cool blue shade */\r\n    color: white; /* White text color */\r\n    border: none; /* Remove the border */\r\n    padding-top: 10px; /* Add some padding for better appearance */\r\n    padding-bottom: 30px;\r\n    cursor: pointer; /* Change cursor to pointer on hover */\r\n    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition */\r\n}\r\n\r\n.notes-button:hover {\r\n    background-color: #0057b3; /* Darker blue shade on hover */\r\n    transform: scale(1.05); /* Slightly increase size on hover */\r\n}\r\n\r\n.attachment-box{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.add-content-button{\r\n    border: rgba(109, 109, 109, 0.664) dashed 2px;\r\n    border-radius: 10px;\r\n    padding: 50px 80px 50px 80px;\r\n}\r\n\r\n.heading-attachment{\r\n    padding-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/TaskManager/taskStyle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/createNewPro/newProjectStyle.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/createNewPro/newProjectStyle.css ***!
  \************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */\r\n    z-index: 999; /* Ensure it's above other content */\r\n}\r\n\r\n.pop-up-content {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-left:250px;\r\n    margin-right: 250px;\r\n    top: 50%;\r\n    left: 35%;\r\n    transform: translate(-50%, -50%);\r\n    background-color: white;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.pop-up-content input[type=\"text\"] {\r\n    width: 100%;\r\n    height: 70px;\r\n    margin: 0px 30px 0px 30px;\r\n    border: none;\r\n    background-color: rgba(221, 221, 221, 0.377);\r\n    border-radius: 10px;\r\n}\r\n\r\n.pop-up-content input::placeholder{\r\n    padding-left: 30px;\r\n    font-size: 20px;\r\n}\r\n\r\n.pop-up-content .continue {\r\n    padding: 10px 20px;\r\n    background-color: #007bff; \r\n    height: 70px;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.pop-up-content button:hover {\r\n    background-color: #0056b3; /* Darker blue on hover */\r\n}\r\n\r\n.new-project-list {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    height: 100%;\r\n    padding: 10px 25px 10px 25px;\r\n    margin: 0px 20px 5px 20px;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    font-weight: 500;\r\n    position: relative;\r\n    color: white;\r\n    background-color: rgb(123,125,198);\r\n}\r\n\r\n.icons{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    flex-direction: row;\r\n    padding-left: 10px;\r\n}\r\n\r\n.task-complete{\r\n    color: red;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/createNewPro/newProjectStyle.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Teachers:ital,wght@0,400..800;1,400..800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* CSS Reset */\r\n*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Prevent font size inflation */\r\nhtml {\r\n    -moz-text-size-adjust: none;\r\n    -webkit-text-size-adjust: none;\r\n    text-size-adjust: none;\r\n}\r\n\r\n/* Remove default margin in favour of better control in authored CSS */\r\nbody, h1, h2, h3, h4, p,\r\nfigure, blockquote, dl, dd {\r\n    margin-block-end: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul[role='list'],\r\nol[role='list'], li {\r\n    list-style: none;\r\n    list-style-type: none;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n    min-height: 100vh;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* Set shorter line heights on headings and interactive elements */\r\nh1, h2, h3, h4,\r\nbutton, input, label {\r\n    line-height: 1.1;\r\n}\r\n\r\n/* Balance text wrapping on headings */\r\nh1, h2,\r\nh3, h4 {\r\n    text-wrap: balance;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n    text-decoration-skip-ink: auto;\r\n    color: currentColor;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput, button,\r\ntextarea, select {\r\n    font-family: inherit;\r\n    font-size: inherit;\r\n}\r\n\r\n/* Make sure textareas without a rows attribute are not tiny */\r\ntextarea:not([rows]) {\r\n    min-height: 10em;\r\n}\r\n\r\n/* Anything that has been anchored to should have extra scroll margin */\r\n:target {\r\n    scroll-margin-block: 5ex;\r\n}\r\n\r\n/* Starting style for project */\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template-columns: 275px 1fr;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    font-family: \"Teachers\", sans-serif;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    height: 100vh;\r\n}\r\n\r\nul{\r\n    padding: 0px;\r\n}\r\n\r\nnav{\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    background:linear-gradient(135deg, rgba(255,255,255,0.1),rgba(255,255,255,0));\r\n    backdrop-filter: blur(20px);\r\n    -webkit-backdrop-filter: blur(20px);\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.title {\r\n    --s: 0.1em; /* the thickness of the line */\r\n    --c:  rgb(123,125,198); /* the color */\r\n    \r\n    display: flex;\r\n    font-size: 40px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-bottom: 20px;\r\n    margin-bottom: 20px;\r\n    color: #0000; /* Transparent color to make the gradient visible */\r\n    padding-bottom: var(--s);\r\n    background: \r\n        linear-gradient(90deg, var(--c) 50%, black 0) calc(100% - var(--_p, 0%)) / 200% 100%;\r\n    -webkit-background-clip: text, padding-box;\r\n            background-clip: text, padding-box;\r\n    transition: 0.5s;\r\n    font-family: \"Teachers\", sans-serif;\r\n    cursor: pointer;\r\n}\r\n\r\n.title:hover {\r\n    --_p: 100%;\r\n}\r\n\r\n.title-container{\r\n    border-bottom: 5px solid black;\r\n}\r\n\r\n/* Lists styling */\r\n.main-list {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 20px 20px 0px 20px;\r\n    padding: 2px 25px 2px 25px;\r\n    font-size: 20px;\r\n    border-radius: 10px;\r\n    width: 100;\r\n    font-weight: bolder;\r\n    color: white;\r\n    position: relative;\r\n    background-color: rgb(0, 0, 0);\r\n}\r\n\r\n.plus-symbol{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding-bottom: 10px;\r\n    background: none;\r\n    border: none;\r\n    font-size: 35px;\r\n}\r\n\r\n.bottom-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 50px;\r\n    height: 30%;\r\n}\r\n\r\n.bottom-heading{\r\n    padding-left: 30px;\r\n}\r\n\r\nnav .plus-symbol{\r\n    color: white;\r\n}\r\n\r\n.my-lists{\r\n    padding: 0;\r\n    margin: 0px;\r\n}\r\n\r\n.main-container{\r\n    display: grid;\r\n    grid-template-rows: 80px 1fr;\r\n}\r\n\r\n.task-list-details{\r\n    display: grid;\r\n    grid-template-columns: 0.5fr 0.5fr;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./Assets/BG-Img2.jpg":
/*!****************************!*\
  !*** ./Assets/BG-Img2.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/BG-Img2.dbc550e4909acab73c2d1ab91d3494e6.jpg\");\n\n//# sourceURL=webpack:///./Assets/BG-Img2.jpg?");

/***/ }),

/***/ "./Assets/Icons/Add-Icon.svg":
/*!***********************************!*\
  !*** ./Assets/Icons/Add-Icon.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Add-Icon.f6ac12728d1bad834d46de7b9dace426.svg\");\n\n//# sourceURL=webpack:///./Assets/Icons/Add-Icon.svg?");

/***/ }),

/***/ "./Assets/Icons/Bell-icon.svg":
/*!************************************!*\
  !*** ./Assets/Icons/Bell-icon.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Bell-icon.a4d5ec9ecda86538cddcb26e20d61b40.svg\");\n\n//# sourceURL=webpack:///./Assets/Icons/Bell-icon.svg?");

/***/ }),

/***/ "./Assets/Icons/Tag-icon.svg":
/*!***********************************!*\
  !*** ./Assets/Icons/Tag-icon.svg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/Tag-icon.162d9711ddd45affe3850ebdb033fec2.svg\");\n\n//# sourceURL=webpack:///./Assets/Icons/Tag-icon.svg?");

/***/ }),

/***/ "./Assets/Icons/check-icon.svg":
/*!*************************************!*\
  !*** ./Assets/Icons/check-icon.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/check-icon.f4cef18e5c3f6f1f444165fd0cd2cf4b.svg\");\n\n//# sourceURL=webpack:///./Assets/Icons/check-icon.svg?");

/***/ }),

/***/ "./Assets/Icons/delete-icon.svg":
/*!**************************************!*\
  !*** ./Assets/Icons/delete-icon.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/delete-icon.b9b8712ac2a8192bb360aecfd5b14cae.svg\");\n\n//# sourceURL=webpack:///./Assets/Icons/delete-icon.svg?");

/***/ }),

/***/ "./Assets/Icons/notes-icon.svg":
/*!*************************************!*\
  !*** ./Assets/Icons/notes-icon.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/notes-icon.892a8a3f9c4a0901166984440d56696c.svg\");\n\n//# sourceURL=webpack:///./Assets/Icons/notes-icon.svg?");

/***/ }),

/***/ "./src/TaskManager/taskStyle.css":
/*!***************************************!*\
  !*** ./src/TaskManager/taskStyle.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./taskStyle.css */ \"./node_modules/css-loader/dist/cjs.js!./src/TaskManager/taskStyle.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_taskStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_taskStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/TaskManager/taskStyle.css?");

/***/ }),

/***/ "./src/createNewPro/newProjectStyle.css":
/*!**********************************************!*\
  !*** ./src/createNewPro/newProjectStyle.css ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_newProjectStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./newProjectStyle.css */ \"./node_modules/css-loader/dist/cjs.js!./src/createNewPro/newProjectStyle.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_newProjectStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_newProjectStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_newProjectStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_newProjectStyle_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/createNewPro/newProjectStyle.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;