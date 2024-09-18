import React from "react";
//local import
import s from "./index.module.scss";
//No Prop
export const LoadingMsg = () => {
    return (
        <div className={s.loading_container}>
            <p>loading</p>
            <div className={s.spinner}></div>
        </div>
    );
};
