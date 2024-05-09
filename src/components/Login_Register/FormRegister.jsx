import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import {
  AccountCircle,
  Password,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { login } from "../../api/auth";
function ErrorText(text) {
  return <FormHelperText className="text-error">{text}</FormHelperText>;
}

export function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const response = await login(data.email, data.password);
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="jus-center d-flex-column px-5">
        <FormControl sx={{ m: 1, pb: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Usuario</InputLabel>

          <Input
            placeholder="Ingrese su correo"
            id="standard-adornment-password"
            type="text"
            className={errors.email ? "input-error" : "input"}
            name="email"
            startAdornment={
              <AccountCircle className="icon" sx={{ mr: 1, my: 0.5 }} />
            }
            {...register("email", {
              required: "El usuario es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Correo inválido",
              },
            })}
          />
          {errors.email && ErrorText(errors.email?.message)}
        </FormControl>

        <FormControl sx={{ m: 1, pb: 2 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>

          <Input
            className={errors.password ? "input-error" : "input"}
            placeholder="Ingrese su contraseña"
            id="standard-adornment-password"
            name="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className="icon"
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? (
                    <VisibilityOff className="icon" />
                  ) : (
                    <Visibility className="icon" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            startAdornment={
              <Password className="icon" sx={{ mr: 1, my: 0.5 }} />
            }
            {...register("password", {
              required: "La contraseña es requerida",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}
          />

          {errors.password && ErrorText(errors.password?.message)}
        </FormControl>

        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Recordar contraseña"
        />
      </div>

      <div className="d-flex jus-around px-5 pt-2">
        <button className="btn-shine btn-login">
          <span>Iniciar Sesión</span>
        </button>

        <button className="btn-shine-register btn-register">
          <span>Registrarme</span>
        </button>
      </div>
    </form>
  );
}
