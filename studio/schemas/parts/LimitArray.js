import React from "react";
import { isReferenceSchemaType } from "@sanity/types";
import { AddIcon } from "@sanity/icons";
import { Button, Grid, Menu, MenuButton, MenuItem } from "@sanity/ui";
import { useId } from "@reach/auto-id";

const LimitArray = React.forwardRef((props, ref) => {
    const { type, readOnly, children, onCreateValue, onAppendItem, value } = props;
    const menuButtonId = useId();
    const insertItem = React.useCallback(
        (itemType) => {
            const item = onCreateValue(itemType);
            onAppendItem(item);
        },
        [onCreateValue, onAppendItem]
    );
    const handleAddBtnClick = React.useCallback(() => {
        insertItem(type.of[0]);
    }, [type, insertItem]);
    if (readOnly) {
        return null;
    }
    const maxLength = type.validation[0]._rules.find((rule) => rule.flag === "max");
    if (maxLength && value && value.length >= maxLength.constraint) {
        return null;
    }
    return (
        <Grid gap={1} style={{ gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))" }}>
            {type.of.length === 1 ? (
                <Button icon={AddIcon} mode="ghost" onClick={handleAddBtnClick} text="Add item" />
            ) : (
                <MenuButton
                    button={<Button icon={AddIcon} mode="ghost" text="Add item…" />}
                    id={menuButtonId || ""}
                    menu={
                        <Menu>
                            {type.of.map((memberDef, i) => {
                                const referenceIcon =
                                    isReferenceSchemaType(memberDef) &&
                                    (memberDef.to || []).length === 1 &&
                                    memberDef.to[0].icon;
                                const icon =
                                    memberDef.icon || memberDef.type?.icon || referenceIcon;
                                return (
                                    <MenuItem
                                        key={i}
                                        text={memberDef.title || memberDef.type?.name}
                                        onClick={() => insertItem(memberDef)}
                                        icon={icon}
                                    />
                                );
                            })}
                        </Menu>
                    }
                />
            )}
            {children}
        </Grid>
    );
})

export default LimitArray