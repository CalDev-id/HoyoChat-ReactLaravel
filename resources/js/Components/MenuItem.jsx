import { Link } from "@inertiajs/react";

const MenuItem = ({ link, icon, text, isActive, method = "get" }) => {
    return (
        <>
            <Link
                href={link ? route(link) : null}
                className={
                    isActive
                        ? "flex w-full pl-5 border-l-8 border-primary bg-body"
                        : "flex w-full pl-5 border-l-4 border-white"
                }
                method={method}
                as="button"
            >
                <div className="flex my-5">
                    <span
                        className={
                            isActive
                                ? "text-primary text-xl"
                                : "text-slate-500 text-xl"
                        }
                    >
                        {icon}
                    </span>
                    <p
                        className={
                            isActive
                                ? "mx-3 font-semibold text-primary"
                                : "mx-3 font-semibold"
                        }
                    >
                        {text}
                    </p>
                </div>
            </Link>
        </>
    );
};
export default MenuItem;
