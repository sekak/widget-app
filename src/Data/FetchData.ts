

export const FetchData = async (url: string) => {
    try{
        const response = await fetch(url)
        const data = await response.json()
        return {data, error:false}
    }catch(e){
        return {data: null, error: true}
    }
}

 
