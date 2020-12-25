import React, { useState } from "react";
import classes from "./Search.module.scss";

import FormsInput from "../FormsInput/FormsInput";

const Search = () => {
    ///////////////////////////////////////////////////////////////////////////
    // Search Form Data
    const [search, setSearch] = useState({
        ///////////////////////////////////////////////////////////////////////////
        // Fullname Data
        fullName: {
            id: 'fullName',
            value: '',
            elementConfig: {
                type: 'text',
                placeholder: 'Ad, Soyad',
            },
        },

        ///////////////////////////////////////////////////////////////////////////
        // Structure Data
        sturcture: {
            id: 'sturcture',
            value: '',
            elementConfig: {
                type: 'text',
                placeholder: 'Strutuktur',
            },
        },

        ///////////////////////////////////////////////////////////////////////////
        // Position Data
        position: {
            id: 'position',
            value: '',
            elementConfig: {
                type: 'text',
                placeholder: 'Vəzifə',
            },
        },

        submitButton: true,
    })

    ///////////////////////////////////////////////////////////////////////////
    // All inputs handler
    const changeHandler = (e, id) => {
        const resultData = { ...search };
        resultData[id].value = e.target.value;
        setSearch(resultData);
    }

    ///////////////////////////////////////////////////////////////////////////
    // Form handler
    const formChaneHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className={classes.search}>
            <div className={classes.title}>Axtarış</div>
            <form onSubmit={(e) => { formChaneHandler(e) }}>
                {/* /////////////////////////////////////////////////////////////////////////// */}
                {/* // Fullname form group */}
                <div className={classes.form_group}>
                    <FormsInput
                        elementType="formsInput"
                        changed={(e) => { changeHandler(e, search.fullName.id) }}
                        value={search.fullName.value}
                        id={search.fullName.id}
                        config={{ ...search.fullName.elementConfig }}
                    />
                </div>

                {/* /////////////////////////////////////////////////////////////////////////// */}
                {/* // Sturcture form group */}
                <div className={classes.form_group}>
                    <FormsInput
                        elementType="formsInput"
                        changed={(e) => { changeHandler(e, search.sturcture.id) }}
                        value={search.sturcture.value}
                        id={search.sturcture.id}
                        config={{ ...search.sturcture.elementConfig }}
                    />
                </div>

                {/* /////////////////////////////////////////////////////////////////////////// */}
                {/* // Position form group */}
                <div className={classes.form_group}>
                    <FormsInput
                        elementType="formsInput"
                        changed={(e) => { changeHandler(e, search.position.id) }}
                        value={search.position.value}
                        id={search.position.id}
                        config={{ ...search.position.elementConfig }}
                    />
                </div>

                {/* /////////////////////////////////////////////////////////////////////////// */}
                {/* // Submit button */}
                <FormsInput
                    elementType="button"
                    type="submit"
                    value="Axtar" />
            </form>

        </div>
    )
}

export default Search;