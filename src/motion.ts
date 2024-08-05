import { VariantLeftRight } from "./types"

export const variantsLeft: VariantLeftRight = {
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

export const variantsRight: VariantLeftRight = {
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

export const variantsWidget = {
    open: {
        display: 'block',
        height: '100%',
        opacity: 1,
        transition: {
            duration: 0.6,
        }
    },
    closed: {
        display: 'none',
        height: '0',
        opacity: 0,
        transition: {
            duration: 0.6,
        }
    }
}

export const variantsButton = {
    open: {
        rotate: 360,
        transition: {
            duration: 1
        }
    },
    closed: {
        rotate: 0,
        transition: {
            duration: 1
        }
    }
}