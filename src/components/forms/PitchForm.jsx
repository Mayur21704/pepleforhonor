import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
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


const eventOptions = [
  "Pitch Night",
  "Sewing Class Fashion Show",
  "Barbershop and Braiding Showcase",
  "Cultural Cooking and Dance Potluck",
];

const pitchChoices = ["Attend", "Pitch"];

const supportOptions = ["Funding", "Mentorship", "Partnerships", "Other"];

const schema = z.object({
  eventSelection: z.string().min(1, "Select an event"),
  pitchChoice: z.string().optional(),
  fullName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Required"),
  organization: z.string().optional(),
  businessName: z.string().optional(),
  stage: z.string().optional(),
  description: z.string().optional(),
  support: z.array(z.string()).optional(),
  howHeard: z.string().optional(),
});

export default function EventRegistrationForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      eventSelection: "",
      pitchChoice: "",
      support: [],
    },
  });

  const [params] = useSearchParams();
  const mode = params.get("mode");
  const eventName = params.get("event");

  useEffect(() => {
    if (eventName) form.setValue("eventSelection", eventName);
    if (mode === "attend") form.setValue("pitchChoice", "Attend");
    if (mode === "pitch") form.setValue("pitchChoice", "Pitch");
  }, [eventName, mode ,form]);


  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://formsubmit.co/info@peopleforhonor.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "New Event Registration",
            _template: "table",
            _captcha: "false",
          }),
        }
      );

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
        Event Registration
      </h1>
      <p className="text-gray-600 mb-6">
        Please complete this form to register for an upcoming event.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          <FormField
            name="eventSelection"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Event *</FormLabel>
                <FormControl>
                  <select {...field}
                  disabled={!!eventName}
                  className="w-full border p-2 rounded">
                    <option value="">-- Choose an event --</option>
                    {eventOptions.map((e) => (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pitch Night Options */}
          {form.watch("eventSelection") === "Pitch Night" && (
            <FormField
              name="pitchChoice"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Do you want to attend or pitch? *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                    >
                      <div className="flex flex-col gap-2">
                        {pitchChoices.map((choice) => (
                          <div className="flex items-center gap-3" key={choice}>
                            <RadioGroupItem value={choice} />
                            <FormLabel className="font-normal">{choice}</FormLabel>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}


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


          {form.watch("pitchChoice") === "Attend" && (
            <FormField
              name="organization"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization / Business Name (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Organization or business" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          )}


          {form.watch("pitchChoice") === "Pitch" && (
            <>
              <FormField
                name="businessName"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business / Idea Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your business name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="stage"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stage *</FormLabel>
                    <FormControl>
                      <select {...field} className="w-full border p-2 rounded">
                        <option value="">-- Select stage --</option>
                        <option value="Idea only">Idea only</option>
                        <option value="Early stage">Early stage</option>
                        <option value="Already operating">Already operating</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Short Description (3–5 sentences) *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe your business or idea" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                name="support"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Support Needed</FormLabel>
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        {supportOptions.map((s) => (
                          <div className="flex items-center gap-3" key={s}>
                            <Checkbox
                              checked={field.value?.includes(s)}
                              onCheckedChange={(val) => {
                                if (val)
                                  field.onChange([...(field.value || []), s]);
                                else
                                  field.onChange(
                                    (field.value || []).filter((i) => i !== s)
                                  );
                              }}
                            />
                            <FormLabel className="font-normal">{s}</FormLabel>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                  </FormItem>
                )}
              />
            </>
          )}


          <FormField
            name="howHeard"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>How did you hear about this event?</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
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