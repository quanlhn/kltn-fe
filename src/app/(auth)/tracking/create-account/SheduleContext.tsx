'use client'

import React, { createContext, useState} from "react";

export const L_WEIGHT = 'lose-weight'
export const M_WEIGHT = 'maintain-weight'
export const G_WEIGHT = 'gain-weight'

export type GoalType = {
  goal: string,
  label: string,
  level: number
}

export type OptionType = {
  value: string, 
  label: string
}


type ScheduleType = {
  name: string,
  phoneNumber: string,
  email: string,
  gender: string,
  birth: Date,
  goalsLv1: GoalType,
  goalsLv2: GoalType,
  goalsLv3: GoalType,
  barriersLv: Array<OptionType>,
  wishes: Array<OptionType>,
  baseActivity: number,
  stepsPerDay: number,
  height: number,
  weight: number,
  goalWeight: number,
  weeklyGoal: number,
  levelExercise: string,
  daysPerWeek: number,
  periods: number,
  availableExercises: Array<string>
}

interface Schedule {
  schedule: ScheduleType,
  setSchedule : React.Dispatch<React.SetStateAction<ScheduleType>>;
}

const ScheduleContext = createContext({} as Schedule)

export const ScheduleProvider = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    // const [id, setID] = useState('')
    // const [name, setName] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [email, setEmail] = useState('')
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    // const [cartDrawer, setCartDrawer] = useState<Array<Object>>([])

    const [schedule, setSchedule] = useState<ScheduleType>({
        name: '',
        phoneNumber: '',
        email: '',
        gender: '',
        birth: new Date(),
        goalsLv1: {goal: '', label: '', level: 1},
        goalsLv2: {goal: '', label: '', level: 2},
        goalsLv3: {goal: '', label: '', level: 2},
        barriersLv: [],
        wishes: [],
        baseActivity: 0,
        stepsPerDay: 0,
        height: 0,
        weight: 0,
        goalWeight: 0,
        weeklyGoal: 0,
        levelExercise: '',
        daysPerWeek: 0,
        periods: 0,
        availableExercises: []
  })
    return (
        <ScheduleContext.Provider value={{schedule, setSchedule}}>
            {children}
        </ScheduleContext.Provider> 
    )
}

export default ScheduleContext
