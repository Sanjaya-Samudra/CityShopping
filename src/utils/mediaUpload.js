import { createClient } from "@supabase/supabase-js";

const url = "https://yisqozbdtjjswldpwcep.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpc3FvemJkdGpqc3dsZHB3Y2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0NjU1NDcsImV4cCI6MjA4NDA0MTU0N30.yohjVoULHhSqI9NemV38IkFzEld2MlAUuE-UsyT-Khg";
	

const supabase = createClient(url, key);

export default function uploadFile(file) {
	return new Promise((resolve, reject) => {
		const timeStamp = Date.now();
		const fileName = timeStamp + "_" + file.name;
		supabase.storage.from("images").upload(fileName, file, {
			cacheControl: "3600",
			upsert: false,
		}).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
                resolve(publicUrl);
            }
        ).catch((error)=>{
            reject(error);
        })
	});
}

