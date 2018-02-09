export class FuseValueConverter {

    toView(value, options, criteria) {
 
        if (!options || !criteria)
        return value || [];
    
        const fuse = new Fuse(value, options); 
    
        return fuse.search(criteria);
        }
}