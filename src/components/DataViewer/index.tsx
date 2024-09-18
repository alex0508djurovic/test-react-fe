import React from "react";
import { useSelector } from "react-redux";
//local import
import { RootState } from "../../redux/reducers";
import { ErrorMsg } from "./Info/ErrorMsg";
import { LoadingMsg } from "./Info/LoadingMsg";
import { UserCard } from "./Card/User";
import { RepoSitoryCard } from "./Card/Repo";
import { User, Repo } from "../../types";
//style import
import s from "./index.module.scss";
//No need to receive any data from parent component. All data needed are stored in Redux.
export const DataViewer = () => {
    const { data, loading, error } = useSelector((state: RootState) => state.fetchedData);
    const { items, type } = data;
    //Checking whether User component should be rendered or Repo component should be rendered.
    const isUser = (item: User | Repo): item is User => {
        return type === "users";
    };
    
    return (
        <div className={s.container}>
            {loading && <LoadingMsg />}
            {!loading && !!error && <ErrorMsg />}
            {!loading && !error && !items?.length && <div>{"No data to show"}</div>}
            {Array.isArray(items) &&
                !!items.length &&
                items.map((item, index) =>
                    isUser(item) ? (
                        <UserCard key={`${index}${item?.id}`} data={item} />
                    ) : (
                        <RepoSitoryCard key={`${index}${item?.id}`} data={item} />
                    )
                )}
        </div>
    );
};
