import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate, useSearchParams } from "react-router-dom";


import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
import { Head } from "react-day-picker";

// --- Data Configuration ---

const EVENTS = [
    {
        id: "pitch-night",
        title: "Pitch Night: Entrepreneurship Launchpad",
        description:
            "An evening where emerging entrepreneurs pitch their ideas live. Participants include graduates of our Entrepreneurship Launchpad program and community members who want to join the next cohort. We invite funders, community partners, and angel investors to listen, offer feedback, and explore possible support.",
        hasDualOption: true,
    },
    {
        id: "sewing-show",
        title: "Sewing Class Fashion Show",
        description:
            "At the end of our six week sewing class, participants present a community fashion show where they model and display what they have created. This event highlights their skills, creativity, and small businesses, and gives them a platform to promote their services.",
        hasDualOption: false,
    },
    {
        id: "barbershop-showcase",
        title: "Barbershop and Braiding Showcase",
        description:
            "This celebration features participants from our Barbershop and Braiding program. They will showcase new styles, demonstrate techniques, and share how they are turning their skills into business opportunities.",
        hasDualOption: false,
    },
    {
        id: "culture-potluck",
        title: "Cultural Cooking and Dance Potluck",
        description:
            "Once a month, alongside our Cultural Dance and Movement program, we host a community potluck. Participants bring dishes from their culture, with printed ingredients and descriptions so everyone can learn, ask questions, and try something new. It is an evening of food, music, movement, and connection.",
        subline: "Just bring your curiosity and appetite.",
        hasDualOption: false,
    },
];

const STAGES = ["Idea only", "Early stage", "Already operating"];
const SUPPORT_TYPES = ["Funding", "Mentorship", "Partnerships", "Other"];
const HEARD_ABOUT_OPTIONS = ["Friend or family", "Church or community group", "Social media", "PFH program or event", "Other"];


const schema = z
    .object({
        selectedEvent: z.string().min(1, "Please select an event above."),
        participationType: z.enum(["attend", "pitch"]).default("attend"),


        fullName: z.string().min(1, "Full Name is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().min(1, "Phone number is required"),
        heardAbout: z.string().min(1, "Please select an option"),


        orgName: z.string().optional(),


        businessName: z.string().optional(),
        businessStage: z.string().optional(),
        businessDescription: z.string().optional(),
        supportNeeded: z.array(z.string()).optional(),
    })
    .superRefine((data, ctx) => {

        if (data.participationType === "pitch" && data.selectedEvent.includes("Pitch Night")) {
            if (!data.businessName) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["businessName"], message: "Business Name is required" });
            if (!data.businessStage) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["businessStage"], message: "Stage is required" });
            if (!data.businessDescription) ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["businessDescription"], message: "Description is required" });
        }
    });


