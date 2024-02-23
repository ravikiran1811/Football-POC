import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../../components/InputFeild/InputFeild";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  clubName: yup.string().required("Club name is required"),
});

export default function ClubRegistration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data, "data");

  const clubname = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Club Name"
        placeholder="Enter club name"
        handleInputFunction={clubname}
        register={register("clubName")}
        error={errors.clubName?.message}
      />

      <input type="submit" />
    </form>
  );
}
