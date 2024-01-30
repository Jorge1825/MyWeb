import React from "react";
import { useForm } from "react-hook-form";

//crear mi propio componente InputForm para reutilizarlo en otros componentes

import PropTypes from "prop-types";

export function InputForm({
  label,
  name,
  type,
  placeholder,
  register,
  rules,
  errors,
}) {
  return (
    <>
      <div
      className="container-input"
      >
        <label>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
        />

        {errors && <span>{errors.message}</span>}
      </div>
    </>
  );
}
