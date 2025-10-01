import Image from "next/image"
import Link from "next/link";
import {DocumentInput} from "./document-input";

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
    MenubarMenu,
} from "@/components/ui/menubar";
import {FileIcon, FileJsonIcon, FileTextIcon, GlobeIcon} from "lucide-react";
import {BsFilePdf} from "react-icons/bs";

export const Navbar = () => {
    return(
        <nav className="flex items-center justify-between">
            <div className="flex gap-4 items-center">
                <Link href='/'>
                    <Image src="/logo.svg" alt="logo" width={36} height={36}/>
                </Link>
                <div className="flex flex-col">
                    <DocumentInput />
                    <div className="flex">
                        <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                                    File
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger className="flex items-center gap-2">
                                            <FileIcon className="h-4 w-4" />
                                            Save
                                        </MenubarSubTrigger>
                                        <MenubarSubContent sideOffset={5}>
                                            <MenubarItem className="flex items-center gap-2">
                                                <FileJsonIcon className="h-4 w-4" />
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem className="flex items-center gap-2">
                                                <GlobeIcon className="h-4 w-4" />
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem className="flex items-center gap-2">
                                                <BsFilePdf className="h-4 w-4" />
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem className="flex items-center gap-2">
                                                <FileTextIcon className="h-4 w-4" />
                                                Text
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>

                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>

                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>

                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
        </nav>
    )
}