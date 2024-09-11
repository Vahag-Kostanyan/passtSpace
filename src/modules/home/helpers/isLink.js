export const isLink = (text) => {
    try{
        const newUrl = new URL(text);
        return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    }catch(err){
        return false;
    }
};
