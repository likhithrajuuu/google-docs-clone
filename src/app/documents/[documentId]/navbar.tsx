"use client";

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
import {
    BoldIcon,
    FileIcon,
    FileJsonIcon,
    FilePenIcon,
    FilePlusIcon,
    FileTextIcon,
    GlobeIcon, ItalicIcon,
    PrinterIcon, Redo2Icon, RemoveFormatting, StrikethroughIcon, TableIcon, TextIcon, UnderlineIcon,
    Undo2Icon
} from "lucide-react";
import {BsFilePdf} from "react-icons/bs";
import {useEditorStore} from "@/store/use-editor-store";

export const Navbar = () => {
    const { editor } = useEditorStore();
    const insertTable = ({ rows, cols } :{rows: number, cols: number}) =>{
        editor?.chain().focus().insertTable({rows, cols, withHeaderRow: false}).run();
    };

    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
    };

    const onSaveJSON = () => {
        if(!editor) return;
        const content = editor.getJSON();
        const blob = new Blob([JSON.stringify(content)], {
            type: "application/json",
        });
        onDownload(blob, `document.json`); //TODO: Use the document name
    };

    const onSaveHTML = () => {
        if(!editor) return;
        const content = editor.getHTML();
        const blob = new Blob([content], {
            type: "text/html",
        });
        onDownload(blob, `document.html`); //TODO: Use the document name: HTML
    };

    const onSaveText = () => {
        if(!editor) return;
        const content = editor.getText();
        const blob = new Blob([content], {
            type: "text/plain",
        });
        onDownload(blob, `document.txt`); //TODO: Use the document name: Plain Text
    };

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
                                <MenubarContent className="print:hidden">
                                    <MenubarItem>
                                        <FilePlusIcon className="size-4 mr-2"/>
                                        New Document
                                        <MenubarShortcut>⌘N</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarSub>
                                        <MenubarSubTrigger className="flex items-center gap-2">
                                            <FileIcon className="h-4 w-4" />
                                            Save
                                        </MenubarSubTrigger>
                                        <MenubarSubContent sideOffset={5} className="print:hidden">
                                            <MenubarItem className="flex items-center gap-2" onClick={onSaveJSON}>
                                                <FileJsonIcon className="h-4 w-4" />
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem className="flex items-center gap-2" onClick={onSaveHTML}>
                                                <GlobeIcon className="h-4 w-4" />
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem className="flex items-center gap-2" onClick={() => window.print()}>
                                                <BsFilePdf className="h-4 w-4" />
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem className="flex items-center gap-2" onClick={onSaveText}>
                                                <FileTextIcon className="h-4 w-4" />
                                                Text
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarSeparator />
                                    <MenubarItem>
                                        <FilePenIcon className="size-4 mr-2" />
                                        Rename
                                    </MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => window.print()}>
                                        <PrinterIcon className="size-4 mr-2" />
                                        Print
                                        <MenubarShortcut>⌘P</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                                        <Undo2Icon className="size-4 mr-2"/>
                                        Undo
                                        <MenubarShortcut>⌘Z</MenubarShortcut>
                                    </MenubarItem>
                                    <MenubarItem onClick={() => editor?.chain().focus().redo().run()}>
                                        <Redo2Icon className="size-4 mr-2"/>
                                        Redo
                                        <MenubarShortcut>⌘Y</MenubarShortcut>
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <TableIcon className="size-4 mr-2"/>
                                            Table
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => insertTable({rows: 1, cols: 1})}>
                                                1 x 1
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({rows: 2, cols: 2})}>
                                                2 x 2
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({rows: 3, cols: 3})}>
                                                3 x 3
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({rows: 4, cols: 4})}>
                                                4 x 4
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted">
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <TextIcon className="size-4 mr-2"/>
                                            Text
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                                                <BoldIcon className="size-4 mr-2"/>
                                                Bold<MenubarShortcut>⌘B</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                                                <ItalicIcon className="size-4 mr-2"/>
                                                Italic<MenubarShortcut>⌘I</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                                                <UnderlineIcon className="size-4 mr-2"/>
                                                Underline<MenubarShortcut>⌘U</MenubarShortcut>
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()}>
                                                <StrikethroughIcon className="size-4 mr-2"/>
                                                <span>Strikethrough&nbsp;&nbsp;</span> <MenubarShortcut>⌘S</MenubarShortcut>
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                                        <RemoveFormatting className="size-4 mr-2"/>
                                        Clear Formatting
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
        </nav>
    )
}