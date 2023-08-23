import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import categoryApi from '../../../../api/categoryApi'
import './FilterByCategory.scss'

FilterByCategory.propTypes = {
    onChange: PropTypes.func
};

function FilterByCategory({ onChange }) {
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll()
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name
                    }))
                )
            } catch (error) {
                console.log('failed ', error)
            }
        })()
    }, [])

    const handleCategoryClick = (category) => {
        if (onChange) {
            onChange(category.id)
        }
    }
    return (
        <Box>
            <Typography variant='subtitle2'>Danh Mục Sản Phẩm</Typography>

            <ul className='category-list'>
                {categoryList.map((category) => (
                    <li
                        key={category.id}
                        onClick={() => handleCategoryClick(category)}
                        variant="body2"
                        className='category-item'
                    >
                        <Typography variant='body2'>{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;