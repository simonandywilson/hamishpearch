export default {
    title: "Project",
    name: "project",
    type: "document",
    fieldsets: [
        {
            name: "homepage",
            title: "Project Information",
            options: {
                collapsible: true,
                collapsed: false,
                columns: 2,
            },
        },
        {
            name: "description",
            title: "Image Slider & Description",
            options: {
                collapsible: true,
                collapsed: false,
            },
        },
        {
            name: "images",
            title: "Project Images",
            options: {
                collapsible: true,
                collapsed: false,
            },
        },
        {
            name: "gallery",
            title: "Project Gallery",
            options: {
                collapsible: true,
                collapsed: false,
            },
        },
    ],
    fields: [
        {
            // Title
            title: "Title",
            name: "title",
            type: "string",
            fieldset: "homepage",
        },
        // Location
        {
            title: "Location",
            name: "location",
            type: "string",
            fieldset: "homepage",
        },
        // Date
        {
            title: "Date",
            name: "date",
            type: "date",
            options: {
                dateFormat: "yyyy",
            },
            fieldset: "homepage",
        },
        // Image Slider
        {
            title: "Slider",
            name: "slider",
            type: "gallery",
            fieldset: "description",
        },
        // Description
        {
            title: "Description",
            name: "description",
            type: "description",
            fieldset: "description",
        },
        // Images
        {
            title: "Images",
            name: "images",
            type: "images",
            fieldset: "images",
        },
        // Gallery
        {
            title: "Gallery Title",
            name: "gallerytitle",
            type: "string",
            fieldset: "gallery",
        },
        {
            title: "Gallery",
            name: "gallery",
            type: "gallery",
            fieldset: "gallery",
        },
        // Order projects
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
            console.log(title);
            return {
                title: title === undefined ? "Project" : title,
                media: slider[0],
                subtitle: date.split("-")[0],
            };
        },
    },
};
