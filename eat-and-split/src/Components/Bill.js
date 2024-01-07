import {useState} from 'react'

export const Bill = (props) =>{
    
    const friend = props.friendList.filter((friend)=>friend.id == props.billOpen.friendId)[0];
    
    const [bill, setBill] = useState(0);
    const [expense, setExpense] = useState(0);
    //derive state
    const friendExpense = bill - expense;
    const [payer, setPayer] = useState("you");

    return (
        <div>

            <h2>SPLIT A BILL WITH {friend.name}</h2>

            <label for="">Bill value</label>
            <input onChange = {(event) => setBill(event.target.value)}
            type="number" />

            <label for="">Your expense</label>
            <input value = {expense} onChange = {(event) => setExpense(event.target.value)}type="number" />

            <label for="">{friend.name}'s expense</label>
            <input value = {friendExpense} disabled = {true} />

            <label for="">Who is paying the bill?</label>
            <select onChange = {(event) => setPayer(event.target.value)}>

                <optgroup > 
                    <option value="you">you</option>
                    <option value={friend.name}>{friend.name}</option>
                </optgroup>

            </select>

            <button onClick={ ()=>{ 
                let newDebt = 0;
                payer === "you" ? newDebt = friendExpense : newDebt = expense * (-1);

                props.setFriendList(() =>
                    props.friendList.map((friend) => 
                        friend.id === props.billOpen.friendId ? {...friend, debtValue: newDebt} 
                        : friend
                ));

                props.resetBill();

            }}> Split bill</button>

        </div>
       
        
    );
}