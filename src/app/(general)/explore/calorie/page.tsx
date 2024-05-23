'use client'

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, InputNumber, Radio, RadioChangeEvent, Select, Space, Table } from 'antd';
import { PARAGRAPH_STYLES, PARAGRAPH_TITLE } from '@/app/consts/className';
import { RightCircleOutlined } from '@ant-design/icons';

type resultType = {
    bmr: number,
    amr: number,
    wLossLv1: number,
    wLossLv2: number,
    wLossLv3: number,
    wGainLv1: number, 
    wGainLv2: number,
    wGainLv3: number,
}

const { Option } = Select;


const CalorieCout = () => {
    
    const defaultTableValue = { size: 'large', gender: 'male', age: 25, weight: 70, height: 178, activity: 1, formula: 'formula1', bodyfat: 20 }
    
    const [isHipHidden, setHipHidden] = useState(true)

    const KgToCalorie = (kg: number) => {
        return kg * 7716.179176
    }

    const getSuggestCalo = (amr: number, kgPerWeek: number, gain: boolean) => {
        const w_amr = amr * 7
        const w_different = KgToCalorie(kgPerWeek)
        if (gain) {
            return Number(((w_amr + w_different) / 7).toFixed(0))
        } else {
            return Number(((w_amr - w_different) / 7).toFixed(0))
        }

    }

    const handleSubmit = (values: any) => {
        let bmr
        const {gender, age, weight, height, activity, formula, bodyfat} = values
        if (formula == 'formula1') {
            bmr = formula1(gender, weight, height, age)
        } else if (formula == 'formula2') {
            bmr = formula2(gender, weight, height, age)
        } else {
            console.log(bodyfat)
            bmr = formula3(weight, bodyfat)
        }

        const amr = bmr * activity

        setResult(() => {
            return {
                bmr,
                amr: Number(amr.toFixed(0)),
                wLossLv1: getSuggestCalo(amr, 0.25, false),
                wLossLv2: getSuggestCalo(amr, 0.5, false),
                wLossLv3: getSuggestCalo(amr, 1, false),
                wGainLv1: getSuggestCalo(amr, 0.25, true), 
                wGainLv2: getSuggestCalo(amr, 0.5,true),
                wGainLv3: getSuggestCalo(amr, 1,true),
            }
        })

    }

    const getBmr = () => {

    }

    const onChange = (e: RadioChangeEvent) => {
        if (e.target.value == 'male') {
            setHipHidden(true)
        } else {
            setHipHidden(false)
        }
    };

    useEffect(() => {
        console.log(isHipHidden)
    }, [isHipHidden])

    const formula1 = (gender: string, w: number, h: number, a: number) => {
        if (gender == 'male' ) {
            return 10*w + 6.25*h - 5*a + 5
        } else {
            return 10*w + 6.25*h - 5*a - 161
        }
    }
    const formula2 = (gender: string, w: number, h: number, a: number) => {
        if (gender == 'male' ) {
            return 13.397*w + 4.799*h - 5.677*a + 88.362
        } else {
            return 9.247*w + 3.098*h - 4.330*a + 447.593
        }
    }
    const formula3 = (w: number, f: number) => {
        return 370 + 21.6*(1 - f / 100)*w
    }


    const [result, setResult] = useState<resultType>(() => {

        const {gender, weight, height, age} = defaultTableValue
        const bmr = formula1(gender, weight, height, age)

        return {
            bmr,
            amr: 0,
            wLossLv1: 0,
            wLossLv2: 0,
            wLossLv3: 0,
            wGainLv1: 0, 
            wGainLv2: 0,
            wGainLv3: 0,
        }
    })

 

    return (
        <div className='mt-10 z-0 mx-40'>
            <div className='text-5xl mb-8 font-semibold'>Tính Calo</div>
            <p className={PARAGRAPH_STYLES} >Bộ tính Calo có thể được sử dụng để ước tính số calo mà một người cần tiêu thụ mỗi ngày. Bộ tính này cũng có thể cung cấp một số hướng dẫn đơn giản để tăng hoặc giảm cân.</p>
            <div className='flex border-slate-800 mt-8'>
            <Form
                        labelCol={{
                        span: 6,
                        }}
                        wrapperCol={{
                        span: 18,
                        }} 
                        layout="horizontal"
                        initialValues={defaultTableValue}
                        style={{
                        maxWidth: 800, 
                        
                        }}
                        onFinish={handleSubmit}
                        className='w-1/2'
                    >

                        <Form.Item label="Tuổi" name='age'>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Giới tính" name='gender'>
                            <Radio.Group onChange={onChange} >
                                <Radio value="male" defaultChecked={isHipHidden}> Nam </Radio>
                                <Radio value="female"> Nữ </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Cân nặng" name='weight' rules={[{ required: true, message: 'Chưa nhập cân nặng'}]}>
                            <InputNumber addonAfter="kg"/>
                        </Form.Item>
                        <Form.Item label="Chiều cao" name='height' rules={[{ required: true, message: 'Chưa nhập chiều cao'}]}>
                            <InputNumber addonAfter="cm"/>
                        </Form.Item>
                        <Form.Item label='Mức độ vận động' name='activity' rules={[{ required: true }]}>
                            <Select 
                                allowClear
                            >
                                <Option value={1} >Chỉ số BMR (Lượng calo tối thiểu để duy trì sự sống)</Option>
                                <Option value={1.2} >Lười biếng: ít hoặc không tập thể dục</Option>
                                <Option value={1.375} >Nhẹ nhàng: tập thể dục 1-3 lần/tuần</Option>
                                <Option value={1.465} >Vừa phải: tập thể dục 4-5 lần/tuần</Option>
                                <Option value={1.55} >Có vận động: tập thể dục hàng ngày hoặc tập thể dục mạnh 3-4 lần/tuần</Option>
                                <Option value={1.725} >Vận động nhiều: tập thể dục mạnh 6-7 lần/tuần</Option>
                                <Option value={1.9} >Vận động rất nhiều: tập thể dục mạnh hàng ngày hoặc lao động chân tay</Option>

                            </Select>
                        </Form.Item>

                        <Form.Item label='Công thức tính BMR: ' name='formula'>
                            <Radio.Group onChange={() => {}} >
                            <Space direction='vertical'>
                                <Radio value="formula1" defaultChecked={true}>  Mifflin St Jeor </Radio>
                                <Radio value="formula2">  Revised Harris-Benedict </Radio>
                                <Radio value="formula3">  Katch-McArdle </Radio>
                            </Space>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label="Body fat" name='bodyfat' rules={[{ required: true, message: 'Chưa nhập cân nặng'}]}>
                            <InputNumber addonAfter="%"/>
                        </Form.Item>
                    
                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                            <input 
                                className='bg-blue-500 px-5 py-2 text-2xl font-semibold text-white rounded-xl cursor-pointer hover:drop-shadow-xl' 
                                type='submit' 
                                value='Tính'
                                >
                                    
                            </input>

                            {/* <Button htmlType='submit'>Default Button</Button> */}

                        </Form.Item>
                        
            </Form>

            <Table 
                className='w-1/2'
                pagination={false}
                columns={[
                    {
                        title: 'Tiêu chí',
                        dataIndex: 'criteria',
                        key: 'criteria',
                    },
                    {
                        title: 'Kết quả',
                        dataIndex: 'result',
                        key: 'result',
                    }
                ]} 
                dataSource={[
                    {key: '1', criteria: "Giữ nguyên cân nặng", result: `${(result.amr)} calo/ngày`},
                    {key: '2', criteria: <div className='flex justify-between'><div>Giảm cân nhẹ </div> <div>0.25kg/tuần</div></div>, result: `${result.wLossLv1} calo/ngày`},
                    {key: '3', criteria: <div className='flex justify-between'><div>Giảm cân </div> <div>0.5kg/tuần</div></div>, result: `${(result.wLossLv2)} calo/ngày`},
                    {key: '4', criteria: <div className='flex justify-between'><div>Giảm cân cực đồ </div> <div>1kg/tuần</div></div>, result: `${(result.wLossLv3)} calo/ngày`},
                    {key: '5', criteria: <div className='flex justify-between'><div>Tăng cân nhẹ </div> <div>0.25kg/tuần</div></div>, result: `${(result.wGainLv1)} calo/ngày`},
                    {key: '5', criteria: <div className='flex justify-between'><div>Tăng cân </div> <div>0.5kg/tuần</div></div>, result: `${(result.wGainLv2)} calo/ngày`},
                    {key: '6', criteria: <div className='flex justify-between'><div>Tăng cân cực độ </div> <div>1kg/tuần</div></div>, result: `${(result.wGainLv3)} calo/ngày`},
                ]}
            />
            </div>

            <div className="IdealBodyFat mt-10">
                <div className={PARAGRAPH_TITLE}>Giới thiệu</div>
                <hr className='border-t-2 mb-4' />
                
                <div>
                    <p className={PARAGRAPH_STYLES}>Bộ đếm calo này dựa trên một số phương trình, và kết quả của bộ đếm dựa trên một ước lượng trung bình. Phương trình Harris-Benedict là một trong những phương trình sớm nhất được sử dụng để tính toán tỷ lệ trao đổi chất cơ bản (BMR), tức là lượng năng lượng tiêu thụ mỗi ngày khi nghỉ ngơi. Nó đã được sửa đổi vào năm 1984 để trở nên chính xác hơn và được sử dụng cho đến năm 1990, khi Phương trình Mifflin-St Jeor được giới thiệu. Phương trình Mifflin-St Jeor cũng tính toán BMR và đã được chứng minh là chính xác hơn so với phương trình Harris-Benedict đã sửa đổi. Công thức Katch-McArdle hơi khác biệt ở chỗ nó tính toán chi tiêu năng lượng hàng ngày khi nghỉ ngơi (RDEE), trong đó tính tới khối lượng cơ thể gầy, điều mà cả phương trình Mifflin-St Jeor lẫn Harris-Benedict không làm. Trong số các phương trình này, Phương trình Mifflin-St Jeor được coi là phương trình chính xác nhất để tính toán BMR với ngoại lệ là Công thức Katch-McArdle có thể chính xác hơn đối với những người gầy hơn và biết tỷ lệ mỡ trong cơ thể của họ. Ba phương trình được sử dụng bởi bộ đếm được liệt kê dưới đây:</p>
                    <div>
                        <div className='font-semibold'>Phương trình Mifflin-St Jeor:</div>
                        <div>Đối với nam:</div>
                        <div className='text-center'>BMR = 10W + 6.25H - 5A + 5</div>
                        <div>Đối với nữ:</div>
                        <div className='text-center'>BMR = 10W + 6.25H - 5A - 161</div>
                    </div>
                    <div>
                        <div className='font-semibold'>Phương trình Harris-Benedict đã sửa đổi:</div>
                        <div>Đối với nam:</div>
                        <div className='text-center'>BMR = 13.397W + 4.799H - 5.677A + 88.362</div>
                        <div>Đối với nữ:</div>
                        <div className='text-center'>BMR = 9.247W + 3.098H - 4.330A + 447.593</div>
                    </div>
                    <div>
                        <div className='font-semibold'>Công thức Katch-McArdle:</div>
                        <div className='text-center'>BMR = 370 + 21.6(1 - F)W</div>
                    </div>
                    <p className='italic'>Trong đó:</p>
                    <p className={PARAGRAPH_STYLES}>W là cân nặng cơ thể tính bằng kg</p>
                    <p className={PARAGRAPH_STYLES}>H là chiều cao cơ thể tính bằng cm</p>
                    <p className={PARAGRAPH_STYLES}>A là tuổi</p>
                    <p className={PARAGRAPH_STYLES}>F là tỷ lệ mỡ trong cơ thể tính bằng phần trăm</p>
                </div>
                <div className='mt-6'>
                    <p className={PARAGRAPH_STYLES} >Giá trị thu được từ các phương trình này là số calo ước lượng một người có thể tiêu thụ trong một ngày để duy trì cân nặng của họ, giả sử họ vẫn ở trạng thái nghỉ ngơi. Giá trị này được nhân với một hệ số hoạt động (thông thường là 1.2-1.95) phụ thuộc vào mức độ hoạt động thông thường của một người, mà tính tới những thời điểm trong ngày mà một người không ở trạng thái nghỉ ngơi. 1 pound, hoặc khoảng 0.45 kg, tương đương với khoảng 3,500 calo. Do đó, để giảm 1 pound mỗi tuần, được khuyến nghị cắt giảm 500 calo so với ước lượng calo cần thiết để duy trì cân nặng hàng ngày. Ví dụ, nếu một người có một số calo ước lượng là 2,500 calo mỗi ngày để duy trì cân nặng, tiêu thụ 2,000 calo mỗi ngày trong một tuần lý thuyết sẽ dẫn đến việc mất đi 3,500 calo (hoặc 1 pound) trong thời gian đó.</p>
                    <p className={PARAGRAPH_STYLES} >Quan trọng nhớ rằng chế độ ăn uống và tập luyện là phương pháp được chấp nhận phổ biến nhất để giảm cân. Không nên giảm lượng calo hấp thụ hơn 1,000 calo mỗi ngày, vì mất hơn 2 pounds mỗi tuần có thể không lành mạnh và có thể dẫn đến hiệu ứng ngược lại trong tương lai gần bằng cách giảm trao đổi chất. Mất hơn 2 pounds mỗi tuần có thể liên quan đến việc mất cơ bắp, điều này trong suốt giảm BMR, vì sự tăng trưởng cơ bắp hơn dẫn đến BMR cao hơn. Mất cân nặng quá mức cũng có thể do mất nước, điều này không lành mạnh. Hơn nữa, đặc biệt khi tập thể dục kết hợp với chế độ ăn kiêng, việc duy trì một chế độ ăn uống lành mạnh là quan trọng, vì cơ thể cần phải có khả năng hỗ trợ các quá trình trao đổi chất và tái tạo chính mình. Cắt giảm cơ thể của những chất dinh dưỡng cần thiết như một phần của chế độ ăn không lành mạnh có thể có các tác động tiêu cực nghiêm trọng và việc mất cân nặng theo cách này đã được chứng minh trong một số nghiên cứu là không bền vững, vì cân nặng thường được lấy lại dưới dạng mỡ (đưa người tham gia vào tình trạng tồi tệ hơn so với khi bắt đầu chế độ ăn kiêng). Do đó, ngoài việc giám sát lượng calo tiêu thụ, việc duy trì mức độ tiêu thụ sợi cũng như các yêu cầu dinh dưỡng khác là quan trọng để cân bằng nhu cầu của cơ thể.</p>
                    <p className={PARAGRAPH_STYLES} ></p>
                </div>
            </div>

            <div className="information mt-10">
                <div className={PARAGRAPH_TITLE}>Phương pháp đếm Calo để giảm cân</div>
                <hr className='border-t-2 mb-4' />
                <div>
                    <p className={PARAGRAPH_STYLES} >Việc đếm calo với mục đích giảm cân, ở mức đơn giản nhất, có thể được phân thành một vài bước chung:</p>
                    <ol className='pl-10' start={1} style={{listStyleType: 'decimal'}} >
                        <li className='mt-5 mb-2'>Xác định BMR của bạn bằng một trong những phương trình được cung cấp. Nếu bạn biết tỷ lệ mỡ trong cơ thể của mình, Công thức Katch-McArdle có thể là một biểu diễn chính xác hơn về BMR của bạn. Hãy nhớ rằng các giá trị thu được từ những phương trình này chỉ là ước lượng và việc trừ chính xác 500 calo từ BMR của bạn không nhất thiết sẽ dẫn đến việc mất chính xác 1 pound mỗi tuần - nó có thể ít hơn hoặc có thể nhiều hơn!</li>
                        <li className='mt-5 mb-2'>Xác định mục tiêu giảm cân của bạn. Hãy nhớ rằng 1 pound (khoảng ~0.45 kg) tương đương với khoảng 3500 calo, và việc giảm lượng calo hàng ngày so với BMR ước tính của bạn đi 500 calo mỗi ngày lý thuyết sẽ dẫn đến mất 1 pound mỗi tuần. Thông thường không khuyến khích giảm hơn 2 pounds mỗi tuần vì nó có thể có tác động tiêu cực đến sức khỏe, tức là hãy cố gắng mục tiêu giảm lượng calo hàng ngày tối đa khoảng 1000 calo mỗi ngày. Việc tham khảo ý kiến của bác sĩ và/hoặc một chuyên gia dinh dưỡng đăng ký (RDN) được khuyến nghị trong các trường hợp bạn dự định giảm hơn 2 pounds mỗi tuần.</li>
                        <li className='mt-5 mb-2'>Chọn một phương pháp để theo dõi lượng calo và tiến triển đến mục tiêu của bạn. Nếu bạn có một chiếc điện thoại thông minh, có nhiều ứng dụng dễ sử dụng giúp theo dõi lượng calo, tập thể dục và tiến triển, giữa các thứ khác. Nhiều ứng dụng này có ước tính về số calo trong nhiều thức ăn của các thương hiệu hoặc món ăn ở nhà hàng, và nếu không, chúng có thể ước tính calo dựa trên lượng thành phần cá nhân của các loại thực phẩm. Có thể khó để hiểu rõ về tỷ lệ thức ăn và số calo chúng chứa - đó là lý do tại sao việc đếm calo (cũng như bất kỳ phương pháp nào khác) không phải dành cho tất cả mọi người - nhưng nếu bạn đo lường và theo dõi số calo trong một số bữa ăn thông thường của bạn một cách kỹ lưỡng, nhanh chóng bạn sẽ dễ dàng ước tính chính xác nội dung calo mà không cần phải đo hoặc cân thực phẩm của bạn mỗi lần. Cũng có các trang web có thể giúp làm điều tương tự, nhưng nếu bạn muốn, việc duy trì một bảng tính excel hoặc thậm chí một nhật ký bằng bút và giấy cũng là các phương thức thay thế khả thi.</li>
                        <li className='mt-5 mb-2'>Theo dõi tiến triển của bạn qua thời gian và thay đổi để đạt được mục tiêu tốt hơn nếu cần thiết. Hãy nhớ rằng việc giảm cân một mình không phải là yếu tố quyết định duy nhất của sức khỏe và thể chất, và bạn nên xem xét các yếu tố khác như mất/giảm cân cơ bắp so với mỡ. Ngoài ra, được khuyến nghị đo lường trong khoảng thời gian dài như một tuần (thay vì hàng ngày) vì biến thiên đáng kể về cân nặng có thể xảy ra đơn giản dựa trên lượng nước uống hoặc thời gian trong ngày. Cũng lý tưởng là đo lường trong điều kiện nhất quán, chẳng hạn như cân nặng của bạn ngay sau khi bạn thức dậy và trước khi ăn sáng, thay vì vào các thời điểm khác nhau trong suốt ngày.</li>
                        <li className='mt-5 mb-2'>Tiếp tục nỗ lực!</li>
                    </ol>
                </div>
                <p className={PARAGRAPH_STYLES} >Các bước trên là một cố gắng để tiến hành dạng đơn giản nhất của việc đếm calo. Đếm calo không phải là một khoa học chính xác, và có thể phức tạp đến mức bạn muốn. Những điều trên không xem xét tỷ lệ các macronutrient được tiêu thụ. Mặc dù không có tỷ lệ lý tưởng nào biết đến chính xác của các macronutrient (chất béo, protein, carbohydrate), việc cân bằng một số ít là hoàn toàn khuyến khích, và các loại thức ăn khác nhau được tìm thấy có những hiệu ứng khác nhau đối với sức khỏe, cảm giác đói và số calo đốt cháy. Nói chung, thực phẩm từ thực vật và động vật được chế biến ít nhất thường có khả năng tốt hơn cho việc giảm cân và duy trì cân nặng khỏe mạnh.</p>
                <p className={PARAGRAPH_STYLES} >Có nhiều phương pháp giảm cân và không có phương pháp lý tưởng cố định nào phù hợp cho tất cả mọi người, đó là lý do tại sao có nhiều chế độ ăn kiêng và lịch tập luyện khác nhau tồn tại. Mặc dù một số phương pháp hiệu quả hơn cho từng cá nhân, không phải tất cả các phương pháp giảm cân đều tương đương, và các nghiên cứu cho thấy một số phương pháp lành mạnh hơn những phương pháp khác. Tuy nhiên, phương pháp giảm cân hiệu quả nhất thường là đếm calo. Ở dạng cơ bản nhất của nó, calo tiêu thụ trừ đi calo tiêu hao sẽ dẫn đến tăng cân nếu kết quả là dương, hoặc giảm cân nếu kết quả là âm. Tuy nhiên, điều này xa lạc hơn một bức tranh toàn diện, và nhiều yếu tố khác cũng đóng một vai trò trong việc ảnh hưởng đến việc giảm cân khỏe mạnh và bền vững. Ví dụ, có các nghiên cứu trái ngược về việc liệu loại calo hoặc thức ăn tiêu thụ, hoặc cách tiêu thụ chúng, có ảnh hưởng đến việc giảm cân hay không. Các nghiên cứu đã chỉ ra rằng thực phẩm yêu cầu người ta nhai nhiều hơn và khó tiêu hóa hơn dẫn đến cơ thể đốt cháy nhiều calo hơn, đôi khi được gọi là hiệu ứng nhiệt của thực phẩm. Mặc dù sự tăng lên trong việc đốt cháy calo có thể không đáng kể, nhưng thực phẩm khó tiêu hóa hơn như rau củ thường có xu hướng lành mạnh hơn và cung cấp nhiều dưỡng chất hơn cho ít calo hơn so với nhiều thực phẩm được chế biến.</p>
                <p className={PARAGRAPH_STYLES} >Tuân theo quan điểm rằng đối với việc giảm cân, chỉ có calo ròng quan trọng và không phải nguồn gốc của chúng, có những trường hợp như chế độ ăn kiêng Twinkie, nơi một người chỉ đếm calo khi ăn một loạt các loại bánh snack đã giảm 27 pound trong vòng hai tháng. Mặc dù có thể hiệu quả như vậy, điều này chắc chắn không được khuyến nghị. Mặc dù người tham gia không dường như gặp phải bất kỳ tác hại sức khỏe nào đáng kể trong trường hợp cụ thể này, nhưng có các yếu tố ít đo được khác cần phải xem xét như tác động dài hạn của một chế độ ăn như vậy đối với khả năng phát triển ung thư, bệnh tim mạch và tiểu đường. Tuy nhiên, bỏ qua hiệu quả và sức khỏe, giảm lượng calo tiêu thụ hoặc tăng cường hoạt động thể chất đáng kể nên dẫn đến giảm cân, và việc đếm calo có thể là một cách hiệu quả để đạt được kết quả duy nhất này.</p>
                <p className={PARAGRAPH_STYLES} >Ngoài việc là một phương pháp hữu ích để hỗ trợ giảm cân, đếm calo còn có những lợi ít được đo lường khác bao gồm giúp tăng cường nhận thức về dinh dưỡng. Nhiều người hoàn toàn không nhận biết hoặc đánh giá thấp lượng calo hàng ngày của họ. Đếm calo có thể giúp nâng cao nhận thức về các loại thực phẩm khác nhau, số lượng calo chúng chứa, và cách những calo này ảnh hưởng khác nhau đối với cảm giác no của một người. Một khi một người có hiểu biết tốt hơn về số calo thực sự trong túi bỏng ngô mà họ có thể dễ dàng hít vào trong vài phút, lượng calo hàng ngày mà nó tiêu thụ, và những viên bỏng ngô ít thôi để làm đầy cơn đói của họ, việc kiểm soát phần ăn và tránh thực phẩm có calo trống thường trở nên dễ dàng hơn.</p>
                <p className={PARAGRAPH_STYLES} >Việc đo lường chính xác lượng calo cũng có thể hỗ trợ giảm cân, vì mục tiêu calo cụ thể có thể được đặt ra, thay vì chỉ cố gắng ăn ít hơn. Ngoài ra, mặc dù điều này không nhất thiết liên quan trực tiếp đến việc đếm calo, các nghiên cứu đã chỉ ra rằng kiểm soát phần ăn bằng cách ăn từ đĩa nhỏ hơn có thể giúp giảm lượng calo tiêu thụ, vì mọi người thường đổ đầy đĩa và ăn hết mọi thứ trên đĩa. Nhiều người không nhận ra rằng họ đang ăn quá nhiều, vì họ đã quen với các phần ăn kích thước của nhà hàng là điều bình thường, khi mà các phần ăn đó có thể lớn hơn ba lần hoặc nhiều hơn so với cần thiết cho một bữa ăn thông thường.</p>
                <p className={PARAGRAPH_STYLES} >Theo dõi lượng calo cũng đưa tập thể dục vào một góc nhìn có thể đo lường được, tăng sự nhận thức của một người về việc cần bao nhiêu tập thể dục thực sự để đối phó với một túi bỏng M&M's có 220 calo. Một khi một liên kết được tạo ra giữa lượng tập thể dục mà một số loại snack tương đương, nhiều người thấy việc kiêng nhịn từ túi bỏng ngô là lựa chọn được ưa thích hơn là thực hiện một lượng tập thể dục tương đương - điều này có thể dẫn đến thói quen ăn uống lành mạnh hơn.</p>
                <p className={PARAGRAPH_STYLES} >Cuối cùng, điều quan trọng là chọn lựa một chiến lược phù hợp với bạn. Đếm calo chỉ là một trong nhiều phương pháp được sử dụng để giảm cân, và ngay cả trong phương pháp này, có nhiều cách tiếp cận mà một người có thể thực hiện. Tìm một phương pháp phù hợp với lối sống của bạn mà bạn nghĩ rằng bạn có thể tuân thủ là có khả năng cung cấp lựa chọn bền vững nhất và kết quả mong muốn.</p>
                <p className={PARAGRAPH_STYLES} ></p>
            </div>

            <div className="Potential-Complications mt-10">
                <div className={PARAGRAPH_TITLE}>Zigzag Calorie Cycling</div>
                <hr className='border-t-2 mb-4' />
                <div>
                    <p className={PARAGRAPH_STYLES} >Calo Zigzag là phương pháp giảm cân mục tiêu là đối phó với xu hướng thích nghi tự nhiên của cơ thể con người. Đếm và hạn chế calo, như đã mô tả ở trên, là một phương pháp khả thi để giảm cân, nhưng sau một khoảng thời gian, cơ thể có thể thích nghi với số calo thấp hơn được tiêu thụ. Trong các trường hợp như vậy, việc giảm cân sẽ đạt một mức đỉnh mà khó khăn để vượt qua có thể xảy ra. Đây là lúc Calo Zigzag có thể giúp ích, bằng cách không cho phép cơ thể thích nghi với môi trường calo thấp hơn.</p>
                    <p className={PARAGRAPH_STYLES} >Calo Zigzag liên quan đến việc thay đổi số calo tiêu thụ trong một ngày nhất định. Một người trên chế độ ăn kiêng zigzag nên có một sự kết hợp giữa các ngày tiêu thụ nhiều calo và ít calo để đạt được cùng một mục tiêu calo hàng tuần. Ví dụ, nếu mục tiêu calo hàng tuần của bạn là 14.000 calo, bạn có thể tiêu thụ 2.300 calo ba ngày một tuần và 1.775 calo vào bốn ngày còn lại của tuần, hoặc bạn có thể tiêu thụ 2.000 calo mỗi ngày. Trong cả hai trường hợp, 14.000 calo sẽ được tiêu thụ trong suốt tuần, nhưng cơ thể không sẽ thích nghi và bù đắp cho chế độ ăn 2.000 calo. Điều này cũng cho phép một người linh hoạt hơn trong chế độ ăn của họ, cho phép họ lập kế hoạch xung quanh các dịp, chẳng hạn như công việc hoặc buổi tụ tập gia đình, nơi một người có thể tiêu thụ nhiều calo hơn. Tiêu thụ một số calo ít hơn vào các ngày khác có thể cho phép một người thưởng thức những buổi tụ tập này hoặc thậm chí có một "ngày phạm tội" nơi họ ăn bất cứ thứ gì mà họ muốn mà không cảm thấy tội lỗi, vì họ có thể bù đắp cho lượng calo dư thừa vào những ngày calo ít hơn.</p>
                    <p className={PARAGRAPH_STYLES} >Không có quy tắc hoặc nghiên cứu cụ thể nào quy định cách hiệu quả nhất để thay đổi hoặc phân phối việc tiêu thụ calo. Cách biến đổi lượng calo thường dựa vào quyết định cá nhân. Tùy thuộc vào mức độ hoạt động của một người, thường khuyến nghị rằng các ngày tiêu thụ calo cao và ít calo phải khác nhau khoảng 200-300 calo, trong đó ngày tiêu thụ calo cao thường là số calo mà một người cần tiêu thụ để duy trì cân nặng hiện tại của họ. Đối với một người có mức độ hoạt động cao hơn, sự khác biệt calo cần lớn hơn. Bảng tính hiển thị hai lịch trình chế độ ăn kiêng zigzag. Lịch trình đầu tiên có hai ngày tiêu thụ calo cao và năm ngày tiêu thụ calo ít. Lịch trình thứ hai tăng và giảm calo dần dần. Trong cả hai trường hợp, tổng lượng calo hàng tuần tiêu thụ là giống nhau.</p>
                    <p className={PARAGRAPH_STYLES} >Cuối cùng, bất kể phương pháp bạn chọn khi tiếp cận việc giảm cân, điều quan trọng là chọn một chiến lược phù hợp với bạn. Đếm calo và calo Zigzag chỉ là hai phương pháp (có liên quan khá mạnh mẽ) được sử dụng để đạt được giảm cân giữa nhiều phương pháp khác nhau, và ngay cả trong các phương pháp này, có nhiều cách tiếp cận mà một người có thể thực hiện. Tìm một phương pháp phù hợp với lối sống của bạn mà bạn nghĩ rằng bạn có thể tuân thủ là có khả năng cung cấp kết quả bền vững và mong muốn nhất</p>
                </div>
            </div>

            <div className="Potential-Complications mt-10">
                <div className={PARAGRAPH_TITLE}>Bạn cần bao nhiêu calo?</div>
                <hr className='border-t-2 mb-4' />
                <div>
                    <p className={PARAGRAPH_STYLES} >Nhiều người muốn giảm cân, và thường cách đơn giản nhất để làm điều này là tiêu thụ ít calo hơn mỗi ngày. Nhưng thực sự cơ thể cần bao nhiêu calo để khỏe mạnh? Điều này phụ thuộc lớn vào mức độ hoạt động thể chất mà một người thực hiện hàng ngày, và bất kể điều này, lại khác nhau cho mọi người - có nhiều yếu tố khác nhau liên quan, không phải tất cả đều được hiểu rõ hoặc biết đến.</p>
                    <p className={PARAGRAPH_STYLES} >Một số yếu tố ảnh hưởng đến số calo mà một người cần để duy trì sức khỏe bao gồm tuổi tác, cân nặng, chiều cao, giới tính, mức độ hoạt động thể chất và tổng quát sức khỏe tổng thể. Ví dụ, một nam giới hoạt động thể chất, 25 tuổi, cao 6 feet cần lượng calo cao hơn nhiều so với một phụ nữ 70 tuổi, chỉ cao 5 feet và không vận động. Mặc dù khác nhau tùy thuộc vào tuổi và mức độ hoạt động, nam giới trưởng thành nói chung cần 2.000-3.000 calo mỗi ngày để duy trì cân nặng trong khi phụ nữ trưởng thành cần khoảng 1.600-2.400 theo Bộ Y tế Hoa Kỳ.</p>
                    <p className={PARAGRAPH_STYLES} >Cơ thể không cần nhiều calo để đơn giản là sống sót. Tuy nhiên, tiêu thụ quá ít calo sẽ làm cho cơ thể hoạt động kém hiệu quả, vì nó chỉ sử dụng calo cho các chức năng cần thiết để sống sót, và bỏ qua những chức năng cần thiết cho sức khỏe và sự tự chăm sóc bản thân. Harvard Health Publications đề xuất phụ nữ nên có ít nhất 1.200 calo và nam giới nên có ít nhất 1.500 calo mỗi ngày trừ khi được giám sát bởi bác sĩ. Do đó, nên rất khuyến khích một người đang cố gắng giảm cân theo dõi nhu cầu calo của cơ thể và điều chỉnh chúng cần thiết để duy trì nhu cầu dinh dưỡng của cơ thể.</p>
                </div>
            </div>

            
        </div>
    );
};



export default CalorieCout;