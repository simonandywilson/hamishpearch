import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import seo from "./documents/seo"

import about from "./documents/about"
import cv from "./objects/about/cv"
import categories from "./objects/about/categories"
import category from "./objects/about/category";
import title from "./objects/about/title";
import kind from "./objects/about/kind";
import location from "./objects/about/location";
import link from "./objects/about/link";
import contact from "./objects/about/contact"
import social from "./objects/about/social";

import project from "./documents/project"
import slider from "./objects/project/slider"
import slide from "./objects/project/slide";
import description from "./objects/project/description";
import sort from "./objects/project/sort"
import img from "./objects/project/img";
import vid from "./objects/project/vid";




export default createSchema({
    name: "mySchema",
    types: schemaTypes.concat([
        seo,

        about,
        cv,
        categories,
        category,
        title,
        kind,
        location,
        link,
        contact,
        social,

        project,
        slider,
        slide,
        description,
        sort,
        img,
        vid,
    ]),
});
