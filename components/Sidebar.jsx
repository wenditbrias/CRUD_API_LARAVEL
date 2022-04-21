import { FaUserCircle } from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineUsergroupAdd,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const link = [
  {
    title: "Home",
    url: "/",
    icon: <AiOutlineHome size="1.5rem" style={{ marginRight: "12px" }} />,
  },
  {
    title: "Admin",
    url: "/admin",
    icon: <AiOutlineUserAdd size="1.5rem" style={{ marginRight: "12px" }} />,
  },
  {
    title: "All User",
    url: "/all",
    icon: (
      <AiOutlineUsergroupAdd size="1.5rem" style={{ marginRight: "12px" }} />
    ),
  },
];

const Sidebar = () => {
  return (
    <div className="w-[18%] min-h-screen fixed top-0 left-0 bg-blue-500">
      <div className="title text-white flex items-center w-full p-7">
        <FaUserCircle size="1.8rem" />
        <h5 className="font-medium text-lg ml-3">User Profile</h5>
      </div>
      <ul className="w-full mt-1">
        {link.map((item, id) => {
          return (
            <li
              key={id}
              className="w-full flex py-3 items-center text-white hover:bg-blue-300 transition duration-300 cursor-pointer px-7"
            >
              {item.icon}
              <a className="text-sm" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
