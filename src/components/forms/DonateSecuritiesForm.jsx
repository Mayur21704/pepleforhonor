import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from '../Footer'

import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const securityTypes = [
  "Individual stocks",
  "Mutual funds",
  "Exchange traded funds",
  "Other",
];

const contactMethods = ["Email", "Phone call"];

const timingOptions = [
  "As soon as possible",
  "Within the next thirty to sixty days",
  "Within the next three to six months",
];

const schema = z.object({
  fullName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Required"),
  contactMethod: z.string().min(1, "Required"),
  securityTypes: z.array(z.string()).min(1, "Select at least one"),
  securityNames: z.string().min(1, "Required"),
  value: z.string().min(1, "Required"),
  institution: z.string().min(1, "Required"),
  timing: z.string().min(1, "Required"),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to continue",
  }),
});

export default function DonateSecuritiesForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      securityTypes: [],
      consent: false,
    },
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formsubmit.co/info@peopleforhonor.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: "New Securities Donation Inquiry",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        navigate("/thank-you");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit the form. Please check your internet connection.");
    }
  };

  return (

    <div>
      <Header />

      <div className="max-w-3xl  mx-auto p-6 pt-28 bg-white rounded-xl shadow-sm border ">

        <h1 className="text-2xl font-semibold text-purple-700 mb-2">
          Donate Securities Inquiry Form
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your interest in donating securities such as stocks or
          mutual funds to People for Honor. Please complete this short form. A
          team member will contact you with next steps and transfer instructions.
        </p>

        <Form {...form}>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <input type="hidden" name="_subject" value="New Securities Donation Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />


            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} name="fullName" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} name="email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number" {...field} name="phone" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Way to Contact You *</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value}>
                      {contactMethods.map((method) => (
                        <div key={method} className="flex items-center space-x-3">
                          <RadioGroupItem value={method} name="contactMethod" />
                          <FormLabel className="font-normal">{method}</FormLabel>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <div>
              <h2 className="font-medium text-lg mb-2">
                Type of Security You Wish to Donate *
              </h2>
              {securityTypes.map((item) => (
                <FormField
                  key={item}
                  control={form.control}
                  name="securityTypes"
                  render={({ field }) => {
                    const checked = field.value.includes(item);
                    return (
                      <FormItem className="flex items-center gap-3">
                        <FormControl>
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(val) => {
                              if (val) field.onChange([...field.value, item]);
                              else field.onChange(field.value.filter((i) => i !== item));
                            }}
                            name="securityTypes"
                          />
                        </FormControl>
                        <FormLabel className="font-normal">{item}</FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </div>


            <FormField
              control={form.control}
              name="securityNames"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name of Security or Securities *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List all securities (e.g., AAPL, VOO, mutual fund names)"
                      {...field}
                      name="securityNames"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="value"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approximate Total Value of Your Gift *</FormLabel>
                  <FormControl>
                    <Input placeholder="$5,000 (approx.)" {...field} name="value" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Financial Institution / Brokerage *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Fidelity, Schwab, Vanguard"
                      {...field}
                      name="institution"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="timing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Timing *</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} value={field.value}>
                      {timingOptions.map((opt) => (
                        <div key={opt} className="flex items-center space-x-3">
                          <RadioGroupItem value={opt} name="timing" />
                          <FormLabel className="font-normal">{opt}</FormLabel>
                        </div>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(val) => field.onChange(val)}
                      name="consent"
                    />
                  </FormControl>
                  <FormLabel className="font-normal">
                    I agree that People for Honor may contact me about this donation. *
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />


            <Button type="submit" className="w-full">
              Submit Inquiry
            </Button>
          </form>
        </Form>
      </div>
      <Footer />
    </div>

  );
}