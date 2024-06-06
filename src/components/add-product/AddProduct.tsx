import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  InputLabel,
  TextField,
} from "@mui/material";
import { pageLevelLocalization } from "../../constants/localization";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <Box sx={{ direction: "rtl" }}>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onsubmit)}>
            <Grid container>
              <Grid item xs={12}>
                <InputLabel htmlFor={pageLevelLocalization.addProduct.name}>
                  {pageLevelLocalization.addProduct.name}
                </InputLabel>
                <TextField
                  id={pageLevelLocalization.addProduct.name}
                  aria-describedby={pageLevelLocalization.addProduct.name}
                  {...register("name")}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor={pageLevelLocalization.addProduct.author}>
                  {pageLevelLocalization.addProduct.author}
                </InputLabel>
                <TextField
                  id={pageLevelLocalization.addProduct.author}
                  aria-describedby={pageLevelLocalization.addProduct.author}
                  {...register("author")}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor={pageLevelLocalization.addProduct.desc}>
                  {pageLevelLocalization.addProduct.desc}
                </InputLabel>
                <TextField
                  id={pageLevelLocalization.addProduct.desc}
                  aria-describedby={pageLevelLocalization.addProduct.desc}
                  {...register("desc")}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  htmlFor={pageLevelLocalization.addProduct.translator}
                >
                  {pageLevelLocalization.addProduct.translator}
                </InputLabel>
                <TextField
                  id={pageLevelLocalization.addProduct.translator}
                  aria-describedby={pageLevelLocalization.addProduct.translator}
                  {...register("translator")}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor={pageLevelLocalization.addProduct.price}>
                  {pageLevelLocalization.addProduct.price}
                </InputLabel>
                <TextField
                  id={pageLevelLocalization.addProduct.price}
                  aria-describedby={pageLevelLocalization.addProduct.price}
                  {...register("price")}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit">ثبت</Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
