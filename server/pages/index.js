(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 321:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/TopBar.tsx
var TopBar = __webpack_require__(5440);
// EXTERNAL MODULE: ./src/components/CategoryHeading.module.scss
var CategoryHeading_module = __webpack_require__(4656);
var CategoryHeading_module_default = /*#__PURE__*/__webpack_require__.n(CategoryHeading_module);
;// CONCATENATED MODULE: ./src/components/CategoryHeading.tsx


function CategoryHeading(props) {
  return /*#__PURE__*/jsx_runtime_.jsx("h2", {
    className: (CategoryHeading_module_default()).categoryHeading,
    children: props.children
  });
}
;// CONCATENATED MODULE: external "classnames"
var external_classnames_namespaceObject = require("classnames");;
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: external "react-lazy-load-image-component"
var external_react_lazy_load_image_component_namespaceObject = require("react-lazy-load-image-component");;
// EXTERNAL MODULE: ./src/components/IconTile.module.scss
var IconTile_module = __webpack_require__(2136);
var IconTile_module_default = /*#__PURE__*/__webpack_require__.n(IconTile_module);
;// CONCATENATED MODULE: ./src/components/IconTile.tsx






function IconTile(props) {
  const classes = external_classnames_default()((IconTile_module_default()).iconGroup, {
    [(IconTile_module_default()).hidden]: !props.visible
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: classes,
    onClick: props.onClick,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (IconTile_module_default()).iconItem,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (IconTile_module_default()).iconThumb,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_lazy_load_image_component_namespaceObject.LazyLoadImage, {
          src: `icons/svg/filled/${props.icon.path}`,
          width: "48",
          height: "48",
          alt: `${props.icon.title} outline icon`,
          effect: "blur"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (IconTile_module_default()).iconTitle,
        children: props.icon.title
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (IconTile_module_default()).iconItem,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (IconTile_module_default()).iconThumb,
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `icons/svg/outline/${props.icon.path}`,
          width: "48",
          height: "48",
          alt: `${props.icon.title} outline icon`
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (IconTile_module_default()).iconTitle,
        children: props.icon.title
      })]
    })]
  });
}
// EXTERNAL MODULE: ./src/components/IconTileModal.module.scss
var IconTileModal_module = __webpack_require__(7676);
var IconTileModal_module_default = /*#__PURE__*/__webpack_require__.n(IconTileModal_module);
// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__(9997);
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);
;// CONCATENATED MODULE: ./src/components/IconTileModal.tsx





function IconTileModal(props) {
  return /*#__PURE__*/jsx_runtime_.jsx((external_react_modal_default()), {
    isOpen: props.isOpen,
    overlayClassName: "modal__overlay",
    bodyOpenClassName: "modal--open",
    onRequestClose: props.onClose,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: props.onClose,
        children: "Close"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (IconTileModal_module_default()).iconTitle,
        children: props.icon.title
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        href: `icons/svg/filled/${props.icon.path}`,
        download: props.icon.fileName,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `icons/svg/filled/${props.icon.path}`,
          width: "48",
          height: "48",
          alt: `${props.icon.title} outline icon`
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Download SVG"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        href: `icons/svg/outline/${props.icon.path}`,
        download: props.icon.fileName,
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: `icons/svg/outline/${props.icon.path}`,
          width: "48",
          height: "48",
          alt: `${props.icon.title} outline icon`
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Download SVG"
        })]
      })]
    })
  });
}
// EXTERNAL MODULE: ./src/pages/index.module.scss
var index_module = __webpack_require__(4755);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: external "fs"
var external_fs_namespaceObject = require("fs");;
;// CONCATENATED MODULE: external "path"
var external_path_namespaceObject = require("path");;
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/icons.tsx


const ICONS_DIRECTORY = external_path_default().join(process.cwd(), 'public', 'icons', 'svg', 'filled');
async function getCategoriesAndIcons() {
  const dirNames = await external_fs_namespaceObject.promises.readdir(ICONS_DIRECTORY);
  return await Promise.all(dirNames.map(async dirName => {
    return {
      title: dirName,
      icons: await getIcons(dirName)
    };
  }));
}

