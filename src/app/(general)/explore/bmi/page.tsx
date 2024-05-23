'use client'

import React, { useState, useRef, useEffect } from 'react';

import { HR_STYLE, MAIN_ARTICLE_DISCRIBE, MAIN_ARTICLE_DIV, MAIN_ARTICLE_TITLE, SIDE_ARTICLE_CHILD_DIV, SIDE_ARTICLES_DIV, SIDE_ARTICLE_IMAGE, SIDE_ARTICLE_TITLE, SIDE_ARTICLE_DISCRIBE, MAIN_ARTICLE_AVATAR, PARAGRAPH_STYLES, PARAGRAPH_TITLE } from '@/app/consts/className';
import { Button, Cascader, Checkbox, Form, Input, InputNumber, Radio, Select, TreeSelect } from 'antd';


function Micronutrients() {

    const animateElement = useRef<SVGLineElement>(null)
    const [bmi, setBmi] = useState(Number((65 / ((180 / 100) * (180 / 100))).toFixed(1)))
    const [transformTo, setTransformTo] = useState("60 140 140")

    const handleSubmit = (values: any) => {

        const bmi = Number((values.weight / ((values.height / 100) * (values.height / 100))).toFixed(1))
        setBmi(bmi)
        const degree = (bmi - 13) * 6
        const transform = degree + " 140 140"
        setTransformTo(transform)
        
    }


    useEffect(() => {
        const addAnimateElement = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        addAnimateElement.setAttribute('id', 'animatFinished');
        addAnimateElement.setAttribute('attributeName', 'transform');
        addAnimateElement.setAttribute('attributeType', 'XML');
        addAnimateElement.setAttribute('type', 'rotate');
        addAnimateElement.setAttribute('from', '0 140 140');
        addAnimateElement.setAttribute('to', transformTo);
        addAnimateElement.setAttribute('dur', '1s');
        addAnimateElement.setAttribute('fill', 'freeze');
        addAnimateElement.setAttribute('repeatCount', '1');
    
        const lineElement = animateElement.current;
        if (lineElement) {
          lineElement.appendChild(addAnimateElement);
          addAnimateElement.beginElement()
        }
    
        return () => {
          // Xóa phần tử animateTransform khi component unmount
          if (lineElement && addAnimateElement.parentNode === lineElement) {
            lineElement.removeChild(addAnimateElement);
          }
        };
      }, [transformTo]);

    return (
        <div className='mt-10 z-0 mx-40 '>
            <div className='text-5xl mb-8 font-semibold'>Đo chỉ số BMI</div>

            <div className="calculate-BMI bg-[#eeeeee] border-slate-800 px-10 py-8 rounded-2xl flex justify-between items-center">
                <div className='w-1/2'>
                <Form
                        labelCol={{
                        span: 4,
                        }}
                        wrapperCol={{
                        span: 10,
                        }}
                        layout="horizontal"
                        initialValues={{ size: 'large' }}
                        style={{
                        maxWidth: 600, 
                        
                        }}
                        onFinish={handleSubmit}
                    >

                        <Form.Item label="Giới tính" name='gender'>
                            <Radio.Group>
                                <Radio value="male"> Nam </Radio>
                                <Radio value="female"> Nữ </Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Tuổi" name='age'>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item label="Chiều cao" name='height' rules={[{ required: true, message: 'Chưa nhập chiều cao'}]}>
                            <InputNumber defaultValue={180} addonAfter="cm"/>
                        </Form.Item>
                        <Form.Item label="Cân nặng" name='weight' rules={[{ required: true, message: 'Chưa nhập cân nặng'}]}>
                            <InputNumber defaultValue={65} addonAfter="kg"/>
                        </Form.Item>
                        
                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                            <input 
                                className='bg-blue-500 px-5 py-2 text-2xl font-semibold text-white rounded-xl cursor-pointer hover:drop-shadow-xl' 
                                type='submit' 
                                value='Tnh BMI'
                                >
                                    
                            </input>

                            {/* <Button htmlType='submit'>Default Button</Button> */}

                        </Form.Item>
                        
                    </Form>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="600px" height="300px" viewBox="0 0 300 163" className=''>
                    <g transform="translate(18,18)" className="font-serif">
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7"></polygon>
                            </marker>
                            <path id="curvetxt1" d="M-4 140 A140 140, 0, 0, 1, 284 140" className='fill-none'></path>
                            <path id="curvetxt2" d="M33 43.6 A140 140, 0, 0, 1, 280 140" className='fill-none'></path>
                            <path id="curvetxt3" d="M95 3 A140 140, 0, 0, 1, 284 140" className='fill-none'></path>
                            <path id="curvetxt4" d="M235.4 33 A140 140, 0, 0, 1, 284 140" className='fill-none'></path>
                        </defs>
                        <path d="M0 140 A140 140, 0, 0, 1, 6.9 96.7 L140 140 Z" fill="#bc2020"></path>
                        <path d="M6.9 96.7 A140 140, 0, 0, 1, 12.1 83.1 L140 140 Z" fill="#d38888"></path>
                        <path d="M12.1 83.1 A140 140, 0, 0, 1, 22.6 63.8 L140 140 Z" fill="#ffe400"></path>
                        <path d="M22.6 63.8 A140 140, 0, 0, 1, 96.7 6.9 L140 140 Z" fill="#008137"></path>
                        <path d="M96.7 6.9 A140 140, 0, 0, 1, 169.1 3.1 L140 140 Z" fill="#ffe400"></path>
                        <path d="M169.1 3.1 A140 140, 0, 0, 1, 233.7 36 L140 140 Z" fill="#d38888"></path>
                        <path d="M233.7 36 A140 140, 0, 0, 1, 273.1 96.7 L140 140 Z" fill="#bc2020"></path>
                        <path d="M273.1 96.7 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#8a0101"></path>
                        <path d="M45 140 A90 90, 0, 0, 1, 230 140 Z" fill="#fff"></path>
                        <circle cx="140" cy="140" r="5" fill="#666"></circle>
                        <g className="number-ordometer text-xs">
                            <text x="25" y="111" transform="rotate(-72, 25, 111)">16</text>
                            <text x="30" y="96" transform="rotate(-66, 30, 96)">17</text>
                            <text x="35" y="83" transform="rotate(-57, 35, 83)">18.5</text>
                            <text x="97" y="29" transform="rotate(-18, 97, 29)">25</text>
                            <text x="157" y="20" transform="rotate(12, 157, 20)">30</text>
                            <text x="214" y="45" transform="rotate(42, 214, 45)">35</text>
                            <text x="252" y="95" transform="rotate(72, 252, 95)">40</text>
                        </g>
                        <g className="text-xs">
                            <text><textPath xlinkHref="#curvetxt1">Thiếu cân</textPath></text>
                            <text><textPath xlinkHref="#curvetxt2">Cân đối</textPath></text>
                            <text><textPath xlinkHref="#curvetxt3">Thừa cân</textPath></text>
                            <text><textPath xlinkHref="#curvetxt4">Béo phì</textPath></text>
                        </g>
                        <line ref={animateElement} id='animateLine' x1="140" y1="140" x2="65" y2="140" stroke="#666" strokeWidth="2" markerEnd="url(#arrowhead)">
                            <animateTransform 
                                id='animatFinished'
                                attributeName="transform" 
                                attributeType="XML" 
                                type="rotate" 
                                from="0 140 140" 
                                to={transformTo}
                                dur="1s" 
                                fill="freeze" 
                                repeatCount="1">
                            </animateTransform>
                        </line>
                        <text x="67" y="120" className="text-2xl font-bold text-black">BMI = {bmi}</text>
                    </g>
                    
                </svg >
            </div>

            <div className="introduction mt-10">
                <div className={PARAGRAPH_TITLE}>Giới thiệu về Chỉ số khối cơ thể (BMI)</div>
                <hr className='border-t-2 mb-4' />
                <div>
                    <p className={PARAGRAPH_STYLES}>Chỉ số khối cơ thể (Body Mass Index - BMI) là một đo lường thường được sử dụng để đánh giá cân nặng của một người so với chiều cao của họ. Đây là một phép tính đơn giản cung cấp thông tin về việc liệu một người có gầy, cân đối, thừa cân, hay béo phì. BMI được tính bằng cách chia cân nặng của một người theo kilogram cho bình phương chiều cao của họ theo mét (BMI = cân nặng / (chiều cao * chiều cao)).</p>
                    <p className={PARAGRAPH_STYLES}>BMI được sử dụng rộng rãi bởi các chuyên gia y tế, nhà nghiên cứu và cá nhân để đánh giá các nguy cơ sức khỏe tiềm ẩn liên quan đến cân nặng. Mặc dù không phải là một đo lường trực tiếp của mỡ cơ thể, BMI tương quan tốt với mỡ cơ thể ở hầu hết mọi người và do đó được coi là một công cụ sàng lọc hữu ích để xác định các vấn đề sức khỏe liên quan đến cân nặng.</p>
                    <div className={PARAGRAPH_STYLES}>Dưới đây là các phân loại chung dựa trên BMI:</div>
                    <ul className='my-2 ml-16' style={{listStyleType: 'disc'}} >
                        <li>Gầy: BMI nhỏ hơn 18,5</li>
                        <li>Cân đối: BMI từ 18,5 đến 24,9</li>
                        <li>Thừa cân: BMI từ 25 đến 29,9</li>
                        <li>Béo phì: BMI 30 hoặc cao hơn</li>
                    </ul>
                </div>
            </div>

            <div className="risk-with-overweight">
                <div className={PARAGRAPH_TITLE} >Rủi ro liên quan đến thừa cân</div>
                <div>
                    <div className={PARAGRAPH_STYLES}>Thừa cân tăng nguy cơ mắc nhiều bệnh và tình trạng sức khỏe nghiêm trọng. Dưới đây là danh sách các rủi ro nói trên, theo Trung tâm Kiểm soát và Phòng ngừa Dịch bệnh (CDC):</div>
                    <ul className='my-2 ml-16' style={{listStyleType: 'disc'}} >
                        <li>Huyết áp cao</li>
                        <li>Mức độ cao của cholesterol LDL, được coi là "cholesterol xấu," mức độ thấp của cholesterol HDL, được coi là cholesterol tốt với mức độ vừa phải, và mức độ cao của triglyceride</li>
                        <li>Tiểu đường loại II</li>
                        <li>Bệnh tim mạch</li>
                        <li>Đột quỵ</li>
                        <li>Bệnh của túi mật</li>
                        <li>Viêm khớp thoái hóa, một loại bệnh khớp do sự phân hủy của sụn khớp</li>
                        <li>Ngưng thở khi ngủ và các vấn đề hô hấp</li>
                        <li>Một số loại ung thư (âm đạo, vú, đại trực tràng, thận, túi mật, gan)</li>
                        <li>Chất lượng cuộc sống kém</li>
                        <li>Các bệnh tâm thần như trầm cảm lâm sàng, lo âu và các vấn đề khác</li>
                        <li>Đau cơ thể và khó khăn trong một số chức năng vật lý</li>
                        <li>Nói chung, tăng nguy cơ tử vong so với những người có chỉ số BMI lành mạnh</li>
                    </ul>
                    <div className={PARAGRAPH_STYLES}>Như có thể thấy từ danh sách trên, có nhiều hậu quả tiêu cực, trong một số trường hợp có thể gây tử vong, có thể xảy ra do thừa cân. Nói chung, một người nên cố gắng duy trì chỉ số BMI dưới 25 kg/m<sup>2</sup>, nhưng lý tưởng nhất là nên tham khảo ý kiến của bác sĩ để xác định liệu họ cần thay đổi lối sống của mình để khỏe mạnh hơn hay không.</div>
                </div>
            </div>
            
            <div className="risk-with-underweight">
                <div className={PARAGRAPH_TITLE} >Rủi ro liên quan đến thiếu cân</div>
                <div>
                    <div className={PARAGRAPH_STYLES}>Việc gầy cũng có những rủi ro riêng, được liệt kê dưới đây:</div>
                    <ul className='my-2 ml-16' style={{listStyleType: 'disc'}} >
                        <li>Suy dinh dưỡng, thiếu vitamin, thiếu máu (giảm khả năng vận chuyển các mạch máu)</li>
                        <li>Loãng xương, một căn bệnh gây yếu đồng thời gây tăng nguy cơ gãy xương</li>
                        <li>Sự giảm sức đề kháng</li>
                        <li>Vấn đề về tăng trưởng và phát triển, đặc biệt là ở trẻ em và thanh thiếu niên</li>
                        <li>Có thể gây ra các vấn đề về sinh sản cho phụ nữ do sự mất cân bằng hormone có thể làm rối loạn chu kỳ kinh nguyệt. Phụ nữ gầy cũng có nguy cơ cao hơn về thai nghén trong 3 tháng đầu tiên</li>
                        <li>Các vấn đề tiềm ẩn có thể phát sinh sau phẫu thuật</li>
                        <li>Nói chung, nguy cơ tử vong tăng so với những người có chỉ số BMI lành mạnh</li>
                    </ul>
                    <div className={PARAGRAPH_STYLES}>Trong một số trường hợp, việc gầy có thể là dấu hiệu của một số tình trạng hoặc bệnh như chứng loạn ăn, mà có những rủi ro riêng. Hãy tham khảo ý kiến của bác sĩ nếu bạn nghĩ bạn hoặc ai đó bạn biết là gầy, đặc biệt nếu lý do gầy không rõ ràng.</div>
                </div>
            </div>
            
            <div className="limitations">
                <div className={PARAGRAPH_TITLE} >Hạn chế của BMI</div>
                <div>
                    <div className={PARAGRAPH_STYLES}>Mặc dù BMI là một chỉ số phổ biến và hữu ích để đo lường cân nặng cơ thể lành mạnh, nó cũng có những hạn chế. BMI chỉ là một ước lượng không thể xác định được thành phần cơ thể. Do sự đa dạng của các dạng cơ thể cũng như phân phối của cơ bắp, khối xương, và mỡ, BMI nên được xem xét kèm theo các đo lường khác thay vì chỉ sử dụng làm phương pháp duy nhất để xác định cân nặng cơ thể lành mạnh của một người.</div>
                    <div className='text-xl font-semibold mb-5'>Ở người lớn:</div>
                    <div className={PARAGRAPH_STYLES}>BMI không thể chính xác hoàn toàn vì đó là một phép đo về cân nặng thừa, chứ không phải là mỡ cơ thể thừa. BMI còn phụ thuộc vào các yếu tố như tuổi, giới tính, sắc tộc, khối lượng cơ bắp, mỡ cơ thể và mức độ hoạt động, và nhiều yếu tố khác. Ví dụ, một người lớn tuổi được xem là có cân nặng lành mạnh, nhưng hoàn toàn không hoạt động trong cuộc sống hàng ngày có thể có lượng mỡ cơ thể dư thừa đáng kể mặc dù họ không nặng. Điều này sẽ được coi là không lành mạnh, trong khi một người trẻ tuổi có tỷ lệ cơ bắp cao hơn cùng BMI sẽ được xem là lành mạnh. Ở các vận động viên, đặc biệt là người tập thể dục xây dựng cơ thể có thể bị coi là thừa cân do cơ bắp nặng hơn mỡ, có thể họ thực sự có cân nặng lành mạnh cho cấu trúc cơ thể của họ. Nói chung, theo CDC:</div>
                    <ul className='my-2 ml-16' style={{listStyleType: 'disc'}} >
                        <li>Người lớn tuổi thường có nhiều mỡ cơ thể hơn so với người lớn trẻ cùng một chỉ số BMI.</li>
                        <li>Phụ nữ thường có nhiều mỡ cơ thể hơn nam giới cho một chỉ số BMI tương đương.</li>
                        <li>Các cá nhân cơ bắp và vận động viên được đào tạo mạnh có thể có BMI cao hơn do khối lượng cơ bắp lớn.</li>
                    </ul>
                    <div className='text-xl font-semibold mb-5'>Ở trẻ em và thanh thiếu niên:</div>
                    <div className={PARAGRAPH_STYLES}>Những yếu tố giới hạn sự hiệu quả của BMI cho người lớn cũng có thể áp dụng cho trẻ em và thanh thiếu niên. Ngoài ra, chiều cao và mức độ chín muồi tình dục có thể ảnh hưởng đến BMI và mỡ cơ thể ở trẻ em. BMI là chỉ số tốt hơn về mỡ cơ thể dư thừa cho trẻ em béo phì hơn là trẻ em thừa cân, BMI của họ có thể là kết quả của sự tăng cao của mỡ hoặc khối lượng không mỡ (tất cả các thành phần của cơ thể ngoại trừ mỡ, bao gồm nước, các cơ quan, cơ bắp, vv). Ở trẻ em gầy, sự khác biệt trong BMI cũng có thể do khối lượng không mỡ.</div>
                    <div className={PARAGRAPH_STYLES}>Nói thêm rằng, BMI khá chính xác về mỡ cơ thể cho 90-95% dân số, và có thể được sử dụng hiệu quả kèm với các biện pháp khác để giúp xác định cân nặng cơ thể lành mạnh của một cá nhân.</div>
                </div>
            </div>
            
        </div>
    );
}

export default Micronutrients;