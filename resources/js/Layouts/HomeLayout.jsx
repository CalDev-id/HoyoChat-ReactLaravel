import RightBar from "@/Components/RightBar";
import TopBar from "@/Components/TopBar";
import { Head } from "@inertiajs/react";
import LeftBar from "@/Components/LeftBar";

const HomeLayout = ({ children, title }) => {
    return (
        <>
            <Head title="HoyoChat" />
            <TopBar />

            <main className="bg-body py-5 pt-24">
                <div className="container">
                    <div className="flex max-w-full">
                        <div className="xl:w-[25%] hidden xl:block pr-10">
                            <LeftBar id={"@heical_chandra"} name={"Dynavx"} />
                        </div>

                        <div className="xl:w-[50%] w-full lg:w-3/5">
                            {children}
                        </div>
                        <div className="xl:max-w-[25%] lg:w-2/5 hidden lg:block">
                            <RightBar/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default HomeLayout;
