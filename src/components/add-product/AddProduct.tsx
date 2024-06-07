import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
} from '@mui/material';
import { pageLevelLocalization } from '../../constants/localization';
import { useForm, SubmitHandler } from 'react-hook-form';
import { newProduct } from '../../api/post/post'; // Ensure correct path

type Inputs = {
  name: string;
  author: string;
  translator: string;
  desc: string;
  price: number;
  imgURL: string;
  file: string;
};

export default function AddProduct() {
  const [img, setImg] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    newProduct({ ...data, imgURL: img, id: Date.now() });
    reset();
  };

  function handleFile(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const fileData = event?.target?.result;
      setImg(fileData as string);
    };
    reader.readAsDataURL(file);
  }

  return (
    <Box sx={{ direction: 'rtl' }}>
      <Card>
        <CardContent sx={{ width: '80%' }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.name}
                >
                  {pageLevelLocalization.addProduct.name}
                </InputLabel>
                <TextField
                  fullWidth
                  id={pageLevelLocalization.addProduct.name}
                  aria-describedby={pageLevelLocalization.addProduct.name}
                  {...register('name', { required: true })}
                  error={!!errors.name}
                  helperText={
                    errors.name
                      ? `${pageLevelLocalization.addProduct.error} ${pageLevelLocalization.addProduct.name}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.author}
                >
                  {pageLevelLocalization.addProduct.author}
                </InputLabel>
                <TextField
                  fullWidth
                  id={pageLevelLocalization.addProduct.author}
                  aria-describedby={pageLevelLocalization.addProduct.author}
                  {...register('author', { required: true })}
                  error={!!errors.author}
                  helperText={
                    errors.author
                      ? `${pageLevelLocalization.addProduct.error} ${pageLevelLocalization.addProduct.author}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.desc}
                >
                  {pageLevelLocalization.addProduct.desc}
                </InputLabel>
                <TextField
                  fullWidth
                  id={pageLevelLocalization.addProduct.desc}
                  aria-describedby={pageLevelLocalization.addProduct.desc}
                  {...register('desc', { required: true })}
                  error={!!errors.desc}
                  helperText={
                    errors.desc
                      ? `${pageLevelLocalization.addProduct.error} ${pageLevelLocalization.addProduct.desc}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.translator}
                >
                  {pageLevelLocalization.addProduct.translator}
                </InputLabel>
                <TextField
                  fullWidth
                  id={pageLevelLocalization.addProduct.translator}
                  aria-describedby={pageLevelLocalization.addProduct.translator}
                  {...register('translator', { required: true })}
                  error={!!errors.translator}
                  helperText={
                    errors.translator
                      ? `${pageLevelLocalization.addProduct.error} ${pageLevelLocalization.addProduct.translator}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.price}
                >
                  {pageLevelLocalization.addProduct.price}
                </InputLabel>
                <TextField
                  fullWidth
                  id={pageLevelLocalization.addProduct.price}
                  aria-describedby={pageLevelLocalization.addProduct.price}
                  type="number"
                  {...register('price', { required: true })}
                  error={!!errors.price}
                  helperText={
                    errors.price
                      ? `${pageLevelLocalization.addProduct.error} ${pageLevelLocalization.addProduct.price}`
                      : ''
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  sx={{ fontSize: '16px', fontWeight: '600' }}
                  htmlFor={pageLevelLocalization.addProduct.price}
                >
                  UPLOAD FILE
                </InputLabel>
                <TextField
                  onChange={handleFile}
                  id={pageLevelLocalization.addProduct.price}
                  aria-describedby={pageLevelLocalization.addProduct.price}
                  type="file"
                  error={!!errors.file}
                  helperText={
                    errors.price
                      ? `${pageLevelLocalization.addProduct.error} ${pageLevelLocalization.addProduct.file}`
                      : ''
                  }
                />
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ display: 'flex', justifyContent: 'end' }}
              >
                <Button variant="contained" type="submit">
                  ثبت
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
