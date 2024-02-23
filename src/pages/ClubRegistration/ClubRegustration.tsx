import { useForm} from "react-hook-form";
import InputField from "../../components/InputFeild/InputFeild";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  clubName: yup.string().required("Club name is required"),
  clubEmail: yup.string(),
  clubAddress:yup.string(),
  clubContactName:yup.string(),
  clubLocality:yup.string(),
  clubCity:yup.string(),
  clubZipCode:yup.string(),
  clubState:yup.string(),
  clubLicenseNumber:yup.string(),
  clubFootballCoaches:yup.string()
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField
        label="Club Name"
        placeholder="Enter business name"
        register={register("clubName")}
        error={errors.clubName?.message}
      />
      <InputField
        label="Email ID"
        placeholder="Enter email here"
        register={register("clubEmail")}
        error={errors.clubEmail?.message}
      />
      <InputField
        label="Stadium/ Training Area"
        placeholder="Address"
        register={register("clubAddress")}
        error={errors.clubAddress?.message}
      />
    <InputField
        label=""
        placeholder="State"
        register={register("clubState")}
        error={errors.clubState?.message}
      />
      <InputField
        label="Club License number"
        placeholder="Enter name here"
        register={register("clubLicenseNumber")}
        error={errors.clubContactName?.message}
      />
     <InputField
        label="Primary contact name"
        placeholder="Enter name here"
        register={register("clubContactName")}
        error={errors.clubContactName?.message}
      />
       <InputField
        label=""
        placeholder="Locality"
        register={register("clubLocality")}
        error={errors.clubLocality?.message}
      />
      <InputField
        label=""
        placeholder="City"
        register={register("clubCity")}
        error={errors.clubCity?.message}
      />
      <InputField
        label=""
        placeholder="ZIP Code"
        register={register("clubZipCode")}
        error={errors.clubZipCode?.message}
      />
      <InputField
        label="Number of Football Coaches"
        placeholder="Number of Football Coaches"
        register={register("clubFootballCoaches")}
        error={errors.clubFootballCoaches?.message}
      />
      
      <input type="submit" />
    </form>
  );
}