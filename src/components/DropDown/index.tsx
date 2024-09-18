import React, { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
//local import
import { SearchOption } from "../../types";
import s from "./index.module.scss";
//Designed to add multiple search options.
interface Props {
    option: SearchOption;
    setOption: Dispatch<SetStateAction<SearchOption>>;
}

export const DropDown: FC<Props> = ({ option, setOption }) => {

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const { value } = event.target;
        setOption(value as SearchOption);
    };

    return (
        <select value={option} onChange={handleChange} className={s.container}>
            <option value={SearchOption.users}>{SearchOption.users}</option>
            <option value={SearchOption.repositories}>{SearchOption.repositories}</option>
        </select>
    );
};
