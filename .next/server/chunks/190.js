exports.id = 190;
exports.ids = [190];
exports.modules = {

/***/ 132:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Layout_header__0i3Wc",
	"homeLink": "Layout_homeLink__dHfGn",
	"container": "Layout_container__SMigd",
	"footer": "Layout_footer__4N6lu",
	"main": "Layout_main__74tUZ"
};


/***/ }),

/***/ 59:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/util/constants.js
var constants = __webpack_require__(918);
;// CONCATENATED MODULE: ./src/components/SEO.js



function SEO({ title ='Alexandre Charlier' , description ="profil et blog d'Alexandre Charlier, developpeur web pour les sites e-commerce ou vitrine, react, angular, javascript" , url =constants/* SITE_DOMAIN */.T , // image = 'https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?q=85&fm=jpg&fit=crop&w=1600&h=800',
creator ='Alexandre charlier' ,  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: title
            }, "title"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical",
                href: url
            }, "canonical"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:type",
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:url",
                property: "og:url",
                content: url
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "og:description",
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:dnt",
                content: "on"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:creator",
                content: creator
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: description
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/components/navigation.js

function navigation() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        className: "ncn-menu-c",
        "data-close-click-outside-curtain": true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "ncn-menulink ncn-menulink-community",
                children: "Community"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "ncn-menulink ncn-menulink-forums",
                children: "Support Forums"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "ncn-menulink ncn-menulink-explorers",
                children: "Learning Platform"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "#",
                className: "ncn-menulink ncn-menulink-podcast",
                "aria-current": "page",
                children: "Podcast"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://swag.netlify.com/",
                className: "ncn-menulink ncn-menulink-swag",
                children: "Swag"
            })
        ]
    }));
};

// EXTERNAL MODULE: ./src/styles/Components/Layout.module.css
var Layout_module = __webpack_require__(132);
var Layout_module_default = /*#__PURE__*/__webpack_require__.n(Layout_module);
;// CONCATENATED MODULE: ./src/components/Layout.js


//import Navigation from '@components/Navigation';
//import Footer from '@components/Footer';


function Layout({ children , navtheme , pageMeta  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Layout_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SEO, {
                title: pageMeta.title,
                description: pageMeta.description,
                url: pageMeta.url,
                image: pageMeta.image,
                creator: pageMeta.creator
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(navigation, {
                    theme: navtheme
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            })
        ]
    }));
};


/***/ }),

/***/ 918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ SITE_DOMAIN)
/* harmony export */ });
const SITE_DOMAIN = 'https://alexandrecharlier.fr';


/***/ })

};
;