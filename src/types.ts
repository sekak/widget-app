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
    transition:{
        delay?: number;
        duration?: number;
    }
};

export type Variants = {
    open: Variant;
    closed: Variant;
};


type VariantLR ={
    x: number | string,
    transition?:{
        stiffness:number,
        damping: number
    }
}

export type VariantLeftRight ={
    moveTo:VariantLR
    moveFrom:VariantLR
}