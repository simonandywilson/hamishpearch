export default {
    title: "About",
    name: "about",
    type: "document",
    __experimental_actions: [/*'create',*/ "update", /*'delete',*/ "publish"],
    fieldsets: [
        {
            name: "bio",
            title: "Bio",
            options: {
                columns: 2,
            },
        },
        {
            name: "contact",
            title: "Contact & Social",
            options: {
                collapsible: true,
                collapsed: false,
            },
        },
    ],
    fields: [
        {
            // Column 1
            title: "Column 1",
            name: "columnOne",
            type: "string",
            fieldset: "bio",
        },
        {
            // Column 2
            title: "Column 2",
            name: "columnTwo",
            type: "string",
            fieldset: "bio",
        },
        {
            // Column 3
            title: "Column 3",
            name: "columnThree",
            type: "string",
            fieldset: "bio",
        },
        {
            // Column 4
            title: "Column 4",
            name: "columnFour",
            type: "string",
            readOnly: "true",
            fieldset: "bio",
        },
        {
            // CV
            title: "CV",
            name: "cv",
            type: "cv",
        },
        {
            // Contact
            title: "Contact",
            name: "contact",
            type: "contact",
            validation: (Rule) => Rule.max(4),
        },
    ],
};