"use client";

import { BsCloudCheck } from "react-icons/bs";
import { useState } from "react";

export const DocumentInput = () => {
    const [title, setTitle] = useState("Untitled Document");
    const [isEditing, setIsEditing] = useState(false);
    const finishEditing = () => {
        setIsEditing(false);
        console.log("New title saved: " + title);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            finishEditing();
        }
    }
    
    return(
        <div className="flex items-center gap-2">
            {isEditing ? (
                <input
                    type = "text"
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onBlur={finishEditing}
                    autoFocus
                    className="w-full text-lg px-1.5 bg-transparent border border-gray-300 rounded focus:outline-blue-500" />
            ) : (
                <span onClick={() =>setIsEditing(true)} className="text-lg px-1.5 cursor-pointer truncate">
                    {title}
                </span>
            )}
            <BsCloudCheck />
        </div>
    );
};