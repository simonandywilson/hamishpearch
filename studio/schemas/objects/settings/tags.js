export default {
    title: 'Tags',
    name: 'tags',
    type: 'array',
    of: [{
        type: 'string'
    }],
    options: {
        layout: 'tags'
    },
    validation: (Rule) => [
        Rule.required().warning(
          `Your page needs some tags.`
        ),
      ]
}