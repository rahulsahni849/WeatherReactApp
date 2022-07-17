import { useRef, useState } from 'react';
//import Select from 'react-select';
import Async, { useAsync } from 'react-select/async';
import React, { Component } from 'react';
import { debounce } from 'lodash'

import { CITY_API_URL, CITY_API_OPTIONS } from '../services/API';


function Search({ onSearchChange }) {
    const [search, setSearch] = useState(null);
    const handleOnChange = (data) => {
        setSearch(data);
        //onSearchChange.onSearchChange(data);
        onSearchChange(data);

    }
    async function loadOptions(inputData) {
        const url = `${CITY_API_URL}?namePrefix=${inputData}`
        console.log(url);
        var data = {};
        data.options = await fetch(url, CITY_API_OPTIONS)
            .then(response => {
                var t = response.json();

                return t;
            })
            .then(resp => {
                if (resp == null) {
                    return {};
                }
                const temp = resp.data.map((opt) => {
                    return {
                        label: `${opt.city},${opt.country}`,
                        value: `${opt.latitude},${opt.longitude}`
                    };
                });
                return temp;
            })
            .catch(err => console.error(err));
        return data.options;

    }

    return <div className="app-search">
        <Async
            placeholder="Search any city...."
            value={search}
            loadOptions={debounce(loadOptions, 800)}
            onChange={handleOnChange}
        />
    </div>

}

export default Search;

