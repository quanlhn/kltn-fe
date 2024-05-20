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

export interface Schedule {
    days: [{
        date: Date,
        mealPlan: string
        workoutExercises?: string,
        calories: number
    }],
    userId: string,
    process: string,
    goalsLv1: string,
    goalsLv2: string,
    goalsLv3: string,
    barriers: [string],
    wishes: [string],
    height: number,
    weightUpdated: number,
    weight: number,
    goalWeight: number,
    weeklyGoal: Number,
    baseActivity: number,
    levelExercise: string,
    daysPerWeek: number,
    periods: number,
    availableExercises: [string]
}

export interface MealPlan {
    date: Date,
    meals: [
        {
            name: string,
            dishes: [
                {
                    id: string,
                    amount: number
                }
            ],
            foodIds?: [
                {
                    id: string,
                    amount: number
                }
            ]

        }
    ],
    calo: number,
    protein: number,
    lipit: number,
    carbohydrat: number, 
    fiber: number,
}

export interface WorkoutExercises {
    date: Date,
    exerciseID: [string],
    totalDuration: number,
    calorieBurned: number,
    restTime: number
}

export interface Exercise {
    name: string,
    type: string,
    description: string,
    muscleGroups: string,
    difficultyLevel: string,
    duration: number,
    reps: number,
    imageUrl: string,
    videoUrl: string,
    category: string,
    met: number
}

export interface Dish {
    ten: string,
    don_vi_tinh: string,
    loai: string,
    calo: number,
    protein: number,
    lipit: number,
    carbohydrat: number,
    fiber: number,
    realAmount: number
}

export interface UnitType {
    label: string,
    coefficient: number
}

export type Result = {
    ten: string,
    protein: number,
    calo: number,
    lipit: number,
    fiber: number,
    carbohydrat: number,
    amount: number, 
    key: number
}

export type Result1 = {
    ten: string,
    protein: number,
    calo: number,
    lipit: number,
    fiber: number,
    carbohydrat: number,
    amount: number
}

export const GOAL_LEVEL_1 = ['lose-weight', 'maintain-weight', 'gain-weight', 'gain-muscle', 'modify-diet', 'gain-flexibility']
