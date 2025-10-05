import {Button} from "@/components/ui/button";
import {ExternalLinkIcon, MoreVertical, Trash} from "lucide-react";
import {Id} from "../../../convex/_generated/dataModel";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {RemoveDialog} from "@/components/remove-dialog";


interface DocumentMenuProps {
    documentId: Id<"documents">;
    title: string;
    onNewTab: (id : Id<"documents">) => void;
}
export const DocumentMenu = ({documentId, title, onNewTab} : DocumentMenuProps) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreVertical className="size-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <RemoveDialog documentId={documentId}>
                    <DropdownMenuItem
                    onSelect={(e) => e.preventDefault()}
                    onClick={(e) => e.stopPropagation()}>
                        <Trash className="mr-2 size-4"/>
                        Remove
                    </DropdownMenuItem>
                </RemoveDialog>
                <DropdownMenuItem onClick={() => onNewTab(documentId)}>
                    <ExternalLinkIcon className="mr-2 size-4"/>
                    Open in New Tab
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}