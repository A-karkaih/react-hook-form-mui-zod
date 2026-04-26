import { useForm } from "react-hook-form";
import { TextField, Stack } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../types/schema";
import type { Schema } from "../types/schema";
export function Users() {
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
     
    </Stack>
  );
}
