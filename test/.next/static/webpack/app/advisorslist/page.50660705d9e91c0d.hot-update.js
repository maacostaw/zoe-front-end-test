"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/advisorslist/page",{

/***/ "(app-pages-browser)/./components/advisorForm.tsx":
/*!************************************!*\
  !*** ./components/advisorForm.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_advisorForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/advisorForm.module.css */ \"(app-pages-browser)/./styles/components/advisorForm.module.css\");\n/* harmony import */ var _styles_components_advisorForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_advisorForm_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst AdvisorForm = (param)=>{\n    let { visible, setVisible, creationMode } = param;\n    _s();\n    const inputRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n    const handleClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback({\n        \"AdvisorForm.useCallback[handleClick]\": ()=>{\n            var _inputRef_current;\n            return (_inputRef_current = inputRef.current) === null || _inputRef_current === void 0 ? void 0 : _inputRef_current.click();\n        }\n    }[\"AdvisorForm.useCallback[handleClick]\"], []);\n    const [imageBase64, setImageBase64] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [idNumber, setIdNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [income, setIncome] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleFileChange = (event)=>{\n        var _event_target_files;\n        const file = (_event_target_files = event.target.files) === null || _event_target_files === void 0 ? void 0 : _event_target_files[0];\n        if (file) {\n            // Convertir el archivo a base64 usando FileReader\n            const reader = new FileReader();\n            reader.onloadend = ()=>{\n                setImageBase64(reader.result); // Almacenar el base64 en el estado\n            };\n            reader.readAsDataURL(file); // Convierte el archivo a base64\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: visible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_components_advisorForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().backgroundLayer),\n            onClick: ()=>setVisible(false),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_components_advisorForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().formContainer),\n                onClick: (e)=>{\n                    e.stopPropagation();\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            creationMode ? \"Create\" : \"Edit\",\n                            \" Advisor Information\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"imageInput\",\n                                children: \"Selecciona una imagen:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                id: \"imageInput\",\n                                accept: \"image/*\",\n                                onChange: handleFileChange,\n                                style: {\n                                    width: \"0px\"\n                                },\n                                ref: inputRef\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleClick(),\n                                children: \"Upload Picture\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 29\n                            }, undefined),\n                            imageBase64 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: imageBase64,\n                                alt: \"Imagen cargada\",\n                                style: {\n                                    width: \"150px\",\n                                    height: \"150px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 44\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No se ha cargado ninguna imagen\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 137\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"firstNameInput\",\n                                        children: \"First Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"firstNameInput\",\n                                        value: firstName,\n                                        onChange: (e)=>setFirstName(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"lastNameInput\",\n                                        children: \"Last Name\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"lastNameInput\",\n                                        value: lastName,\n                                        onChange: (e)=>setLastName(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"idNumberInput\",\n                                        children: \"ID Number\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        id: \"idNumberInput\",\n                                        value: idNumber,\n                                        onChange: (e)=>setIdNumber(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"incomeInput\",\n                                        children: \"Income\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_components_advisorForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().prefixBox),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"$\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                className: (_styles_components_advisorForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().prefixBoxInput),\n                                                type: \"number\",\n                                                id: \"incomeInput\",\n                                                value: income,\n                                                onChange: (e)=>setIncome(parseInt(e.target.value))\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                                lineNumber: 89,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n                lineNumber: 34,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\components\\\\advisorForm.tsx\",\n            lineNumber: 30,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n    }, void 0, false);\n};\n_s(AdvisorForm, \"3HiOrX0lpuG9C5TLf8pfuhEvh04=\");\n_c = AdvisorForm;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvisorForm);\nvar _c;\n$RefreshReg$(_c, \"AdvisorForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYWR2aXNvckZvcm0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2lCO0FBRWpFLE1BQU1HLGNBQWM7UUFBQyxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsWUFBWSxFQUF1Rjs7SUFFM0ksTUFBTUMsV0FBV1AsbURBQVksQ0FBQztJQUM5QixNQUFNUyxjQUFjVCx3REFBaUI7Z0RBQUM7Z0JBQU1PO29CQUFBQSxvQkFBQUEsU0FBU0ksT0FBTyxjQUFoQkosd0NBQUFBLGtCQUFrQkssS0FBSzs7K0NBQUksRUFBRTtJQUV6RSxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQWdCO0lBQzlELE1BQU0sQ0FBQ2MsV0FBV0MsYUFBYSxHQUFHZiwrQ0FBUUEsQ0FBUztJQUNuRCxNQUFNLENBQUNnQixVQUFVQyxZQUFZLEdBQUdqQiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNrQixVQUFVQyxZQUFZLEdBQUduQiwrQ0FBUUEsQ0FBUztJQUNqRCxNQUFNLENBQUNvQixRQUFRQyxVQUFVLEdBQUdyQiwrQ0FBUUEsQ0FBUztJQUU3QyxNQUFNc0IsbUJBQW1CLENBQUNDO1lBQ1RBO1FBQWIsTUFBTUMsUUFBT0Qsc0JBQUFBLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSyxjQUFsQkgsMENBQUFBLG1CQUFvQixDQUFDLEVBQUU7UUFDcEMsSUFBSUMsTUFBTTtZQUNOLGtEQUFrRDtZQUNsRCxNQUFNRyxTQUFTLElBQUlDO1lBQ25CRCxPQUFPRSxTQUFTLEdBQUc7Z0JBQ2ZoQixlQUFlYyxPQUFPRyxNQUFNLEdBQWEsbUNBQW1DO1lBQ2hGO1lBQ0FILE9BQU9JLGFBQWEsQ0FBQ1AsT0FBTyxnQ0FBZ0M7UUFDaEU7SUFDSjtJQUVBLHFCQUNJO2tCQUNLckIsd0JBQ0csOERBQUM2QjtZQUNHQyxXQUFXaEMsa0dBQXNCO1lBQ2pDa0MsU0FBUyxJQUFNL0IsV0FBVztzQkFFMUIsNEVBQUM0QjtnQkFDR0MsV0FBV2hDLGdHQUFvQjtnQkFDL0JrQyxTQUFTLENBQUNFO29CQUFRQSxFQUFFQyxlQUFlO2dCQUFHOztrQ0FFdEMsOERBQUNDOzs0QkFDSWxDLGVBQWUsV0FBVzs0QkFBTzs7Ozs7OztrQ0FFdEMsOERBQUMyQjs7MENBQ0csOERBQUNBOzs7OzswQ0FDRCw4REFBQ1E7Z0NBQU1DLFNBQVE7MENBQWE7Ozs7OzswQ0FDNUIsOERBQUNDO2dDQUNHQyxNQUFLO2dDQUNMQyxJQUFHO2dDQUNIQyxRQUFPO2dDQUNQQyxVQUFVeEI7Z0NBQ1Z5QixPQUFPO29DQUFFQyxPQUFPO2dDQUFNO2dDQUN0QkMsS0FBSzNDOzs7Ozs7MENBRVQsOERBQUM0QztnQ0FBT2YsU0FBUyxJQUFNM0I7MENBQWU7Ozs7Ozs0QkFDckNJLDRCQUFjLDhEQUFDdUM7Z0NBQUlDLEtBQUt4QztnQ0FBYXlDLEtBQUk7Z0NBQWlCTixPQUFPO29DQUFFQyxPQUFPO29DQUFTTSxRQUFRO2dDQUFROzs7OzswREFBUSw4REFBQ0M7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFbkgsOERBQUN2Qjs7MENBQ0csOERBQUNBOztrREFDRyw4REFBQ1E7d0NBQU1DLFNBQVE7a0RBQWlCOzs7Ozs7a0RBQ2hDLDhEQUFDQzt3Q0FDR0MsTUFBSzt3Q0FDTEMsSUFBRzt3Q0FDSFksT0FBTzFDO3dDQUNQZ0MsVUFBVSxDQUFDVCxJQUEyQ3RCLGFBQWFzQixFQUFFWixNQUFNLENBQUMrQixLQUFLOzs7Ozs7Ozs7Ozs7MENBR3pGLDhEQUFDeEI7O2tEQUNHLDhEQUFDUTt3Q0FBTUMsU0FBUTtrREFBZ0I7Ozs7OztrREFDL0IsOERBQUNDO3dDQUNHQyxNQUFLO3dDQUNMQyxJQUFHO3dDQUNIWSxPQUFPeEM7d0NBQ1A4QixVQUFVLENBQUNULElBQTJDcEIsWUFBWW9CLEVBQUVaLE1BQU0sQ0FBQytCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJNUYsOERBQUN4Qjs7MENBQ0csOERBQUNBOztrREFDRyw4REFBQ1E7d0NBQU1DLFNBQVE7a0RBQWdCOzs7Ozs7a0RBQy9CLDhEQUFDQzt3Q0FDR0MsTUFBSzt3Q0FDTEMsSUFBRzt3Q0FDSFksT0FBT3RDO3dDQUNQNEIsVUFBVSxDQUFDVCxJQUEyQ2xCLFlBQVlrQixFQUFFWixNQUFNLENBQUMrQixLQUFLOzs7Ozs7Ozs7Ozs7MENBR3hGLDhEQUFDeEI7O2tEQUNHLDhEQUFDUTt3Q0FBTUMsU0FBUTtrREFBYzs7Ozs7O2tEQUM3Qiw4REFBQ1Q7d0NBQUlDLFdBQVdoQyw0RkFBZ0I7OzBEQUM1Qiw4REFBQ3lEOzBEQUFLOzs7Ozs7MERBQ04sOERBQUNoQjtnREFDRFQsV0FBV2hDLGlHQUFxQjtnREFDaEMwQyxNQUFLO2dEQUNMQyxJQUFHO2dEQUNIWSxPQUFPcEM7Z0RBQ1AwQixVQUFVLENBQUNULElBQTJDaEIsVUFBVXVDLFNBQVN2QixFQUFFWixNQUFNLENBQUMrQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQVUzRzs7QUFLaEI7R0F6R010RDtLQUFBQTtBQTJHTixpRUFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtaWd1ZWwuYWNvc3RhXFxEb3dubG9hZHNcXHpvZS1mcm9udC1lbmQtdGVzdFxcdGVzdFxcY29tcG9uZW50c1xcYWR2aXNvckZvcm0udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL2Fkdmlzb3JGb3JtLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEFkdmlzb3JGb3JtID0gKHsgdmlzaWJsZSwgc2V0VmlzaWJsZSwgY3JlYXRpb25Nb2RlIH06IHsgdmlzaWJsZTogYm9vbGVhbiwgc2V0VmlzaWJsZTogKHZpc2libGU6IGJvb2xlYW4pID0+IHZvaWQsIGNyZWF0aW9uTW9kZTogYm9vbGVhbiB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IGlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCksIFtdKTtcclxuXHJcbiAgICBjb25zdCBbaW1hZ2VCYXNlNjQsIHNldEltYWdlQmFzZTY0XSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW2ZpcnN0TmFtZSwgc2V0Rmlyc3ROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbbGFzdE5hbWUsIHNldExhc3ROYW1lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbaWROdW1iZXIsIHNldElkTnVtYmVyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgICBjb25zdCBbaW5jb21lLCBzZXRJbmNvbWVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAvLyBDb252ZXJ0aXIgZWwgYXJjaGl2byBhIGJhc2U2NCB1c2FuZG8gRmlsZVJlYWRlclxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0SW1hZ2VCYXNlNjQocmVhZGVyLnJlc3VsdCBhcyBzdHJpbmcpOyAvLyBBbG1hY2VuYXIgZWwgYmFzZTY0IGVuIGVsIGVzdGFkb1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTsgLy8gQ29udmllcnRlIGVsIGFyY2hpdm8gYSBiYXNlNjRcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge3Zpc2libGUgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZExheWVyfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUNvbnRhaW5lcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKSB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NyZWF0aW9uTW9kZSA/IFwiQ3JlYXRlXCIgOiBcIkVkaXRcIn0gQWR2aXNvciBJbmZvcm1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW1hZ2VJbnB1dFwiPlNlbGVjY2lvbmEgdW5hIGltYWdlbjo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2lucHV0UmVmfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soKX0+VXBsb2FkIFBpY3R1cmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbWFnZUJhc2U2NCA/IDxpbWcgc3JjPXtpbWFnZUJhc2U2NH0gYWx0PVwiSW1hZ2VuIGNhcmdhZGFcIiBzdHlsZT17eyB3aWR0aDogXCIxNTBweFwiLCBoZWlnaHQ6IFwiMTUwcHhcIiB9fSAvPiA6IDxwPk5vIHNlIGhhIGNhcmdhZG8gbmluZ3VuYSBpbWFnZW48L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBzZXRGaXJzdE5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZUlucHV0XCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHNldExhc3ROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlkTnVtYmVySW5wdXRcIj5JRCBOdW1iZXI8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaWROdW1iZXJJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpZE51bWJlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gc2V0SWROdW1iZXIoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpbmNvbWVJbnB1dFwiPkluY29tZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcmVmaXhCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4kPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByZWZpeEJveElucHV0fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5jb21lSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5jb21lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiBzZXRJbmNvbWUocGFyc2VJbnQoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPD48Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkdmlzb3JGb3JtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQWR2aXNvckZvcm0iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImNyZWF0aW9uTW9kZSIsImlucHV0UmVmIiwidXNlUmVmIiwiaGFuZGxlQ2xpY2siLCJ1c2VDYWxsYmFjayIsImN1cnJlbnQiLCJjbGljayIsImltYWdlQmFzZTY0Iiwic2V0SW1hZ2VCYXNlNjQiLCJmaXJzdE5hbWUiLCJzZXRGaXJzdE5hbWUiLCJsYXN0TmFtZSIsInNldExhc3ROYW1lIiwiaWROdW1iZXIiLCJzZXRJZE51bWJlciIsImluY29tZSIsInNldEluY29tZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmFja2dyb3VuZExheWVyIiwib25DbGljayIsImZvcm1Db250YWluZXIiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsImFjY2VwdCIsIm9uQ2hhbmdlIiwic3R5bGUiLCJ3aWR0aCIsInJlZiIsImJ1dHRvbiIsImltZyIsInNyYyIsImFsdCIsImhlaWdodCIsInAiLCJ2YWx1ZSIsInByZWZpeEJveCIsInNwYW4iLCJwcmVmaXhCb3hJbnB1dCIsInBhcnNlSW50Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/advisorForm.tsx\n"));

/***/ })

});