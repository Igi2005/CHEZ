export function SkinFloatToName(float: number): string {
    if (float <= 0.07) {
        return "Factory New";
    }
    else if (float <= 0.15) {
        return "Minimal Wear";
    }
    else if (float <= 0.37) {
        return "Field-Tested";
    }
    else if (float <= 0.44) {
        return "Well-Worn";
    }
    else {
        return "Battle-Scarred";
    }
}