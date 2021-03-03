import { BiDetail } from "react-icons/bi";
export default {
    title: "Item",
    name: "category",
    type: "object",
    icon: BiDetail,
    fieldsets: [
        {
            title: "Name",
            name: "name",
            options: {
                columns: 2,
            },
        },
        {
            title: "Type",
            name: "type",
            options: {
                columns: 2,
            },
        },
        {
            title: "Location",
            name: "location",
            options: {
                columns: 2,
            },
        },
        {
            title: "Date",
            name: "date",
            options: {
                columns: 2,
            },
        },
    ],
    fields: [
        {
            title: "Title",
            name: "name",
            type: "string",
            fieldset: "name",
        },
        {
            title: "Subtitle",
            name: "name_sub",
            type: "string",
            fieldset: "name",
        },

        {
            title: "Title",
            name: "type",
            type: "string",
            fieldset: "type",
        },
        {
            title: "Subtitle",
            name: "type_sub",
            type: "string",
            fieldset: "type",
        },

        {
            title: "Title",
            name: "location",
            type: "string",
            fieldset: "location",
        },
        {
            title: "Subtitle",
            name: "location_sub",
            type: "string",
            fieldset: "location",
        },

        {
            title: "Title",
            name: "date",
            type: "string",
            fieldset: "date",
        },
        {
            title: "Subtitle",
            name: "date_sub",
            type: "string",
            fieldset: "date",
        },
    ],
};