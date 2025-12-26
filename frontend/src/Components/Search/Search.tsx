import React, { useState } from 'react'

interface Props {
    
}

const Search: React.FC<Props> = (props: Props) => {
    const [search, setsearch] = useState("");
    const onClick = (e: any) => {
        setsearch(e.target.value);
        console.log(e);
    }
    return (
        <div>
            <input value={search} onChange={(e) => onClick(e)}></input>
        </div>
    )
}

export default Search
