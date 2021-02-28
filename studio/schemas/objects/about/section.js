export default {
    title: 'Section',
    name: 'section',
    type: 'object',
    fields: [{
            title: "Title",
            name: "title",
            type: "string",
            options: {
                isHighlighted: true
            }
        },
        {
            title: "Content",
            name: "content",
            type: "array",
            of: [{
                type: "content",
            }],
        }
    ],
}