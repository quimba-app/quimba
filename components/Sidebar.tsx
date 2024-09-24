const Sidebar: React.FC = () => {
    return (
      <div className="bg-black text-white w-60 p-4 space-y-6">
        {/* Filter: Section */}
        <div>
          <h3 className="text-lg font-semibold">Section</h3>
          <select className="w-full mt-2 p-2 bg-black text-white rounded-md">
            <option value="all">All Sections</option>
            <option value="115">Section 115</option>
            <option value="119">Section 119</option>
            {/* Add more options as needed */}
          </select>
        </div>
  
        {/* Filter: Market */}
        <div>
          <h3 className="text-lg font-semibold">Market</h3>
          <select className="w-full mt-2 p-2 bg-black text-white rounded-md">
            <option value="all">All Markets</option>
            <option value="primary">Primary</option>
            <option value="secondary">Secondary</option>
          </select>
        </div>
  
        {/* Filter: Perks */}
        <div>
          <h3 className="text-lg font-semibold">Perks</h3>
          <select className="w-full mt-2 p-2 bg-black text-white rounded-md">
            <option value="all">All Perks</option>
            <option value="vip">VIP Access</option>
            <option value="parking">Parking Included</option>
          </select>
        </div>
  
        {/* Notification Button */}
        <button className="w-full bg-quimba text-black py-2 rounded-md mt-4 hover:bg-teal-600">
          Notify me on new offers!
        </button>
      </div>
    );
  };
  
  export default Sidebar;
  