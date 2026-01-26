import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

import {
  contactFormSchema,
  type ContactFormValues,
} from "@shared/contact.schema";
import { useSubmitContact } from "@/hooks/use-contact";

export default function Contact() {
  const submitMutation = useSubmitContact();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitMutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="pt-28 pb-28 min-h-screen bg-background relative overflow-hidden">
      {/* Subtle industrial accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <SectionHeader
          number="04"
          title="Contact"
          subtitle="Serious engineering begins with clear communication."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-16">
          {/* Left: Context + Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6 max-w-md">
              <h3 className="text-xl font-bold uppercase tracking-wider text-white">
                Start a Technical Conversation
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you’re exploring feasibility, reverse engineering an
                existing component, or preparing for manufacturing — provide as
                much context as you can. Our engineers review every inquiry.
              </p>
            </div>

            <div className="bg-card border border-white/10 p-8 space-y-8">
              <Info icon={<MapPin className="w-5 h-5" />} title="Location">
                231/2, Ground Floor, 2nd Cross, Vidhana Soudha Layout,
                Papareddypalya, D-Group Layout, 2nd Stage, Naagarabhaavi,
                Bengaluru, Karnataka 560072
              </Info>

              <Info icon={<Phone className="w-5 h-5" />} title="Phone">
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </Info>

              <Info
                icon={<MessageCircle className="w-5 h-5 text-current" />}
                title="WhatsApp"
              >
                <a
                  href="https://wa.me/919876543210?text=Hello%20PROTOREV%20team,%20I%20have%20an%20engineering%20requirement."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors font-medium"
                >
                  Chat on WhatsApp (Fastest)
                </a>
              </Info>

              <Info icon={<Mail className="w-5 h-5" />} title="Email">
                <a
                  href="mailto:projects@protorev.com"
                  className="hover:text-white transition-colors"
                >
                  projects@protorev.com
                </a>
              </Info>
            </div>

            {/* Map */}
            <div className="bg-card border border-white/10 overflow-hidden">
              <div className="h-64 w-full grayscale contrast-125 brightness-75">
                <iframe
                  title="Office Location Map"
                  src="https://www.google.com/maps?q=232,2nd+Cross,Vidhana+Soudha+Layout,Papareddypalya,D-Group+Layout,2nd+Stage,Naagarabhaavi,Bengaluru,Karnataka+560072&z=19&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="p-4 border-t border-white/10">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Registered Office Location
                </p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card border border-white/10 p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl font-bold text-white uppercase mb-2">
              Project Inquiry
            </h3>
            <p className="text-sm text-muted-foreground mb-8">
              Share your requirements. Attachments and NDAs can be handled after
              first contact.
            </p>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <ContactField
                  name="name"
                  label="Your Name"
                  placeholder="John Doe"
                />
                <ContactField
                  name="email"
                  label="Work Email"
                  placeholder="john@company.com"
                />
                <ContactField
                  name="company"
                  label="Company / Organization"
                  placeholder="Acme Industries"
                />
                <ContactField
                  name="message"
                  label="Project Description"
                  placeholder="Briefly describe the component, constraints, and timeline…"
                  textarea
                />

                <Button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full rounded-none h-14 uppercase tracking-widest"
                >
                  {submitMutation.isPending ? (
                    <span className="flex gap-2 items-center">
                      <Loader2 className="animate-spin w-4 h-4" />
                      Sending…
                    </span>
                  ) : (
                    "Submit Inquiry"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  Typical response time: within 24 hours · NDAs available on
                  request
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Small helpers */
function Info({ icon, title, children }: any) {
  return (
    <div className="flex items-start space-x-6">
      <div className="text-primary mt-1">{icon}</div>
      <div>
        <h4 className="font-bold uppercase tracking-wider mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm">{children}</p>
      </div>
    </div>
  );
}

function ContactField({ name, label, placeholder, textarea }: any) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-xs uppercase tracking-widest text-muted-foreground">
            {label}
          </FormLabel>
          <FormControl>
            {textarea ? (
              <Textarea
                {...field}
                placeholder={placeholder}
                className="min-h-[150px]"
              />
            ) : (
              <Input {...field} placeholder={placeholder} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
