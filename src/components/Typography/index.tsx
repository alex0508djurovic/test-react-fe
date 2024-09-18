import React, { FC, useMemo } from "react";
import s from "./index.module.scss";
import classNames from "classnames";

interface Props {
    className?: string;
    variant: "small" | "medium" | "large";
    color: "primary" | "secondary";
    bold?: boolean;
    center?: boolean;
    children?: any;
}

export const Typography: FC<Props> = ({
    className,
    variant,
    color,
    bold = false,
    center = false,
    children,
}) => {
    const boldClass = useMemo(() => {
        if (bold) {
            return s.bold;
        } else {
            return "";
        }
    }, [bold]);
    const centerClass = useMemo(() => {
        if (center) {
            return s.center;
        } else {
            return "";
        }
    }, [center]);

    const classes = classNames(className, s[variant], boldClass, centerClass, s[color]);

    return <p className={classes}>{children}</p>;
};

