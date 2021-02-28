export default {
    title: 'Image',
    name: 'basic',
    type: 'image',
    fields: [{
            title: "Title",
            name: "title",
            type: "string",
            options: {
                isHighlighted: true
            }
        },
        {
            title: "Alternative Text",
            name: "alt",
            type: "string",
            description: "Important for SEO and accessiblity.",
            options: {
                isHighlighted: true
            }
        },
    ],
}