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

type Inputs = {
  name: string;
  author: string;
  translator: string;
  desc: string;
  price: number;
};

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    /*    formState: { errors }, */
  } = useForm<Inputs>();

  const onsubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ direction: 'rtl' }}>
      <Card>
        <CardContent sx={{ width: '80%' }}>
          <form onSubmit={handleSubmit(onsubmit)}>
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
                  {...register('name')}
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
                  {...register('author')}
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
                  {...register('desc')}
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
                  {...register('translator')}
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
                  {...register('price')}
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
