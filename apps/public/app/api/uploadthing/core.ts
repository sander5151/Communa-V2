

import { prisma } from "@repo/db";
import { createUploadthing } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    videoUploader: f({
        video: {
            maxFileSize: "512MB",
            maxFileCount: 1,
        },
    })
        .middleware(async ({ req }) => {
            const user = await auth(req);
            if (!user) throw new UploadThingError("Unauthorized");

            return { userId: user.id };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            console.log("Upload complete for userId:", metadata.userId);
            console.log("File URL:", file.url);

            // ✅ Make sure to create and assign the submission
            const fileData = await prisma.file.create({
                data: {
                    name: file.name,
                    url: file.ufsUrl,
                    key: file.key,
                    type: file.type,
                    size: file.size,
                },
            });

            // ✅ Return the ID to the client
            return {
                uploadedBy: metadata.userId,
                fileId: fileData.id, // <--- make sure `submission` is defined like this
            };
        }),
};