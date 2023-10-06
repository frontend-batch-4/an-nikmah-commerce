import { NavLink } from "react-router-dom";


export default function Navbar() {
    return (
      <nav className="container h-20 flex items-center justify-between ">
  
        {/* search */}
        <form className="max-w-sm px-4">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Cari produk"
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-[12px] outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </form>
  
        {/* logo */}
        <NavLink to="/">
          <svg width="91" height="10" viewBox="0 0 91 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.883 9.73685L4.939 0.636846H7.019L11.088 9.73685H8.878L5.55 1.70285H6.382L3.041 9.73685H0.883ZM2.911 7.78685L3.47 6.18785H8.15L8.722 7.78685H2.911ZM12.0321 9.73685V0.636846H13.7741L19.1431 7.18885H18.2981V0.636846H20.3781V9.73685H18.6491L13.2671 3.18485H14.1121V9.73685H12.0321ZM25.8098 6.88985V5.26485H29.4888V6.88985H25.8098ZM34.9091 9.73685V0.636846H36.6511L42.0201 7.18885H41.1751V0.636846H43.2551V9.73685H41.5261L36.1441 3.18485H36.9891V9.73685H34.9091ZM45.4081 9.73685V0.636846H47.5141V9.73685H45.4081ZM51.5587 7.65685L51.4417 5.22585L55.7967 0.636846H58.1367L54.2107 4.86185L53.0407 6.10985L51.5587 7.65685ZM49.6737 9.73685V0.636846H51.7667V9.73685H49.6737ZM55.9007 9.73685L52.6637 5.77185L54.0417 4.27685L58.3577 9.73685H55.9007ZM59.2968 9.73685V0.636846H61.0388L64.9128 7.05885H63.9898L67.7988 0.636846H69.5278L69.5538 9.73685H67.5778L67.5648 3.66585H67.9288L64.8868 8.77485H63.9378L60.8308 3.66585H61.2728V9.73685H59.2968ZM70.5168 9.73685L74.5728 0.636846H76.6528L80.7218 9.73685H78.5118L75.1838 1.70285H76.0158L72.6748 9.73685H70.5168ZM72.5448 7.78685L73.1038 6.18785H77.7838L78.3558 7.78685H72.5448ZM87.9059 0.636846H90.0119V9.73685H87.9059V0.636846ZM83.7719 9.73685H81.6659V0.636846H83.7719V9.73685ZM88.0619 6.00585H83.6159V4.22485H88.0619V6.00585Z" fill="black" />
          </svg>
  
        </NavLink>
        {/* icon */}
        <div className="flex gap-4 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
  
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
  
      </nav>
    );
  }