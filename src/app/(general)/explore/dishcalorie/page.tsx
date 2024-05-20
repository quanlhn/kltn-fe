'use client'

import React, { useState, useRef, useEffect } from 'react';

import { HR_STYLE, MAIN_ARTICLE_DISCRIBE, MAIN_ARTICLE_DIV, MAIN_ARTICLE_TITLE, SIDE_ARTICLE_CHILD_DIV, SIDE_ARTICLES_DIV, SIDE_ARTICLE_IMAGE, SIDE_ARTICLE_TITLE, SIDE_ARTICLE_DISCRIBE, MAIN_ARTICLE_AVATAR, PARAGRAPH_STYLES, PARAGRAPH_TITLE } from '@/app/consts/className';
import { Button, Cascader, Checkbox, Form, Input, InputNumber, Radio, Select, Table, TreeSelect } from 'antd';
import { API_PATH } from '@/app/consts/path';
import { FoodType, Result } from '@/app/consts/interface';
import { DishForm } from './dishForm';
import ReactDOM from 'react-dom';
import { MinusOutlined } from '@ant-design/icons';
import { createRoot } from 'react-dom/client';


function DishNutrients() {

    const formsRef =  useRef<HTMLDivElement>(null)
    const [results, setResults] = useState<Array<Result>>([{
        ten: '',
        protein: 0,
        calo: 0,
        lipit: 0,
        fiber: 0,
        carbohydrat: 0,
        amount: 0,
        key: 0
    }])
    
    const [numForm, setNumForm] = useState(1);
    const [forms, setForms] = useState<Array<React.JSX.Element>>([])

    //<FoodForm allFoodTypes={allFoodTypes} index={results.length-1} results={results} setResults={setResults} />

    useEffect(() => {
        setForms(() => [...forms, <DishForm key={results.length - 1}  index={results.length-1} results={results} setResults={setResults} />])
    }, [numForm])

    const addFoodForm = () => {
        setNumForm(() => numForm + 1)
        setResults(() => [...results, {
            ten: '',
            protein: 0,
            calo: 0,
            lipit: 0,
            fiber: 0,
            carbohydrat: 0,
            amount: 0, 
            key: results.length
        }])
    }

    const tableColumns = [
        {
            title: 'Thực phẩm',
            dataIndex: 'ten',
            key: 'ten',
        },
        {
            title: 'Số lượng',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Đường/bột',
            dataIndex: 'carbohydrat',
            key: 'carbohydrat',
        },
        {
            title: 'Chất xơ',
            dataIndex: 'fiber',
            key: 'fiber',
        },
        {
            title: 'Đạm',
            dataIndex: 'protein',
            key: 'protein',
        },
        {
            title: 'Chất béo',
            dataIndex: 'lipit',
            key: 'lipit',
        },
        {
            title: 'Calo',
            dataIndex: 'calo',
            key: 'calo',
        }
    ]

    const getSum = () => {
        let sum = {
            ten: 'Tổng',
            protein: 0,
            calo: 0,
            lipit: 0,
            fiber: 0,
            carbohydrat: 0,
            amount: 0
        }
        results.forEach((e) => {
            sum.protein += e.protein
            sum.calo += e.calo
            sum.lipit += e.lipit
            sum.fiber += e.fiber
            sum.carbohydrat += e.carbohydrat
        })
        return sum
    }

    return (
        <div className='mt-28 z-0 mx-40 '>
            <div className='text-5xl mb-8 font-semibold'>Tra cứu Dinh dưỡng trong món ăn và thực đơn</div>

            <div className="calculate-BMI px-10  py-8 rounded-2xl flex justify-between items-start">
                <div className='w-[85%] ' ref={formsRef} >
                    {forms}
                    
                </div>

                <div className=''>
                    <button 
                        type="button" 
                        onClick={addFoodForm}
                        className="text-3xl text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white  font-medium rounded-full px-2.5 py-1 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
                    >
                        +
                    </button>
                </div>

            </div>

            <Table 
                columns={tableColumns}
                dataSource={results.length >= 2 ? [...results, getSum()] : results}
                // dataSource={results}
                pagination = {false}

            />

        </div>
    );
}

export default DishNutrients;

