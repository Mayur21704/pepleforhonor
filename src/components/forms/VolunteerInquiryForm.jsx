import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FormItem,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";


const ageRanges = ["18–24", "25–34", "35–44", "45–54", "55–64", "65+"];

const helpAreas = [
  "Barbershop or Braiding programs",
  "Sewing for Beginners",
  "Entrepreneurship Launchpad",
  "Cultural Dance & Movement / Cooking",
  "Events (Pitch Night, showcases, gatherings)",
  "Coaching or Mentorship",
  "Admin / behind the scenes",
  "Wherever needed most",
];

const availabilityOptions = [
  "Weekday evenings",
  "Saturday mornings",
  "Saturday afternoons",
  "Occasionally for events",
];

const heardAboutOptions = [
  "Friend or family",
  "Church or community group",
  "Social media",
  "PFH program or event",
  "Other",
];


const schema = z.object({
  fullName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Required"),

  ageRange: z.string().min(1, "Required"),

  helpAreas: z.array(z.string()).min(1, "Select at least one"),

  whyVolunteer: z.string().min(1, "Required"),

  availability: z.array(z.string()).min(1, "Select at least one"),

  heardAbout: z.string().min(1, "Required"),

  extraNotes: z.string().optional(),

  consent: z.boolean().refine((v) => v === true, {
    message: "You must agree before submitting",
  }),
});


export default function VolunteerInquiryForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      helpAreas: [],
      availability: [],
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
          _subject: "New Volunteer Inquiry",
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
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-sm border">
      <h1 className="text-2xl font-semibold text-purple-700 mb-2">
        Volunteer Inquiry Form
      </h1>

      <p className="text-gray-600 mb-6">
        Thank you for your interest in volunteering with People for Honor.
        Please complete this short form and we will follow up with next steps.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        
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
            name="ageRange"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age Range *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    {ageRanges.map((age) => (
                      <div className="flex items-center gap-3" key={age}>
                        <RadioGroupItem value={age} />
                        <FormLabel className="font-normal">{age}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

       
          <div>
            <h2 className="text-lg font-medium mb-2">How You Want to Help *</h2>
            {helpAreas.map((item) => (
              <FormField
                key={item}
                name="helpAreas"
                control={form.control}
                render={({ field }) => {
                  const checked = field.value.includes(item);
                  return (
                    <FormItem className="flex gap-3 items-center">
                      <FormControl>
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(val) => {
                            if (val) field.onChange([...field.value, item]);
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
            <FormMessage />
          </div>

      
          <FormField
            name="whyVolunteer"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why would you like to volunteer? *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us why you want to volunteer..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

       
          <div>
            <h2 className="text-lg font-medium mb-2">When are you available? *</h2>
            {availabilityOptions.map((item) => (
              <FormField
                key={item}
                name="availability"
                control={form.control}
                render={({ field }) => {
                  const checked = field.value.includes(item);
                  return (
                    <FormItem className="flex items-center gap-3">
                      <FormControl>
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(val) => {
                            if (val) field.onChange([...field.value, item]);
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
            <FormMessage />
          </div>

         
          <FormField
            name="heardAbout"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about PFH? *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    {heardAboutOptions.map((opt) => (
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
                <FormLabel>Anything else you'd like us to know?</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Additional notes..."
                    {...field}
                  />
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
                  I agree to receive emails or calls about volunteer opportunities. *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

       
          <Button type="submit" className="w-full bg-purple-600 text-white">
            Submit Volunteer Inquiry
          </Button>
        </form>
      </Form>
    </div>
  );
}
