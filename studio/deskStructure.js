import S from "@sanity/desk-tool/structure-builder";
import { BiCube } from "react-icons/bi";
import { BiGlobe } from "react-icons/bi";
import { BiSliderAlt } from "react-icons/bi";

export default () =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Project")
                .icon(BiCube)
                .child(S.documentList().title("Projects").filter('_type == "project"')),
            S.listItem()
                .title("About")
                .icon(BiGlobe)
                .child(S.document().title("About").schemaType("about").documentId("about")),
            S.divider(),
            S.listItem()
                .title("Settings")
                .icon(BiSliderAlt)
                .child(
                    S.document().title("Settings").schemaType("settings").documentId("settings")
                ),
            S.divider(),
        ]);
