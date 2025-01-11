import React, { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import AddArtist from "./AddInspector";
import AddPreviewer from "./AddPreviewer";

import EditePoth from "./EditePoth";
import ReviewerCard from "./ReviewerCard";
import InspectorCard from "./InspectorCard";

export default function Team() {
  const [activeTab, setActiveTab] = useState("");
  const [showEdite, setShowEdite] = useState(false);
  const [reviewer,setReviewer] =useState([])
  const [Inspector,setInspector] =useState([])

  return (
    <>
      <section className=" flex flex-col py-8 relative min-h-screen">
      <div className="">
      <div className="flex flex-col items-center mb-4">
          <div className="bg-primary p-4 rounded-full w-fit">
            <FaRegUserCircle className="text-4xl text-white" />
          </div>
        </div>
        {/* Add Artist */}
        <div
          className={
            activeTab === "artist"
              ? "flex items-center justify-between w-full bg-gradient-to-l text-white from-black to-[#C29062] p-6 border-b-2 border-b-[#8B94C6] cursor-pointer"
              : "flex items-center justify-between w-full p-6 border-b-2 border-b-[#8B94C6] cursor-pointer bg-[#D1E8E24D]"
          }
          onClick={() => setActiveTab("artist")}
        >
          <p className="text-2xl font-bold">اضف مدقق</p>
          <p className="text-2xl font-bold">
            <RiEdit2Fill />
          </p>
        </div>

        {activeTab === "artist" && <AddArtist setInspector={setInspector}/>}

        {/* Add Previewer */}
        <div
          className={
            activeTab === "previewer"
              ? "flex items-center justify-between w-full bg-gradient-to-l text-white from-black to-[#C29062] p-6 border-b-2 border-b-[#8B94C6] cursor-pointer"
              : "flex items-center justify-between w-full bg-[#D1E8E24D] p-6 border-b-2 border-b-[#8B94C6] cursor-pointer"
          }
          onClick={() => setActiveTab("previewer")}
        >
          <p className="text-2xl font-bold">اضف معاين</p>
          <p className="text-2xl font-bold">
            <RiEdit2Fill />
          </p>
        </div>
        {activeTab === "previewer" && <AddPreviewer setReviewer={setReviewer} />}

        {/* Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
         
         <ReviewerCard setShowEdite={setShowEdite} reviewer={reviewer} setReviewer={setReviewer} />
         

        
        </div>

        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <InspectorCard setShowEdite={setShowEdite} Inspector={Inspector} setInspector={setInspector} />
         </div>
        </div>

        {/* EditePoth */}
        {showEdite && <EditePoth setShowEdite={setShowEdite}/>}
      </div>
      </section>
    </>
  );
}
