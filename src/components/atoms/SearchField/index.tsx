import styles from "./index.module.scss";
import { Icon } from "../Icon";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {useDebounce} from "../../../hooks/useDebounce";

const SearchField = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || "");
    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        if (debouncedSearch.trim() !== "")
            setSearchParams({ ...Object.fromEntries(searchParams), search: debouncedSearch })
        else {
            const params = new URLSearchParams(searchParams);
            params.delete("search")
            setSearchParams(params)
        }
    }, [debouncedSearch, setSearchParams, searchParams]);

    useEffect(() => {
        setSearch(searchParams.get("search") || "");
    }, [searchParams]);

    return (
        <label className={styles.search}>
            <input
                type="text"
                placeholder="Поиск по каталогу"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={styles.search_field}
            />
            <div role="button" className={styles.search_icon}>
                {isFocused ? <Icon name="send" /> : <Icon name="search" />}
            </div>
        </label>
    );
};


export default SearchField;
