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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_advisorForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/advisorForm */ \"(app-pages-browser)/./components/advisorForm.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/app/advisors/page.module.css */ \"(app-pages-browser)/./styles/app/advisors/page.module.css\");\n/* harmony import */ var _styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Page() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const search = searchParams.get('income');\n    const [advisors, setAdvisors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [modalCreateVisible, setModalCreateVisible] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const filterIncome = (advisorsList)=>{\n        return advisorsList.filter((advisor)=>{\n            const cotaInferior = search - 10000;\n            const cotaSuperior = search + 10000;\n            return advisor.income >= cotaInferior && advisor.income <= cotaSuperior;\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Page.useEffect\": ()=>{\n            fetch(\"http://localhost:3001/advisor\").then({\n                \"Page.useEffect\": (data)=>data.json()\n            }[\"Page.useEffect\"]).then({\n                \"Page.useEffect\": (dataJson)=>{\n                    setAdvisors(filterIncome(dataJson));\n                }\n            }[\"Page.useEffect\"]);\n        }\n    }[\"Page.useEffect\"], []);\n    const emptyAdvisor = {\n        \"id\": \"\",\n        \"name\": \"\",\n        \"avatar\": null,\n        \"email\": \"\",\n        \"phone\": \"\",\n        \"address\": \"\",\n        \"income\": \"\"\n    };\n    const onSubmit = async (data)=>{\n        const url = 'http://localhost:3001/advisor'; // URL de la API o endpoint\n        try {\n            const response = await fetch(url, {\n                method: 'POST',\n                headers: {\n                    'Content-Type': 'application/json'\n                },\n                body: JSON.stringify(data)\n            });\n            if (!response.ok) {\n                throw new Error('Network response was not ok');\n            }\n            const result = await response.json(); // Convierte la respuesta a JSON\n            router.push(\"/advisors/\".concat(result.id));\n        } catch (error) {\n            console.error('Error:', error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().pageLayout),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_advisorForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                visible: modalCreateVisible,\n                setVisible: setModalCreateVisible,\n                advisor: emptyAdvisor,\n                onSubmit: onSubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/zoe_logo.svg\",\n                    width: \"100px\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_app_advisors_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Advisors\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setModalCreateVisible(true),\n                                children: \"Add advisor\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Advisors\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    advisors.map((advisor, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: advisor.name\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 19\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\miguel.acosta\\\\Downloads\\\\zoe-front-end-test\\\\test\\\\app\\\\advisors\\\\page.tsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"tgKSWiOyTBhJtgSOOgIbQN/BokE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hZHZpc29ycy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2tEO0FBQ1U7QUFDVjtBQUVhO0FBRWhELFNBQVNPOztJQUV0QixNQUFNQyxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTU8sZUFBZVIsZ0VBQWVBO0lBQ3BDLE1BQU1TLFNBQVNELGFBQWFFLEdBQUcsQ0FBQztJQUVoQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNTLG9CQUFvQkMsc0JBQXNCLEdBQUdWLCtDQUFRQSxDQUFDO0lBRzdELE1BQU1XLGVBQWUsQ0FBQ0M7UUFDcEIsT0FBT0EsYUFBYUMsTUFBTSxDQUFDLENBQUNDO1lBQzFCLE1BQU1DLGVBQWVWLFNBQVM7WUFDOUIsTUFBTVcsZUFBZVgsU0FBUztZQUM5QixPQUFPUyxRQUFRRyxNQUFNLElBQUlGLGdCQUFnQkQsUUFBUUcsTUFBTSxJQUFJRDtRQUM3RDtJQUNGO0lBRUFqQixnREFBU0E7MEJBQUM7WUFDUm1CLE1BQU0saUNBQ0hDLElBQUk7a0NBQUNDLENBQUFBLE9BQVFBLEtBQUtDLElBQUk7aUNBQ3RCRixJQUFJO2tDQUFDRyxDQUFBQTtvQkFDSmQsWUFBWUcsYUFBYVc7Z0JBQzNCOztRQUNKO3lCQUFHLEVBQUU7SUFFTCxNQUFNQyxlQUFlO1FBQ25CLE1BQU07UUFDTixRQUFRO1FBQ1IsVUFBVTtRQUNWLFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLFVBQVU7SUFDWjtJQUVBLE1BQU1DLFdBQVcsT0FBT0o7UUFDdEIsTUFBTUssTUFBTSxpQ0FBaUMsMkJBQTJCO1FBRXhFLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1SLE1BQU1PLEtBQUs7Z0JBQ2hDRSxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1g7WUFDdkI7WUFFQSxJQUFJLENBQUNNLFNBQVNNLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBQ0EsTUFBTUMsU0FBUyxNQUFNUixTQUFTTCxJQUFJLElBQUksZ0NBQWdDO1lBRXRFbEIsT0FBT2dDLElBQUksQ0FBQyxhQUF1QixPQUFWRCxPQUFPRSxFQUFFO1FBQ3BDLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsVUFBVUE7UUFDMUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXdkMsd0ZBQWlCOzswQkFDL0IsOERBQUNOLCtEQUFXQTtnQkFBQytDLFNBQVNqQztnQkFBb0JrQyxZQUFZakM7Z0JBQXVCSSxTQUFTUztnQkFBY0MsVUFBVUE7Ozs7OzswQkFDOUcsOERBQUNlO2dCQUFJQyxXQUFXdkMsb0ZBQWE7MEJBQzNCLDRFQUFDNEM7b0JBQUlDLEtBQUk7b0JBQWdCQyxPQUFNOzs7Ozs7Ozs7OzswQkFFakMsOERBQUNSO2dCQUFJQyxXQUFXdkMsdUZBQWdCOztrQ0FDOUIsOERBQUNzQzt3QkFBSVUsT0FBTzs0QkFBQ0MsU0FBUTs0QkFBUUMsWUFBVzt3QkFBUTs7MENBQzlDLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQztnQ0FBT0MsU0FBUyxJQUFNNUMsc0JBQXNCOzBDQUFPOzs7Ozs7Ozs7Ozs7a0NBSXRELDhEQUFDNkI7OzBDQUNDLDhEQUFDQTswQ0FBSTs7Ozs7OzBDQUNMLDhEQUFDZ0I7Ozs7Ozs7Ozs7O29CQUVGaEQsU0FBU2lELEdBQUcsQ0FBQyxDQUFDMUMsU0FBUzJDO3dCQUN0QixxQkFBUSw4REFBQ2xCO3NDQUFpQnpCLFFBQVE0QyxJQUFJOzJCQUFwQkQ7Ozs7O29CQUNwQjs7Ozs7Ozs7Ozs7OztBQUtSO0dBcEZ3QnZEOztRQUVQTCxzREFBU0E7UUFFSEQsNERBQWVBOzs7S0FKZE0iLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbWlndWVsLmFjb3N0YVxcRG93bmxvYWRzXFx6b2UtZnJvbnQtZW5kLXRlc3RcXHRlc3RcXGFwcFxcYWR2aXNvcnNcXHBhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgQWR2aXNvckZvcm0gZnJvbSBcIkAvY29tcG9uZW50cy9hZHZpc29yRm9ybVwiXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvYXBwL2Fkdmlzb3JzL3BhZ2UubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgY29uc3Qgc2VhcmNoID0gc2VhcmNoUGFyYW1zLmdldCgnaW5jb21lJylcblxuICBjb25zdCBbYWR2aXNvcnMsIHNldEFkdmlzb3JzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbbW9kYWxDcmVhdGVWaXNpYmxlLCBzZXRNb2RhbENyZWF0ZVZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICBjb25zdCBmaWx0ZXJJbmNvbWUgPSAoYWR2aXNvcnNMaXN0KSA9PiB7XG4gICAgcmV0dXJuIGFkdmlzb3JzTGlzdC5maWx0ZXIoKGFkdmlzb3IpID0+IHtcbiAgICAgIGNvbnN0IGNvdGFJbmZlcmlvciA9IHNlYXJjaCAtIDEwMDAwXG4gICAgICBjb25zdCBjb3RhU3VwZXJpb3IgPSBzZWFyY2ggKyAxMDAwMFxuICAgICAgcmV0dXJuIGFkdmlzb3IuaW5jb21lID49IGNvdGFJbmZlcmlvciAmJiBhZHZpc29yLmluY29tZSA8PSBjb3RhU3VwZXJpb3JcbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZHZpc29yXCIpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YUpzb24gPT4ge1xuICAgICAgICBzZXRBZHZpc29ycyhmaWx0ZXJJbmNvbWUoZGF0YUpzb24pKVxuICAgICAgfSlcbiAgfSwgW10pXG5cbiAgY29uc3QgZW1wdHlBZHZpc29yID0ge1xuICAgIFwiaWRcIjogXCJcIixcbiAgICBcIm5hbWVcIjogXCJcIixcbiAgICBcImF2YXRhclwiOiBudWxsLFxuICAgIFwiZW1haWxcIjogXCJcIixcbiAgICBcInBob25lXCI6IFwiXCIsXG4gICAgXCJhZGRyZXNzXCI6IFwiXCIsXG4gICAgXCJpbmNvbWVcIjogXCJcIlxuICB9XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YTogYW55KSA9PiB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hZHZpc29yJzsgLy8gVVJMIGRlIGxhIEFQSSBvIGVuZHBvaW50XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIE3DqXRvZG8gUFVUXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCAvLyBBc2VndXJhIHF1ZSBlbCBjb250ZW5pZG8gc2UgZW52w61lIGNvbW8gSlNPTlxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgLy8gQ29udmllcnRlIGVsIG9iamV0byBgZGF0YWAgZW4gdW5hIGNhZGVuYSBKU09OXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvaycpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpOyAvLyBDb252aWVydGUgbGEgcmVzcHVlc3RhIGEgSlNPTlxuXG4gICAgICByb3V0ZXIucHVzaChgL2Fkdmlzb3JzLyR7cmVzdWx0LmlkfWApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUxheW91dH0+XG4gICAgICA8QWR2aXNvckZvcm0gdmlzaWJsZT17bW9kYWxDcmVhdGVWaXNpYmxlfSBzZXRWaXNpYmxlPXtzZXRNb2RhbENyZWF0ZVZpc2libGV9IGFkdmlzb3I9e2VtcHR5QWR2aXNvcn0gb25TdWJtaXQ9e29uU3VibWl0fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8aW1nIHNyYz1cIi96b2VfbG9nby5zdmdcIiB3aWR0aD1cIjEwMHB4XCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIiwgYWxpZ25JdGVtczpcImNlbnRlclwifX0+XG4gICAgICAgICAgPGgxPkFkdmlzb3JzPC9oMT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsQ3JlYXRlVmlzaWJsZSh0cnVlKX0+QWRkIGFkdmlzb3I8L2J1dHRvbj5cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+QWR2aXNvcnM8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQ+PC9pbnB1dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthZHZpc29ycy5tYXAoKGFkdmlzb3IsIGluZGV4KSA9PiB7XG4gICAgICAgICAgcmV0dXJuICg8ZGl2IGtleT17aW5kZXh9PnthZHZpc29yLm5hbWV9PC9kaXY+KVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiQWR2aXNvckZvcm0iLCJ1c2VTZWFyY2hQYXJhbXMiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiUGFnZSIsInJvdXRlciIsInNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImdldCIsImFkdmlzb3JzIiwic2V0QWR2aXNvcnMiLCJtb2RhbENyZWF0ZVZpc2libGUiLCJzZXRNb2RhbENyZWF0ZVZpc2libGUiLCJmaWx0ZXJJbmNvbWUiLCJhZHZpc29yc0xpc3QiLCJmaWx0ZXIiLCJhZHZpc29yIiwiY290YUluZmVyaW9yIiwiY290YVN1cGVyaW9yIiwiaW5jb21lIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJkYXRhSnNvbiIsImVtcHR5QWR2aXNvciIsIm9uU3VibWl0IiwidXJsIiwicmVzcG9uc2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIkVycm9yIiwicmVzdWx0IiwicHVzaCIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwicGFnZUxheW91dCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGVhZGVyIiwiaW1nIiwic3JjIiwid2lkdGgiLCJjb250YWluZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiaW5wdXQiLCJtYXAiLCJpbmRleCIsIm5hbWUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/advisors/page.tsx\n"));

/***/ })

});