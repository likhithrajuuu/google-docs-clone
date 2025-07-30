interface DocumentIdPageProps {
    params: Promise<{ documentId: string}>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
    const {documentId} = await params;

    return ( 
        <div>
            Documents Id: {documentId}
        </div>
     );
}
 
export default DocumentIdPage;