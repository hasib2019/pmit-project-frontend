export const localStorageData = (data)=>{
    const token = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("token")) : null;
    if(data=='token'){
        return token
    }
    if(data=='config'){
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
        return config;
    }
}