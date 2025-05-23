import { useRouter } from "next/router";
import MainLayout from "../../Layout/MainLayout";
import { useEffect } from "react";

// This is a placeholder file to prevent 404 errors
// The actual component is in components/Services/ServiceList.jsx
const ServiceListPage = () => {
  const router = useRouter();
  
  // Redirect to main services page
  useEffect(() => {
    router.push("/Services");
  }, [router]);
  
  // Return a simple div as fallback during SSR
  return <div>Redirecting to Services...</div>;
};

ServiceListPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default ServiceListPage;
