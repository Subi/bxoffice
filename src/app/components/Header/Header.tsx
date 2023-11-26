import SearchBar from "../Searchbar/Searchbar";
import Profile from "../Profile/Profile";

export default async function Header() {
    return (
        <>
        <div  className="w-11/12  mt-10 mb-20 flex justify-between items-center ">
            <SearchBar/>
            <Profile/>
        </div>
        </>

    )
}