"use client";
import { useEditor, EditorContent} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
// import Link from '@tiptap/extension-link';


export const Editor = () => {
    const editor = useEditor({
        editorProps: {
            attributes: {
                class: "focus:outline-none"
            }
        },
        extensions: [StarterKit],
        content: '<p>Hello World</p>'
    })
    return ( 
        <div className='size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print: overflow-visible print:bg-white'>
           <div className='min-w-flex flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
            <EditorContent editor={editor} />
           </div>
        </div>
     );
}