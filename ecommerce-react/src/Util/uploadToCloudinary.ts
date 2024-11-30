export const uploadToCloudinary=async(pics:any)=>{
    const cloud_name="dki8f3x9r"
    const upload_preset="tvrynfnd"


   if (pics){
    const data=new FormData();
    data.append("file",pics);
    data.append("upload_preset",upload_preset);
    data.append("cloud_name",cloud_name);

    const res=await fetch("https://api.cloudinary.com/v1_1/dki8f3x9r/upload",{
        method:"POST",
        body:data
    })

    const fileData=await res.json();
    return fileData.url;



   }
   else{
    console.log("error:pic not found");
   }


}

