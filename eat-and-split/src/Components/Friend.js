


export const Friend = (props) => {

    const openBill = (props.billOpen.friendId === props.friend.id);

    const selectFriend = () => {
        if(openBill)
            props.resetBill();

        else
            props.setBillOpen({friendId: props.friend.id,  open: true});  
    }

    return(
        <div>
            <div>
                <h2>{props.friend.name}</h2>
                <p>
                    {props.friend.debtValue == 0 && `You and ${props.friend.name} are even`}
                    {props.friend.debtValue > 0 && `${props.friend.name} owes you ${props.friend.debtValue}`}
                    {props.friend.debtValue < 0 &&`you owe ${props.friend.name} ${props.friend.debtValue*-1}`}
                </p>
            </div>
            
            <button onClick = {() => {selectFriend()}}type="">
                {openBill? "Close" : "Select"}
            </button>
        </div>
    )
}