import { Box, Container, Grid, Pagination, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import productApi from '../../../api/productApi';
import FilterViewer from '../component/Filters/FilterViewer';
import ProductFilters from '../component/ProductFilters';
import ProductList from '../component/ProductList';
import ProductSkeletonList from '../component/ProductSkeletonList';
import ProductSort from '../component/ProductSort';


function ListPage(props) {
    const [productList, setProductList] = useState([])
    const [pagination, setPagination] = useState({
        page: 1,
        total: 10,
        limit: 9
    })
    const [loading, setLoading] = useState(true)
    const [filter, setFilter] = useState({
        _page: 1,
        _limit: 9,
        _sort: 'salePrice:ASC'
    })
    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filter)

                setProductList(data)
                setPagination(pagination)
                console.log({ data, pagination })
            } catch (error) {
                console.log('failed to fetch ', error)
            }
            setLoading(false)
        })()
    }, [filter])

    const handlePageChange = (e, page) => {
        setFilter((prevFliter) => ({
            ...prevFliter,
            _page: page,
        }))
    }
    const handleSortChange = (newSortValue) => {
        setFilter((prevFliter) => ({
            ...prevFliter,
            _sort: newSortValue,
        }))
    }
    const handleFilterChange = (newFilter) => {
        setFilter((prevFliter) => ({
            ...prevFliter,
            ...newFilter,
        }))
    }

    const setNewFilter = (newFilter) => {
        setFilter(newFilter)
    }
    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item sx={{ width: '250px' }}>
                        <Paper elevation={0}>
                            <ProductFilters filter={filter} onChange={handleFilterChange} />
                        </Paper>
                    </Grid>

                    <Grid item sx={{ flex: '1 1 0' }}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={filter._sort} onChange={handleSortChange} />
                            <FilterViewer filter={filter} onChange={setNewFilter} />
                            {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
                            <Box display="flex" justifyContent="center" marginTop="20px" paddingBottom="10px">

                                <Pagination onChange={handlePageChange} color='primary' count={Math.ceil(pagination.total / pagination.limit)} page={pagination.page} />
                            </Box>

                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;