export default {
    title: "Image",
    name: "slide",
    type: "image",
    fields: [
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
    ],
    preview: {
        select: {
            media: "asset",
            subtitle: "alt",
        },
        prepare(selection) {
            const { media, subtitle } = selection;
            return {
                title: "Slider Image",
                media: media,
                subtitle: subtitle,
            };
        },
    },
};