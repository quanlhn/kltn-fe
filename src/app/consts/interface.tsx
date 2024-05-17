export interface FoodType {
    _id: string
    ten: string
    loai: string
    don_vi_tinh: string
    calo: number
    carbohydrat: number
    fiber: number
    lipit: number
    protein: number
    createdAt: string
    updatedAt: string
    __v: number
}

export interface UnitType {
    label: string,
    coefficient: number
}