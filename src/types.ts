export type opacityVr = {
    opacity: number;
    transition: {
        staggerChildren: number;
        delayChildren?: number;
    }
}
export type variantsMenu = {
    open: opacityVr;
    closed: opacityVr;
}

export type Variant = {
    opacity: number;
    y: number | string;
    transition: {
        delay?: number;
        duration?: number;
    }
};

export type Variants = {
    open: Variant;
    closed: Variant;
};


type VariantLR = {
    x: number | string,
    transition?: {
        stiffness: number,
        damping: number
    }
}

export type VariantLeftRight = {
    moveTo: VariantLR
    moveFrom: VariantLR
}


export type dataUser = {
    id: number | undefined;
    name: string | undefined;
    email?: string;
    username?: string;
    address?: {
        city?:string
        state?:string
        street?:string
        zipcode?:string
    }
}



export type dataProducts = {
    id: number | undefined;
    name: string | undefined;
    basePrice?: number;
    brand?: string;
    description?:string;
    featuredImage?:string
}
 