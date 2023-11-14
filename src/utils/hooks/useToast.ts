import { toast } from "react-hot-toast";

export const useToast = () => {
  const success = (message: string) =>
    toast.success(message, {
      duration: 2000,
      position: "top-right",
      style: {
        background: "#4caf50",
        color: "#fff",
      },
      icon: "👏",
    });
  const error = (message: string) =>
    toast.error(message, {
      duration: 4000,
      position: "top-center",
      style: {
        background: "#333",
        color: "#fff",
      },
      icon: "🔑",
    });

  return {
    error,
    success,
  };
};
