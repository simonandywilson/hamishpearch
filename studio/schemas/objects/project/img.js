export default {
    title: "Image",
    name: "img",
    type: "image",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            options: {
                isHighlighted: true,
            },
        },
        {
            title: "Materials",
            name: "materials",
            type: "string",
            options: {
                isHighlighted: true,
            },
        },
        {
            title: "Dimensions",
            name: "dimensions",
            type: "string",
            description: "Seperate dimensions with × rather than the letter x.",
            options: {
                isHighlighted: true,
            },
        },
        {
            title: "Date",
            name: "date",
            type: "date",
            options: {
                isHighlighted: true,
                dateFormat: "yyyy",
            },
        },
        {
            title: "Size",
            name: "size",
            type: "string",
            description: "Select whether the image spans over one or two columns.",
            options: {
                list: [
                    { title: "Small", value: "small" },
                    { title: "Large", value: "large" },
                ],
                isHighlighted: true,
                layout: "radio",
                direction: "horizontal",
            },
            initialValue: "small",
        },
        {
            title: "Alternative Text",
            name: "alt",
            type: "string",
            description: "Important for SEO and accessibility.",
            options: {
                isHighlighted: true,
            },
            validation: (Rule) => Rule.required().warning(`Image alt is required.`),
        },
        {
            title: "PDF",
            name: "pdf",
            type: "file",
            options: {
                isHighlighted: true,
            },
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "asset",
            size: "size",
        },
        prepare(selection) {
            const { title, media, size } = selection;

            const formatSize = (() => {
                if (size === "small") {
                    return "Small";
                } else {
                    return "Large";
                }
            })();

            return {
                title: title,
                media: media,
                subtitle: `${formatSize} Image`,
            };
        },
    },
};
