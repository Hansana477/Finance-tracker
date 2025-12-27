import React, { useState, ChangeEvent, MouseEvent, SyntheticEvent} from 'react'

interface Props {
    
}

const Search: React.FC<Props> = (props: Props) => {
    const [search, setsearch] = useState("");
    const handlechange = (e:ChangeEvent<HTMLInputElement>) => {
        setsearch(e.target.value);
        console.log(e);
    }
    const onClick = (e: SyntheticEvent) => {console.log(e)};
    return (
        <div>
            <input value={search} onChange={(e) => handlechange(e)}></input>
            <button onClick={(e) => onClick(e)}/>
        </div>
    )
}

export default Search
