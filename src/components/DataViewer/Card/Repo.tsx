import React, { FC, useMemo } from "react";
import classNames from "classnames";
import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
//local import
import { Repo } from "../../../types";
import s from "./index.module.scss";

interface Props {
    data: Repo;
}

export const RepoSitoryCard: FC<Props> = ({ data }) => {
    const { description, createdAt, language, url, avatar, name, owner, updatedAt } = data;

    const filteredDescription = useMemo(
        () =>
            description
                ? description.length > 50
                    ? description.substring(0, 50) + "..."
                    : description
                : "No description",
        [description]
    );

    const shortTitle = useMemo(
        () => (name.length > 30 ? name.substring(0, 30) + "..." : name),
        [name]
    );

    return (
        <div className={classNames(s.container, s.repo)}>
            <h3>{shortTitle}</h3>
            <div className={s.repo_content}>
                {avatar ? (
                    <img className={s.avatar} src={avatar} alt={`${owner}'s image`} />
                ) : (
                    <FaUser size={100} />
                )}
                <div className={s.repo_content_desc}>
                    <p>{filteredDescription}</p>
                    <p className={s.date}>
                        <span>Created:</span> {new Date(createdAt).toDateString()}
                    </p>
                    <p className={s.date}>
                        <span>Updated:</span> {new Date(updatedAt).toDateString()}
                    </p>
                    <p className={classNames(s.language, s["language_" + language])}>{language}</p>
                </div>
            </div>
            <a href={url} target="_blank">
                Visit Github
                <RiGitRepositoryCommitsFill size={20} color="grey" />
            </a>
        </div>
    );
};
