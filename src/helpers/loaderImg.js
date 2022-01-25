

const imagesPath ={
    home:{
        mobile: '/images/arch_465x300.jpg',
        tablette: '/images/arch_775x500.jpg',
        desktop: '/images/arch_1086x700.jpg'
    }
}

export const LoaderImg = (newSize, pageName) => {
var format="";
   const initSize=0;
   const path ="";
    if((initSize < 768 && newSize >= 768) || (initSize >=1199 && newSize <1199 ) ){
    format="tablette";
    }
    else if((initSize >= 768 && newSize >=1199)){
      format="desktop";
    }
    else if (initSize >=768 && newSize < 768){
      format="mobile";
    }
    
    switch (format){

        case 'mobile' :
            path= imagesPath.home.mobile;
            break;
            case 'tablette':
            path= imagesPath.home.tablette;
            break;
            case 'desktop':
                path =imagesPath.home.desktop;
                break;
                default:
                    return imagesPath.home.mobile;
    }
    initSize = newSize;
return path

}