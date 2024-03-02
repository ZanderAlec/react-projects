export const Header = ({children}) => {
    return <div className = "  bg-sky-900  flex justify-between  py-4 px-2 md:px-8 drop-shadow		">
        <h1 className="text-2xl	font-semibold	text-white	">Logo</h1>
        {children}
    </div>
}