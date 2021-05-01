export default {
    title: "Video",
    name: "vid",
    type: "object",
    fields: [
        {
            title: "Video",
            name: "video",
            type: "mux.video",
        },
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Materials",
            name: "materials",
            type: "string",
        },
        {
            title: "Dimensions",
            name: "dimensions",
            type: "string",
            description: "Seperate dimensions with × rather than the letter x.",
        },
        {
            title: "Date",
            name: "date",
            type: "date",
        },
        {
            title: "Size",
            name: "size",
            type: "string",
            description: "Select whether the image spans over one or two columns.",
            options: {
                list: ["Small", "Large"],
                layout: "radio",
                direction: "horizontal",
            },
            initialValue: "Small",
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "asset",
            subtitle: "size",
        },
        prepare(selection) {
            const { title, media, subtitle } = selection;
            return {
                title: title,
                media: media,
                subtitle: `${subtitle} Video`,
            };
        },
    },
};
