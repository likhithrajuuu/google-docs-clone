"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useEditorStore } from "@/store/use-editor-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
    const { title, setTitle } = useEditorStore();
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(title);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current?.focus();
        }
    }, [isEditing]);

    useEffect(() => {
        setInputValue(title);
    }, [title]);

    const handleTitleClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputBlur = () => {
        setTitle(inputValue);
        setIsEditing(false);
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setTitle(inputValue);
            setIsEditing(false);
        }
    };

    return (
        <header className="flex items-center justify-between p-2 px-4 border-b">
            <div className="flex gap-2 items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                </Link>
                <div className="flex flex-col">
                    {isEditing ? (
                        <input
                            ref={inputRef}
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            onKeyDown={handleInputKeyDown}
                            className="font-semibold text-sm outline-none"
                        />
                    ) : (
                        <p onClick={handleTitleClick} className="font-semibold text-sm cursor-pointer">{title}</p>
                    )}
                    <div className="flex gap-x-2 text-xs text-muted-foreground">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="px-2 py-1 text-sm font-normal text-gray-800 hover:bg-gray-100 rounded-sm cursor-pointer">
                                File
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-40 bg-white shadow-md border border-gray-200 rounded-sm p-1"
                            >
                                <DropdownMenuItem className="px-3 py-1.5 text-sm text-gray-800 hover:bg-blue-50 rounded-sm cursor-pointer">
                                    New
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-3 py-1.5 text-sm text-gray-800 hover:bg-blue-50 rounded-sm cursor-pointer">
                                    Save
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-3 py-1.5 text-sm text-gray-800 hover:bg-blue-50 rounded-sm cursor-pointer">
                                    Save As
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-3 py-1.5 text-sm text-gray-800 hover:bg-blue-50 rounded-sm cursor-pointer">
                                    Export
                                </DropdownMenuItem>
                                <DropdownMenuItem className="px-3 py-1.5 text-sm text-gray-800 hover:bg-blue-50 rounded-sm cursor-pointer">
                                    Print
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hover:bg-accent p-1 rounded-sm cursor-pointer">Edit</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Undo</DropdownMenuItem>
                                <DropdownMenuItem>Redo</DropdownMenuItem>
                                <DropdownMenuItem>Cut</DropdownMenuItem>
                                <DropdownMenuItem>Copy</DropdownMenuItem>
                                <DropdownMenuItem>Paste</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hover:bg-accent p-1 rounded-sm cursor-pointer">View</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Full Screen</DropdownMenuItem>
                                <DropdownMenuItem>Show Ruler</DropdownMenuItem>
                                <DropdownMenuItem>Show Outline</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hover:bg-accent p-1 rounded-sm cursor-pointer">Insert</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Image</DropdownMenuItem>
                                <DropdownMenuItem>Table</DropdownMenuItem>
                                <DropdownMenuItem>Link</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hover:bg-accent p-1 rounded-sm cursor-pointer">Format</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Bold</DropdownMenuItem>
                                <DropdownMenuItem>Italic</DropdownMenuItem>
                                <DropdownMenuItem>Underline</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hover:bg-accent p-1 rounded-sm cursor-pointer">Tools</DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Word Count</DropdownMenuItem>
                                <DropdownMenuItem>Spelling</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-x-2">
                <Button size="sm">Share</Button>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
};