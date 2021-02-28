export default {
    title: "About",
    name: "about",
    type: "document",
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fieldsets: [{
        name: "bio",
        title: "Bio",
        options: {
            collapsible: true,
            collapsed: false,
            columns: 2
        }
    },
    {
        name: "contact",
        title: "Contact & Social",
        options: {
            collapsible: true,
            collapsed: false,
        }
    },
],
    fields: [{
            // Title
            title: "Name",
            name: "name",
            type: "string",
            description: "Column 1.",
            fieldset: "bio"
        },
        {
            // Occupation
            title: "Occupation",
            name: "occupation",
            type: "string",
            description: "Column 2.",
            fieldset: "bio"
        },
        {
            // Location
            title: "Location",
            name: "location",
            type: "string",
            description: "Column 3.",
            fieldset: "bio"
        },
        {
            // DOB
            title: "Date of Birth",
            name: "dob",
            type: "string",
            description: "Column 4.",
            fieldset: "bio"
        },
        {
            title: "CV",
            name: "cv",
            type: "cv",
        },
        {
            title: "Link 1",
            name: "link1",
            type: "social",
            fieldset: "contact"
        },
        {
            title: "Link 2",
            name: "link2",
            type: "social",
            fieldset: "contact"
        },
        {
            title: "Link 3",
            name: "link3",
            type: "social",
            fieldset: "contact"
        },
        {
            title: "Link 4",
            name: "link4",
            type: "social",
            fieldset: "contact"
        }
    ]
}