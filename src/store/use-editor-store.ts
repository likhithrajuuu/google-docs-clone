import { create } from "zustand";
import { type Editor } from "@tiptap/react";


interface EditorState {
    editor: Editor | null;
    setEditor: (editor: Editor | null) => void;
    title: string;
    setTitle: (title: string) => void;
};

export const useEditorStore = create<EditorState>((set) => ({
    editor: null,
    setEditor: (editor) => set({ editor }),
    title: "Untitled Document",
    setTitle: (title) => set({ title }),
}));