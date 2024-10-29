export function descriptionSlicer(desc:string,max:number){
    return desc.length>=max ? `${desc.slice(0,max)}...`: desc;
}