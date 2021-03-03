import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import settings from "./documents/settings"
import tags from "./objects/settings/tags"

import about from "./documents/about"
import cv from "./objects/about/cv"
import categories from "./objects/about/categories"
import category from "./objects/about/category";
import contact from "./objects/about/contact"
import social from "./objects/about/social";

import project from "./documents/project"
import gallery from "./objects/project/gallery"
import description from "./objects/project/description"
import images from "./objects/project/images"
import basic from "./objects/project/basic"
import full from "./objects/project/full"

export default createSchema({
    name: "mySchema",
    types: schemaTypes.concat([
        settings,
        tags,

        about,
        cv,
        categories,
        category,
        contact,
        social,

        project,
        gallery,
        description,
        images,
        basic,
        full,
    ]),
});
