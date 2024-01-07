import "./App.css";
import { Bill } from "./Components/Bill";
import { NewFriend } from "./Components/NewFriend";
import { Friend } from "./Components/Friend";

import { useState} from 'react';



const defaultBill = {friendId: 0, open: false};

function App() {

  const [friendList, setFriendList] = useState([]);
  const [billOpen, setBillOpen] = useState(defaultBill);

  const createNewFriend = (name)=>{
    const newF = {
        id: friendList.length === 0 ? 1 : (friendList.length + 1), 
        name: name, 
        debtValue: 0, 
    }

    setFriendList([...friendList, newF]);
  }

  const resetBill = () => {
    setBillOpen(defaultBill);
  }


  return (
    <div className="container">
        <div>
          {friendList.map((value)=>{
              return(
                  <Friend 
                    friend = {value} 
                    billOpen = {billOpen} 
                    setBillOpen = {setBillOpen}
                    resetBill = {resetBill}
                  />
              )
          })}
        </div>

        <NewFriend createNewFriend = {createNewFriend}/>

        {billOpen.open && 
          <Bill 
            billOpen = {billOpen} 
            resetBill = {resetBill} 
            friendList = {friendList} 
            setFriendList = {setFriendList}
          />
        }
      
    </div>
  );
}

export default App;
