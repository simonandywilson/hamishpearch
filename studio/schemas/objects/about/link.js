import { BiDetail } from "react-icons/bi";
export default {
    title: "Item",
    name: "link",
    type: "object",
    icon: BiDetail,
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Subtitle",
            name: "subtitle",
            type: "string",
        },
        {
            title: "Link",
            name: "hyperlink",
            type: "string",
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "subtitle",
            hyperlink: "hyperlink",
        },
        prepare(selection) {
            const { title, subtitle, hyperlink } = selection;
            const isSubtitle = subtitle ?`, ${subtitle}` : "";
            const isLink = hyperlink ? "Link" : "";
            return {
                title: `${title}${isSubtitle}`,
                subtitle: `${isLink}`,
            };
        },
    },
};
