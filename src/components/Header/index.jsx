import { ShoppingCart } from '@mui/icons-material';
import CodeIcon from '@mui/icons-material/Code';
import { Badge } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { cartItemsCountSelector } from '../../features/Cart/Selectors'
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const cartItemsCount = useSelector(cartItemsCountSelector)
    const navigate = useNavigate()

    const handleCartClick = () => {
        navigate('/cart')
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0 }}
                    >
                        <CodeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Project Shop
                    </Typography>
                    <IconButton aria-label='show 4 new mails' color='inherit'>
                        <Badge badgeContent={cartItemsCount} color='secondary'>
                            <ShoppingCart onClick={handleCartClick} />
                        </Badge>
                    </IconButton>
                    <Button color="inherit" style={{ padding: '0 12px' }}>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
