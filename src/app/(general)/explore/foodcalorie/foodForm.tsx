'use client'

import React, { useState, useRef, useEffect } from 'react';

import { HR_STYLE, MAIN_ARTICLE_DISCRIBE, MAIN_ARTICLE_DIV, MAIN_ARTICLE_TITLE, SIDE_ARTICLE_CHILD_DIV, SIDE_ARTICLES_DIV, SIDE_ARTICLE_IMAGE, SIDE_ARTICLE_TITLE, SIDE_ARTICLE_DISCRIBE, MAIN_ARTICLE_AVATAR, PARAGRAPH_STYLES, PARAGRAPH_TITLE } from '@/app/consts/className';
import { Button, Cascader, Checkbox, Form, Input, InputNumber, Radio, Select, TreeSelect } from 'antd';
import { API_PATH } from '@/app/consts/path';
import { FoodType, Result1, UnitType } from '@/app/consts/interface';

import { CheckOutlined, CheckSquareFilled, CheckSquareOutlined, MinusOutlined } from '@ant-design/icons';

type props = {
    index: number,
    results: Array<Result1>,
    setResults: React.Dispatch<React.SetStateAction<Result1[]>>
    // allFoodTypes: Array<string>
}


export const FoodForm = ({index, results, setResults}: props) => {

    const [search, setSearch] = useState('')
    const [disableFoodSelect, setDisableFoodSelect] = useState(true)
    
    const [foods, setFoods] = useState<Array<FoodType>>()
    const [selectedType, setSelectedType] = useState<string>('') 
    const [selectedFood, setSelectedFood] = useState<FoodType>() 
    const [amount, setAmount] = useState(100) 
    const [currentUnit, setCurrentUnit] = useState<UnitType>({
        label: 'gam',
        coefficient: 100
    })

    const [allFoodTypes, setAllFoodTypes] = useState<Array<string>>([])

    useEffect(() => {
        fetch(API_PATH + 'calories-calculate/getDistinctFood')
            .then(res => res.json())
            .then(data => {
                setAllFoodTypes(data.response)
            })
    }, []);

    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = () => {
        const multiplier = amount / currentUnit.coefficient
        console.log(selectedFood?.calo)
        console.log(amount)
        if (selectedFood) {
            const result = {
                ten: selectedFood.ten,
                protein: selectedFood.protein ? selectedFood.protein * multiplier : 0,
                calo: selectedFood.calo ? selectedFood.calo * multiplier : 0,
                lipit: selectedFood.lipit ? selectedFood.lipit * multiplier : 0,
                fiber: selectedFood.fiber ? selectedFood.fiber * multiplier : 0,
                carbohydrat: selectedFood.carbohydrat ? selectedFood.carbohydrat * multiplier : 0,
                amount
            }
            console.log(result)
            setResults(() => (results.map((r, i) => {
                if (index == i) {
                    return result
                }
                return r
            })))
        }
    }

    const removeFood = () => {
        setResults(() => {
            console.log(index)              
            const newResult: Result1[] = []
            results.forEach((r, i) => {
                console.log(r)  
                if (index != i) {
                    newResult.push(r)
                }
            })
            return newResult
        })
    }

    const setSubmitted = () => {
        if (selectedFood) {
            setIsSubmit(true)
            handleSubmit()
        }
    } 

    const setNotSubmitted = () => {
        setIsSubmit(false)
    }

    const onChangeType = (value: string) => {
        if (value) {
            setDisableFoodSelect(false)
            setSelectedType(value)
        } else {
            setDisableFoodSelect(true)
        }

    }

    const onChangeAmount = (value: number | null) => {
        setAmount(value ? value : 0)
    }

    const onChangeFood = (value: string) => {
        const currentFood = JSON.parse(value)
        setCurrentUnit(() => getUnit(currentFood.don_vi_tinh))
        setSelectedFood(currentFood)

    }

    const getUnit = (unit: string) => {
        if (unit == '100g') {
            return {
                label: "gam",
                coefficient: 100
            }
        }
        if (unit == '500ml') {
            return {
                label: "ml",
                coefficient: 500
            }
        }
        if (unit.includes(' ')) {
            return {
                label: unit.substring(unit.indexOf(' '), unit.length),
                coefficient: 1
            }
        }
        return {
            label: 'cuộn',
            coefficient: 1
        }
    }


    

    useEffect(() => {
        if (selectedType) {
            fetch(API_PATH + 'calories-calculate/foodFilter', {
                method: 'POST',
                mode: 'cors', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    search: selectedType
                })
            })
            .then(res => res.json())
            .then(data => {

                setFoods(data.filtedFood)
            })
        }
    }, [selectedType])

    

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div className="my-3 flex justify-between">
            <MinusOutlined className='text-xl' onClick={removeFood} />

            <Form
                // labelCol={{
                //     span: 6,
                // }}
                // wrapperCol={{
                //     span: 20,
                // }}
                disabled={isSubmit}
                layout="inline"
                initialValues={{ size: 'large', amount: 100 }}
                style={{
                    maxWidth: 'none',

                }}
                onFinish={handleSubmit}
                className='flex justify-between'
            >
                <Form.Item label="Loại thực phẩm" name='type'>
                    <Select
                        showSearch
                        placeholder="Chọn loại thực phẩm"
                        optionFilterProp='children'
                        onChange={onChangeType}
                        filterOption={filterOption}
                        style={{ width: 180 }}
                        options={allFoodTypes.map((type) => ({label: type,value: type}))}
                    />
                </Form.Item>

                <Form.Item label="Thực phẩm" name='food'>
                    <Select
                        disabled={disableFoodSelect || isSubmit}
                        showSearch
                        placeholder="Chọn thực phẩm"
                        optionFilterProp='children'
                        onChange={onChangeFood}
                        filterOption={filterOption}
                        style={{ width: 230 }}
                        options={
                            foods 
                            ?
                            foods.map((food) => ({label: food.ten, value: JSON.stringify(food)}))
                            :
                            [{label: '', value: ''}]
                        }
                    />
                </Form.Item>

                <Form.Item label="Số lượng" name="amount" >
                    <InputNumber style={{ width: 130 }} onChange={onChangeAmount} addonAfter={currentUnit.label}/>
                </Form.Item>

                

                {/* <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <input
                        className='bg-blue-500 px-5 py-2 text-2xl font-semibold text-white rounded-xl cursor-pointer hover:drop-shadow-xl'
                        type='submit'
                        value='Tnh BMI'
                    >

                    </input>

                </Form.Item> */}
            </Form>
            
            {!isSubmit ? <CheckSquareOutlined onClick={setSubmitted} className='text-xl' /> : <CheckSquareFilled onClick={setNotSubmitted} className='text-xl' />}

            
            

        </div>
    );
}

