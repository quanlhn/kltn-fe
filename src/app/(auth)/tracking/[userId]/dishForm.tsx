'use client'

import React, { useState, useRef, useEffect } from 'react';

import { HR_STYLE, MAIN_ARTICLE_DISCRIBE, MAIN_ARTICLE_DIV, MAIN_ARTICLE_TITLE, SIDE_ARTICLE_CHILD_DIV, SIDE_ARTICLES_DIV, SIDE_ARTICLE_IMAGE, SIDE_ARTICLE_TITLE, SIDE_ARTICLE_DISCRIBE, MAIN_ARTICLE_AVATAR, PARAGRAPH_STYLES, PARAGRAPH_TITLE } from '@/app/consts/className';
import { Button, Cascader, Checkbox, Form, Input, InputNumber, Radio, Select, TreeSelect } from 'antd';
import { API_PATH } from '@/app/consts/path';
import { FoodType, Result, UnitType } from '@/app/consts/interface';

import { CheckOutlined, CheckSquareFilled, CheckSquareOutlined, MinusOutlined } from '@ant-design/icons';

type props = {
    index: number,
    results: Array<Result>,
    setResults: React.Dispatch<React.SetStateAction<Result[]>>
    // allFoodTypes: Array<string>
}


export const DishForm = ({index, results, setResults}: props) => {

    const [search, setSearch] = useState('')
    const [disableFoodSelect, setDisableFoodSelect] = useState(true)
    
    const [dishes, setDishes] = useState<Array<FoodType>>()
    const [selectedType, setSelectedType] = useState<string>('') 
    const [selectedDish, setSelectedDish] = useState<FoodType>() 
    const [amount, setAmount] = useState(1) 
    const [currentUnit, setCurrentUnit] = useState<UnitType>({
        label: 'gam',
        coefficient: 100
    })

    const [allDishTypes, setAllDishTypes] = useState<Array<string>>([])

    useEffect(() => {
        fetch(API_PATH + 'calories-calculate/getDistinctDish')
            .then(res => res.json())
            .then(data => {
                setAllDishTypes(data.response)
            })
    }, []);

    const [isSubmit, setIsSubmit] = useState(false)

    const handleSubmit = () => {
        const multiplier = amount / currentUnit.coefficient
        console.log(selectedDish?.calo)
        console.log(amount)
        if (selectedDish) {
            const result = {
                ten: selectedDish.ten,
                protein: selectedDish.protein ? selectedDish.protein * multiplier : 0,
                calo: selectedDish.calo ? selectedDish.calo * multiplier : 0,
                lipit: selectedDish.lipit ? selectedDish.lipit * multiplier : 0,
                fiber: selectedDish.fiber ? selectedDish.fiber * multiplier : 0,
                carbohydrat: selectedDish.carbohydrat ? selectedDish.carbohydrat * multiplier : 0,
                amount,
                key: index
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
            const newResult: Result[] = []
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
        if (selectedDish) {
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

    const onChangeDish = (value: string) => {
        const currentDish = JSON.parse(value)
        setCurrentUnit(() => getUnit(currentDish.don_vi_tinh))
        setSelectedDish(currentDish)

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
            fetch(API_PATH + 'calories-calculate/dishFilter', {
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
                console.log("result: ")
                console.log("result: ")
                setDishes(data.filteredDish)
            })
        }
    }, [selectedType])

    

    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <div className="my-3 flex justify-between">

            <Form

                disabled={isSubmit}
                layout="inline"
                initialValues={{ size: 'large', amount: 1 }}
                style={{
                    maxWidth: 'none',

                }}
                onFinish={handleSubmit}
                className='flex justify-between'
            >
                <Form.Item label="Loại món" name='type'>
                    <Select
                        showSearch
                        placeholder="Chọn loại món"
                        optionFilterProp='children'
                        onChange={onChangeType}
                        filterOption={filterOption}
                        style={{ width: 180 }}
                        options={allDishTypes.map((type) => ({label: type,value: type}))}
                    />
                </Form.Item>

                <Form.Item label="Món" name='food'>
                    <Select
                        disabled={disableFoodSelect || isSubmit}
                        showSearch
                        placeholder="Chọn món ăn"
                        optionFilterProp='children'
                        onChange={onChangeDish}
                        filterOption={filterOption}
                        style={{ width: 200 }}
                        options={
                            dishes 
                            ?
                            dishes.map((food) => ({label: food.ten, value: JSON.stringify(food)}))
                            :
                            [{label: '', value: ''}]
                        }
                    />
                </Form.Item>

                <Form.Item label="Số lượng" name="amount" >
                    <InputNumber style={{ width: 180 }} onChange={onChangeAmount} addonAfter={currentUnit.label}/>
                </Form.Item>

            </Form>
            
            {!isSubmit ? <CheckSquareOutlined onClick={setSubmitted} className='text-xl' /> : <CheckSquareFilled onClick={setNotSubmitted} className='text-xl' />}

            
            

        </div>
    );
}

