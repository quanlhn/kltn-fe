'use client'

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, InputNumber, Radio, RadioChangeEvent, Table } from 'antd';
import { PARAGRAPH_STYLES, PARAGRAPH_TITLE } from '@/app/consts/className';
import neckMeasure from '../../../../../public/explore/neck-measure.jpg'
import waistMeasure from '../../../../../public/explore/waist-measure.jpg'
import hipMeasure from '../../../../../public/explore/hip-measure.jpg'
import { RightCircleOutlined } from '@ant-design/icons';

type resultType = {
    USNaviMethod: number,
    category: string,
    fatMass: number,
    leanMass: number,
    BMIMethod: number
}


const BodyFatPage = () => {
    
    const defaultTableValue = { size: 'large', gender: 'male', age: 25, weight: 70, height: 178, neck: 50, waist: 96, hip: 92 }
    
    const [isHipHidden, setHipHidden] = useState(true)

    const handleSubmit = (values: any) => {
        setResult(() => {
            const {gender, age, weight, height, neck, waist, hip} = values
            const USNaviMethod = USNavyMethod(gender, age, weight, height, neck, waist, hip)
            return {
                USNaviMethod: USNaviMethod,
                category: getCategorization(gender, USNaviMethod ),
                fatMass: getFatMass(USNaviMethod, weight),
                leanMass: getLeanMass(USNaviMethod, weight),
                BMIMethod: BMIMethod(gender, weight, height, age)
            }
        })
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

    const USNavyMethod = (gender: string, age: number, weight: number, height: number, neck: number, waist: number, hip: number) => {
        if (gender == 'male') {
            return 495 / (1.0324-0.19077*Math.log10(waist-neck)+0.15456*Math.log10(height)) - 450
        } else {
            return 495 / (1.29579-0.35004*Math.log10(waist+hip-neck)+0.22100*Math.log10(height)) - 450
        }

    }

    const getFatMass = (bodyFat: number, weight: number) => {
        return (bodyFat * weight / 100)
    }

    const getLeanMass = (bodyFat: number, weight: number) => {
        return (weight - (bodyFat * weight / 100))
    }

    const getCategorization = (gender: string, bodyFat: number) => {
        if (gender == 'male') {
            if (bodyFat < 0) {
                return 'Giá trị tỉ lệ chất béo không đúng'
            } else if (bodyFat <= 5) {
                return 'Đủ mức tối thiểu'
            } else if (bodyFat <= 13) {
                return 'Vận động viên'
            } else if (bodyFat <= 17) {
                return 'Có vóc dáng đẹp'
            } else if (bodyFat <= 24) {
                return 'Ở mức trung bình'
            } else  {
                return 'Béo phì'
            }
        } else {
            if (bodyFat < 0) {
                return 'Giá trị tỉ lệ chất béo không đúng'
            } else if (bodyFat <= 13) {
                return 'Đủ mức tối thiểu'
            } else if (bodyFat <= 20) {
                return 'Vận động viên'
            } else if (bodyFat <= 24) {
                return 'Có vóc dáng đẹp'
            } else if (bodyFat <= 31) {
                return 'Ở mức trung bình'
            } else  {
                return 'Béo phì'
            }
        }
    }

    const BMIMethod = (gender: string, weight: number, height: number, age: number) => {
        if (gender == 'male') {
            if (age <= 16) {
                return 1.51 * caculateBMI(weight, height) - 0.70 * age - 2.2
            } else {
                return (1.20 * caculateBMI(weight, height) + 0.23 * age - 16.2)
            }
        } else {
            if (age <= 16) {
                return 1.51 * caculateBMI(weight, height) - 0.70 * age + 1.4
            } else {
                return 1.20 * caculateBMI(weight, height) + 0.23 * age - 5.4
            }
        }
    }

    const caculateBMI = (weight: number, height: number) => {
        return (weight / ((height / 100) * (height / 100)))
    }

    const getIdealBodyFat = (age: number, gender: string) => {
        if (gender == 'male') {
            if (age < 20) {
                return 0
            } else if (age < 25 && age >=20) {
                return 8.5
            } else if (age < 30) {
                return 10.5
            } else if (age < 35) {
                return 12.7
            } else if (age < 40) {
                return 13.7
            } else if (age < 45) {
                return 15.3
            } else if (age < 50) {
                return 16.4
            } else if (age < 55) {
                return 18.90
            } else {
                return 20.9
            } 
        } else {
            if (age < 20) {
                return 0
            } else if (age < 25 && age >=20) {
                return 17.7
            } else if (age < 30) {
                return 18.4
            } else if (age < 35) {
                return 19.3
            } else if (age < 40) {
                return 21.5
            } else if (age < 45) {
                return 22.2
            } else if (age < 50) {
                return 22.9
            } else if (age < 55) {
                return 25.2
            } else {
                return 26.3
            } 
        }
    }

    const [result, setResult] = useState<resultType>(() => {
        const {gender, age, weight, height, neck, waist, hip} = defaultTableValue
        const USNaviMethod = USNavyMethod(gender, age, weight, height, neck, waist, hip)
        return {
            USNaviMethod: USNaviMethod,
            category: getCategorization(gender, USNaviMethod ),
            fatMass: getFatMass(USNaviMethod, weight),
            leanMass: getLeanMass(USNaviMethod, weight),
            BMIMethod: BMIMethod(gender, weight, height, age)
        }
    })

    const IdealBodyFatColumns = [
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Women',
            dataIndex: 'women',
            key: 'women',
        },
        {
            title: 'Men',
            dataIndex: 'men',
            key: 'men',
        },
    ]

    const IdealBodyFatDataSource = [
        { key: '1', age: '20', women: '17.7%', men: '8.5%' },
        { key: '2', age: '25', women: '18.4%', men: '10.5%' },
        { key: '3', age: '30', women: '19.3%', men: '12.7%' },
        { key: '4', age: '35', women: '21.5%', men: '13.7%' },
        { key: '5', age: '40', women: '22.2%', men: '15.3%' },
        { key: '6', age: '45', women: '22.9%', men: '16.4%' },
        { key: '7', age: '50', women: '25.2%', men: '18.9%' },
        { key: '8', age: '55', women: '26.3%', men: '20.9%' }
    ]

    return (
        <div className='mt-10 z-0 mx-40'>
             <div className='text-5xl mb-8 font-semibold'>Đo lương mỡ cơ thể</div>
            <div className='flex border-slate-800'>
            <Form
                        labelCol={{
                        span: 4,
                        }}
                        wrapperCol={{
                        span: 10,
                        }}
                        layout="horizontal"
                        initialValues={defaultTableValue}
                        style={{
                        maxWidth: 600, 
                        
                        }}
                        onFinish={handleSubmit}
                        className='w-1/2'
                    >

                        <Form.Item label="Giới tính" name='gender'>
                            <Radio.Group onChange={onChange} >
                                <Radio value="male" defaultChecked={isHipHidden}> Nam </Radio>
                                <Radio value="female"> Nữ </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Tuổi" name='age'>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Cân nặng" name='weight' rules={[{ required: true, message: 'Chưa nhập cân nặng'}]}>
                            <InputNumber addonAfter="kg"/>
                        </Form.Item>
                        <Form.Item label="Chiều cao" name='height' rules={[{ required: true, message: 'Chưa nhập chiều cao'}]}>
                            <InputNumber addonAfter="cm"/>
                        </Form.Item>
                        <Form.Item label="Cổ" name='neck' rules={[{ required: true, message: 'Chưa nhập chiều cao'}]}>
                            <InputNumber addonAfter="cm"/>
                        </Form.Item>
                        <Form.Item label="Eo" name='waist' rules={[{ required: true, message: 'Chưa nhập chiều cao'}]}>
                            <InputNumber addonAfter="cm"/>
                        </Form.Item>
                        <Form.Item label="Hông" style={{display: isHipHidden ? 'none' : 'block'}} name='hip' rules={[{ required: true, message: 'Chưa nhập chiều cao'}]}>
                            <InputNumber addonAfter="cm"/>
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
                    {key: '1', criteria: "Tỉ lệ chất béo (Phương pháp của U.S. Navy)", result: `${(result.USNaviMethod).toFixed(1)}%`},
                    {key: '2', criteria: "Phân loại cơ thể", result: `${result.category}`},
                    {key: '3', criteria: "Khối lượng mỡ", result: `${(result.fatMass).toFixed(1)} kg`},
                    {key: '4', criteria: "Khối lượng cơ thể không có mỡ", result: `${(result.leanMass).toFixed(1)} kg`},
                    {key: '5', criteria: "Tỉ lệ chất béo (Phương pháp BMI)", result: `${(result.BMIMethod).toFixed(1)}%`},
                ]}
            />
            </div>

            <div className="IdealBodyFat mt-10">
                <div className={PARAGRAPH_TITLE}>Phần trăm mỡ cơ thể lý tưởng</div>
                <hr className='border-t-2 mb-4' />
                <div className='flex justify-center'>
                    <Table className='w-2/3' pagination={false} dataSource={IdealBodyFatDataSource} columns={IdealBodyFatColumns} />
                </div>
            </div>

            <div className="information mt-10">
                <div className={PARAGRAPH_TITLE}>Mỡ cơ thể, Thừa cân và Béo phì</div>
                <hr className='border-t-2 mb-4' />
                <div>
                    <p className={PARAGRAPH_STYLES} >Thuật ngữ khoa học cho mỡ cơ thể là "mô mỡ." Mô mỡ phục vụ một số chức năng quan trọng. Mục đích chính của nó là lưu trữ lipid mà cơ thể tạo ra năng lượng từ đó. Ngoài ra, nó tiết ra một số hormone quan trọng và cung cấp cơ thể với một số lớp đệm cũng như cách nhiệt.</p>
                    <p className={PARAGRAPH_STYLES} >Mỡ cơ thể bao gồm mỡ cần thiết và mỡ tích trữ. Mỡ cần thiết là mức mỡ cơ bản được tìm thấy ở hầu hết các bộ phận của cơ thể. Đây là mỡ cần thiết duy trì sự sống và các chức năng sinh sản. Số lượng mỡ cần thiết khác nhau giữa nam giới và phụ nữ, và thường là khoảng 2-5% ở nam giới và 10-13% ở phụ nữ. Phạm vi mỡ cơ thể lành mạnh cho nam giới thường được xác định là 8-19%, trong khi phạm vi lành mạnh cho phụ nữ là 21-33%. Mặc dù có một số mỡ cơ thể vượt quá có thể gây ra nhiều ảnh hưởng xấu đến sức khỏe của người, nhưng thiếu mỡ cơ thể cũng có thể gây ra những ảnh hưởng tiêu cực đối với sức khỏe của chính nó, và việc duy trì tỷ lệ mỡ cơ thể dưới mức cần thiết hoặc thậm chí ở phạm vi tỷ lệ mỡ cơ thể cần thiết là một chủ đề cần thảo luận với một chuyên gia y tế.</p>
                    <p className={PARAGRAPH_STYLES} >Mỡ tích trữ là mỡ tích tụ trong mô mỡ, có thể là mỡ dưới da (sâu dưới da và bao quanh các cơ quan quan trọng) hoặc mỡ nội tạng (mỡ được đặt trong khoang bụng, giữa các cơ quan), và các tham chiếu đến mỡ cơ thể thường đề cập đến loại mỡ này. Mặc dù một số mỡ tích trữ là lý tưởng, nhưng số lượng mỡ tích trữ thừa có thể gây ra những ảnh hưởng xấu đối với sức khỏe nghiêm trọng.</p>
                    <p className={PARAGRAPH_STYLES} >Mỡ cơ thể thừa dẫn đến tình trạng thừa cân và cuối cùng là béo phì nếu không có các biện pháp đủ để kiểm soát việc tích lũy mỡ cơ thể. Lưu ý rằng việc thừa cân không nhất thiết chỉ ra sự thừa mỡ cơ thể. Cân nặng của một người bao gồm nhiều yếu tố bao gồm (nhưng không giới hạn) mỡ cơ thể, cơ bắp, mật độ xương và nồng độ nước. Do đó, những người có cơ bắp mạnh thường được phân loại là thừa cân.</p>
                    <p className={PARAGRAPH_STYLES} >Tốc độ tích tụ mỡ cơ thể khác nhau từ người này sang người khác và phụ thuộc vào nhiều yếu tố bao gồm yếu tố di truyền cũng như các yếu tố hành vi như thiếu tập thể dục và tiêu thụ thức ăn quá mức. Do các yếu tố biến đổi, việc giảm mỡ cơ thể tích trữ trong khu vực bụng có thể khó khăn đối với một số người. Tuy nhiên, quản lý chế độ ăn uống và tập thể dục đã được chứng minh là giảm mỡ cơ thể tích trữ. Lưu ý rằng cả phụ nữ và nam giới lưu trữ mỡ cơ thể khác nhau và điều này có thể thay đổi theo thời gian. Sau tuổi 40 (hoặc sau thời kỳ mãn kinh ở một số phụ nữ), sự giảm hormone tình dục có thể dẫn đến sự tích tụ mỡ cơ thể dư thừa xung quanh bụng ở nam giới hoặc xung quanh mông và đùi ở phụ nữ.</p>
                </div>
            </div>

            <div className="Potential-Complications mt-10">
                <div className={PARAGRAPH_TITLE}>Các Biến Chứng Tiềm Ẩn Của Thừa Mỡ Cơ Thể</div>
                <hr className='border-t-2 mb-4' />
                <div>
                    <p className={PARAGRAPH_STYLES} >Tổ chức Y tế Thế giới (WHO) phân loại béo phì là một trong những nguyên nhân gây tử vong có thể ngăn ngừa hàng đầu trên toàn thế giới, ước tính là gây ra từ 111.909 đến 365.000 ca tử vong mỗi năm tại Hoa Kỳ. Điều này là một vấn đề đáng quan ngại ngày càng tăng vì 36,5% người lớn ở Hoa Kỳ được xác định là béo phì theo Trung tâm Kiểm soát và Phòng ngừa Dịch bệnh.</p>
                    <p className={PARAGRAPH_STYLES} >Béo phì liên quan đến sự giảm chất lượng cuộc sống, các kết quả về sức khỏe tinh thần kém, tắc nghẽn đường hô hấp khi ngủ, cũng như nhiều nguyên nhân hàng đầu gây tử vong trên toàn thế giới như bệnh tim mạch, đột quỵ, một số loại ung thư và tiểu đường. Tất cả các biến chứng tiềm ẩn này có khả năng làm giảm tuổi thọ của một người, và do đó, béo phì là một tình trạng y tế được nhiều nhà nghiên cứu nghiên cứu.</p>
                    <p className={PARAGRAPH_STYLES} >Như đã đề cập trước đó, mỡ sản xuất ra một số hormone cần thiết ảnh hưởng đến cơ thể của một người. Sự dư thừa hoặc thiếu hụt hormone quan trọng này có thể có tác động tiêu cực gây ra các vấn đề về chức năng cơ thể. Một nghiên cứu cũng đã tìm thấy rằng mỡ cơ thể thừa, đặc biệt là mỡ bụng, làm gián đoạn sự cân bằng và chức năng bình thường của một số hormone này. Hơn nữa, mỡ cơ thể, cụ thể là mỡ nội tạng, đóng vai trò trong việc giải phóng một số cytokine cụ thể, đó là một loại rộng lớn các protein tham gia vào truyền tín hiệu tế bào, có thể tăng nguy cơ mắc bệnh tim mạch. Mỡ nội tạng cũng liên quan trực tiếp đến mức độ cao hơn của cholesterol lipoprotein mật độ thấp (LDL), cholesterol lipoprotein mật độ cao thấp (HDL) thấp, và kháng insulin. </p>
                    <p className={PARAGRAPH_STYLES} >Cholesterol LDL thường được gọi là "chất cholesterol xấu" trong khi HDL được gọi là "chất cholesterol tốt." Mức độ cao của cholesterol LDL có thể làm tắc nghẽn động mạch và dẫn đến các biến chứng bao gồm cả cơn đau tim. Kháng insulin liên quan đến sự không phản ứng đúng cách của tế bào đối với hormone insulin, có thể dẫn đến mức độ đường huyết cao, và cuối cùng là tiểu đường type 2. Như có thể thấy, mỡ nội tạng thừa có thể có tác động tiêu cực đo được đối với sức khỏe của một người.</p>
                </div>
            </div>

            <div className="how-to-measure mt-10">
                <div className={PARAGRAPH_TITLE}>Phương pháp đo phần trăm mỡ cơ thể</div>
                <hr className='border-t-2 mb-4' />
                <div>
                    <div className='font-semibold text-xl'>Phương pháp của Hải Quân Mỹ</div>
                    <p className={PARAGRAPH_STYLES} >Có nhiều kỹ thuật cụ thể được sử dụng để đo phần trăm mỡ cơ thể. Bảng tính ở trên sử dụng một phương pháp liên quan đến các phương trình được phát triển tại Trung tâm Nghiên cứu Sức khỏe Hải quân bởi Hodgdon và Beckett vào năm 1984. Phương pháp đo những phần cơ thể liên quan cũng như các phương trình cụ thể được sử dụng được cung cấp dưới đây:</p>
                    <ol className='pl-10' start={1} style={{listStyleType: 'decimal'}} >
                        <li className='mt-5 mb-2'>Đo chu vi vòng bụng của đối tượng ở một mức ngang xung quanh rốn cho nam giới và ở mức có chiều rộng nhỏ nhất cho phụ nữ. Đảm bảo rằng người tham gia không co bụng vào bên trong để có được các phép đo chính xác.</li>
                        <img src={waistMeasure.src} className='' alt="" />
                        <li className='mt-5 mb-2'>Đo chu vi cổ của đối tượng bắt đầu từ phía dưới thanh quản, với băng dính nghiêng xuống phía trước. Người tham gia nên tránh mở rộng cổ ra bên ngoài.</li>
                        <img src={neckMeasure.src} className='' alt="" />
                        <li className='mt-5 mb-2'>Chỉ dành cho phụ nữ: Đo chu vi hông của đối tượng ở mức đo ngang lớn nhất.</li>
                        <img src={hipMeasure.src} className='' alt="" />
                    </ol>
                    <p className={PARAGRAPH_STYLES}>Khi những phép đo này được thu được, sử dụng các công thức sau để tính toán ước lượng mỡ cơ thể. Phương trình được cung cấp sử dụng Hệ thống Đơn vị Quốc tế, cụ thể là centimet</p>
                    <div className='pl-10'>
                        <div className='font-semibold'>Công thức phần trăm mỡ cơ thể (BFP) cho nam giới:</div>   
                        <div className='flex items-center pl-5'>
                            <div>BFP =&nbsp;</div>
                            <div className='flex flex-col items-center'>
                                <div>495</div>
                                <div>
                                    <hr className='border-t-2 border-black' />
                                    <div>1.0324 - 0.19077 &times; log<sub>10</sub>(waist-neck) + 0.15456 &times; log<sub>10</sub>(height)</div>
                                </div>
                            </div>
                            <div>
                                &nbsp;- 450
                            </div>
                        </div>
                    </div>

                    <div className='pl-10 my-10'>
                        <div className='font-semibold'>Công thức phần trăm mỡ cơ thể (BFP) cho nữ giới:</div>   
                        <div className='flex items-center pl-5'>
                            <div>BFP =&nbsp;</div>
                            <div className='flex flex-col items-center'>
                                <div>495</div>
                                <div>
                                    <hr className='border-t-2 border-black' />
                                    <div>1.29579 - 0.35004 &times; log<sub>10</sub>(waist+hip-neck) + 0.22100 &times; log<sub>10</sub>(height)</div>
                                </div>
                            </div>
                            <div>
                                &nbsp;- 450
                            </div>
                        </div>
                    </div>
                    
                    <p className={PARAGRAPH_STYLES} >Lưu ý rằng kết quả của các phép tính này chỉ là ước lượng vì chúng dựa trên nhiều giả định khác nhau để làm cho chúng phù hợp với nhiều người nhất có thể. Để có các phép đo chính xác hơn về mỡ cơ thể, cần sử dụng các công cụ như phân tích điện trở sinh học hoặc kiểm tra mật độ thủy tĩnh.</p>

                    <div className='font-semibold mt-8 ml-10'>Công thức khối lượng mỡ (FM):</div>   
                    <div className='ml-16'>FM = BFP &times; Cân nặng</div>

                    <div className='font-semibold mt-8 ml-10'>Công thức khối lượng cơ thể (LM):</div>   
                    <div className='ml-16'>LM = Cân nặng - FM</div>

                </div>
                
                <div className='my-10'>
                    <div className='font-semibold text-xl'>Phương pháp BMI:</div>
                    <p className={PARAGRAPH_STYLES}>Một phương pháp khác để tính toán ước lượng phần trăm mỡ cơ thể sử dụng BMI. Tham khảo Bảng Tính chỉ số BMI để có được ước lượng BMI để sử dụng với phương pháp BMI, cũng như thông tin chi tiết hơn về cách tính BMI, ý nghĩa và hạn chế của nó. Tóm lại, ước lượng BMI liên quan đến việc sử dụng các công thức đòi hỏi việc đo chiều cao và cân nặng của một người. Cho trước BMI, các công thức sau có thể được sử dụng để ước lượng phần trăm mỡ cơ thể của một người.</p>
                    
                    <div className='font-semibold mt-6 ml-10'>Công thức phần trăm mỡ cơ thể (BFP) cho nam giới trưởng thành</div>   
                    <div className='ml-16 mt-2'>BFP = 1.20 &times; BMI + 0.23 &times; Tuổi - 16.2</div>
                    
                    <div className='font-semibold mt-6 ml-10'>Công thức phần trăm mỡ cơ thể (BFP) cho nữ giới trưởng thành</div>   
                    <div className='ml-16 mt-2'>BFP = 1.20 &times; BMI + 0.23 &times; Tuổi - 5.4</div>
                    
                    <div className='font-semibold mt-6 ml-10'>Công thức phần trăm mỡ cơ thể (BFP) cho trẻ em nam:</div>   
                    <div className='ml-16 mt-2'>BFP = 1.51 &times; BMI - 0.70 &times; Tuổi - 2.2</div>
                    
                    <div className='font-semibold mt-6 ml-10'>Công thức phần trăm mỡ cơ thể (BFP) cho trẻ em gái:</div>   
                    <div className='ml-16 mt-2'>BFP = 1.51 &times; BMI - 0.70 &times; Tuổi + 1.4</div>

                    

                </div>

            </div>
        </div>
    );
};



export default BodyFatPage;