"use client"

import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog"
import {Id} from "../../convex/_generated/dataModel";
import { toast} from "sonner";
import {useMutation} from "convex/react";
import {api} from "../../convex/_generated/api";
import {useState} from "react";

interface RemoveDialogProps {
    documentId: Id<"documents">,
    children: React.ReactNode;
};

export const RemoveDialog = ({documentId, children} : RemoveDialogProps) => {
    const remove = useMutation(api.documents.removeById);
    const [isRemoving, setIsRemoving] = useState(false);
    return(
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e) => e.stopPropagation()}>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your document.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e) => e.stopPropagation()}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={(e) =>{
                        e.stopPropagation();
                        setIsRemoving(true);
                        remove({id : documentId})
                            .catch(() => toast.error("something went wrong"))
                            .then(() => toast.success("Document Removed"))
                            .finally(() => setIsRemoving(false));
                    }}
                    disabled={isRemoving}> Delete </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}