"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/advisors/page",{

/***/ "(app-pages-browser)/./app/advisors/page.tsx":
/*!*******************************!*\
  !*** ./app/advisors/page.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_advisorForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/advisorForm */ \"(app-pages-browser)/./components/advisorForm.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/app/advisors/page.module.css */ \"(app-pages-browser)/./styles/app/advisors/page.module.css\");\n/* harmony import */ var _styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nvar Sort = /*#__PURE__*/ function(Sort) {\n    Sort[Sort[\"ASD\"] = 0] = \"ASD\";\n    Sort[Sort[\"DESC\"] = 1] = \"DESC\";\n    return Sort;\n}(Sort || {});\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const search = searchParams.get('income');\n    const sorting = searchParams.get('sorting');\n    const sortingParameter = searchParams.get('sorting');\n    const page = searchParams.get('page');\n    const [advisors, setAdvisors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [modalCreateVisible, setModalCreateVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const sortAdvisors = (advisors, ascending, sortingParameter)=>{\n        advisors.sort((advisor1, advisor2)=>{\n            const result = advisor1[sortingParameter] > advisor2[sortingParameter] ? 1 : -1;\n            return ascending ? result : result * -1;\n        });\n    };\n    const filterIncome = (advisorsList)=>{\n        return advisorsList.filter((advisor)=>{\n            const cotaInferior = parseInt(search ? search : \"0\") - 10000;\n            const cotaSuperior = parseInt(search ? search : \"0\") + 10000;\n            const advisorIncome = parseInt(advisor.income ? advisor.income : \"0\");\n            return advisorIncome >= cotaInferior && advisorIncome <= cotaSuperior;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            console.log(sorting);\n            fetch(\"http://localhost:3001/advisor\").then({\n                \"Page.useEffect\": (data)=>data.json()\n            }[\"Page.useEffect\"]).then({\n                \"Page.useEffect\": (dataJson)=>{\n                    const resultFilterByIncome = filterIncome(dataJson);\n                    if (sortingParameter !== \"default\" && sorting !== \"default\") {\n                        sortAdvisors(resultFilterByIncome, sorting === \"ASC\", sortingParameter);\n                        console.log(resultFilterByIncome);\n                    }\n                    setAdvisors(resultFilterByIncome);\n                }\n            }[\"Page.useEffect\"]);\n        }\n    }[\"Page.useEffect\"], []);\n    const emptyAdvisor = {\n        \"id\": \"\",\n        \"name\": \"\",\n        \"avatar\": null,\n        \"email\": \"\",\n        \"phone\": \"\",\n        \"address\": \"\",\n        \"income\": \"\"\n    };\n    const onSubmit = async (data)=>{\n        const url = 'http://localhost:3001/advisor';\n        try {\n            const response = await fetch(url, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(data)\n            });\n            if (!response.ok) {\n                throw new Error('Network response was not ok');\n            }\n            const result = await response.json();\n            router.push(\"/advisors/\".concat(result.id));\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageLayout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_advisorForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                visible: modalCreateVisible,\n                setVisible: setModalCreateVisible,\n                advisor: emptyAdvisor,\n                onSubmit: onSubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().logoContainer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/zoe_logo.svg\",\n                    width: \"100px\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Advisors\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"primaryButton\",\n                                onClick: ()=>setModalCreateVisible(true),\n                                children: \"+ Add New Advisor\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().table),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableHeader),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Advisors found\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableRow),\n                                        style: {\n                                            backgroundColor: \"rgba(0,0,0,0.25)\"\n                                        },\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableColumn),\n                                                children: \"Advisor Name\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                                lineNumber: 119,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableColumn),\n                                                children: \"Income\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                                lineNumber: 120,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 13\n                                    }, this),\n                                    advisors.map((advisor, index)=>{\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableRow),\n                                            title: \"See advisor Details\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableColumn),\n                                                    onClick: ()=>router.push(\"/advisors/\".concat(advisor.id)),\n                                                    children: advisor.name\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableColumn),\n                                                    onClick: ()=>router.push(\"/advisors/\".concat(advisor.id)),\n                                                    children: [\n                                                        \"$ \",\n                                                        advisor.income\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                                    lineNumber: 131,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, index, true, {\n                                            fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                            lineNumber: 124,\n                                            columnNumber: 17\n                                        }, this);\n                                    })\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                lineNumber: 105,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n        lineNumber: 95,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"tgKSWiOyTBhJtgSOOgIbQN/BokE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZHZpc29ycy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ1U7QUFDVjtBQUVhO0FBWS9ELGtDQUFLTzs7O1dBQUFBO0VBQUFBO0FBRVUsU0FBU0M7O0lBRXRCLE1BQU1DLFNBQVNQLDBEQUFTQTtJQUV4QixNQUFNUSxlQUFlVCxnRUFBZUE7SUFDcEMsTUFBTVUsU0FBU0QsYUFBYUUsR0FBRyxDQUFDO0lBQ2hDLE1BQU1DLFVBQVVILGFBQWFFLEdBQUcsQ0FBQztJQUNqQyxNQUFNRSxtQkFBbUJKLGFBQWFFLEdBQUcsQ0FBQztJQUMxQyxNQUFNRyxPQUFPTCxhQUFhRSxHQUFHLENBQUM7SUFFOUIsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFZLEVBQUU7SUFDdEQsTUFBTSxDQUFDYSxvQkFBb0JDLHNCQUFzQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUU3RCxNQUFNZSxlQUFlLENBQTBCSixVQUFvQkssV0FBb0JQO1FBQ3JGRSxTQUFTTSxJQUFJLENBQUMsQ0FBQ0MsVUFBa0JDO1lBQy9CLE1BQU1DLFNBQVMsUUFBUyxDQUFDWCxpQkFBaUIsR0FBR1UsUUFBUSxDQUFDVixpQkFBaUIsR0FBSSxJQUFJLENBQUM7WUFDaEYsT0FBT08sWUFBWUksU0FBU0EsU0FBTyxDQUFDO1FBQ3RDO0lBQ0Y7SUFFQSxNQUFNQyxlQUFlLENBQUNDO1FBQ3BCLE9BQU9BLGFBQWFDLE1BQU0sQ0FBQyxDQUFDQztZQUMxQixNQUFNQyxlQUFlQyxTQUFTcEIsU0FBU0EsU0FBTyxPQUFPO1lBQ3JELE1BQU1xQixlQUFlRCxTQUFTcEIsU0FBU0EsU0FBTyxPQUFRO1lBQ3RELE1BQU1zQixnQkFBZ0JGLFNBQVNGLFFBQVFLLE1BQU0sR0FBR0wsUUFBUUssTUFBTSxHQUFHO1lBQ2pFLE9BQU9ELGlCQUFpQkgsZ0JBQWdCRyxpQkFBaUJEO1FBQzNEO0lBQ0Y7SUFFQTVCLGdEQUFTQTswQkFBQztZ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Ozs7Ozs7OztBQU9aO0dBOUh3QnhFOztRQUVQTixzREFBU0E7UUFFSEQsNERBQWVBOzs7S0FKZE8iLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWlndWVsLmFjb3N0YVxcRG93bmxvYWRzXFx6b2UtZnJvbnQtZW5kLXRlc3RcXHRlc3RcXGFwcFxcYWR2aXNvcnNcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgQWR2aXNvckZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9hZHZpc29yRm9ybVwiXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYXBwL2Fkdmlzb3JzL3BhZ2UubW9kdWxlLmNzc1wiO1xuXG5pbnRlcmZhY2UgQWR2aXNvciB7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBhdmF0YXI/OiBzdHJpbmc7XG4gIGVtYWlsPzogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgYWRkcmVzcz86IHN0cmluZztcbiAgaW5jb21lPzogc3RyaW5nO1xufVxuXG5lbnVtIFNvcnQge0FTRCwgREVTQ31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpXG4gIGNvbnN0IHNlYXJjaCA9IHNlYXJjaFBhcmFtcy5nZXQoJ2luY29tZScpXG4gIGNvbnN0IHNvcnRpbmcgPSBzZWFyY2hQYXJhbXMuZ2V0KCdzb3J0aW5nJyk7XG4gIGNvbnN0IHNvcnRpbmdQYXJhbWV0ZXIgPSBzZWFyY2hQYXJhbXMuZ2V0KCdzb3J0aW5nJylcbiAgY29uc3QgcGFnZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ3BhZ2UnKVxuXG4gIGNvbnN0IFthZHZpc29ycywgc2V0QWR2aXNvcnNdID0gdXNlU3RhdGU8QWR2aXNvcltdPihbXSlcbiAgY29uc3QgW21vZGFsQ3JlYXRlVmlzaWJsZSwgc2V0TW9kYWxDcmVhdGVWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNvcnRBZHZpc29ycyA9IDxUIGV4dGVuZHMga2V5b2YgQWR2aXNvcj4oYWR2aXNvcnM6QWR2aXNvcltdLCBhc2NlbmRpbmc6IGJvb2xlYW4sIHNvcnRpbmdQYXJhbWV0ZXI6IFQpID0+IHtcbiAgICBhZHZpc29ycy5zb3J0KChhZHZpc29yMTpBZHZpc29yLCBhZHZpc29yMjpBZHZpc29yKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSAoYWR2aXNvcjFbc29ydGluZ1BhcmFtZXRlcl0gPiBhZHZpc29yMltzb3J0aW5nUGFyYW1ldGVyXSkgPyAxIDogLTE7XG4gICAgICByZXR1cm4gYXNjZW5kaW5nID8gcmVzdWx0IDogcmVzdWx0Ki0xXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGZpbHRlckluY29tZSA9IChhZHZpc29yc0xpc3Q6IEFkdmlzb3JbXSkgPT4ge1xuICAgIHJldHVybiBhZHZpc29yc0xpc3QuZmlsdGVyKChhZHZpc29yOkFkdmlzb3IpID0+IHtcbiAgICAgIGNvbnN0IGNvdGFJbmZlcmlvciA9IHBhcnNlSW50KHNlYXJjaCA/IHNlYXJjaDpcIjBcIikgLSAxMDAwMFxuICAgICAgY29uc3QgY290YVN1cGVyaW9yID0gcGFyc2VJbnQoc2VhcmNoID8gc2VhcmNoOlwiMFwiKSAgKyAxMDAwMFxuICAgICAgY29uc3QgYWR2aXNvckluY29tZSA9IHBhcnNlSW50KGFkdmlzb3IuaW5jb21lID8gYWR2aXNvci5pbmNvbWUgOiBcIjBcIilcbiAgICAgIHJldHVybiBhZHZpc29ySW5jb21lID49IGNvdGFJbmZlcmlvciAmJiBhZHZpc29ySW5jb21lIDw9IGNvdGFTdXBlcmlvclxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNvcnRpbmcpXG4gICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYWR2aXNvclwiKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGFKc29uID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0RmlsdGVyQnlJbmNvbWUgPSBmaWx0ZXJJbmNvbWUoZGF0YUpzb24pXG4gICAgICAgIGlmKHNvcnRpbmdQYXJhbWV0ZXIgIT09IFwiZGVmYXVsdFwiICYmIHNvcnRpbmcgIT09IFwiZGVmYXVsdFwiKXtcbiAgICAgICAgICBzb3J0QWR2aXNvcnMocmVzdWx0RmlsdGVyQnlJbmNvbWUsIHNvcnRpbmcgPT09IFwiQVNDXCIsIHNvcnRpbmdQYXJhbWV0ZXIpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0RmlsdGVyQnlJbmNvbWUpXG4gICAgICAgIH1cbiAgICAgICAgc2V0QWR2aXNvcnMocmVzdWx0RmlsdGVyQnlJbmNvbWUpXG4gICAgICB9KVxuICB9LCBbXSlcblxuICBjb25zdCBlbXB0eUFkdmlzb3IgPSB7XG4gICAgXCJpZFwiOiBcIlwiLFxuICAgIFwibmFtZVwiOiBcIlwiLFxuICAgIFwiYXZhdGFyXCI6IG51bGwsXG4gICAgXCJlbWFpbFwiOiBcIlwiLFxuICAgIFwicGhvbmVcIjogXCJcIixcbiAgICBcImFkZHJlc3NcIjogXCJcIixcbiAgICBcImluY29tZVwiOiBcIlwiXG4gIH1cblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhOiBhbnkpID0+IHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2Fkdmlzb3InO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICB9KTtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvYWR2aXNvcnMvJHtyZXN1bHQuaWR9YClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYWdlTGF5b3V0fT5cbiAgICAgIDxBZHZpc29yRm9ybVxuICAgICAgICB2aXNpYmxlPXttb2RhbENyZWF0ZVZpc2libGV9XG4gICAgICAgIHNldFZpc2libGU9e3NldE1vZGFsQ3JlYXRlVmlzaWJsZX1cbiAgICAgICAgYWR2aXNvcj17ZW1wdHlBZHZpc29yfVxuICAgICAgICBvblN1Ym1pdD17b25TdWJtaXR9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvQ29udGFpbmVyfT5cbiAgICAgICAgPGltZyBzcmM9XCIvem9lX2xvZ28uc3ZnXCIgd2lkdGg9XCIxMDBweFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgIDxoMT5BZHZpc29yczwvaDE+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwcmltYXJ5QnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0TW9kYWxDcmVhdGVWaXNpYmxlKHRydWUpfT5cbiAgICAgICAgICAgICsgQWRkIE5ldyBBZHZpc29yXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlSGVhZGVyfT5cbiAgICAgICAgICAgIDxoMj5BZHZpc29ycyBmb3VuZDwvaDI+XG4gICAgICAgICAgICA8aW5wdXQ+PC9pbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZVJvd30gc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwwLDAsMC4yNSlcIiB9fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUNvbHVtbn0+QWR2aXNvciBOYW1lPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb2x1bW59PkluY29tZTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7YWR2aXNvcnMubWFwKChhZHZpc29yLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMudGFibGVSb3d9IHRpdGxlPVwiU2VlIGFkdmlzb3IgRGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUNvbHVtbn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PnJvdXRlci5wdXNoKGAvYWR2aXNvcnMvJHthZHZpc29yLmlkfWApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7YWR2aXNvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29sdW1ufVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKT0+cm91dGVyLnB1c2goYC9hZHZpc29ycy8ke2Fkdmlzb3IuaWR9YCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICQge2Fkdmlzb3IuaW5jb21lfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiQWR2aXNvckZvcm0iLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU29ydCIsIlBhZ2UiLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJnZXQiLCJzb3J0aW5nIiwic29ydGluZ1BhcmFtZXRlciIsInBhZ2UiLCJhZHZpc29ycyIsInNldEFkdmlzb3JzIiwibW9kYWxDcmVhdGVWaXNpYmxlIiwic2V0TW9kYWxDcmVhdGVWaXNpYmxlIiwic29ydEFkdmlzb3JzIiwiYXNjZW5kaW5nIiwic29ydCIsImFkdmlzb3IxIiwiYWR2aXNvcjIiLCJyZXN1bHQiLCJmaWx0ZXJJbmNvbWUiLCJhZHZpc29yc0xpc3QiLCJmaWx0ZXIiLCJhZHZpc29yIiwiY290YUluZmVyaW9yIiwicGFyc2VJbnQiLCJjb3RhU3VwZXJpb3IiLCJhZHZpc29ySW5jb21lIiwiaW5jb21lIiwiY29uc29sZSIsImxvZyIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwiZGF0YUpzb24iLCJyZXN1bHRGaWx0ZXJCeUluY29tZSIsImVtcHR5QWR2aXNvciIsIm9uU3VibWl0IiwidXJsIiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicHVzaCIsImlkIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJwYWdlTGF5b3V0IiwidmlzaWJsZSIsInNldFZpc2libGUiLCJsb2dvQ29udGFpbmVyIiwiaW1nIiwic3JjIiwid2lkdGgiLCJjb250YWluZXIiLCJoZWFkZXIiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ0YWJsZSIsInRhYmxlSGVhZGVyIiwiaDIiLCJpbnB1dCIsInRhYmxlUm93Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0YWJsZUNvbHVtbiIsIm1hcCIsImluZGV4IiwidGl0bGUiLCJuYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/advisors/page.tsx\n"));

/***/ })

});