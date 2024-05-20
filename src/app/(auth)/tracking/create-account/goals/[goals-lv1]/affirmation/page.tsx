'use client'

import React, { useState, useEffect, useRef, useContext } from 'react';
import { useRouter } from "next/navigation";
import { CREATE_ACCOUNT } from '@/app/consts/path';
import { Form, Input } from 'antd';
import ScheduleContext, { GoalType } from '../../../SheduleContext';
import { GOAL_LEVEL_1 } from '@/app/consts/interface';



const Affirmation = () => {

    const router = useRouter()
    const optsRef = useRef<(HTMLDivElement | null)[]>([])
    const scheduleContext = useContext(ScheduleContext)
    const [goal, setGoal] = useState<GoalType>({ goal: '', label: '', level: 0 })
    const [reason, setReason] = useState('')
    const [wish, setWish] = useState({wish: '', reason: '', discription: ''})

    const reasons = [
        {
            barrier: 'lack-of-time',
            reason: 'Chúng tôi hiểu rồi. Cuộc sống bận rộn cản trở việc đạt được mục tiêu của bạn.'
        },
        {
            barrier: 'hard-regimen',
            reason: 'Chúng tôi hiểu rồi. Có thể có nhiều áp lực để tuân thủ chế độ ăn đúng đắn.'
        },
        {
            barrier: 'hard-foodchoice',
            reason: 'Chúng tôi hiểu rồi. Có quá nhiều lựa chọn về thức ăn, điều này có thể gây căng thẳng khi phải đưa ra quyết định.'
        },
        {
            barrier: 'food-cravings',
            reason: 'Chúng tôi hiểu rồi. Không dễ để duy trì lịch trình khi bạn đang khao khát những món ăn yêu thích của mình.'
        },
        {
            barrier: 'social-eating',
            reason: 'Chúng tôi hiểu rồi. Không dễ để duy trì lịch trình khi bạn có nhiều sự kiện và tham gia các bữa tiệc.'
        },
        {
            barrier: 'lack-progress',
            reason: 'Chúng tôi hiểu rồi. Bạn đã bỏ công sức, muốn thấy kết quả và chúng không phải lúc nào cũng đến ngay lập tức.'
        },
        {
            barrier: 'diet-lack-variety',
            reason: 'Chúng tôi hiểu rồi. Một số chế độ ăn có thể trở nên nhàm chán hoặc lặp đi lặp lại.'
        },
        {
            barrier: 'food-taste-bad',
            reason: 'Chúng tôi hiểu rồi. Một số bữa ăn có thể cảm thấy không ngon khi đến giờ ăn.'
        },
        {
            barrier: 'food-expensive',
            reason: 'Chúng tôi hiểu rồi. Các lựa chọn thực phẩm lành mạnh có thể khá đắt đỏ.'
        },
        {
            barrier: 'cooking-hard',
            reason: 'Chúng tôi hiểu rồi. Cuộc sống bận rộn cản trở việc đạt được mục tiêu của bạn.'
        },
        {
            barrier: 'none',
            reason: 'Chúng tôi rất vui khi nghe về thành công của bạn.'
        },
        {
            barrier: 'sport-performance',
            reason: 'Điều chỉnh dinh dưỡng của bạn là một cách tuyệt vời để tiến đến một cấp độ mới.'
        },
        {
            barrier: 'gain-muscle',
            reason: 'Điều chỉnh dinh dưỡng của bạn là một cách tuyệt vời để tiến đến một cấp độ mới.'
        },
        {
            barrier: 'underweight',
            reason: 'Nếu bạn đang tìm kiếm các công cụ để đảm bảo rằng bạn đang ăn đủ, bạn đã đến đúng nơi.'
        },
        {
            barrier: 'recommended',
            reason: 'Chúng tôi rất vui khi được giúp bạn trở nên khỏe mạnh hơn.'
        },
        {
            barrier: 'other',
            reason: 'Chúng tôi rất háo hức được giúp bạn trở nên khỏe mạnh hơn.'
        },
    ]

    const wishes = [
        {
            wish: 'track-macro',
            reason: 'Theo dõi chỉ số macro là cách tuyệt vời để đạt được mục tiêu của bạn',
            discription: 'Kế hoạch về Theo dõi Macro của chúng tôi có thể giúp bạn bắt đầu. Ngoài ra, chúng tôi còn có rất nhiều công cụ để giúp việc theo dõi chỉ số macro trở nên dễ dàng.',
        },
        {
            wish: 'eat-vegan',
            reason: 'Ăn chay là một cách tuyệt vời để điều chỉnh chế độ ăn của bạn.',
            discription: 'Nó có thể giúp bảo vệ môi trường và hỗ trợ sức khỏe của bạn. Chúng tôi có các kế hoạch ăn uống và công thức chế biến thực phẩm thân thiện với người ăn chay để giúp bạn duy trì chế độ ăn đúng hướng.',
        },
        {
            wish: 'pescatarian',
            reason: 'Chế độ ăn chay cá là một cách tuyệt vời để điều chỉnh chế độ ăn của bạn. ',
            discription: 'Bằng cách này, bạn có thể hỗ trợ sức khỏe của mình bằng cách tiêu thụ nhiều omega-3. Chúng tôi có các kế hoạch ăn uống và công thức chế biến thực phẩm để giúp bạn duy trì chế độ ăn đúng hướng.',
        },
        {
            wish: 'less-sugar',
            reason: 'Việc giảm lượng đường trong chế độ ăn của bạn là một cách tuyệt vời để điều chỉnh chế độ ăn.',
            discription: 'Chúng tôi hiểu rằng điều này khá khó khăn vì nhiều loại thực phẩm được thêm đường. May mắn thay, các kế hoạch ăn uống của chúng tôi và các công thức chế biến thực phẩm được chấp thuận bởi RD có lượng đường thêm dưới 6g mỗi khẩu phần.',
        },
        {
            wish: 'less-protein',
            reason: 'Việc giảm lượng protein trong chế độ ăn của bạn là một cách tuyệt vời để điều chỉnh chế độ ăn.',
            discription: 'Ăn quá nhiều protein có thể đặt áp lực lớn lên thận của bạn. Chúng tôi có các kế hoạch ăn uống và công thức chế biến thực phẩm với lượng protein vừa phải để bạn thử nghiệm.',
        },
        {
            wish: 'less-carb',
            reason: 'Việc giảm lượng carb trong chế độ ăn của bạn là một cách tuyệt vời để điều chỉnh chế độ ăn.',
            discription: 'Bạn có thể tập trung vào protein, trái cây và rau để hỗ trợ sức khỏe của mình. Chúng tôi có rất nhiều lựa chọn thấp carb trong các công thức của chúng tôi, và thậm chí có một kế hoạch ăn uống Low Carb.',
        },
        {
            wish: 'less-lipit',
            reason: 'Việc giảm lượng chất béo trong chế độ ăn của bạn là một cách tuyệt vời để điều chỉnh chế độ ăn.',
            discription: 'Việc giảm thiểu thực phẩm chiên và lượng chất béo bão hòa có thể hỗ trợ sức khỏe tim mạch và ruột. Các kế hoạch ăn uống và công thức chế biến thực phẩm của chúng tôi tập trung vào lượng chất béo vừa phải từ các nguồn lành mạnh nhất.',
        },
        {
            wish: 'more-protein',
            reason: 'Tăng lượng protein trong chế độ ăn của bạn là một cách tuyệt vời để điều chỉnh chế độ ăn.',
            discription: 'Protein giúp bạn cảm thấy no lâu hơn và thúc đẩy sự tăng cơ thể săn chắc. Hãy thử kế hoạch High Protein của chúng tôi hoặc bộ sưu tập công thức High Protein để duy trì theo dõi.',
        },
        {
            wish: 'more-lipit',
            reason: 'Tăng lượng chất béo trong chế độ ăn của bạn là một cách tuyệt vời để điều chỉnh chế độ ăn. ',
            discription: 'Chất béo giúp bạn cảm thấy no lâu hơn và cung cấp năng lượng. Hãy thử kế hoạch High Protein hoặc Low Carb của chúng tôi, cả hai đều có các lựa chọn giàu chất béo.',
        },
        {
            wish: 'more-vegetable',
            reason: 'Ăn nhiều trái cây và rau củ là thay đổi tốt nhất bạn có thể thực hiện! ',
            discription: 'Hãy cố gắng ăn ít nhất 5 khẩu phần mỗi ngày để đạt được lợi ích sức khỏe tối ưu. Tất cả các kế hoạch dinh dưỡng của chúng tôi đều giúp bạn đạt được mục tiêu này.',
        },
        {
            wish: 'other',
            reason: 'Chúng tôi rất hào hứng khi bạn muốn cải thiện chế độ ăn của mình.',
            discription: 'Chúng tôi có rất nhiều tài nguyên dành cho bạn, như các công thức, kế hoạch ăn uống, bài viết blog và nhiều hơn nữa.',
        },
        {
            wish: 'tone-up',
            reason: 'Tuyệt vời, chúng tôi có thể giúp bạn đạt được vẻ ngoài mà bạn mong muốn. ',
            discription: 'Chúng tôi đề xuất bạn thử một số bài tập HIIT sử dụng trọng lượng cơ thể và trọng lượng nhẹ. Chúng tôi cũng đề xuất bạn theo dõi chỉ số macronutrient để đảm bảo bạn đang tiêu thụ đủ lượng protein.',
        },
        {
            wish: 'bulk-up',
            reason: 'Tuyệt vời, chúng tôi có thể giúp bạn đạt được vẻ ngoài mà bạn mong muốn. ',
            discription: 'Bạn có thể xây dựng các kế hoạch tập luyện riêng của mình và theo dõi tiến trình của mình theo thời gian. Chúng tôi cũng đề xuất bạn theo dõi chỉ số macronutrient để đảm bảo bạn đang tiêu thụ đủ lượng protein.',
        },
        {
            wish: 'get-strong',
            reason: 'Tuyệt vời, chúng tôi có thể giúp bạn trở nên mạnh mẽ.',
            discription: 'Bạn có thể tạo ra các kế hoạch tập luyện riêng của mình và theo dõi tiến trình của mình theo thời gian. Việc theo dõi chỉ số macronutrient của chúng tôi cũng sẽ giúp bạn điều chỉnh mục tiêu này.',
        },
    ]

    useEffect(() => {
        if (window) {
            const pathnames = window.location.pathname.split('/')
            const t_goal = pathnames[pathnames.length - 2]
            let currentGoalLv = 0
            switch (GOAL_LEVEL_1.indexOf(t_goal)) {
                case 0:  {
                    setGoal({goal: t_goal, label: 'giảm cân', level: 1})
                    currentGoalLv = 1
                    break
                }
                case 1: {
                    setGoal({goal: t_goal, label: 'duy trì cân nặng', level: 1})
                    currentGoalLv = 1
                    break
                }                          
                case 2: {
                    setGoal({goal: t_goal, label: 'tăng cân', level: 1})
                    currentGoalLv = 1
                    break
                }
                case 3: {
                    setGoal({goal: t_goal, label: 'tăng cơ', level: 2})
                    currentGoalLv = 2
                    break
                }
                case 4: {
                    setGoal({goal: t_goal, label: 'điều chỉnh chế độ ăn', level: 2})
                    currentGoalLv = 2
                    break
                }
                case 5: {
                    setGoal({goal: t_goal, label: 'tăng sự linh hoạt', level: 2})
                    currentGoalLv = 2
                    break
                }
            }
            // setGoalsLv1(scheduleContext.schedule.goalsLv1)
            if (currentGoalLv == 1) {
                reasons.forEach((r, i) => {
                    if (r.barrier == scheduleContext.schedule.barriersLv[0].value) {
                        setReason(r.reason)
                    }
                })
            } else if (currentGoalLv == 2) {
                wishes.forEach((w, i) => {
                    if (w.wish == scheduleContext.schedule.wishes[0].value) {
                        setWish(w)
                    }
                })
            }
        }
    }, [])



    const handleSubmit = () => {
        if (goal.level == 2) {
            router.push(`${CREATE_ACCOUNT}/activity-level`)
        } else {
            if (scheduleContext.schedule.goalsLv2.goal != '') {
                router.push(`${CREATE_ACCOUNT}/goals/${scheduleContext.schedule.goalsLv2.goal}/options`)
            } else {
                router.push(`${CREATE_ACCOUNT}/activity-level`)
            }
        }
    }



    return (
        <div className='w-full h-[92vh] flex flex-col justify-center items-center bg-white-pattern bg-cover z-0 '>
            <div className='bg-white w-1/3 h-[70vh] relative rounded-xl shadow-2xl'>
                <div className='px-10'>
                    {
                    goal.level == 1
                    ?
                        <div>
                            <div className='text-center mt-7 text-2xl font-bold font-sans'>{reason}</div>
                            {
                                goal.goal == 'gain-weight'
                                ?
                                <div className='text-center mt-5 text-md'>Hàng ngàn người đã sử dụng<span className='font-serif text-[#0066ee] text-lg font-semibold'> healthcare</span> để được hỗ trợ tăng cân, bạn cũng có thể sẽ nằm trong số đó</div>
                                :
                                <div className='text-center mt-5 text-md'>May mắn thay, chúng tôi biết cách quản lý những rủi ro tiềm ẩn trên trong quá trình thực hiện vì chúng tôi đã giúp hàng nghìn người đạt được mục tiêu của họ.</div>
                            }
                        </div>
                        :
                        <div>
                            <div className='text-center mt-7 text-2xl font-bold font-sans'>{wish.reason}</div>
                            <div className='text-center mt-5 text-md'>{wish.discription}</div>
                        </div>
                    }
                    <div className='text-center mt-5 text-md'>Hãy đi vào chi tiết để chúng tôi có thể xây dựng một kế hoạch cá nhân hóa cho bạn</div>
                </div>
                <div className='flex flex-col justify-between px-10 mt-8'>
                    <div className='flex justify-between absolute w-[85%] bottom-6'>
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

export default Affirmation;