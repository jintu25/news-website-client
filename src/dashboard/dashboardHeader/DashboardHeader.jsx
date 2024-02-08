
const DashboardHeader = () => {
    return (
        <div className="flex justify-between items-center">
            <div>
                <input type="text" placeholder="Search" className="border px-2 py-2 rounded-md" /> 
                <button className="btn btn-sm btn-secondary ml-2">Search</button>     
            </div> 
            <div className="flex items-center justify-end">
                <div className=" text-end mr-2">
                    <h3>Jintu paul</h3>
                    <p>jintu@gmail.com</p>
                </div>
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default DashboardHeader;