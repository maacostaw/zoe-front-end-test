"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/advisors/[id]/page",{

/***/ "(app-pages-browser)/./app/advisors/[id]/page.tsx":
/*!************************************!*\
  !*** ./app/advisors/[id]/page.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_advisorForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/advisorForm */ \"(app-pages-browser)/./components/advisorForm.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_advisors_id_page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/app/advisors/[id]/page.module.css */ \"(app-pages-browser)/./styles/app/advisors/[id]/page.module.css\");\n/* harmony import */ var _styles_app_advisors_id_page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_advisors_id_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AdvisorPage = ()=>{\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)(); // Accede al parámetro 'id' de la ruta\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [advisor, setAdvisor] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        \"id\": \"\",\n        \"name\": \"\",\n        \"avatar\": null,\n        \"email\": \"\",\n        \"phone\": \"\",\n        \"address\": \"\",\n        \"income\": \"\"\n    });\n    const [modalEditVisible, setModalEditVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"AdvisorPage.useEffect\": ()=>{\n            fetch(\"http://localhost:3001/advisor/\".concat(id)).then({\n                \"AdvisorPage.useEffect\": (data)=>data.json()\n            }[\"AdvisorPage.useEffect\"]).then({\n                \"AdvisorPage.useEffect\": (dataJson)=>{\n                    setAdvisor(dataJson);\n                }\n            }[\"AdvisorPage.useEffect\"]);\n        }\n    }[\"AdvisorPage.useEffect\"], []);\n    const handleDelete = async ()=>{\n        try {\n            const response = await fetch(\"http://localhost:3001/advisor/\".concat(id), {\n                method: 'DELETE',\n                headers: {\n                    'Content-Type': 'application/json'\n                }\n            });\n            router.push(\"/\");\n            if (!response.ok) {\n                throw new Error(\"Error al eliminar el recurso: \".concat(response.status));\n            }\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    };\n    const onSubmit = async (data)=>{\n        const url = \"http://localhost:3001/advisor/\".concat(id); // URL de la API o endpoint\n        try {\n            const response = await fetch(url, {\n                method: 'PUT',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(data)\n            });\n            if (!response.ok) {\n                throw new Error('Network response was not ok');\n            }\n            window.location.href = \"/advisors/\".concat(id);\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_advisors_id_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageLayout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_advisorForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                visible: modalEditVisible,\n                setVisible: setModalEditVisible,\n                advisor: advisor,\n                onSubmit: onSubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_advisors_id_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().logoContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/zoe_logo.svg\",\n                    width: \"100px\",\n                    style: {\n                        cursor: \"pointer\"\n                    },\n                    onClick: ()=>router.push(\"/\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_advisors_id_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageSection),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_app_advisors_id_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().profilePhoto),\n                        src: advisor.avatar ? advisor.avatar : \"/empty_profile_photo.png\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"primaryDangerButton\",\n                        onClick: ()=>handleDelete(),\n                        children: \"Delete\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"secondaryButton\",\n                        onClick: ()=>setModalEditVisible(true),\n                        children: \"Edit Advisor\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: advisor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: advisor.name\n                }, void 0, false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"ID Number\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 12\n                    }, undefined),\n                    \"ID: 987-345-32\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"Income\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 12\n                    }, undefined),\n                    advisor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: advisor.income\n                    }, void 0, false)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"Education\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 12\n                    }, undefined),\n                    \"Northeastern University\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"Title\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 12\n                    }, undefined),\n                    \"Financial Management\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                        children: \"Years of Experience\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 12\n                    }, undefined),\n                    \"+10\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\[id]\\\\page.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AdvisorPage, \"eofPLRuOlVhprDcoumLlAoZ/J9o=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AdvisorPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvisorPage);\nvar _c;\n$RefreshReg$(_c, \"AdvisorPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZHZpc29ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDSTtBQUNYO0FBRTJCO0FBRXZFLE1BQU1NLGNBQWM7O0lBQ2xCLE1BQU0sRUFBRUMsRUFBRSxFQUFFLEdBQUdOLDBEQUFTQSxJQUFJLHNDQUFzQztJQUNsRSxNQUFNTyxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTSxDQUFDTyxTQUFTQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDO1FBQ3JDLE1BQU07UUFDTixRQUFRO1FBQ1IsVUFBVTtRQUNWLFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLFVBQVU7SUFDWjtJQUVBLE1BQU0sQ0FBQ08sa0JBQWtCQyxvQkFBb0IsR0FBR1IsK0NBQVFBLENBQUM7SUFHekRELGdEQUFTQTtpQ0FBQztZQUNSVSxNQUFNLGlDQUFvQyxPQUFITixLQUNwQ08sSUFBSTt5Q0FBQ0MsQ0FBQUEsT0FBUUEsS0FBS0MsSUFBSTt3Q0FDdEJGLElBQUk7eUNBQUNHLENBQUFBO29CQUNKUCxXQUFXTztnQkFDYjs7UUFDSjtnQ0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNTixNQUFNLGlDQUFvQyxPQUFITixLQUFNO2dCQUNsRWEsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQWIsT0FBT2MsSUFBSSxDQUFDO1lBRVosSUFBSSxDQUFDSCxTQUFTSSxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTSxpQ0FBaUQsT0FBaEJMLFNBQVNNLE1BQU07WUFDbEU7UUFFRixFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLFVBQVVBO1FBQzFCO0lBQ0Y7SUFFQSxNQUFNRSxXQUFXLE9BQU9iO1FBQ3RCLE1BQU1jLE1BQU0saUNBQW9DLE9BQUh0QixLQUFNLDJCQUEyQjtRQUU5RSxJQUFJO1lBQ0YsTUFBTVksV0FBVyxNQUFNTixNQUFNZ0IsS0FBSztnQkFDaENULFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQVMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDakI7WUFDdkI7WUFFQSxJQUFJLENBQUNJLFNBQVNJLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBRUFTLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHLGFBQWdCLE9BQUg1QjtRQUN0QyxFQUFFLE9BQU9tQixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyxVQUFVQTtRQUMxQjtJQUNGO0lBR0EscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVdoQywyRkFBaUI7OzBCQUMvQiw4REFBQ0wsK0RBQVdBO2dCQUNWdUMsU0FBUzVCO2dCQUNUNkIsWUFBWTVCO2dCQUNaSCxTQUFTQTtnQkFDVG1CLFVBQVVBOzs7Ozs7MEJBRVosOERBQUNRO2dCQUFJQyxXQUFXaEMsOEZBQW9COzBCQUNsQyw0RUFBQ3FDO29CQUFJQyxLQUFJO29CQUFnQkMsT0FBTTtvQkFBUUMsT0FBTzt3QkFBRUMsUUFBUTtvQkFBVTtvQkFBR0MsU0FBUyxJQUFNdkMsT0FBT2MsSUFBSSxDQUFDOzs7Ozs7Ozs7OzswQkFFbEcsOERBQUNjO2dCQUFJQyxXQUFXaEMsNkZBQW1COztrQ0FDakMsOERBQUNxQzt3QkFDQ0wsV0FBV2hDLDZGQUFtQjt3QkFDOUJzQyxLQUFLbEMsUUFBUXlDLE1BQU0sR0FBR3pDLFFBQVF5QyxNQUFNLEdBQUc7Ozs7OztrQ0FFekMsOERBQUNDO3dCQUFPZCxXQUFVO3dCQUFzQlUsU0FBUyxJQUFNN0I7a0NBQWdCOzs7Ozs7a0NBQ3ZFLDhEQUFDaUM7d0JBQU9kLFdBQVU7d0JBQWtCVSxTQUFTLElBQU1uQyxvQkFBb0I7a0NBQU87Ozs7Ozs7Ozs7OzswQkFFaEYsOERBQUN3QjswQkFBSzNCLHlCQUFXOzhCQUFHQSxRQUFRMkMsSUFBSTs7Ozs7OzswQkFDaEMsOERBQUNoQjs7a0NBQUksOERBQUNpQjtrQ0FBRTs7Ozs7O29CQUFhOzs7Ozs7OzBCQUNyQiw4REFBQ2pCOztrQ0FBSSw4REFBQ2lCO2tDQUFFOzs7Ozs7b0JBQVc1Qyx5QkFBVztrQ0FBR0EsUUFBUTZDLE1BQU07Ozs7Ozs7OzBCQUMvQyw4REFBQ2xCOztrQ0FBSSw4REFBQ2lCO2tDQUFFOzs7Ozs7b0JBQWE7Ozs7Ozs7MEJBQ3JCLDhEQUFDakI7O2tDQUFJLDhEQUFDaUI7a0NBQUU7Ozs7OztvQkFBUzs7Ozs7OzswQkFDakIsOERBQUNqQjs7a0NBQUksOERBQUNpQjtrQ0FBRTs7Ozs7O29CQUF1Qjs7Ozs7Ozs7Ozs7OztBQUdyQztHQS9GTS9DOztRQUNXTCxzREFBU0E7UUFDVEMsc0RBQVNBOzs7S0FGcEJJO0FBaUdOLGlFQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG1pZ3VlbC5hY29zdGFcXERvd25sb2Fkc1xcem9lLWZyb250LWVuZC10ZXN0XFx0ZXN0XFxhcHBcXGFkdmlzb3JzXFxbaWRdXFxwYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IEFkdmlzb3JGb3JtIGZyb20gJ0AvY29tcG9uZW50cy9hZHZpc29yRm9ybSc7XHJcbmltcG9ydCB7IHVzZVBhcmFtcywgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9hcHAvYWR2aXNvcnMvW2lkXS9wYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEFkdmlzb3JQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpOyAvLyBBY2NlZGUgYWwgcGFyw6FtZXRybyAnaWQnIGRlIGxhIHJ1dGFcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBbYWR2aXNvciwgc2V0QWR2aXNvcl0gPSB1c2VTdGF0ZSh7XHJcbiAgICBcImlkXCI6IFwiXCIsXHJcbiAgICBcIm5hbWVcIjogXCJcIixcclxuICAgIFwiYXZhdGFyXCI6IG51bGwsXHJcbiAgICBcImVtYWlsXCI6IFwiXCIsXHJcbiAgICBcInBob25lXCI6IFwiXCIsXHJcbiAgICBcImFkZHJlc3NcIjogXCJcIixcclxuICAgIFwiaW5jb21lXCI6IFwiXCJcclxuICB9KVxyXG5cclxuICBjb25zdCBbbW9kYWxFZGl0VmlzaWJsZSwgc2V0TW9kYWxFZGl0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2Fkdmlzb3IvJHtpZH1gKVxyXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAudGhlbihkYXRhSnNvbiA9PiB7XHJcbiAgICAgICAgc2V0QWR2aXNvcihkYXRhSnNvbilcclxuICAgICAgfSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2Fkdmlzb3IvJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIilcclxuXHJcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIGFsIGVsaW1pbmFyIGVsIHJlY3Vyc286ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YTogYW55KSA9PiB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAxL2Fkdmlzb3IvJHtpZH1gOyAvLyBVUkwgZGUgbGEgQVBJIG8gZW5kcG9pbnRcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsIC8vIE3DqXRvZG8gUFVUXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJywgLy8gQXNlZ3VyYSBxdWUgZWwgY29udGVuaWRvIHNlIGVudsOtZSBjb21vIEpTT05cclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLCAvLyBDb252aWVydGUgZWwgb2JqZXRvIGBkYXRhYCBlbiB1bmEgY2FkZW5hIEpTT05cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgL2Fkdmlzb3JzLyR7aWR9YFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBhZ2VMYXlvdXR9PlxyXG4gICAgICA8QWR2aXNvckZvcm1cclxuICAgICAgICB2aXNpYmxlPXttb2RhbEVkaXRWaXNpYmxlfVxyXG4gICAgICAgIHNldFZpc2libGU9e3NldE1vZGFsRWRpdFZpc2libGV9XHJcbiAgICAgICAgYWR2aXNvcj17YWR2aXNvcn1cclxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb0NvbnRhaW5lcn0+XHJcbiAgICAgICAgPGltZyBzcmM9XCIvem9lX2xvZ28uc3ZnXCIgd2lkdGg9XCIxMDBweFwiIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZVNlY3Rpb259PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaG90b31cclxuICAgICAgICAgIHNyYz17YWR2aXNvci5hdmF0YXIgPyBhZHZpc29yLmF2YXRhciA6IFwiL2VtcHR5X3Byb2ZpbGVfcGhvdG8ucG5nXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnlEYW5nZXJCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzZWNvbmRhcnlCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbEVkaXRWaXNpYmxlKHRydWUpfT5FZGl0IEFkdmlzb3I8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+e2Fkdmlzb3IgJiYgPD57YWR2aXNvci5uYW1lfTwvPn08L2Rpdj5cclxuICAgICAgPGRpdj48Yj5JRCBOdW1iZXI8L2I+SUQ6IDk4Ny0zNDUtMzI8L2Rpdj5cclxuICAgICAgPGRpdj48Yj5JbmNvbWU8L2I+e2Fkdmlzb3IgJiYgPD57YWR2aXNvci5pbmNvbWV9PC8+fTwvZGl2PlxyXG4gICAgICA8ZGl2PjxiPkVkdWNhdGlvbjwvYj5Ob3J0aGVhc3Rlcm4gVW5pdmVyc2l0eTwvZGl2PlxyXG4gICAgICA8ZGl2PjxiPlRpdGxlPC9iPkZpbmFuY2lhbCBNYW5hZ2VtZW50PC9kaXY+XHJcbiAgICAgIDxkaXY+PGI+WWVhcnMgb2YgRXhwZXJpZW5jZTwvYj4rMTA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZHZpc29yUGFnZTsiXSwibmFtZXMiOlsiQWR2aXNvckZvcm0iLCJ1c2VQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkFkdmlzb3JQYWdlIiwiaWQiLCJyb3V0ZXIiLCJhZHZpc29yIiwic2V0QWR2aXNvciIsIm1vZGFsRWRpdFZpc2libGUiLCJzZXRNb2RhbEVkaXRWaXNpYmxlIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJkYXRhSnNvbiIsImhhbmRsZURlbGV0ZSIsInJlc3BvbnNlIiwibWV0aG9kIiwiaGVhZGVycyIsInB1c2giLCJvayIsIkVycm9yIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwib25TdWJtaXQiLCJ1cmwiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsInBhZ2VMYXlvdXQiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImxvZ29Db250YWluZXIiLCJpbWciLCJzcmMiLCJ3aWR0aCIsInN0eWxlIiwiY3Vyc29yIiwib25DbGljayIsImltYWdlU2VjdGlvbiIsInByb2ZpbGVQaG90byIsImF2YXRhciIsImJ1dHRvbiIsIm5hbWUiLCJiIiwiaW5jb21lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/advisors/[id]/page.tsx\n"));

/***/ })

});