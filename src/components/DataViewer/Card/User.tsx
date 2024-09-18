import React, { FC } from "react";
import classNames from "classnames";
import { FaUserAstronaut, FaUser } from "react-icons/fa";
//local import
import s from "./index.module.scss";
import { User } from "../../../types/UserInfo";

export type Props = {
    data: User;
};

export const UserCard: FC<Props> = ({ data }) => {
    const { name, avatar, score, url } = data;
    return (
        <div className={classNames(s.container, s.user)}>
            <div>
                <h3>{name}</h3>
                <p>Score:{score}</p>
            </div>
            <div className={s.user_content}>
                {avatar ? (
                    <img src={avatar} alt={`${name}'s Avatar`} className={s.avatar} />
                ) : (
                    <FaUser size={100} />
                )}
                <div className={s.user_content_info}></div>
            </div>
            <a target="_blank" href={url}>
                User Profile
                <FaUserAstronaut />
            </a>
        </div>
    );
};
