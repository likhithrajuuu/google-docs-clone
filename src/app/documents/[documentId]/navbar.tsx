"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { DocumentInput } from "./document-input";
import {
    Camera, ChartBar, ChartNoAxesCombined, Clipboard, ClipboardX, Copy, Download, File, FileIcon, FileJsonIcon,
    FilePlusIcon, FileText, FileTextIcon, GlobeIcon, ImageIcon, Info, Link2, Mail, Minus, PenIcon, PrinterIcon,
    Redo, Replace, Scissors, Search, Smile, Table, ToggleRight, TrashIcon, Undo, Upload, User, AlignLeft, AlignCenter,
    AlignRight, AlignJustify, Bold, Italic, Underline, Strikethrough, List, ListOrdered, Superscript, Subscript,
    X
} from "lucide-react";

import {
    Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator,
    MenubarSub, MenubarSubContent, MenubarShortcut, MenubarSubTrigger, MenubarTrigger,
} from "@/components/ui/menubar";

import { BsFilePdf, BsMarkdown, BsPeople } from "react-icons/bs";

export const Navbar = () => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [docName, setDocName] = useState("Untitled Document");

    const exec = (command: string, value?: string) => {
        document.execCommand(command, false, value);
    };

    const handleDownload = (type: string) => {
        const text = editorRef.current?.innerText || "";
        let blob;
        switch (type) {
            case "json": blob = new Blob([JSON.stringify({ content: text }, null, 2)], { type: "application/json" }); break;
            case "html": blob = new Blob([`<html><body>${text}</body></html>`], { type: "text/html" }); break;
            case "pdf": blob = new Blob([text], { type: "application/pdf" }); break; // stub
            case "txt": blob = new Blob([text], { type: "text/plain" }); break;
            case "docx": blob = new Blob([text], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }); break;
            case "md": blob = new Blob([text], { type: "text/markdown" }); break;
            default: return;
        }
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = `${docName}.${type}`;
        a.click();
    };

    return (
        <nav className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="logo" width={36} height={36} />
                </Link>
                <div className="flex flex-col">
                    <DocumentInput />

                    <div className="flex">
                        <Menubar className="border-none bg-transparent shadow-none h-auto p-0">

                            {/* FILE MENU */}
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    File
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <Download className="size-4 mr-2" />
                                            Download
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => handleDownload("json")}>
                                                <FileJsonIcon className="size-4 mr-2" /> JSON
                                            </MenubarItem>
                                            <MenubarItem onClick={() => handleDownload("html")}>
                                                <GlobeIcon className="size-4 mr-2" /> HTML
                                            </MenubarItem>
                                            <MenubarItem onClick={() => handleDownload("pdf")}>
                                                <BsFilePdf className="size-4 mr-2" /> PDF
                                            </MenubarItem>
                                            <MenubarItem onClick={() => handleDownload("txt")}>
                                                <FileTextIcon className="size-4 mr-2" /> TXT
                                            </MenubarItem>
                                            <MenubarItem onClick={() => handleDownload("docx")}>
                                                <File className="size-4 mr-2" /> DOCX
                                            </MenubarItem>
                                            <MenubarItem onClick={() => handleDownload("md")}>
                                                <BsMarkdown className="size-4 mr-2" /> Markdown
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>

                                    <MenubarSeparator />

                                    <MenubarItem onClick={() => setDocName(prompt("Rename document:", docName) || docName)}>
                                        <PenIcon className="size-4 mr-2" /> Rename
                                    </MenubarItem>
                                    <MenubarItem onClick={() => window.print()}>
                                        <PrinterIcon className="size-4 mr-2" /> Print
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                            {/* EDIT MENU */}
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={() => exec("undo")}><Undo className="size-4 mr-2" /> Undo</MenubarItem>
                                    <MenubarItem onClick={() => exec("redo")}><Redo className="size-4 mr-2" /> Redo</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => exec("cut")}><Scissors className="size-4 mr-2" /> Cut</MenubarItem>
                                    <MenubarItem onClick={() => exec("copy")}><Copy className="size-4 mr-2" /> Copy</MenubarItem>
                                    <MenubarItem onClick={() => exec("paste")}><Clipboard className="size-4 mr-2" /> Paste</MenubarItem>
                                    <MenubarItem onClick={() => exec("insertText", prompt("Paste text without formatting:"))}><ClipboardX className="size-4 mr-2" /> Paste without formatting</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => exec("find")}> <Replace className="size-4 mr-2" /> Find & Replace</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                            {/* ---------- INSERT MENU (full, fixed) ---------- */}
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Insert
                                </MenubarTrigger>

                                <MenubarContent>
                                    {/* Image submenu */}
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <ImageIcon className="size-4 mr-2" />
                                            Image
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => document.getElementById("imageInput")?.click()}>
                                                <Upload className="size-4 mr-2" />
                                                Upload from computer
                                            </MenubarItem>

                                            <MenubarItem onClick={() => {
                                                const q = prompt("Search term (stub):");
                                                if (q) alert("Search from web is a stub — you asked for: " + q);
                                            }}>
                                                <Search className="size-4 mr-2" />
                                                Search from web
                                            </MenubarItem>

                                            <MenubarSeparator />

                                            <MenubarItem onClick={() => alert("Camera is a stub (implement with getUserMedia)")}>
                                                <Camera className="size-4 mr-2" />
                                                Camera
                                            </MenubarItem>

                                            <MenubarItem onClick={() => {
                                                const url = prompt("Enter Image URL:");
                                                if (url) exec("insertHTML", `<img src=\"${url}\" alt=\"img\" style=\"max-width:300px;display:block;\" />`);
                                            }}>
                                                <Link2 className="size-4 mr-2" />
                                                By URL
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>

                                    {/* Table submenu */}
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <Table className="size-4 mr-2" />
                                            Table
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => exec("insertHTML", "<table border='1' style='border-collapse:collapse'><tr><td>&nbsp;</td><td>&nbsp;</td></tr><tr><td>&nbsp;</td><td>&nbsp;</td></tr></table>")}>
                                                Insert 2×2 table
                                            </MenubarItem>
                                            <MenubarItem onClick={() => exec("insertHTML", "<table border='1' style='border-collapse:collapse'><tr><td>&nbsp;</td></tr></table>")}>
                                                Insert 1×1 table
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>

                                    {/* Smart chips submenu */}
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <ToggleRight className="size-4 mr-2" />
                                            Smart Chips
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => exec("insertHTML", `<span class="chip" contenteditable="false">@Person</span>&nbsp;`)}>
                                                <BsPeople className="size-4 mr-2" />
                                                People
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>

                                    {/* Single item: Link */}
                                    <MenubarItem onClick={() => {
                                        const url = prompt("Enter URL:");
                                        if (url) exec("createLink", url);
                                    }}>
                                        <Link2 className="size-4 mr-2" />
                                        Link
                                    </MenubarItem>

                                    {/* Charts submenu (stubs) */}
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <ChartNoAxesCombined className="size-4 mr-2" />
                                            Charts
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => exec("insertHTML", "<div>[Bar chart placeholder]</div>")}>
                                                <ChartBar className="size-4 mr-2" />
                                                Bar Chart (stub)
                                            </MenubarItem>
                                            <MenubarItem onClick={() => exec("insertHTML", "<div>[Line chart placeholder]</div>")}>
                                                <ChartBar className="size-4 mr-2" />
                                                Line Chart (stub)
                                            </MenubarItem>
                                            <MenubarItem onClick={() => exec("insertHTML", "<div>[Pie chart placeholder]</div>")}>
                                                <ChartBar className="size-4 mr-2" />
                                                Pie Chart (stub)
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>

                                    {/* Symbols submenu */}
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <Smile className="size-4 mr-2" />
                                            Symbols
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => exec("insertText", "©")}>© Copyright</MenubarItem>
                                            <MenubarItem onClick={() => exec("insertText", "✓")}>✓ Checkmark</MenubarItem>
                                            <MenubarItem onClick={() => {
                                                const emoji = prompt("Enter emoji to insert (e.g. 😊):");
                                                if (emoji) exec("insertText", emoji);
                                            }}>Emoji…</MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>

                                    <MenubarSeparator />

                                    {/* Horizontal line */}
                                    <MenubarItem onClick={() => exec("insertHorizontalRule")}>
                                        <Minus className="size-4 mr-2" />
                                        Horizontal Line
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                            {/* Hidden file input used by 'Upload from computer' */}
                            <input
                                id="imageInput"
                                type="file"
                                accept="image/*"
                                hidden
                                onChange={(e) => {
                                    const file = (e.target as HTMLInputElement).files?.[0];
                                    if (!file) return;
                                    const url = URL.createObjectURL(file);
                                    // Insert using insertHTML for better cross-browser reliability:
                                    exec("insertHTML", `<img src=\"${url}\" alt=\"uploaded\" style=\"max-width:300px;display:block;\" />`);
                                    // reset so same file can be uploaded again if needed
                                    (e.target as HTMLInputElement).value = "";
                                }}
                            />

                            {/* FORMAT MENU */}
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={() => exec("bold")}><Bold className="size-4 mr-2" /> Bold</MenubarItem>
                                    <MenubarItem onClick={() => exec("italic")}><Italic className="size-4 mr-2" /> Italic</MenubarItem>
                                    <MenubarItem onClick={() => exec("underline")}><Underline className="size-4 mr-2" /> Underline</MenubarItem>
                                    <MenubarItem onClick={() => exec("strikeThrough")}><Strikethrough className="size-4 mr-2" /> Strikethrough</MenubarItem>
                                    <MenubarItem onClick={() => exec("superscript")}><Superscript className="size-4 mr-2" /> Superscript</MenubarItem>
                                    <MenubarItem onClick={() => exec("subscript")}><Subscript className="size-4 mr-2" /> Subscript</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => exec("justifyLeft")}><AlignLeft className="size-4 mr-2" /> Align Left</MenubarItem>
                                    <MenubarItem onClick={() => exec("justifyCenter")}><AlignCenter className="size-4 mr-2" /> Align Center</MenubarItem>
                                    <MenubarItem onClick={() => exec("justifyRight")}><AlignRight className="size-4 mr-2" /> Align Right</MenubarItem>
                                    <MenubarItem onClick={() => exec("justifyFull")}><AlignJustify className="size-4 mr-2" /> Justify</MenubarItem>
                                    <MenubarItem onClick={() => exec("insertUnorderedList")}><List className="size-4 mr-2" /> Bulleted List</MenubarItem>
                                    <MenubarItem onClick={() => exec("insertOrderedList")}><ListOrdered className="size-4 mr-2" /> Numbered List</MenubarItem>
                                    <MenubarSeparator />
                                    <MenubarItem onClick={() => exec("removeFormat")}><X className="size-4 mr-2" /> Clear Formatting</MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>

                        </Menubar>
                    </div>
                </div>
            </div>
        </nav>
    );
};