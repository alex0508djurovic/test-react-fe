import React, { FC, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { SearchOption } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { eraseData, fetchData } from "../../redux/reducers/searchResultReducer";
import { DataViewer, DropDown, Header, InputField, Pagination } from "../../components";
import { AppDispatch } from "../../redux/store";
import { RootState } from "../../redux/reducers";
import s from "./index.module.scss";

export const GithubSearch: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.fetchedData);
    const { items, totalCount } = data;
    const [option, setOption] = useState<SearchOption>(SearchOption.users);
    const [keyword, setKeyword] = useState<string>("");
    const [debouncedKeyword, setDebouncedKeyword] = useState<string>("");
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(12);

    const showData = useMemo(
        () => loading || error || !!items.length,
        [data, loading, error, items]
    );

    useEffect(() => {
        setCurrentPage(1); 
    }, [debouncedKeyword]);

    useEffect(() => {
        if (debouncedKeyword.length > 2) {
            dispatch(
                fetchData({
                    keyword: debouncedKeyword,
                    type: option,
                    page: currentPage,
                    perPage,
                })
            );
        } else {
            dispatch(eraseData());
        }
    }, [debouncedKeyword, currentPage]);

    useEffect(() => {
        setKeyword("");
        dispatch(eraseData());
    }, [option]);

    const [showPagination, totalPage] = useMemo(() => {
        if (loading || !!error || !items.length) return [false, 0];
        return [true, Math.ceil(totalCount / perPage)];
    }, [error, loading, items, totalCount]);

    useEffect(() => {
        const handleResize = () => setPerPage(window.innerWidth >= 768 ? 12 : 8);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={s.container}>
            <div className={classNames(s.wrapper, !showData ? s.absolute : "")}>
                <Header />
                <div className={s.container_inputfield}>
                    <InputField
                        keyword={keyword}
                        setValue={setKeyword}
                        setDebounceValue={setDebouncedKeyword}
                    />
                    <DropDown option={option} setOption={setOption} />
                </div>
            </div>
            {showPagination && (
                <Pagination
                    currentPage={currentPage}
                    totalCount={totalCount}
                    totalPage={totalPage}
                    setCurrentPage={setCurrentPage}
                />
            )}
            {showData && <DataViewer />}
        </div>
    );
};
