//import { UsersHookOnly } from "./users/components/UsersHookOnly";  <UsersHookOnly />
//import { Users } from "./users/components/Users"; <Users />

import { useForm } from "react-hook-form";
type FormFileds = {
  email: string;
  password: string;
};
export function AppHookOnly() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFileds>({
    defaultValues: {
      email: "test",
      password: "test",
    },
  });
  const onSubmit = async (data: FormFileds) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error();
      console.log(data);
    } catch (err) {
      setError("root", { message: "this email is already taken" });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        gap: "10px",
      }}
    >
      <input
        {...register("email", {
          required: { value: true, message: "Email is required" },
          validate: (val) => val.includes("@") || "not an email",
        })}
        type="text"
        placeholder="Email"
      />
      {errors.email && <div> {errors.email.message}</div>}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: { value: 8, message: "must have 8 letters" },
        })}
        type="text"
        placeholder="Password"
      />
      {errors.password && <div> {errors.password.message}</div>}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "loading" : "submit"}
      </button>
      {errors.root && <div> {errors.root.message}</div>}
    </form>
  );
}
