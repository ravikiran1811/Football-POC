import { useForm, SubmitHandler } from "react-hook-form"
import InputField from "../../components/InputFeild/InputFeild"

type Inputs = {
  example: string
  exampleRequired: string
}

export default function ClubRegistration() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it
  const clubname=()=>{

  }
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("example")} />
        <InputField 
          label="Club Name" placeholder="Enter club name" handleInputFunction={clubname}
          />
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  )
}