import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { DishForm } from './dishForm';
import { Result } from '@/app/consts/interface';
import { Table } from 'antd';

const SelectDish = ( {setSavedDishes} : props ) => {
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

    useEffect(() => {
        setSavedDishes(results)
    }, [results])

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
        <div>
            <div className="calculate-BMI py-3 rounded-2xl flex flex-col items-start">
                <div className=''>
                    <button 
                        type="button" 
                        onClick={addFoodForm}
                        className="text-3xl text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white  font-medium rounded-full px-2.5 py-1 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500"
                    >
                        +
                    </button>
                </div>
                <div className='w-[85%] ' ref={formsRef} >
                    {forms}
                    
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
};

type props = {

    setSavedDishes: React.Dispatch<React.SetStateAction<Result[]>>
    // allFoodTypes: Array<string>
}

export default SelectDish;