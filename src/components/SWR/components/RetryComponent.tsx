import APIError from "@/components/Error/APIError";
import { useFetchWithRetry } from "../hooks/useRetry";
import Loading from "@/components/Loaders/Loading";
import Custom404 from "@/components/Error/Custom404";

export const RetryComponent = () => {
    const { data, error, isValidating } = useFetchWithRetry('/posts/999');

        if (error) return  <APIError error={error.message || "Error loading data. Retried 3 times."} />;;
        if (isValidating) return <Loading />;
        if (!data) return <Custom404 />;
        
    
  
    
  
    return <div>{data.title}</div>;
  };