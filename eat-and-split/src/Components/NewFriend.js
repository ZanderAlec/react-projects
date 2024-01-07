import { useState } from 'react';

export const NewFriend = ({createNewFriend}) => {

    
    const [isOpen, setIsOpen] = useState(false);
    const [newFriend, setNewFriend] = useState("");

    

    return (
        <div>
            {isOpen && 
                <div>
                    <label for="">Friend name</label>
                    <input onChange={(event) => {setNewFriend(event.target.value)}}/>

                    <label for="">Img Url</label>
                    <input />
                    <button onClick={() => createNewFriend(newFriend)}>Add</button>
                </div>
            }
            
            <button onClick={() => {setIsOpen(!isOpen)}}>{isOpen? "Close" : "Add Friend"}</button>         
        </div>
    );
}