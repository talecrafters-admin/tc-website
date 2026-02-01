'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion, AnimatePresence } from 'framer-motion'
import { contactFormSchema, type ContactFormData } from '@/lib/validation'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'

const steps = [
  { id: 1, title: 'Ad Spend' },
  { id: 2, title: 'Challenges' },
  { id: 3, title: 'Platforms' },
  { id: 4, title: 'Contact Info' },
  { id: 5, title: 'Done' },
]

const adSpendOptions = [
  { value: 'under-50k', label: '<₹50k' },
  { value: '50k-2l', label: '₹50k-₹2L' },
  { value: '2l-10l', label: '₹2L-₹10L' },
  { value: 'over-10l', label: '>₹10L' },
]

const challengeOptions = [
  { value: 'low-roas', label: 'Low ROAS' },
  { value: 'poor-creatives', label: 'Poor creatives' },
  { value: 'scaling', label: 'Scaling issues' },
  { value: 'attribution', label: 'Attribution mess' },
]

const platformOptions = [
  { value: 'meta-only', label: 'Meta only' },
  { value: 'google-only', label: 'Google only' },
  { value: 'both', label: 'Both' },
  { value: 'other', label: 'Other platforms' },
]

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  })

  const formData = watch()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        setIsSuccess(true)
        setCurrentStep(5)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const progress = (currentStep / 5) * 100

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center ${
                currentStep >= step.id ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full border-4 border-black flex items-center justify-center font-bold mb-2 ${
                  currentStep > step.id
                    ? 'bg-accent1'
                    : currentStep === step.id
                    ? 'bg-secondary'
                    : 'bg-white'
                }`}
              >
                {currentStep > step.id ? (
                  <Check className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              <span className="text-xs font-semibold text-center hidden sm:block">
                {step.title}
              </span>
            </div>
          ))}
        </div>
        <div className="h-3 bg-gray-200 border-4 border-black rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Form Steps */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white border-4 border-black shadow-brutal rounded-2xl p-8"
            >
              <h3 className="font-heading text-3xl font-bold mb-4">
                What's your current monthly ad spend?
              </h3>
              <p className="text-black/70 mb-6">
                This helps us understand your scale
              </p>
              <div className="grid grid-cols-2 gap-4">
                {adSpendOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setValue('adSpend', option.value)
                      nextStep()
                    }}
                    className={`neo-button p-6 text-lg ${
                      formData.adSpend === option.value
                        ? 'bg-secondary'
                        : 'bg-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white border-4 border-black shadow-brutal rounded-2xl p-8"
            >
              <h3 className="font-heading text-3xl font-bold mb-4">
                What's your biggest challenge?
              </h3>
              <p className="text-black/70 mb-6">
                Select all that apply
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {challengeOptions.map((option) => {
                  const isSelected = formData.challenges?.includes(option.value)
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => {
                        const current = formData.challenges || []
                        const updated = isSelected
                          ? current.filter((v) => v !== option.value)
                          : [...current, option.value]
                        setValue('challenges', updated)
                      }}
                      className={`neo-button p-6 text-lg ${
                        isSelected ? 'bg-accent1' : 'bg-white'
                      }`}
                    >
                      {option.label}
                      {isSelected && <Check className="w-5 h-5 ml-2 inline" />}
                    </button>
                  )
                })}
              </div>
              <div className="flex gap-4">
                <Button type="button" onClick={prevStep} variant="secondary" className="flex-1">
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  variant="primary"
                  className="flex-1"
                  disabled={!formData.challenges?.length}
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white border-4 border-black shadow-brutal rounded-2xl p-8"
            >
              <h3 className="font-heading text-3xl font-bold mb-4">
                Where are you running ads?
              </h3>
              <p className="text-black/70 mb-6">
                Select your primary platform
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {platformOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setValue('platforms', option.value)
                    }}
                    className={`neo-button p-6 text-lg ${
                      formData.platforms === option.value
                        ? 'bg-accent2 text-white'
                        : 'bg-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-4">
                <Button type="button" onClick={prevStep} variant="secondary" className="flex-1">
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={nextStep}
                  variant="primary"
                  className="flex-1"
                  disabled={!formData.platforms}
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white border-4 border-black shadow-brutal rounded-2xl p-8"
            >
              <h3 className="font-heading text-3xl font-bold mb-4">
                Let's get in touch
              </h3>
              <p className="text-black/70 mb-6">
                We'll reach out within 24 hours
              </p>
              <div className="space-y-4 mb-6">
                <Input
                  {...register('name')}
                  placeholder="Your Name"
                  error={errors.name?.message}
                />
                <Input
                  {...register('email')}
                  type="email"
                  placeholder="Email Address"
                  error={errors.email?.message}
                />
                <Input
                  {...register('phone')}
                  type="tel"
                  placeholder="Phone Number"
                  error={errors.phone?.message}
                />
                <Input
                  {...register('website')}
                  type="url"
                  placeholder="Website (Optional)"
                  error={errors.website?.message}
                />
              </div>
              <div className="flex gap-4">
                <Button type="button" onClick={prevStep} variant="secondary" className="flex-1">
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </div>
            </motion.div>
          )}

          {currentStep === 5 && isSuccess && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-accent1 border-4 border-black shadow-brutal rounded-2xl p-8 text-center"
            >
              <div className="w-20 h-20 bg-secondary border-4 border-black rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-12 h-12" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4">
                You're All Set!
              </h3>
              <p className="text-xl mb-2">
                We'll review your information and reach out within 24 hours.
              </p>
              <p className="text-lg mb-6">
                Check your email for confirmation.
              </p>
              <Button variant="primary" type="button" onClick={() => window.location.href = '/'}>
                Back to Home
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  )
}
