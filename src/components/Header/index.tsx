import React from "react";
import { FaGithub } from "react-icons/fa";
//local import
import s from "./index.module.scss";
import { Typography } from "../Typography";
//no prop
export const Header = () => {
    return (
        <div className={s.header}>
            <FaGithub className={s.header_icon} />
            <div className={s.header_title}>
                <Typography variant="large" color="secondary" bold>
                    GitHub Searcher
                </Typography>
                <Typography variant="small" color="primary">
                    Search users or repositories below
                </Typography>
            </div>
        </div>
    );
};
