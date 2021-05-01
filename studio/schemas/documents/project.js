export default {
    title: "Project",
    name: "project",
    type: "document",
    fieldsets: [
        {
            name: "information",
            title: "Information",
            options: {
                collapsible: false,
                collapsed: false,
                columns: 2,
            },
        },
    ],
    fields: [
        {
            // Title
            title: "Title",
            name: "title",
            type: "string",
            fieldset: "information",
        },
        // Location
        {
            title: "Location",
            name: "location",
            type: "string",
            fieldset: "information",
        },
        // Date
        {
            title: "Date",
            name: "date",
            type: "date",
            options: {
                dateFormat: "yyyy",
            },
            fieldset: "information",
        },
        // Image Slider
        {
            title: "Slider",
            name: "slider",
            type: "slider",
        },
        // Description
        {
            title: "Description",
            name: "description",
            type: "description",
            description:
                "Use Shift+Return to add a line break without adding paragraph formatting and spacing.",
        },
        // Images
        {
            title: "Content",
            name: "content",
            type: "sort",
        },
        // Order fields,
        {
            name: "order",
            title: "Order",
            type: "number",
            hidden: true,
        },
    ],
    preview: {
        select: {
            title: "title",
            slider: "slider",
            date: "date",
        },
        prepare(selection) {
            const { title, slider, date } = selection;
            return {
                title: title ?? "Project",
                media: slider?.[0]?.asset,
                subtitle: date?.split("-")?.[0],
            };
        },
    },
};
