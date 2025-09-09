import Image from "next/image";
import Link from "next/link";
import { DocumentInput } from "./document-input";
import { Camera, ChartBar, ChartNoAxesCombined, Clipboard, ClipboardX, Copy, Download, File, FileIcon, FileJsonIcon, FilePlusIcon, FileText, FileTextIcon, GlobeIcon, ImageIcon, Info, Link2, Mail, Minus, PenIcon, PrinterIcon, Redo, Replace, Scissors, Search, Smile, Table, ToggleRight, TrashIcon, Undo, Upload, User } from "lucide-react";

import {
    Menubar, 
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarShortcut,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { BsFilePdf, BsMarkdown, BsPeople } from "react-icons/bs";
import { FaCut } from "react-icons/fa";


export const Navbar = () => {
    return(
        <nav className = "flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={36} height={36} />
                </Link>
                <div className="flex flex-col">
                    <DocumentInput />
                    
                    <div className="flex">
                        <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    File
                                </MenubarTrigger>
                                <MenubarContent className="print:hidden">
                                    <MenubarItem>
                                        <FilePlusIcon className="size-4 mr-2"/>
                                        New Document
                                    </MenubarItem>
                                    <MenubarItem>
                                        <FileIcon className="size-4 mr-2" />
                                        Open
                                    </MenubarItem>
                                    <MenubarItem>
                                        <Copy className="size-4 mr-2" />
                                        Make a copy
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <Mail className="size-4 mr-2"/>
                                            Email
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>
                                                Email this file
                                            </MenubarItem>
                                            <MenubarItem disabled>
                                                Email collaborators
                                            </MenubarItem>
                                            <MenubarItem>
                                                Email draft
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <Download className="size-4 mr-2"/>
                                            Download
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>
                                                <FileJsonIcon className="size-4 mr-2" />
                                                JSON(.json)
                                            </MenubarItem>
                                            <MenubarItem>
                                                <GlobeIcon className="size-4 mr-2" />
                                                HTML(.html)
                                            </MenubarItem>
                                            <MenubarItem>
                                                <BsFilePdf className="size-4 mr-2" />
                                                PDF(.pdf)
                                            </MenubarItem>
                                            <MenubarItem>
                                                <FileTextIcon className="size-4 mr-2" />
                                                Plain Text(.txt)
                                            </MenubarItem>
                                            <MenubarItem>
                                                <File className="size-4 mr-2" />
                                                Microsoft Word(.docx)
                                            </MenubarItem>
                                            <MenubarItem>
                                                <BsMarkdown className="size-4 mr-2" />
                                                Markdown(.md)
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>

                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <PenIcon className="size-4 mr-2" />
                                        Rename
                                    </MenubarItem>
                                    <MenubarItem>
                                        <TrashIcon className="size-4 mr-2"/>
                                        Move to trash
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Info className="size-4 mr-2"/>
                                        Details
                                    </MenubarItem>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <GlobeIcon className="size-4 mr-2"/>
                                            Language
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>
                                                <GlobeIcon className="size-4 mr-2"/>
                                                English
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>
                                        <FileText className="size-4 mr-2"/>
                                        Page Setup
                                    </MenubarItem>
                                    <MenubarItem>
                                        <PrinterIcon className="size-4 mr-2"/>
                                        Print
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem>
                                        <Undo className="size-4 mr-2"/>
                                        Undo
                                    </MenubarItem>
                                    <MenubarItem>
                                        <Redo className="size-4 mr-2"/>
                                        Redo
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Scissors className="size-4 mr-2" />
                                        Cut
                                    </MenubarItem>
                                    <MenubarItem>
                                        <Copy className="size-4 mr-2" />
                                        Copy
                                    </MenubarItem>
                                    <MenubarItem>
                                        <Clipboard className="size-4 mr-2" />
                                        Paste
                                    </MenubarItem>
                                    <MenubarItem>
                                        <ClipboardX className="size-4 mr-2" />
                                        Paste without formatting
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Replace className="size-4 mr-2"/>
                                        Find and Replace
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>

                                    
                                    <MenubarSubTrigger>
                                        <ImageIcon className="size-4 mr-2"/>
                                        Image
                                    </MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem>
                                            <Upload className="size-4 mr-2" />
                                            Upload from computer
                                        </MenubarItem>
                                        <MenubarItem>
                                            <Search className="size-4 mr-2" />
                                            Search from web
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem>
                                            <Camera className="size-4 mr-2" />
                                            Camera
                                        </MenubarItem>
                                        <MenubarItem>
                                            <Link2 className="size-4 mr-2" />
                                            By URL
                                        </MenubarItem>
                                    </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <Table className="size-4 mr-2"/>
                                            Table
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>

                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <ToggleRight className="size-4 mr-2"/>
                                            Smart Chips
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem>
                                                <BsPeople className="size-4 mr-2"/>
                                                People
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>
                                        <Link2 className="size-4 mr-2"/>
                                        Link
                                    </MenubarItem>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <ChartNoAxesCombined className="size-4 mr-2"/>
                                            Charts
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>

                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <Smile className="size-4 mr-2"/>
                                            Symbols
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>

                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <Minus className="size-4 mr-2"/>
                                        Horizontal Line
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Format
                                </MenubarTrigger>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
        </nav>
    );
};