export default function UpcomingEventsPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const formRef = useRef(null);
    const [activeEventTitle, setActiveEventTitle] = useState("");

    const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            selectedEvent: "",
            participationType: "attend",
            supportNeeded: [],
            orgName: "",
            businessName: "",
            businessDescription: "",
        },
    });

    const watchEvent = form.watch("selectedEvent");
    const watchType = form.watch("participationType");

    useEffect(() => {
        const eventParam = searchParams.get("event"); // "pitch-night"

        const typeParam = searchParams.get("type") || searchParams.get("amp;type");

        if (eventParam) {
            const foundEvent = EVENTS.find(e => e.id === eventParam);
            if (foundEvent) {
                handleRegisterClick(foundEvent.title, typeParam === "pitch" ? "pitch" : "attend");
            }
        }
    }, [searchParams]);
    const handleRegisterClick = (eventTitle, type = "attend") => {
        setActiveEventTitle(eventTitle);
        form.setValue("selectedEvent", eventTitle);
        form.setValue("participationType", type);
        form.clearErrors();

        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const onSubmit = async (data) => {
        try {
            const subject = data.participationType === "pitch"
                ? `Pitch Application: ${data.fullName}`
                : `Registration: ${data.selectedEvent}`;

            const response = await fetch("https://formsubmit.co/info@peopleforhonor.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({ ...data, _subject: subject, _template: "table", _captcha: "false" }),
            });

            if (response.ok) navigate("/thank-you");
            else alert("Something went wrong. Please try again.");
        } catch (error) {
            console.error(error);
            alert("Failed to submit. Check connection.");
        }
    };

    return (

        <div>
            <Header />
            <div className="w-full bg-gray-50 min-h-screen pb-20 pt-28">

                <div className="bg-purple-700 text-white py-16 text-center px-4">
                    <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
                    <p className="max-w-2xl mx-auto text-purple-100 text-lg">
                        Join us to celebrate, learn, and grow with the community.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">


                    <div className="grid md:grid-cols-2 gap-8">
                        {EVENTS.map((event) => (
                            <div key={event.id} className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden hover:shadow-md transition-shadow">
                                <div className="p-8 flex-1 flex flex-col">
                                    <h3 className="text-2xl font-bold text-purple-800 mb-4">{event.title}</h3>
                                    <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{event.description}</p>

                                    {event.subline && (
                                        <p className="text-purple-600 italic text-sm mb-4 font-medium">{event.subline}</p>
                                    )}

                                    <div className="mt-auto pt-4 flex flex-col sm:flex-row gap-4">
                                        {event.hasDualOption ? (
                                            <>
                                                <Button variant="outline" className="flex-1 border-purple-600 text-purple-600 hover:bg-purple-50"
                                                    onClick={() => handleRegisterClick(event.title, "attend")}>
                                                    Register to Attend
                                                </Button>
                                                <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white"
                                                    onClick={() => handleRegisterClick(event.title, "pitch")}>
                                                    Register to Pitch
                                                </Button>
                                            </>
                                        ) : (
                                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                                                onClick={() => handleRegisterClick(event.title, "attend")}>
                                                Register to Attend
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div ref={formRef} className="scroll-mt-10">
                        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg border border-purple-100">
                            <div className="mb-8 border-b pb-4">
                                <h2 className="text-2xl font-bold text-gray-900">Event Registration</h2>
                                {activeEventTitle ? (
                                    <p className="text-purple-700 font-medium mt-2">Registering for: {activeEventTitle}</p>
                                ) : (
                                    <p className="text-gray-500 mt-2">Select an event above to begin.</p>
                                )}
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">


                                    {watchEvent && watchEvent.includes("Pitch Night") && (
                                        <div className="bg-purple-50 p-6 rounded-lg mb-6 border border-purple-100">
                                            <FormField
                                                name="participationType"
                                                control={form.control}
                                                render={({ field }) => (
                                                    <FormItem className="space-y-3">
                                                        <FormLabel className="text-base font-semibold text-purple-900">I want to:</FormLabel>
                                                        <FormControl>
                                                            <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col space-y-2">
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl><RadioGroupItem value="attend" /></FormControl>
                                                                    <FormLabel className="font-normal text-gray-800 cursor-pointer">Attend Pitch Night as a guest</FormLabel>
                                                                </FormItem>
                                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                                    <FormControl><RadioGroupItem value="pitch" /></FormControl>
                                                                    <FormLabel className="font-normal text-gray-800 cursor-pointer">Pitch my business at Pitch Night</FormLabel>
                                                                </FormItem>
                                                            </RadioGroup>
                                                        </FormControl>
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    )}


                                    <div className="grid md:grid-cols-2 gap-4">
                                        <FormField name="fullName" control={form.control} render={({ field }) => (
                                            <FormItem><FormLabel>Full Name *</FormLabel><FormControl><Input placeholder="Your full name" {...field} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField name="email" control={form.control} render={({ field }) => (
                                            <FormItem><FormLabel>Email *</FormLabel><FormControl><Input placeholder="email@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>
                                    <FormField name="phone" control={form.control} render={({ field }) => (
                                        <FormItem><FormLabel>Phone Number *</FormLabel><FormControl><Input placeholder="(555) 555-5555" {...field} /></FormControl><FormMessage /></FormItem>
                                    )} />


                                    {watchEvent && watchType === "attend" && (
                                        <FormField name="orgName" control={form.control} render={({ field }) => (
                                            <FormItem><FormLabel>Organization or Business Name (optional)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    )}


                                    {watchEvent && watchType === "pitch" && (
                                        <div className="space-y-5 border-t border-b py-6 my-4">
                                            <h3 className="font-semibold text-lg text-purple-800">Pitch Details</h3>

                                            <FormField name="businessName" control={form.control} render={({ field }) => (
                                                <FormItem><FormLabel>Business or Idea Name *</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                            )} />

                                            <FormField name="businessStage" control={form.control} render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>What stage are you at? *</FormLabel>
                                                    <FormControl>
                                                        <RadioGroup onValueChange={field.onChange} value={field.value} className="flex flex-col gap-2">
                                                            {STAGES.map(stage => (
                                                                <FormItem key={stage} className="flex items-center space-x-2 space-y-0">
                                                                    <FormControl><RadioGroupItem value={stage} /></FormControl><FormLabel className="font-normal">{stage}</FormLabel>
                                                                </FormItem>
                                                            ))}
                                                        </RadioGroup>
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )} />

                                            <FormField name="businessDescription" control={form.control} render={({ field }) => (
                                                <FormItem><FormLabel>Short description (3–5 sentences) *</FormLabel><FormControl><Textarea className="min-h-[100px]" {...field} /></FormControl><FormMessage /></FormItem>
                                            )} />

                                            <div className="space-y-3">
                                                <FormLabel>What kind of support are you looking for?</FormLabel>
                                                <div className="grid grid-cols-2 gap-2">
                                                    {SUPPORT_TYPES.map(item => (
                                                        <FormField key={item} name="supportNeeded" control={form.control} render={({ field }) => (
                                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                                <FormControl>
                                                                    <Checkbox checked={field.value?.includes(item)} onCheckedChange={(checked) => checked ? field.onChange([...(field.value || []), item]) : field.onChange((field.value || []).filter(v => v !== item))} />
                                                                </FormControl>
                                                                <FormLabel className="font-normal text-sm cursor-pointer">{item}</FormLabel>
                                                            </FormItem>
                                                        )} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <FormField name="heardAbout" control={form.control} render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>How did you hear about this event? *</FormLabel>
                                            <FormControl>
                                                <RadioGroup onValueChange={field.onChange} value={field.value} className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                    {HEARD_ABOUT_OPTIONS.map(opt => (
                                                        <FormItem key={opt} className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value={opt} /></FormControl><FormLabel className="font-normal">{opt}</FormLabel></FormItem>
                                                    ))}
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-6" disabled={!activeEventTitle}>
                                        {activeEventTitle ? "Complete Registration" : "Select an Event First"}
                                    </Button>
                                </form>
                            </Form>
                        </div>

                        <div className="text-center text-gray-500 mt-12 pb-8">
                            <p>Don't forget to join our monthly <strong>Community Gathering</strong>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}