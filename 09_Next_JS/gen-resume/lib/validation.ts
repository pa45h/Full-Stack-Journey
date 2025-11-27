import { email, z } from "zod";

export const optionalString = z.string().trim().optional().or(z.literal(""));

export const generalInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});
export type GeneralInfoValues = z.infer<typeof generalInfoSchema>;

export const personalInfoSchema = z.object({
  photo: z
    .custom<File | undefined>()
    .refine((file) => {
      if (
        (!file || (file instanceof File && file.type.startsWith("image/")),
        "Must be an image file")
      )
        return true;
    })
    .refine((file) => {
      if (
        (!file || (file instanceof File && file.size <= 5 * 1024 * 1024),
        "Image size must be less than 5MB")
      )
        return true;
    }),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
});
export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;
