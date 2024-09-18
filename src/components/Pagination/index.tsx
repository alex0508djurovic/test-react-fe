import React, { Dispatch, FC, SetStateAction } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import s from "./index.module.scss";
interface Props {
    currentPage: number;
    totalPage: number;
    totalCount: number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<Props> = (prop) => {
    const { currentPage, totalCount, totalPage, setCurrentPage } = prop;
    const handlePreviousPage = () => {
        if (currentPage > 0) setCurrentPage(currentPage - 1);
    };
    const handleNextPage = () => {
        if (totalPage > currentPage) setCurrentPage(currentPage + 1);
    };
    return (
        <div className={s.pagination}>
            <div>Total Count: {totalCount}</div>
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                <FaArrowLeft />
            </button>
            <div>{`${currentPage}/${totalPage} Pages`}</div>
            <button onClick={handleNextPage} disabled={totalPage === currentPage}>
                <FaArrowRight />
            </button>
        </div>
    );
};
