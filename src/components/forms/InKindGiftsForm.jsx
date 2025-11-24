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


const contactMethods = ["Email", "Phone call", "Text / WhatsApp"];

const giftTypes = [
  "New items (products, supplies, equipment)",
  "Gently used items (in good, working condition)",
  "Food or refreshments",
  "Space / venue use",
  "Professional services (e.g. photography, coaching, design, teaching)",
  "Gift cards or vouchers",
  "Other",
];

const pfhPrograms = [
  "Computer Access Program",
  "Barbershop / Braiding programs",
  "Sewing program",
  "Entrepreneurship Launchpad",
  "Cultural Dance & Movement / Cooking",
  "End-of-Year or special event",
  "General use – wherever needed most",
];

const conditionOptions = ["New", "Like new", "Gently used", "Other"];

const deliveryOptions = [
  "I can drop it off",
  "I would need pickup if possible",
  "This is a service / venue, we will coordinate details",
];

const recognitionOptions = [
  "List my individual name",
  "List my business/organization name",
  "Anonymous – please do not list my name publicly",
];


const schema = z.object({
  fullName: z.string().min(1, "Required"),
  organization: z.string().optional(),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Required"),
  contactMethod: z.string().min(1, "Required"),

  giftTypes: z.array(z.string()).min(1, "Select at least one"),

  description: z.string().min(1, "Required"),
  quantity: z.string().min(1, "Required"),
  condition: z.string().min(1, "Required"),

  pfhPrograms: z.array(z.string()).optional(),

  availability: z.string().min(1, "Required"),
  specificDate: z.string().optional(),

  deliveryMethod: z.string().min(1, "Required"),
  logistics: z.string().optional(),

  recognition: z.string().min(1, "Required"),
  extraNotes: z.string().optional(),

  consent: z.boolean().refine((v) => v === true, {
    message: "You must agree to continue",
  }),
});



export default function InKindGiftsForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      giftTypes: [],
      pfhPrograms: [],
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
          _subject: "New In-Kind Gift Inquiry",
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
        In-Kind Gifts Inquiry Form
      </h1>
      <p className="text-gray-600 mb-6">
        Thank you for your interest in supporting People for Honor with an
        in-kind gift. Please complete this short form so we can understand your
        donation and follow up with next steps.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
           
          <form
          action="https://formsubmit.co/fotiyij750@okcdeals.com"
          method="POST"
          className="space-y-8"
        ></form>
          <FormField
            name="fullName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         
          <FormField
            name="organization"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization / Business (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your organization" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

     
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input placeholder="email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <FormField
            name="phone"
            control={form.control}
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
            name="contactMethod"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Best Way to Contact You *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    {contactMethods.map((method) => (
                      <div className="flex items-center gap-3" key={method}>
                        <RadioGroupItem value={method} />
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
            <h2 className="text-lg font-medium mb-2">
              Type of In-Kind Gift *
            </h2>
            {giftTypes.map((item) => (
              <FormField
                key={item}
                name="giftTypes"
                control={form.control}
                render={({ field }) => {
                  const checked = field.value.includes(item);
                  return (
                    <FormItem className="flex gap-3 items-center">
                      <FormControl>
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(val) => {
                            if (val) {
                              field.onChange([...field.value, item]);
                            } else {
                              field.onChange(
                                field.value.filter((i) => i !== item)
                              );
                            }
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
            name="description"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please Describe the Gift *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your donation..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

       
          <FormField
            name="quantity"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Quantity / Approximate Amount *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 20 items, 3 boxes, etc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

      
          <FormField
            name="condition"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Condition *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    {conditionOptions.map((c) => (
                      <div className="flex items-center gap-3" key={c}>
                        <RadioGroupItem value={c} />
                        <FormLabel className="font-normal">{c}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <div>
            <h2 className="text-lg font-medium mb-2">
              Is this gift connected to a specific program or event?
            </h2>
            {pfhPrograms.map((item) => (
              <FormField
                key={item}
                name="pfhPrograms"
                control={form.control}
                render={({ field }) => {
                  const checked = field.value.includes(item);
                  return (
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(val) => {
                            if (val)
                              field.onChange([...field.value, item]);
                            else
                              field.onChange(
                                field.value.filter((i) => i !== item)
                              );
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">{item}</FormLabel>
                    </FormItem>
                  );
                }}
              />
            ))}
          </div>

         
          <FormField
            name="availability"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>When is your gift available? *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Immediately" />
                      <FormLabel className="font-normal">Immediately</FormLabel>
                    </div>

                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Within the next 2–4 weeks" />
                      <FormLabel className="font-normal">
                        Within the next 2–4 weeks
                      </FormLabel>
                    </div>

                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Specific date" />
                      <FormLabel className="font-normal">On a specific date</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
          <FormField
            name="specificDate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specific Date (if applicable)</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

         
          <FormField
            name="deliveryMethod"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>How would you like to deliver your gift? *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    {deliveryOptions.map((opt) => (
                      <div className="flex items-center gap-3" key={opt}>
                        <RadioGroupItem value={opt} />
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
            name="logistics"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup / Drop-Off Details (optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Share any delivery instructions..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          
          <FormField
            name="recognition"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>How would you like to be recognized? *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    {recognitionOptions.map((opt) => (
                      <div className="flex items-center gap-3" key={opt}>
                        <RadioGroupItem value={opt} />
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
            name="extraNotes"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Anything Else You Would Like Us to Know?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Additional notes..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

        
          <FormField
            name="consent"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal">
                  I agree that People for Honor may contact me about this in-kind gift 
                  and related opportunities. *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

      
          <Button type="submit" className="w-full bg-purple-600 text-white">
            Submit In-Kind Gift Inquiry
          </Button>
        </form>
      </Form>
    </div>
       <Footer />
     </div>
  );
}
