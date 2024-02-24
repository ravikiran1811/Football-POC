import { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import InputField from "../../components/InputFeild/InputFeild";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { Box, Stack, Typography } from "@mui/material";
import ClubRegistrationStyles from "./ClubRegistration.module.scss";
import MobileNumberInputField from "../../components/MobileNumberComponent/MobileNumberComponent";
import UploadMedia from "../../components/UploadMedia/UploadMedia";
import SelectInputField from "../../components/SelectInputField/SelectInputField";
import { list } from "../../DummyData/SelectInputData";

const schema = yup.object().shape({
  clubName: yup.string().required("Club name is required"),
  aboutTheClub: yup.string().required("About the club is required"),
  clubEmailId: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  clubAddress: yup.string().required("Address is required"),
  clubContactName: yup.string().required("Contact name is required"),
  clubCity: yup.string().required("City is required"),
  clubState: yup.string().required("State is required"),
  clubLicenseNumber: yup.string().required("License number is required"),
  clubLicenseNumberFile: yup
    .mixed()
    .required("License number file is required"),
  clubContactNumberCode: yup
    .string()
    .required("Contact number code is required"),
  clubContactNumber: yup.string().required("Contact number is required"),
  clubLogo: yup.mixed().required("Club logo is required"),
  stadiums: yup.array().of(
    yup.object().shape({
      stadiumAddress: yup.string().required("Stadium address is required"),
      stadiumCity: yup.string().required("Stadium city is required"),
      stadiumState: yup.string().required("Stadium state is required"),
      googleMapLink: yup.string().required("Google map link is required"),
    })
  ),
  coaches: yup.array().of(
    yup.object().shape({
      coachImage: yup.mixed().required("Coach image is required"),
      coachFirstName: yup.string().required("Coach first name is required"),
      coachLastName: yup.string().required("Coach last name is required"),
      aboutTheCoach: yup.string().required("About the coach is required"),
    })
  ),
  clubMedia: yup.mixed().optional(),
  founderImage: yup.mixed().optional(),
  founderFirstName: yup.string().optional(),
  founderLastName: yup.string().optional(),
  aboutTheFounder: yup.string().optional(),
  facilities: yup.string().optional(),
});

const steps = ["Step 1", "Step 2"];

export default function ClubRegistration() {
  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    control,
    setError,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      stadiums: [
        {
          stadiumAddress: "",
          stadiumCity: "",
          stadiumState: "",
          googleMapLink: "",
        },
      ],
      coaches: [
        {
          coachImage: "",
          coachFirstName: "",
          coachLastName: "",
          aboutTheCoach: "",
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "stadiums",
  });

  const {
    fields: coachFields,
    append: appendCoach,
    remove: removeCoach,
  } = useFieldArray({
    control,
    name: "coaches",
  });

  const [activeStep, setActiveStep] = useState(0);
  const values = getValues();
  console.log(values, "values");

  const onSubmit = (data: any) => console.log(data, "data");
  const handleNext = async () => {
    if (activeStep === 0) {
      if (fields.length === 0) {
        setError("stadiums", {
          type: "manual",
          message: "At least one stadium is required",
        });
        return;
      }

      if (coachFields.length === 0) {
        setError("coaches", {
          type: "manual",
          message: "At least one coach is required",
        });
        return;
      }

      const isValid = await trigger([
        "clubName",
        "clubEmailId",
        "aboutTheClub",
        "clubAddress",
        "clubContactName",
        "clubContactNumberCode",
        "clubContactNumber",
        "clubLogo",
        "clubLicenseNumber",
        "clubLicenseNumberFile",
        ...fields.map((_, index) => `stadiums.${index}.stadiumAddress`),
        ...fields.map((_, index) => `stadiums.${index}.stadiumCity`),
        ...fields.map((_, index) => `stadiums.${index}.stadiumState`),
        ...fields.map((_, index) => `stadiums.${index}.googleMapLink`),
        ...coachFields.map((_, index) => `coaches.${index}.coachImage`),
        ...coachFields.map((_, index) => `coaches.${index}.coachFirstName`),
        ...coachFields.map((_, index) => `coaches.${index}.coachLastName`),
        ...coachFields.map((_, index) => `coaches.${index}.aboutTheCoach`),
      ]);
      if (!isValid) return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

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
                <Controller
                  control={control}
                  name="clubLogo"
                  rules={{ required: "Club logo is required" }}
                  render={({ field: { onChange, value, ...field } }) => (
                    <UploadMedia
                      label="Club Logo"
                      values={value}
                      handleChange={(e) => onChange(e.target.files[0])}
                      multiple={false}
                      fieldData={field}
                    />
                  )}
                />
                {errors.clubLogo?.message && (
                  <p className={ClubRegistrationStyles.error}>
                    {errors.clubLogo?.message as any}
                  </p>
                )}
              </Box>
              <Box className={ClubRegistrationStyles.rightContainer}>
                <Stack
                  className={ClubRegistrationStyles.rightContainerTopStack}
                >
                  <InputField
                    label="Club Name"
                    placeholder="Enter business name"
                    register={register("clubName")}
                    error={errors.clubName?.message as any}
                  />
                  <InputField
                    label="Email ID"
                    placeholder="Enter email here"
                    register={register("clubEmailId")}
                    error={errors.clubEmailId?.message as any}
                  />
                </Stack>
                <InputField
                  textArea={true}
                  label="About the Club"
                  placeholder="Write a brief about yourself and a short history of your experiences"
                  register={register("aboutTheClub")}
                  error={errors.aboutTheClub?.message as any}
                />
              </Box>
            </Stack>
            <Stack className={ClubRegistrationStyles.rightContainerTopStack}>
              <Stack className={ClubRegistrationStyles.mobileNumberContainer}>
                <Controller
                  control={control}
                  name="clubContactNumberCode"
                  rules={{ required: "Contact number code is required" }}
                  render={({ field: { onChange, value, ...field } }) => (
                    <MobileNumberInputField
                      placeholder="Primary contact number"
                      countryCodeRegister={field}
                      mobileNumberRegister={register("clubContactNumber")}
                      inputField={(value) => console.log(value)}
                      selectField={(value) => onChange(value)}
                      label="Enter contact number"
                      list={[
                        {
                          id: 1,
                          name: "+91",
                        },
                        { id: 2, name: "+41" },
                      ]}
                      selectedState={value || "+91"}
                    />
                  )}
                />

                {(errors.clubContactNumberCode?.message as any) ||
                  ((errors.clubContactNumber?.message as any) && (
                    <p className={ClubRegistrationStyles.error as any}>
                      {errors.clubContactNumberCode?.message ||
                        (errors.clubContactNumber?.message as any)}
                    </p>
                  ))}
              </Stack>
              <InputField
                label="Primary contact name"
                placeholder="Enter name here"
                register={register("clubContactName")}
                error={errors.clubContactName?.message as any}
              />
            </Stack>
            <Stack className={ClubRegistrationStyles.licenseContainer}>
              <Typography variant="h6">License Details</Typography>
              <Stack className={ClubRegistrationStyles.licenseFieldContainer}>
                <Box className={ClubRegistrationStyles.leftContainer}>
                  <Controller
                    control={control}
                    name="clubLicenseNumberFile"
                    rules={{ required: "Club license number file is required" }}
                    render={({ field: { onChange, value, ...field } }) => (
                      <UploadMedia
                        label="Club License Number File"
                        values={value}
                        handleChange={(e) => onChange(e.target.files[0])}
                        multiple={false}
                        fieldData={field}
                        smallHeight={true}
                      />
                    )}
                  />
                  {errors.clubLicenseNumberFile?.message && (
                    <p className={ClubRegistrationStyles.error}>
                      {errors.clubLicenseNumberFile?.message as any}
                    </p>
                  )}
                </Box>
                <InputField
                  label="Club License Number"
                  placeholder="Enter license number"
                  register={register("clubLicenseNumber")}
                  error={errors.clubLicenseNumber?.message as any}
                />
              </Stack>
            </Stack>
            <Stack className={ClubRegistrationStyles.licenseContainer}>
              <Typography variant="h6">Registered Address</Typography>
              <Stack
                className={ClubRegistrationStyles.RegisteredAddressContainer}
              >
                <Stack
                  className={ClubRegistrationStyles.rightContainerTopStack}
                >
                  <InputField
                    label="Address"
                    placeholder="Address"
                    register={register("clubAddress")}
                    error={errors.clubAddress?.message as any}
                  />
                  <Controller
                    control={control}
                    name="clubCity"
                    render={({ field: { onChange, value, ...field } }) => (
                      <SelectInputField
                        list={list}
                        selectedState={
                          value || (list.length > 0 ? list[0].name : "")
                        }
                        handleChange={(value) => onChange(value)}
                        register={field}
                      />
                    )}
                  />
                </Stack>
                <Stack
                  className={ClubRegistrationStyles.rightContainerTopStack}
                >
                  <Controller
                    control={control}
                    name="clubState"
                    render={({ field: { onChange, value, ...field } }) => (
                      <SelectInputField
                        list={list}
                        selectedState={
                          value ||
                          (list.length > 0 ? list[0].name : "Select State")
                        }
                        handleChange={(value) => onChange(value)}
                        register={field}
                      />
                    )}
                  />
                  <InputField
                    label="clubGoogleMapLink"
                    placeholder="Paste google map link"
                    register={register("clubGoogleMapLink")}
                    error={errors.clubEmailId?.message as any}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack className={ClubRegistrationStyles.licenseContainer}>
              <Typography variant="h6">Stadium & Training Area</Typography>
              {fields.map((field, index) => (
                <Stack
                  key={field.id}
                  className={ClubRegistrationStyles.RegisteredAddressContainer}
                >
                  <Stack
                    className={ClubRegistrationStyles.rightContainerTopStack}
                  >
                    <InputField
                      placeholder="Address"
                      register={register(`stadiums[${index}].stadiumAddress`)}
                      error={
                        errors.stadiums?.[index]?.stadiumAddress?.message as any
                      }
                    />
                    <Controller
                      control={control}
                      name={`stadiums[${index}].stadiumCity`}
                      render={({ field: { onChange, value, ...field } }) => (
                        <SelectInputField
                          list={list}
                          selectedState={
                            value ||
                            (list.length > 0
                              ? list[0].name
                              : "Select Stadium City")
                          }
                          handleChange={(value) => onChange(value)}
                          register={field}
                        />
                      )}
                    />
                  </Stack>
                  <Stack
                    className={ClubRegistrationStyles.rightContainerTopStack}
                  >
                    <Controller
                      control={control}
                      name={`stadiums[${index}].stadiumState`}
                      render={({ field: { onChange, value, ...field } }) => (
                        <SelectInputField
                          list={list}
                          selectedState={
                            value ||
                            (list.length > 0 ? list[0].name : "Select State")
                          }
                          handleChange={(value) => onChange(value)}
                          register={field}
                        />
                      )}
                    />
                    <InputField
                      label="google map link"
                      placeholder="Enter google map link"
                      register={register(`stadiums[${index}].googleMapLink`)}
                      error={
                        errors.stadiums?.[index]?.googleMapLink?.message as any
                      }
                    />
                  </Stack>
                  {fields.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        remove(index);
                      }}
                    >
                      Remove Stadium
                    </button>
                  )}
                </Stack>
              ))}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  append({
                    stadiumAddress: "",
                    stadiumCity: "",
                    stadiumState: "",
                    googleMapLink: "",
                  });
                }}
              >
                Add More Stadiums
              </button>

              {coachFields.map((field, index) => (
                <Stack
                  className={ClubRegistrationStyles.containerLevelOne}
                  key={field.id}
                >
                  <Box className={ClubRegistrationStyles.leftContainer}>
                    <Controller
                      control={control}
                      name={`coaches.${index}.coachImage` as const}
                      rules={{ required: "Coach image is required" }}
                      render={({ field: { onChange, value, ...field } }) => (
                        <UploadMedia
                          label="Coach Photo"
                          values={value}
                          handleChange={(e) => onChange(e.target.files[0])}
                          multiple={false}
                          fieldData={field}
                        />
                      )}
                    />
                    {errors.coaches && errors.coaches[index] && (
                      <p className={ClubRegistrationStyles.error}>
                        {errors.coaches[index].coachImage?.message}
                      </p>
                    )}
                  </Box>
                  <Box className={ClubRegistrationStyles.rightContainer}>
                    <Stack
                      className={ClubRegistrationStyles.rightContainerTopStack}
                    >
                      <InputField
                        label="Coach Name"
                        placeholder="First Name"
                        register={register(
                          `coaches.${index}.coachFirstName` as const
                        )}
                        error={
                          errors.coaches &&
                          (errors.coaches[index]?.coachFirstName
                            ?.message as any)
                        }
                      />
                      <InputField
                        placeholder="Last Name"
                        register={register(
                          `coaches.${index}.coachLastName` as const
                        )}
                        error={
                          errors.coaches &&
                          (errors.coaches[index]?.coachLastName?.message as any)
                        }
                      />
                    </Stack>
                    <InputField
                      textArea={true}
                      label="About the Coach"
                      placeholder="Write a brief about the coach"
                      register={register(
                        `coaches.${index}.aboutTheCoach` as const
                      )}
                      error={
                        errors.coaches &&
                        (errors.coaches[index]?.aboutTheCoach?.message as any)
                      }
                    />
                  </Box>
                  {coachFields.length > 1 && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeCoach(index);
                      }}
                    >
                      Remove Coach
                    </button>
                  )}
                </Stack>
              ))}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  appendCoach({
                    coachImage: "",
                    coachFirstName: "",
                    coachLastName: "",
                    aboutTheCoach: "",
                  });
                }}
              >
                Add More Coaches
              </button>
              <Box className={ClubRegistrationStyles.leftContainer}>
                <Controller
                  control={control}
                  name="clubMedia"
                  render={({ field: { onChange, value, ...field } }) => (
                    <UploadMedia
                      label="Upload Club Media (Optional)"
                      values={value}
                      handleChange={(e) => onChange(e.target.files)}
                      multiple={true}
                      fieldData={field}
                    />
                  )}
                />
              </Box>
            </Stack>
          </Box>
        )}
        {activeStep === 1 && (
          <Stack className={ClubRegistrationStyles.containerLevelOne}>
            <Typography variant="h4">Optional Section</Typography>
            <Typography variant="h6">Founder Details</Typography>
            <Box className={ClubRegistrationStyles.leftContainer}>
              <Controller
                control={control}
                name="founderImage"
                render={({ field: { onChange, value, ...field } }) => (
                  <UploadMedia
                    label="Founder Photo"
                    values={value}
                    handleChange={(e) => onChange(e.target.files[0])}
                    multiple={false}
                    fieldData={field}
                  />
                )}
              />
            </Box>
            <Box className={ClubRegistrationStyles.rightContainer}>
              <Stack className={ClubRegistrationStyles.rightContainerTopStack}>
                <InputField
                  label="First Name"
                  placeholder="Enter First Name"
                  register={register("founderFirstName")}
                />
                <InputField
                  label="Last Name"
                  placeholder="Enter Last Name"
                  register={register("founderLastName")}
                />
              </Stack>
              <InputField
                textArea={true}
                label="About the Founder"
                placeholder="Write a brief about yourself and a short history of your experiences"
                register={register("aboutTheFounder")}
              />
            </Box>
            <Box>
              <InputField
                textArea={true}
                label="Facilities"
                placeholder="Write a brief about the facilities provided by the club"
                register={register("facilities")}
              />
            </Box>
          </Stack>
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
