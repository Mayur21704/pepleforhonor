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
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const partnershipTypes = [
  "Financial sponsorship",
  "In-kind gifts",
  "Employee volunteering",
  "Program collaboration or co-delivery",
  "Employment or training pathways",
  "Other",
];

const pfhAreas = [
  "Computer Access Program",
  "Barbershop and Braiding Programs",
  "Sewing for Beginners",
  "Entrepreneurship Launchpad",
  "Cultural Dance, Movement and Cooking",
  "General support wherever needed most",
];

const schema = z.object({
  contactName: z.string().min(1, "Required"),
  orgName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Required"),
  website: z.string().optional(),
  partnershipInterest: z.array(z.string()).min(1, "Select at least one"),
  pfhSupport: z.array(z.string()).min(1, "Select at least one"),
  description: z.string().min(5, "Required"),
  timing: z.string().min(1, "Required"),
  consent: z.boolean().refine(val => val === true, {
    message: "You must agree to continue"
  }),
});

export default function PartnerWithPFHForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      partnershipInterest: [],
      pfhSupport: [],
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
          _subject: "New Partnership Inquiry",
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
           <div className="max-w-3xl mx-auto p-6 pt-28 bg-white rounded-xl shadow-sm border">
      <h1 className="text-2xl font-semibold text-purple-700 mb-2">
        Partner with People for Honor
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your interest in partnering with People for Honor.
        Please complete this short form and a member of our team will follow up.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

         
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         
          <FormField
            control={form.control}
            name="orgName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization or Business Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your business/organization" {...field} />
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
                  <Input placeholder="your@email.com" {...field} />
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
                  <Input placeholder="Phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website or Social Media (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="https://yourwebsite.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <div>
            <h2 className="font-medium text-lg mb-2">Partnership Interest *</h2>
            {partnershipTypes.map((item) => (
              <FormField
                key={item}
                control={form.control}
                name="partnershipInterest"
                render={({ field }) => {
                  const checked = field.value.includes(item);
                  return (
                    <FormItem key={item} className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(val) => {
                            if (val) field.onChange([...field.value, item]);
                            else field.onChange(field.value.filter((i) => i !== item));
                          }}
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

       
          <div>
            <h2 className="font-medium text-lg mb-2">Which PFH areas are you most interested in supporting? *</h2>
            {pfhAreas.map((item) => (
              <FormField
                key={item}
                control={form.control}
                name="pfhSupport"
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
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Briefly describe your partnership idea *</FormLabel>
                <FormControl>
                  <Textarea rows={4} placeholder="Your partnership idea..." {...field} />
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
                <FormLabel>When are you hoping to start this partnership? *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value}>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="ASAP" />
                      <FormLabel className="font-normal">As soon as possible</FormLabel>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="3months" />
                      <FormLabel className="font-normal">Within the next three months</FormLabel>
                    </div>
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="6to12" />
                      <FormLabel className="font-normal">Within the next six to twelve months</FormLabel>
                    </div>
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
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="font-normal">
                  I agree that People for Honor may contact me about partnership opportunities. *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
            Submit
          </Button>
        </form>
      </Form>
    </div>
       <Footer />
   </div>
  );
}