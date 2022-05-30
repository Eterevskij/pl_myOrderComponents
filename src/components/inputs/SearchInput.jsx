import React from 'react';
import { Input } from 'antd';
import { ReactComponent as SearchIcon } from '../../icons/Search.svg';

const { Search } = Input;

const SearchInput = (props) => {

    const { title } = props;

    return (
        <div className="searchInput">
            <Search
                placeholder={title}
                enterButton={<SearchIcon />}
            />
        </div>
    )
}

export default SearchInput;