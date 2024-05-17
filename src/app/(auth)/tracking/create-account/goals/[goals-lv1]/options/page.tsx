'use client'

import React, {useState, useEffect, useRef, useContext} from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input } from 'antd';
import ScheduleContext, { GoalType, OptionType } from '../../../SheduleContext';


export const GOAL_LEVEL_1 = ['lose-weight', 'maintain-weight', 'gain-weight', 'gain-muscle', 'modify-diet', 'gain-flexibility']
const GOAL_LEVEL_2 = ['gain-muscle', 'modify-diet', 'gain-flexibility']

const GoalsOption = () => {

    const router = useRouter()
    const optsRef = useRef<(HTMLDivElement | null)[]>([])
    const [goal, setGoal] = useState<GoalType>({ goal: '', label: '', level: 0 })
    const [opts, setOpts] = useState<Array<OptionType>>([])
    const scheduleContext = useContext(ScheduleContext)

    const loseWeightBarriers : OptionType[] = [
        {
            label: 'Thiếu thời gian',
            value: 'lack-of-time'
        }, 
        {
            label: 'Chế độ ăn khó để tuân theo',
            value: 'hard-regimen'
        }, 
        {
            label: 'Khó khăn trong việc lựa chọn thực phẩm',
            value: 'hard-foodchoice'
        }, 
        {
            label: 'Thèm ăn',
            value: 'food-cravings'
        }, 
        {
            label: 'Ăn uống và các bữa tiệc bên ngoài',
            value: 'social-eating'
        }, 
        {
            label: 'Thiếu tiến bộ',
            value: 'lack-progress'
        },
    ]
    
    const maintainWeightBarriers : OptionType[] = [
        {
            label: 'Thiếu thời gian',
            value: 'lack-of-time'
        }, 
        {
            label: 'Chế độ ăn khó để tuân theo',
            value: 'hard-regimen'
        },
        {
            label: 'Chế độ ăn uống lành mạnh thiếu đa dạng',
            value: 'diet-lack-variety',
        },
        {
            label: 'Khó khăn trong việc lựa chọn thực phẩm',
            value: 'hard-foodchoice'
        }, 
        {
            label: 'Ăn uống và các bữa tiệc bên ngoài',
            value: 'social-eating'
        },
        {
            label: 'Thèm ăn',
            value: 'food-cravings'
        }, 
        {
            label: 'Thiếu tiến bộ',
            value: 'lack-progress'
        },
        {
            label: 'Đồ ăn không ngon',
            value: 'food-taste-bad',
        },
        {
            label: 'Thực phẩm quá đắt',
            value: 'food-expensive',
        },
        {
            label: 'Việc nấu ăn khó hoặc tốn thời gian',
            value: 'cooking-hard',
        },
        {
            label: 'Tôi không có rào cản nào',
            value: 'none',
        },
    ]

    const gainWeightReasons : OptionType[] = [
        {
            label: 'Đủ hạng cân để thi đầu thể thao',
            value: 'sport-performance',
        },
        {
            label: 'Tăng cơ bắp cho thể lực nói chung',
            value: 'gain-muscle',
        },
        {
            label: 'Tôi bị thiếu cân',
            value: 'underweight',
        },
        {
            label: 'Tôi được khuyến nghị như vậy',
            value: 'recommended',
        },
        {
            label: 'Khác',
            value: 'other',
        },
    ]

    const modifyDietWish: OptionType[] = [
        {
            label: 'Theo dõi macro',
            value: 'track-macro'
        },
        {
            label: 'Ăn chay',
            value: 'eat-vegan',
        },
        {
            label: 'Ăn chay và hải sản (Pescatarian)',
            value: 'pescatarian',
        },
        {
            label: 'Ít đường',
            value: 'less-sugar',
        },
        {
            label: 'Ít đạm',
            value: 'less-protein',
        },
        {
            label: 'Ít carbs',
            value: 'less-carb',
        },
        {
            label: 'Ít chất béo',
            value: 'less-lipit',
        },
        {
            label: 'Nhiều đạm',
            value: 'more-protein',
        },
        {
            label: 'Nhiều chất béo',
            value: 'more-lipit',
        },
        {
            label: 'Nhiều rau, củ quả',
            value: 'more-vegetable',
        },
        {
            label: 'Khác',
            value: 'other',
        },
    ]
    
    const gainMuscleWish: OptionType[] = [
        {
            label: 'Săn chắc cơ thể - Bạn muốn có cơ bắp rõ ràng với khối lượng càng ít càng tốt',
            value: 'tone-up',
        },
        {
            label: 'Tăng cơ - bạn muốn có cơ bắp to, rõ nét, với tỷ lệ mỡ trong cơ thể thấp',
            value: 'bulk-up',
        },
        {
            label: 'Trở nên khỏe mạnh - bạn muốn nâng mức tạ tối đa và không quan tâm đến lượng mỡ trong cơ thể hay độ sắc nét của cơ',
            value: 'get-strong',
        },
        
    ]

    const gainFlexibility: OptionType[] = [

    ]

    useEffect(() => {
        if (window) {
            const pathnames = window.location.pathname.split('/')
            const t_goal = pathnames[pathnames.length - 2]
            switch (GOAL_LEVEL_1.indexOf(t_goal)) {
                case 0:  {
                    setGoal({goal: t_goal, label: 'giảm cân', level: 1})
                    setOpts(loseWeightBarriers)
                    break
                }
                case 1: {
                    setGoal({goal: t_goal, label: 'duy trì cân nặng', level: 1})
                    setOpts(maintainWeightBarriers)
                    break
                }                          
                case 2: {
                    setGoal({goal: t_goal, label: 'tăng cân', level: 1})
                    setOpts(gainWeightReasons)
                    break
                }
                case 3: {
                    setGoal({goal: t_goal, label: 'tăng cơ', level: 2})
                    setOpts(gainMuscleWish)
                    break
                }
                case 4: {
                    setGoal({goal: t_goal, label: 'điều chỉnh chế độ ăn', level: 2})
                    setOpts(modifyDietWish)
                    break
                }
                case 5: {
                    setGoal({goal: t_goal, label: 'tăng sự linh hoạt', level: 2})
                    setOpts(gainFlexibility)
                    break
                }
            }

        }
    }, [])

    const handleSubmit = () => {
        const countSelected = getAmountSelectedOpts()
        if (countSelected > 0) {
            const newBarriers: Array<OptionType> = []
            const newWishes: Array<OptionType> = []
            optsRef.current.forEach((el, index) => {
                if (el?.classList.contains('selected')) {
                    newBarriers.push(opts[index])
                    newWishes.push(opts[index])

                }
            })
            const updateSchedule = goal.level == 1 
                                    ?
                                    {
                                        ...scheduleContext.schedule,
                                        barriersLv: newBarriers
                                    }
                                    : 
                                    {
                                        ...scheduleContext.schedule,
                                        wishes: newWishes
                                    }
            scheduleContext.setSchedule(updateSchedule)
            router.push(`${CREATE_ACCOUNT}/goals/${goal.goal}/affirmation`)
        } else {

        }

    }

    const selectOption = (idx: number) => {

        const clickedOpt = optsRef.current[idx]
        if (clickedOpt?.classList.contains('selected')) {
            // diselect
            diselectOpt(idx)
            
        } else {
            // select
            clickedOpt?.classList.add('selected')
            clickedOpt?.classList.remove('hover:border-gray-600')
            clickedOpt?.classList.add('border-blue-500')
            clickedOpt?.classList.add('text-blue-500')
            clickedOpt?.classList.add('font-bold')
        }
    }

    const diselectOpt = (idx: number) => {
        const clickedOpt = optsRef.current[idx]
        clickedOpt?.classList.remove('selected')
        clickedOpt?.classList.remove('border-blue-500')
        clickedOpt?.classList.remove('text-blue-500')
        clickedOpt?.classList.remove('font-bold')
        clickedOpt?.classList.add('diselected')
        clickedOpt?.classList.add('hover:border-gray-600')
    }

    const getAmountSelectedOpts = () => {
        let count = 0
        for (let ref of optsRef.current) {
            if (ref?.classList.contains('selected')) {
                count++
            }
        }
        return count
    }


    return (
        <div className='w-full min-h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white w-1/3 min-h-[70vh] rounded-xl shadow-2xl'>
                <div className='px-10'>
                    <div className='text-center mt-7 text-2xl font-bold font-sans'>
                        { goal.level == 2 
                        ?
                            `Bạn muốn đạt được điều gì với mục tiêu ${goal.label}`
                        :
                            (goal.goal == "gain-weight" 
                            ? 
                            "Lý do nào khiến cho bạn muốn tăng cân?"
                            :
                            `Trong quá khứ, những rào cản nào đã cản trở việc ${goal.label} của bạn?`)
                        }
                    </div>
                </div> 
                <div className='flex flex-col justify-between px-10 mt-8'>
                    <div>
                        {opts.map((opt, index) => (
                            <div
                                key={index}
                                className='w-full tracking-wide min-h-14 cursor-pointer border-2 text-center text-lg py-2 px-3 mb-3 rounded hover:border-gray-600'
                                ref = {(el) => optsRef.current[index] = el}
                                onClick={() => selectOption(index)}
                            >
                                {opt.label}
                            </div>
                        ))}
                    </div>

                    <div className='flex justify-between w-[100%] py-3 bg-white bottom-0 sticky'>
                        <button 
                            onClick={() => router.back()}
                            className='text-2xl w-44 h-16 bg-white hover:bg-slate-100 font-semibold tracking-wide text-blue-500 border-blue-500 border-2 rounded-xl '
                        >
                            Quay lại
                        </button>
                        <button 
                            type='submit'
                            onClick={handleSubmit}
                            className='text-2xl w-44 h-16 bg-blue-500 hover:bg-blue-700 font-semibold tracking-wide text-white rounded-xl'
                        >
                            Tiếp tục
                        </button>
                    </div>
                </div>

                    
            </div>
        </div>
    );
};

export default GoalsOption;