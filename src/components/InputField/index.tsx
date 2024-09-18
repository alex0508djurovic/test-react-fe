import React, { ChangeEvent, Dispatch, FC, SetStateAction, useEffect } from "react";
//style import
import s from "./index.module.scss";

interface Props {
    keyword: string;
    setValue: Dispatch<SetStateAction<string>>;
    setDebounceValue: Dispatch<SetStateAction<string>>;
}

export const InputField: FC<Props> = ({ keyword, setValue, setDebounceValue }) => {
    //manual debounce for 1s
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(keyword);
        }, 1000);
        return () => {
            clearTimeout(handler);
        };
    }, [keyword]);

    const handleCange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <input
            className={s.input}
            value={keyword}
            onChange={handleCange}
            type="text"
            placeholder="Start typing to search .."
        />
    );
};