async function getIcons(dirName) {
  const dirPath = external_path_default().join(ICONS_DIRECTORY, dirName);
  const fileNames = await external_fs_namespaceObject.promises.readdir(dirPath);
  return await Promise.all(fileNames.map(async fileName => {
    const fullPath = external_path_default().join(dirName, fileName);
    return {
      title: fileName.replace(/\.[^/.]+$/, ''),
      fileName,
      path: fullPath
    };
  }));
}
;// CONCATENATED MODULE: ./src/pages/index.tsx










function Home({
  categories
}) {
  const {
    0: modalIcon,
    1: setModalIcon
  } = (0,external_react_.useState)(undefined);
  const {
    0: query,
    1: setQuery
  } = (0,external_react_.useState)();
  const iconsToRender = (0,external_react_.useMemo)(() => {
    const filteredIcons = [];

    if (!query) {
      return filteredIcons;
    }

    const lowerCaseQuery = query.toLowerCase();
    categories.forEach(category => {
      category.icons.forEach(icon => {
        if (icon.title.toLowerCase().includes(lowerCaseQuery)) {
          filteredIcons.push(icon);
        }
      });
    });
    return filteredIcons;
  }, [query, categories]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Health Icons"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:site_name",
        content: "Health icons"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:title",
        content: "Health icons"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:description",
        content: "Free, open source health icons. Use in your next commerical or personal project. Editing is ok. Republishing is ok. No need to give credit."
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:url",
        content: "http://healthicons.org/"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image",
        content: "http://healthicons.org/og_image.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:secure_url",
        content: "https://healthicons.org/og_image.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:width",
        content: "1280"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "og:image:height",
        content: "640"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:card",
        content: "summary_large_image"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:image",
        content: "https://healthicons.org/og_image.png"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        property: "twitter:site",
        content: "@health_icons"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TopBar/* TopBar */.D, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      id: "main",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).box,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "Free, open source health icons"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
          children: ["Free for use in your next commerical or personal project.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Editing is ok. Republishing is ok. No need to give credit."]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        className: (index_module_default()).filterBox,
        children: /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          className: (index_module_default()).filterBoxInput,
          placeholder: "Search for icons...",
          onChange: e => setQuery(e.target.value)
        })
      }), categories.map(category => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [(!query || category.icons.some(icon => {
          return iconsToRender.includes(icon);
        })) && /*#__PURE__*/jsx_runtime_.jsx(CategoryHeading, {
          children: category.title
        }, category.title), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (index_module_default()).iconGrid,
          children: category.icons.map(icon => /*#__PURE__*/jsx_runtime_.jsx(IconTile, {
            icon: icon,
            visible: !query || iconsToRender.includes(icon),
            onClick: () => {
              setModalIcon(icon);
            }
          }, icon.title))
        })]
      }, category.title)), modalIcon && /*#__PURE__*/jsx_runtime_.jsx(IconTileModal, {
        icon: modalIcon,
        isOpen: modalIcon !== undefined,
        onClose: () => {
          setModalIcon(undefined);
        }
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
      children: ["All icons are licensed under an open source", ' ', /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/about#license",
        className: (index_module_default()).link,
        children: "MIT License"
      })]
    })]
  });
}
const getStaticProps = async () => {
  const categories = await getCategoriesAndIcons();
  return {
    props: {
      categories
    }
  };
};

/***/ }),

/***/ 4656:
/***/ (function(module) {

// Exports
module.exports = {
	"categoryHeading": "CategoryHeading_categoryHeading__HEvhE"
};


/***/ }),

/***/ 2136:
/***/ (function(module) {

// Exports
module.exports = {
	"hidden": "IconTile_hidden__11j3i",
	"iconGroup": "IconTile_iconGroup__3CqO9",
	"iconItem": "IconTile_iconItem__1gXgE",
	"iconThumb": "IconTile_iconThumb__1TZtS",
	"iconTitle": "IconTile_iconTitle__1n89d"
};


/***/ }),

/***/ 7676:
/***/ (function(module) {

// Exports
module.exports = {
	"iconTitle": "IconTileModal_iconTitle__2rr3y"
};


/***/ }),

/***/ 4755:
/***/ (function(module) {

// Exports
module.exports = {
	"box": "index_box__3NDYN",
	"iconGrid": "index_iconGrid__jIua1",
	"filterBox": "index_filterBox__19CMh",
	"filterBoxInput": "index_filterBoxInput__1ZMIE"
};


/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9997:
/***/ (function(module) {

"use strict";
module.exports = require("react-modal");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,65], function() { return __webpack_exec__(321); });
module.exports = __webpack_exports__;

})();