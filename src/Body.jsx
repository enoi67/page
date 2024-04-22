import { Link } from "react-router-dom";

const Body = () => {
    return (
        <main>
            <section>
                <div className="flex items-center justify-between px-[20px] max-w-[700px] mx-auto mt-[100px]">
                    <div>
                        <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">Schedule a Demo Drive</h1>
                        <h4 className="font-medium text-xl md:text-xl lg:text-2xl mt-4">Find Time and Location</h4>
                        <p className="text-sm font-normal mt-4 md:text-base">Input your zip code to search for Tesla showrooms and schedule a Demo Drive</p>
                        <input className="px-[20px] py-[10px] mt-4 rounded bg-gray-100 w-full md:w-[300px]" type="text" placeholder="Zip code" />
                        <div className="mt-[50px]">
                            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">Contact Information</h1>
                            <div className="grid grid-row-2 gap-4 mt-8 md:grid-cols-2">
                                <div>
                                    <p>First Name</p>
                                    <input className="px-[20px] py-[10px] rounded bg-gray-100 w-full md:w-[300px]" type="text" />
                                </div>
                                <div>
                                    <p>Last Name</p>
                                    <input className="px-[20px] py-[10px] rounded bg-gray-100 w-full md:w-[300px]" type="text" />
                                </div>
                                <div>
                                    <p>Email Addres</p>
                                    <input className="px-[20px] py-[10px] rounded bg-gray-100 w-full md:w-[300px]" type="text" />
                                </div>
                                <div>
                                    <p>Phone Number</p>
                                    <input className="px-[20px] py-[10px] rounded bg-gray-100 w-full md:w-[300px]" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <input type="checkbox" />
                            <a className="ml-2 text-gray-400 font-semibold" href="">I’m interested in Solar and Powerwall</a>
                            <p className=" text-gray-500 text-sm font-semibold md:text-base max-w-[900px] mt-5">
                                By clicking "Schedule Demo Drive", I authorize Tesla to contact me about this request as well as with more information about Tesla products, services and regional events via the contact information I provide. I understand calls or texts may use automatic or computer-assisted dialing or pre-recorded messages. Normal message and data rates apply. I can opt out at any time in the Tesla app or by unsubscribing. This is not required for purchase. Drivers must have a valid U.S. driver's license and be 18 years of age or older.
                            </p>
                        </div>
                        <button className="block font-bold text-white bg-blue-500 px-[40px] py-[10px] rounded mt-10">Schedule Demo Drive</button>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Body;