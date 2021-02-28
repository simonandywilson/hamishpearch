export default {
  title: "Website Settings",
  name: "settings",
  type: "document",
  __experimental_actions: [ /*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [{
      // Site Title
      title: "Site Title",
      name: "title",
      type: "string",
      description: "Appears in browser & search engine results.",
      validation: (Rule) => [
        Rule.required().warning(
          `Your page needs a Title.`
        ),
      ]
    },
    {
      // Site Decription
      title: "Site Description",
      name: "description",
      type: "text",
      description: "Appears in search engine results.",
      validation: (Rule) => [
        Rule.required().warning(
          `Your page needs a description.`
        ),
        Rule.min(50).warning(
          `Your site description should be a minimum of 50 characters.`
        ),
        Rule.max(155).warning(
          `Your site description should be a maximum of 155 characters.`
        ),
      ]
    },
    // Tags
    {
      title: "Tags",
      name: "tags",
      type: "tags",
      description: "Not displayed – Help search engines understand what webpage is about.",
    },
  ]
}