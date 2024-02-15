import { Link } from 'react-router-dom'; 

export const Pricing = () => {
    return <div className="bg-blue-200 flex flex-col  items-center	 p-40	 h-screen		">
        <h2 className="text-4xl	">Pricing Page</h2>
        <Link className = "p-5 underline text-blue-700	" to = "/">Home</Link>
    </div>
}