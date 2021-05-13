import { BiVideo } from "react-icons/bi";

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
            title: "Type",
            name: "type",
            type: "string",
            description: "Select the video style.",
            options: {
                list: [
                    { title: "Normal", value: "normal" },
                    { title: "Autoplay", value: "autoplay" },
                    { title: "GIF", value: "gif" },
                ],
                layout: "radio",
                direction: "horizontal",
            },
            initialValue: "normal",
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
            options: {
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
                layout: "radio",
                direction: "horizontal",
            },
            initialValue: "small",
        },
        {
            title: "PDF",
            name: "pdf",
            type: "file",
        },
    ],
    preview: {
        select: {
            title: "title",
            type: "type",
            size: "size",
        },
        prepare(selection) {
            const { title, size, type } = selection;

            const formatSize = (() => {
                if (size === "small") {
                    return "Small";
                } else {
                    return "Large";
                }
            })();

            const formatType = (() => {
                if (type === "normal") {
                    return "Normal";
                } else if (type === "autoplay") {
                    return "Autoplay";
                } else {
                    return "GIF";
                }
            })();

            return {
                title: title,
                media: BiVideo,
                subtitle: `${formatSize} ${formatType} Video`,
            };
        },
    },
};
