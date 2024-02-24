import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/InputFeild/InputFeild";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import ClubRegistrationStyles from "./ClubRegistration.module.scss";
import MobileNumberInputField from "../../components/MobileNumberComponent/MobileNumberComponent";

const schema = yup.object().shape({
  clubName: yup.string().required("Club name is required"),
  clubEmailId: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  clubAddress: yup.string().required("Address is required"),
  clubContactName: yup.string().required("Contact name is required"),
  clubLocality: yup.string().required("Locality is required"),
  clubCity: yup.string().required("City is required"),
  clubZipCode: yup.string().required("Zip code is required"),
  clubState: yup.string().required("State is required"),
  clubLicenseNumber: yup.string().required("License number is required"),
  clubFootballCoaches: yup.string().required("Football coaches is required"),
  clubContactNumberCode: yup
    .string()
    .required("Contact number code is required"),
  clubContactNumber: yup.string().required("Contact number is required"),
});

const steps = ["Step 1", "Step 2"];

export default function ClubRegistration() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [activeStep, setActiveStep] = useState(0);

  const onSubmit = (data: any) => console.log(data);

  const handleNext = async () => {
    if (activeStep === 0) {
      const isValid = await trigger([
        "clubName",
        "clubEmailId",
        "clubAddress",
        "clubContactName",
        "clubLocality",
        "clubContactNumberCode",
        "clubContactNumber",
      ]);
      if (!isValid) return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  console.log(errors, "errors");

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {activeStep === 0 && (
          <Box className={ClubRegistrationStyles.container}>
            <Stack className={ClubRegistrationStyles.containerLevelOne}>
              <Box className={ClubRegistrationStyles.leftContainer}>
                <InputField
                  label="Media"
                  placeholder="Enter locality here"
                  register={register("clubLocality")}
                  error={errors.clubLocality?.message}
                />
              </Box>
              <Box className={ClubRegistrationStyles.rightContainer}>
                <Stack
                  className={ClubRegistrationStyles.rightContainerTopStack}
                >
                  <InputField
                    label="Club Name"
                    placeholder="Enter business name"
                    register={register("clubName")}
                    error={errors.clubName?.message}
                  />
                  <InputField
                    label="Email ID"
                    placeholder="Enter email here"
                    register={register("clubEmailId")}
                    error={errors.clubEmailId?.message}
                  />
                </Stack>
                <InputField
                  textArea={true}
                  label="About the Club"
                  placeholder="Write a brief about yourself and a short history of your experiences"
                  register={register("clubAddress")}
                  error={errors.clubAddress?.message}
                />
              </Box>
            </Stack>
            <Stack className={ClubRegistrationStyles.rightContainerTopStack}>
              <Stack className={ClubRegistrationStyles.mobileNumberContainer}>
                <MobileNumberInputField
                  placeholder="Primary contact number"
                  countryCodeRegister={register("clubContactNumberCode")}
                  mobileNumberRegister={register("clubContactNumber")}
                  inputField={(value) => console.log(value)}
                  selectField={(value) => console.log(value)}
                  label="Enter contact number"
                  list={[
                    {
                      id: 1,
                      name: "+91",
                    },
                    { id: 2, name: "+41" },
                  ]}
                  selectedState="+91"
                />
                {errors.clubContactNumberCode?.message ||
                  (errors.clubContactNumber?.message && (
                    <p className={ClubRegistrationStyles.error}>
                      {errors.clubContactNumberCode?.message ||
                        errors.clubContactNumber?.message}
                    </p>
                  ))}
              </Stack>
              <InputField
                label="Primary contact name"
                placeholder="Enter name here"
                register={register("clubContactName")}
                error={errors.clubContactName?.message}
              />
            </Stack>
          </Box>
        )}
        <div>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={
              activeStep === steps.length - 1
                ? handleSubmit(onSubmit)
                : handleNext
            }
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </form>
    </div>
  );
}
