import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import type { ContactFormValues } from "@/schemas/contact.schema";

const FORM_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;

export function useSubmitContact() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!res.ok) {
        throw new Error("Failed to submit inquiry");
      }

      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Transmission Received",
        description: "Our engineering team will respond within 24 hours.",
        className: "border-primary font-mono-tech rounded-none"
      });
    },
    onError: (error) => {
      toast({
        title: "Transmission Failed",
        description: error.message,
        variant: "destructive",
        className: "rounded-none font-mono-tech"
      });
    }
  });
}
