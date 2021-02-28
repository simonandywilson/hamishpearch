import S from "@sanity/desk-tool/structure-builder"
import { BiImages } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiWrench } from "react-icons/bi";

export default () =>
  S.list()
    .title("Content")
    .items([
        S.listItem()
        .title("Project")
        .icon(BiImages)
        .child(
          S.documentList()
            .title("Projects")
            .filter('_type == "project"')
        ),
        S.listItem()
        .title("About")
        .icon(BiUserCircle)
        .child(
          S.document()
          .title("About")
            .schemaType("about")
            .documentId("about")
        ),
        S.divider(),
      S.listItem()
        .title("Settings")
        .icon(BiWrench)
        .child(
          S.document()
          .title("Settings")
            .schemaType("settings")
            .documentId("settings")
        ),
        S.divider(),
    ])