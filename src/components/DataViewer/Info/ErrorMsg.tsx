import React, { FC } from "react";
//Local Import
import { Typography } from "../../Typography";
import s from './index.module.scss'

interface Props {
    msg?: string;
}

export const ErrorMsg: FC<Props> = ({ msg = "Unknown Error occured while fetching data" }) => {
    return (
        <div className={s.error_container}>
            <Typography variant="medium" color="secondary">
                {msg}
            </Typography>
        </div>
    );
};
