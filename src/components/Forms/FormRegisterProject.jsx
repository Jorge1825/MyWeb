import React from "react";
import { useForm } from "react-hook-form";
import { InputForm } from "./InputForm";

export function FormRegisterProject() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
    <InputForm
    label={"Nombre del proyecto"}
    name={"name"}
    type={"text"}
    placeholder={"Nombre del proyecto"}
    register={register}
    rules={{ required: true }}
    errors={errors.name}
    />

    </form>
  );
}

// ho9ja de estilos


