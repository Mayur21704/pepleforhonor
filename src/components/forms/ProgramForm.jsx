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

const programOptions = [
  "Barbershop Training – 6 weeks",
  "Sewing for Beginners – 6 weeks",
  "Entrepreneurship Launchpad – 6–8 weeks",
  "Cultural Dance & Movement – Bi-weekly",
  "Coaching Program",
  "Mentorship (as a mentee)",
  "Adult Circle",
];

const ageRanges = [
  "16–17",
  "18–24",
  "25–34",
  "35–44",
  "45–54",
  "55–64",
  "65+",
];

const referralSources = [
  "Friend or family",
  "Church or community group",
  "Social media",
  "Community event",
  "Other",
];

const contactMethods = ["Email", "Phone call", "Text/WhatsApp"];

const schema = z.object({
  programSelection: z.array(z.string()).min(1, "Select at least one program"),

  participatedBefore: z.string().min(1, "Required"),
  previousProgram: z.string().optional(),

  fullName: z.string().min(1, "Required"),
  pronouns: z.string().optional(),
  ageRange: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Required"),
  contactMethod: z.string().min(1, "Required"),
  emergencyContact: z.string().optional(),

  attendanceBarriers: z.string().optional(),
  referralSource: z.string().min(1, "Required"),

  consentContact: z
    .boolean()
    .refine((v) => v === true, { message: "Required" }),

  photoPermission: z.string().optional(),

  participantAgreement: z
    .boolean()
    .refine((v) => v === true, { message: "Required" }),
});

export default function ProgramRegistrationForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      programSelection: [],
      consentContact: false,
      participantAgreement: false,
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
          _subject: "New Program Registration",
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
        Program Registration Form
      </h1>
      <p className="text-gray-600 mb-6">
        Please complete this form to register for a People for Honor program.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
          <div>
            <h2 className="text-lg font-medium mb-2">Which PFH program are you registering for? *</h2>
            {programOptions.map((item) => (
              <FormField
                key={item}
                name="programSelection"
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
            name="participatedBefore"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Have you participated in a PFH program before? *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Yes" />
                      <FormLabel className="font-normal">Yes</FormLabel>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" />
                      <FormLabel className="font-normal">No</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         
          <FormField
            name="previousProgram"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>If yes, which one?</FormLabel>
                <FormControl>
                  <Input placeholder="Program name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

        
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
            name="pronouns"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pronouns (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. she/her, he/him, they/them" {...field} />
                </FormControl>
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
                    {ageRanges.map((a) => (
                      <div className="flex items-center gap-3" key={a}>
                        <RadioGroupItem value={a} />
                        <FormLabel className="font-normal">{a}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
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
            name="contactMethod"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Best Way to Contact You *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    {contactMethods.map((m) => (
                      <div className="flex items-center gap-3" key={m}>
                        <RadioGroupItem value={m} />
                        <FormLabel className="font-normal">{m}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="emergencyContact"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Contact (Name & Phone)</FormLabel>
                <FormControl>
                  <Textarea placeholder="Optional" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          {/* SUPPORT & BARRIERS */}
          <FormField
            name="attendanceBarriers"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Is there anything that might make it hard to attend?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Share details..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="referralSource"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about this program? *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    {referralSources.map((r) => (
                      <div className="flex items-center gap-3" key={r}>
                        <RadioGroupItem value={r} />
                        <FormLabel className="font-normal">{r}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* CONSENTS */}
          <FormField
            name="consentContact"
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
                  I agree to receive emails or calls about my registration and program updates. *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="photoPermission"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo & Video Consent</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} value={field.value}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="Yes" />
                      <FormLabel className="font-normal">I give permission</FormLabel>
                    </div>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="No" />
                      <FormLabel className="font-normal">I do not give permission</FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="participantAgreement"
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
                  I understand that program spaces are limited and I will do my best to attend regularly. *
                </FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-purple-600 text-white">
            Submit Registration
          </Button>
        </form>
      </Form>
    </div>
  );
}