"use client";

import { cn } from "@/lib/utils";
import { isActive, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListTodoIcon,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SearchIcon,
  SpellCheck,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { useEditorStore } from "@/store/use-editor-store";
import { use } from "react";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const FontFamilyButton = () => {
  const { editor } = useEditorStore();

  const fonts = [
    {
      label: "Arial",
      value: "Arial",
    },
    {
      label: "Times New Roman",
      value: "Times New Roman",
    },
    {
      label: "Courier New",
      value: "Courier New",
    },
  ]
}

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

const Toolbar = () => {
  const { editor } = useEditorStore();
  console.log("Toolbar editor: ", { editor });

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Search the menus",
        icon: SearchIcon,
        onClick: () => {
          // TODO: Implement search
        },
      },
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => {
          if (editor) {
            editor.chain().focus().undo().run();
          }
        },
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => {
          if (editor) {
            editor.chain().focus().redo().run();
          }
        },
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => {
          if (editor) {
            editor.commands.focus();
            window.print();
          }
        },
      },
      {
        label: "Spell Check",
        icon: SpellCheck,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
      
      
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => {
          if (editor) {
            editor.chain().focus().toggleBold().run();
          }
        },
        isActive: editor?.isActive("bold"),
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onClick: () => {
          if (editor) {
            editor.chain().focus().toggleItalic().run();
          }
        },
        isActive: editor?.isActive("italic"),
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => {
          if (editor) {
            editor.chain().focus().toggleUnderline().run();
          }
        },
        isActive: editor?.isActive("underline"),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("TODO: Comment"),
        isActive: false,
      },
      {
        label: "List Todo",
        icon: ListTodoIcon,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove Formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ]
  ];

  return (
    <div className="bg-[#F9F4F9] px-3 py-1 rounded-2xl min-h-[42px] flex items-center space-x-2 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {/* TODO: Font Family */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {/* TODO: Font Size */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {/* TODO: Heading */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};

export default Toolbar;
