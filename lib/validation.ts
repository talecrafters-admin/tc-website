import { z } from 'zod'

export const contactFormSchema = z.object({
  adSpend: z.string().min(1, 'Please select your ad spend'),
  challenges: z.array(z.string()).min(1, 'Please select at least one challenge'),
  platforms: z.string().min(1, 'Please select where you run ads'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  website: z.string().url('Please enter a valid website URL').optional().or(z.literal('')),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
