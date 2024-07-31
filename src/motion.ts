import { VariantLeftRight, Variants, variantsMenu } from "./types"


export const variants: Variants = {
    open: { opacity: 1, y: 0, transition: { duration: .1 } },
    closed: { opacity: 0, y: "100px", transition: { delay: 0.2 } },
}

export const variantsUl: variantsMenu = {
    open: {
        opacity: 1,
        transition: {
            staggerChildren: 0.07,
            delayChildren: 0.2,
        }
    },
    closed: {
        opacity: 0,
        transition: {
            staggerChildren: -0.5,
            delayChildren: 0.2,
        }
    }
}

export const variantsLeft:VariantLeftRight = {
    moveFrom: {
        x: '-100px'
    },
    moveTo: {
        x: 0,
        transition: {
            stiffness: 200,
            damping: 200
        }
    }
}

export const variantsRight:VariantLeftRight = {
    moveFrom: {
        x: 0
    },
    moveTo: {
        x: "100%",
        transition: {
            stiffness: 200,
            damping: 200
        }
    }
}
