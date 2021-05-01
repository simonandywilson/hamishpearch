import { BiFolder } from "react-icons/bi";
export default {
    title: "Item",
    name: "category",
    type: "object",
    icon: BiFolder,
    fields: [
        {
            title: "Title",
            name: "title",
            type: "title",
            description: "Column 1",
            validation: (Rule) => Rule.max(1),
            options: {
                sortable: false,
            },
        },
        {
            title: "Type",
            name: "kind",
            type: "kind",
            description: "Column 2 | Hidden on mobile",
            validation: (Rule) => Rule.max(1),
            options: {
                sortable: false,
            },
        },
        {
            title: "Location",
            name: "location",
            type: "location",
            description: "Column 2 | Hidden on mobile",
            validation: (Rule) => Rule.max(1),
            options: {
                sortable: false,
            },
        },
        {
            title: "Date",
            name: "date",
            type: "string",
            description: "Column 4",
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "date",
        },
        prepare(selection) {
            const { title, subtitle } = selection;
            return {
                title: title[0].title,
                subtitle: subtitle,
            };
        },
    },
};