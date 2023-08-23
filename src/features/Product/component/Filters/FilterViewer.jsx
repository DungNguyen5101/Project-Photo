import { Box, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import './FilterViewer.scss'

const FILTER_LIST = [
    {
        id: 1,
        getLabel: (filter) => 'Miễn phí vận chuyển',
        isActive: (filter) => filter.isFreeShip,
        isVisible: (filter) => true,
        isRemovable: false,
        onRemove: () => { },
        onToggle: (filter) => {
            const newFilter = { ...filter }
            if (filter.isFreeShip) {
                delete newFilter.isFreeShip
            } else {
                newFilter.isFreeShip = true
            }
            return newFilter
        },
    },
    {
        id: 2,
        getLabel: (filter) => 'Khuyến mại',
        isActive: () => true,
        isVisible: (filter) => filter.isPromotion,
        isRemovable: true,
        onRemove: (filter) => {
            const newFilter = { ...filter }
            delete newFilter.isPromotion
            return newFilter
        },
        onToggle: (filter) => null,
    },
    {
        id: 3,
        getLabel: (filter) => `Từ ${filter.salePrice_gte} đến ${filter.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filter) =>
            Object.keys(filter).includes('salePrice_lte') && Object.keys(filter).includes('salePrice_gte'),
        isRemovable: true,
        onRemove: (filter) => {
            const newFilter = { ...filter }
            delete newFilter.salePrice_lte;
            delete newFilter.salePrice_gte;
            return newFilter
        },
        onToggle: (filter) => { },
    },
    // {
    //     id: 4,
    //     getLabel: (filter) => 'Danh mục',
    //     isActive: (filter) => true,
    //     isVisible: (filter) => true,
    //     isRemovable: true,
    //     onRemove: (filter) => { },
    //     onToggle: (filter) => { },
    // },
]

FilterViewer.propTypes = {
    onChange: PropTypes.func,
    filter: PropTypes.object
};

function FilterViewer({ filter = {}, onChange = null }) {
    const visibleFilter = useMemo(() => {
        return FILTER_LIST.filter(x => x.isVisible(filter))
    }, [filter])
    return (
        <Box component="ul" className='filter-viewer-list'>
            {visibleFilter.map((x, index) => (
                <Chip
                    key={index}
                    label={x.getLabel(filter)}
                    color={x.isActive(filter) ? 'primary' : 'default'}
                    clickable={!x.isRemovable}
                    onClick={
                        x.isRemovable ? null : () => {
                            if (!onChange) return
                            const newFilter = x.onToggle(filter)
                            onChange(newFilter)
                        }
                    }
                    onDelete={
                        x.isRemovable ? () => {
                            if (!onChange) return
                            const newFilter = x.onRemove(filter)
                            onChange(newFilter)
                        } : null
                    }
                />
            ))}
        </Box>
    );
}

export default FilterViewer;