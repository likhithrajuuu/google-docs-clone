import {mutation, query} from "./_generated/server";
import { paginationOptsValidator} from "convex/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

export const create = mutation({
  // The fix is here: `ownerId` has been removed from the arguments.
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
    roomId: v.optional(v.string()),
    organisationId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("Unauthorized");
    }

    const documentId = await ctx.db.insert("documents", {
      title: args.title ?? "Untitled Document",
      ownerId: user.subject, // The owner is set securely here on the backend.
      initialContent: args.initialContent,
      roomId: args.roomId,
      organisationId: args.organisationId,
    });
    return documentId;
  },
});

export const get = query({
    args : { paginationOpts : paginationOptsValidator},
    handler: async (ctx, args) => {
        return await ctx.db.query("documents").paginate(args.paginationOpts);
    },
});

export const removeById = mutation({
    args: { id: v.id("documents")},
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();

        if(!user){
            throw new ConvexError("Unauthorized");
        }

        const document = await ctx.db.get(args.id);
        if(!document){
            throw new ConvexError("Document Not Found");
        }

        const owner = document.ownerId === user.subject;
        if(!owner){
            throw new ConvexError("UnAuthorised");
        }

        return await ctx.db.delete(args.id);
    }
});

export const updateById = mutation({
    args: {id : v.id("documents"), title : v.string()},
    handler: async (ctx, args) => {
        const user = await ctx.auth.getUserIdentity();
        if(!user){
            throw new ConvexError("Unauthorized");
        }

        const document =  await ctx.db.get(args.id);
        if(!document){
            throw new ConvexError("Document Not Found");
        }

        const owner = document.ownerId === user.subject;
        if(!owner){
            throw new ConvexError("You are not the owner of this document");
        }

        return await ctx.db.patch(args.id, { title: args.title });
    }
});