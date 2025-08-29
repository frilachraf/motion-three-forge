import { supabase, supabaseClient } from "./client";

export const DownloadFile = async ({fileName}) => {
    try {
        const { data ,error} = await supabase.storage.from('documents').download(fileName);
        MakeDownloadableLink(data,fileName)
        return {data}
    } catch (error) {
        console.error('downloadFile function Error', error)
        return null
    }
    
}

export const MakeDownloadableLink= (fileData:any, fileName:any) => {
    const url = URL.createObjectURL(fileData);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up
    URL.revokeObjectURL(url);
    return url
}