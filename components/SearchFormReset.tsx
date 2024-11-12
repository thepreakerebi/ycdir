// import React from 'react'
'use client';

import Link from "next/link";
import {X} from "lucide-react";

function SearchFormReset() {

    const resetFunction = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement;

        if (form) {
            form.reset();
        }
    }

    return (
        <button type="reset" onClick={resetFunction}>
            <Link href="/" className="search-btn text-white">
                <X />
            </Link>
        </button>
    )
}

export default SearchFormReset
