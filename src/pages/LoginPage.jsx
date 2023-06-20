import React from "react";
import classes from './LoginPage.module.scss';
import { Box, Button, Card, TextField, Typography } from '@mui/material'
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate();

    const onSubmit = (evt) => {
        evt.preventDefault();
        navigate('/employees');
    }

    return (
        <div className={classes['login-page']}>
            <Card variant="outlined" sx={{ p: 2, margin: 2 }}>
                <Typography variant="h4" component="h1">
                    Вход
                </Typography>
                <Box component='form' onSubmit={onSubmit} sx={{ maxWidth: 600 }}>
                    <TextField label='Email' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Пароль' variant="outlined" fullWidth margin="normal" />
                    <Button type="submit" sx={{ mt: 1, display: 'block', ml: 'auto' }} variant="outlined">
                        Подтвердить
                    </Button>
                </Box>
            </Card>
        </div>
    )
}

// export default LoginPage;