import { z } from 'zod'

export const CreateSchema = z.object({
  phoneNumber: z.string().regex(/^[0-9]{9}$/),
  verifyCode: z.string().regex(/^[0-9]{4}$/)
})
