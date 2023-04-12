import { UserMenu } from "@/Data/MenuList";
import MenuItem from "./MenuItem";

const LeftBar = ({ name, id }) => {
    return (
        <section className="">
            <div className="bg-white rounded-2xl flex mb-5 items-center w-full">
                <img
                    src="images/cal.jpg"
                    className="w-20 h-20 p-2 rounded-full"
                    alt=""
                />
                <div>
                    <p className="font-semibold text-lg">{name}</p>
                    <p className="text-base text-slate-500">{id}</p>
                </div>
            </div>

            <div className="bg-white rounded-3xl mb-5 w-full">
                <ul className="text-lg">
                    {UserMenu.map((menu, index) => (
                        <MenuItem
                            key={`${index}-${menu.text}`}
                            link={menu.link}
                            icon={menu.icon}
                            text={menu.text}
                            isActive={menu.link && route().current(menu.link)}
                        />
                    ))}
                </ul>
            </div>

            <button
                className="bg-primary text-white py-4 rounded-full w-full font-semibold"
                type="button"
            >
                Create Post
            </button>
        </section>
    );
};

export default LeftBar;
