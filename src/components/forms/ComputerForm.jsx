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

const programList = [
  "Cultural Dance and Movement",
  "Mentorship Program",
  "Workshops or Coaching Sessions",
  "Community Events and Circles",
  "Other",
];

const howWillHelp = [
  "School or education",
  "Learning English or French",
  "Job search and applications",
  "Starting or growing a small business",
  "Online training or certification",
  "Staying connected with family and community",
  "Managing finances and important documents",
  "Other",
];

const ageGroups = [
  "14 to 17",
  "18 to 24",
  "25 to 34",
  "35 to 49",
  "50 and over",
];

const currentSituation = [
  "Student",
  "Working full time",
  "Working part time",
  "Looking for work",
  "Caregiver at home",
  "Other",
];

const schema = z.object({
 
  fullName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Required"),
  contactPreference: z.string().min(1, "Required"),


  programs: z.array(z.string()).min(1, "Required"),
  participationLength: z.string().min(1, "Required"),
  attendanceFrequency: z.string().min(1, "Required"),


  computerAccess: z.string().min(1, "Required"),
  computerChallenges: z.string().optional(),
  internetAccess: z.string().min(1, "Required"),


  whyNeed: z.string().min(5, "Required"),
  howHelp: z.array(z.string()).min(1, "Required"),
  goals: z.string().min(5, "Required"),


  commitmentUse: z.string().min(1, "Required"),
  commitmentCare: z.string().min(1, "Required"),
  feedbackConsent: z.string().min(1, "Required"),


  ageGroup: z.string().optional(),
  situation: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export default function ComputerAccessProgramForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      programs: [],
      howHelp: [],
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
          _subject: "New Computer Access Program Application",
          _template: "table",
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
        Computer Access Program – Application Form
      </h1>
      <p className="text-gray-600 mb-6">
        Please complete this application so we can understand your needs and
        determine eligibility.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          
         
          <h2 className="text-xl font-semibold text-gray-700">
            Contact Information
          </h2>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
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
                  <Input placeholder="555-555-5555" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

       
          <FormField
            control={form.control}
            name="contactPreference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Way to Contact You *</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {["Email", "Phone call", "Text message"].map((option) => (
                      <div className="flex items-center space-x-3" key={option}>
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

     
          <h2 className="text-xl font-semibold text-gray-700">
            Program Participation (Eligibility)
          </h2>

        
          <div>
            <FormLabel>
              Which People for Honor program(s) are you currently
              participating in? *
            </FormLabel>
            {programList.map((item) => (
              <FormField
                key={item}
                control={form.control}
                name="programs"
                render={({ field }) => {
                  const checked = field.value.includes(item);
                  return (
                    <FormItem className="flex items-center gap-3" key={item}>
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
            control={form.control}
            name="participationLength"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How long have you been participating? *</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {[
                      "Less than 3 months",
                      "3 to 6 months",
                      "6 to 12 months",
                      "More than 1 year",
                    ].map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
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
            name="attendanceFrequency"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How often do you attend or participate? *</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {[
                      "Almost every session",
                      "Most sessions",
                      "Once in a while",
                      "I just started",
                    ].map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <h2 className="text-xl font-semibold text-gray-700">
            Your Current Technology Situation
          </h2>

        
          <FormField
            control={form.control}
            name="computerAccess"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Do you currently have access to a computer or laptop you can
                  use regularly? *
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {[
                      "Yes, I have my own",
                      "I share with family or friends",
                      "I only use a computer at the library or school",
                      "No, I do not have regular access",
                    ].map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
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
            name="computerChallenges"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  If you do have access, what challenges do you face? (optional)
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={3}
                    placeholder="Describe difficulties..."
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

       
          <FormField
            control={form.control}
            name="internetAccess"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Do you have access to internet or Wi-Fi? *</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {[
                      "Yes, at home",
                      "Sometimes, using phone data",
                      "No, I do not have internet at home",
                    ].map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

         
          <h2 className="text-xl font-semibold text-gray-700">
            Why You Are Applying
          </h2>

       
          <FormField
            control={form.control}
            name="whyNeed"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why do you need a laptop or Chromebook? *</FormLabel>
                <FormControl>
                  <Textarea rows={3} placeholder="Your answer..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

        
          <div>
            <FormLabel>
              How will having a computer help you? *
            </FormLabel>
            {howWillHelp.map((item) => (
              <FormField
                key={item}
                control={form.control}
                name="howHelp"
                render={({ field }) => {
                  const checked = field.value.includes(item);
                  return (
                    <FormItem className="flex items-center gap-3" key={item}>
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
            control={form.control}
            name="goals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Please share one or two specific goals this computer will help
                  you with. *
                </FormLabel>
                <FormControl>
                  <Textarea rows={3} placeholder="Your goals..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

      
          <h2 className="text-xl font-semibold text-gray-700">Commitment</h2>

        
          <FormField
            control={form.control}
            name="commitmentUse"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Will you use the device mainly for learning, work, and
                  personal development? *
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {["Yes", "No"].map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
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
            name="commitmentCare"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Are you able to take care of the device and keep it in good
                  condition? *
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {[
                      "Yes",
                      "I may need some support or tips",
                    ].map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
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
            name="feedbackConsent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Would you be willing to give feedback or a short story about
                  the laptop in the future? *
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {["Yes", "Maybe", "No"].map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

       
          <h2 className="text-xl font-semibold text-gray-700">
            Optional Questions
          </h2>

        
          <FormField
            control={form.control}
            name="ageGroup"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age Group (optional)</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {ageGroups.map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

        
          <FormField
            control={form.control}
            name="situation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Current Situation (optional)</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {currentSituation.map((option) => (
                      <div
                        className="flex items-center space-x-3"
                        key={option}
                      >
                        <RadioGroupItem value={option} />
                        <FormLabel className="font-normal">{option}</FormLabel>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

         
          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Anything else you would like us to know? (optional)
                </FormLabel>
                <FormControl>
                  <Textarea rows={3} placeholder="Your message..." {...field} />
                </FormControl>
              </FormItem>
            )}
          />

         
          <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
            Submit Application
          </Button>
        </form>
      </Form>
    </div>
  );
}
