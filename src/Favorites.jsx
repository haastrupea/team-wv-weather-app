import './Favourite.css'
import { CgChevronLeft } from "react-icons/cg";
import { RiHome3Line } from "react-icons/ri";
// import { CgMoreVerticalO } from "react-icons/cg";
import { CgMoreVerticalO } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import { SiPolywork } from "react-icons/si";



// import logs from './asssets/icons/add.svg';
// import backicon from './asssets/icons/backicon.svg'

function Favorites() {
  return (
    <div className='fav-container'>
        <div className='fav-nav flex-justify-space-between'>
            <div><CgChevronLeft/></div>
            <div>Favourites</div>
            <div><IoMdAdd/></div>
        </div>
        <div className='nav-wrap'>
            <div className='flex-justify-space-between'>
               
                <div className='home-nav flex-container'>
                <div><RiHome3Line/></div>
                    <div className='home-move'>
                    <h1>Home</h1>
                    <p>Set Location</p>
                    </div>
                </div>
                <div><CgMoreVerticalO/></div>
            </div>
            <div className='flex-justify-space-between'>
                <div className='work-nav flex-container'>
                <div><SiPolywork/></div>

               <div className='work-move'>
               <h1>Work</h1>
                    <p>Set Location</p>
               </div>
                </div>
                <div><CgMoreVerticalO/></div>
            </div>
        </div>
    </div>
  )
}

export default Favorites